import React from 'react'
import { useState } from 'react'
import '../../../App.css'
import "./profile-settings.css"

const avatarPics = [
    "/avatars/avocado.jpg",
    "/avatars/cat.jpg",
    "/avatars/cherry.jpg",
    "/avatars/corgi.jpg",
    "/avatars/cupcake.jpg",
    "/avatars/frog.jpg",
    "/avatars/orange.jpg",
    "/avatars/palm-tree.jpg",
    "/avatars/pug.jpg",
    "/avatars/tree.jpg",
]

const Avatar = () => {
    const [avatarImg, setAvatarImg] = useState(avatarPics[0])
    const [showAvatars, setShowAvatars] = useState(false)

    function handleClick() {
        setShowAvatars(prev => !prev)
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