import {Link} from "react-router-dom"
import SideBarLeft from "../Components/SideBarLeft.js"
import React, {useState, useEffect} from 'react'
import "../Style/profiles_style.css"


const Profiles = () => {

    return (
        <div class="profilesContent">
            <SideBarLeft />
            <h>Profile Page</h>
            <div></div>
        </div>
    )
}

export default Profiles