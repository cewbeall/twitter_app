import react from 'react';
import "../Style/tweet_style.css"
import Counter from "../Components/Counter.js";
import Retweet from "../Components/Retweet.js";
import Like from "../Components/Like.js";

const Tweet = props => {
    return (
      <div class="components">
        <h3 class="title">{props.title}</h3>
        <p class="author">{props.author}</p>
        <p class="content">{props.content}</p>
        <p class="date">{props.date}</p>
        {/* <Counter/> */}
        <div class = "bottomrow">
          <Like/>
          <Retweet/>
        </div>
      </div>
    );
  }

export default Tweet



