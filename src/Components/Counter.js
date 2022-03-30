import React, {useState} from "react"


const Counter = () => {

    const [count, setCount] = useState(0);

    //const [loggedIn, setLoggedIn] = useState();
    // const [isEven, setIsEven] = useState("even");

    const increaseCount = () => {
        setCount(count+1)
        // must always use ternary if we want a conditional rendering
        //((count+1)%2 === 0 ? setIsEven("even") : setIsEven("odd"))
    }

    const decreaseCount = () => {
        if (count-1 >= 0) {
            setCount(count-1)
            //((count-1)%2 === 1 ? setIsEven("odd") : setIsEven("even"))
        }
    }

    return (
    <div style={{display: "flex"}}>
        <h3>Likes: {count} </h3>
        <button style={{marginLeft: 10}} onClick={increaseCount}>Like</button>
        <button onClick={decreaseCount}>Dislike</button>
        {/* <h3>{isEven}</h3> */}
    </div>
    );
    
}

export default Counter