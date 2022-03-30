import react from 'react';
import "../Style/tweet_style.css"
import Counter from "../Components/Counter.js";
import Retweet from "../Components/Retweet.js";
import Like from "../Components/Like.js";

const Tweet = props => {
    return (
      <div class="Tweets">
        <p class="title">{props.title}</p>
        <p class="author">{props.author}</p>
        <p class="content">{props.content}</p>
        <p class="date">{props.date}</p>
        <Counter/>
        <Like/>
        <Retweet/>
      </div>
    );
  }

export default Tweet



