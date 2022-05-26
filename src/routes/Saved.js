import SideBarLeft from "../Components/SideBarLeft.js"
import React, {useState, useEffect} from 'react'
import "../Style/saved_style.css"


const Saved = () => {

    return (
        <div class="savedContent">
            <SideBarLeft />
            <h>Saved Tweets</h>
            <div></div>
        </div>
    )
}

export default Saved