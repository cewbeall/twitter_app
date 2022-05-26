import {Link} from "react-router-dom"
import React, {useState, useEffect} from 'react'
import "../Style/sidebarleft_style.css"

const SideBarLeft = () => {

    return (
        <div class="links">
            <div class="link">
                <Link to="/">Home Page</Link>
            </div>
            <div class="link">   
                <Link to="/profiles">Profile Page</Link>
            </div>
            <div class="link">
                <Link to="/saved">Saved Tweets</Link>
            </div>
        </div>
    )
}

export default SideBarLeft