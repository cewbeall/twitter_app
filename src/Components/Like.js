import React, {useState, useEffect} from "react"

const Like = () => {

    const [isLiked, setLike] = useState(false)

    // useEffect(() => {
    //     let chance = Math.random()
    //     if (chance > 0.5) {
    //         setTimeout(() => setLike(true), 5000);
    //     }
        
    // }, []);

    return (
        <div>
            {isLiked ? <img onClick={() => setLike(false)} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" width="30" height="30"/> : <img onClick={() => setLike(true)} src="https://freepngimg.com/thumb/instagram/1-2-instagram-heart-transparent.png" width="30" height="30"/>}
        </div>
    );
}

export default Like