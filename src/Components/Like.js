import react, {useState} from "react"

const Like = () => {

    const [isLiked, setLike] = useState(false)

    return (
        <div>
            {isLiked ? <img onClick={() => setLike(false)} src="https://pbs.twimg.com/media/CTKHPlOUYAQjfi_.png" width="100" height="60"/> : <img onClick={() => setLike(true)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfWt-nxNMq1dNxQabs6vghzWEO-iONYiHug&usqp=CAU" width="100" height="60"/>}
        </div>
    );
}

export default Like