import React, {useState} from 'react';
import Header from "./Components/Header.js";
import Tweet from "./Components/Tweet.js";
import Search from "./Components/Search.js"
import Counter from "./Components/Counter.js";
import {Link} from "react-router-dom"
import "./Style/app_style.css"
// import "/Users/charliebeall/Desktop/Workshop/Twitter/twitter_app/src/Style/tweet_style.css"

function App() {

  const [tweets, setTweets] = useState([])
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [filterPhrase, setFilterPhrase] = useState("")


  // const [date, setDate] = useState("")

  return (
    <div class="Content">
      <Header />
      <Link to="/profiles">Profiles</Link>
      <div class="Publish">
        <h3>Title: </h3>
        <input value={title} onChange={e => setTitle(e.target.value)} />

        <h3>Author: </h3>
        <input value={author} onChange={e => setAuthor(e.target.value)} />

        <h3>Content: </h3>
        <input value={content} onChange={e => setContent(e.target.value)} />
      </div>

      <div class="PublishButton">
        <button onClick={() => setTweets([...tweets, {title: title, author: author, content: content, date: new Date().getMonth() + 1 +"/"+ new Date().getDate() +"/"+ new Date().getFullYear()}])}>Publish Tweet</button>
      </div>

      <div class="searchBar">
        {/* <Search /> */}
        <h3>Search: </h3>
        <input value={filterPhrase} onChange={e=>setFilterPhrase(e.target.value)}/>
      </div>

      {tweets.filter(tweets => tweets.content.includes(filterPhrase)).map((tweet, i) => <Tweet title={tweet.title} author={tweet.author} content={tweet.content} date={tweet.date} key={i}/>)}  
    </div>
  );
}

export default App;
