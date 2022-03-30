import React, {useState} from "react"


const Retweet = () => {

    const [retweet, setRetweet] = useState("Retweet it")

    const doRetweet = () => {
        setRetweet("Retweeted")
    }


    return (
        <div style={{display: "flex"}}>
            <button onClick={doRetweet}>{retweet}</button>
        </div>
    );
}

export default Retweet