import React from 'react'
import { useState } from 'react'
import '../../../App.css'

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
    const [seeAvatars, setSeeAvatars] = useState("avatarsContainer hidden")
    
    const avatarPicsHtml = avatarPics.map((pic, index) => (
        <img 
            key={index} 
            src={pic} 
            alt="user avatar photo" 
            onClick={() => setAvatarImg(pic)} 
            className="avatar-option"
        />
    ))

    function handleClick() {
        setShowAvatars(prev => !prev)
        if (!showAvatars) {
            setSeeAvatars("avatarsContainer avatarsContainerWhite")
        } else {
            setSeeAvatars("avatarsContainer hidden")
        }
    }

    return (
        <section id="user-avatar" className="user-avatar">
            <div>Avatar</div>
            <img src={avatarImg} alt="user avatar photo" onClick={handleClick} />
            <section id="avatarsContainer" className={seeAvatars}>{showAvatars ? avatarPicsHtml : null}</section>
        </section>
    )
}

export default Avatar