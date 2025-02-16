import React from 'react'
import { useState } from 'react'
import '../../../App.css'
import "./profile-settings.css"

const Avatar = () => {
    function handleClick() {
        console.log("clicked")
    }

    return (
        <section id="user-avatar" className="user-avatar">
            <div>Avatar</div>
            <img src="src\assets\avatars\avocado.jpg" alt="user avatar photo" onClick={handleClick} />
        </section>
    )
}

export default Avatar