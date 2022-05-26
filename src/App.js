import React, {useState, useEffect} from 'react';
import Header from "./Components/Header.js";
import Tweet from "./Components/Tweet.js";
import Search from "./Components/Search.js"
import Counter from "./Components/Counter.js";
import {Link} from "react-router-dom"
import "./Style/app_style.css"
import {db} from "./firebase.js"
import {collection, addDoc, getDocs} from "firebase/firestore"
// import "/Users/charliebeall/Desktop/Workshop/Twitter/twitter_app/src/Style/tweet_style.css"

function App() {

  const [tweets, setTweets] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [filterPhrase, setFilterPhrase] = useState("")

  const publishTweet = () =>  {

    addDoc(collection(db, "tweets"), {
      title: title, 
      author: author, 
      content: content, 
      date: new Date().getMonth() + 1 +"/"+ new Date().getDate() +"/"+ new Date().getFullYear() 
    } )

    setTweets([...tweets, {title:title, author:author, content:content, date:  new Date().getMonth() + 1 +"/"+ new Date().getDate() +"/"+ new Date().getFullYear()}])
  }

  

  useEffect(() => {
    let temp = []
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach(doc => temp.push(doc.data()))
      setTweets(temp);
    })
  }, []);


  // const [date, setDate] = useState("")

  return (
    <div class="page">
      <div class="left"> 
        <Link to="/profiles">Profile</Link>
      </div>
      <div class="Content">
        <Header />
        <div class="Publish">
          <h3>Title: </h3>
          <input value={title} onChange={e => setTitle(e.target.value)} />

          <h3>Author: </h3>
          <input value={author} onChange={e => setAuthor(e.target.value)} />

          <h3>Content: </h3>
          <input value={content} onChange={e => setContent(e.target.value)} />
        </div>

        <div class="PublishButton">
          {/* <button onClick={() => addDoc(collection(db, "tweets"),{
            author: "Charlie",
            content: "adding tweet to database",
            likes: 10,
          } )}>database test</button> */}

          {/* <button onClick={ () => setTweets([...tweets, { title: title, author: author, content: content, date: new Date().getMonth() + 1 +"/"+ new Date().getDate() +"/"+ new Date().getFullYear() }])}>Publish Tweet</button> */}
          <button onClick={() => publishTweet()}>Publish Tweet</button>
        </div>

        <div class="searchBar">
          {/* <Search /> */}
          <h3>Search: </h3>
          <input value={filterPhrase} onChange={e=>setFilterPhrase(e.target.value)}/>
        </div>

        <div class="tweets">
          {tweets.filter(tweets => tweets.content.includes(filterPhrase)).map((tweet, i) => <Tweet title={tweet.title} author={tweet.author} content={tweet.content} date={tweet.date} key={i}/>)}  
        </div>
        
      </div>
      <div class="right"> </div>
    </div>
  );
}

export default App;
