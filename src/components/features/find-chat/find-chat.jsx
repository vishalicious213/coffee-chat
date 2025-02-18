import React from 'react'
import "./find-chat.css"

const FindChat = () => {
    return (
        <section className="find-chat">
            <img src="../../../public/icons/icon-just-cup.svg" alt="" className="find-chat-circle">
            </img>
            <h2>Ready to meet someone new?</h2>
            <p>We'll match you with another developer for a 30-minute coffee chat based on your interest and availability</p>
            <button>Find Chat</button>
        </section>
    )
}

export default FindChat