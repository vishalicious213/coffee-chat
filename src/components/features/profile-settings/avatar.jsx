import React from 'react'
import { useState } from 'react'
import '../../../App.css'
import "./profile-settings.css"

const Avatar = () => {
    const [avatarImg, setAvatarImg] = useState("/avatars/avocado.jpg")
    const [showAvatars, setShowAvatars] = useState(false)

    function handleClick() {
        setShowAvatars(!showAvatars)
        console.log(showAvatars)
    }

    const renderAvatars = (
            <section id="avatarSelection" className="avatarSelection">
                AVATARS
            </section>
    )

    return (
        <section id="user-avatar" className="user-avatar">
            <div>Avatar</div>
            <img src={avatarImg} alt="user avatar photo" onClick={handleClick} />
            <section id="avatarsContainer">{showAvatars ? renderAvatars : null}</section>
        </section>
    )
}

export default Avatar