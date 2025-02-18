import React from 'react'
import "./find-chat.css"

const FindChat = ({navTo}) => {
    console.log("navTo prop in FindChat:", navTo);

    return (
        <section className="find-chat">
            <div className="find-chat-circle"></div>
            <h2>Ready to meet someone new?</h2>
            <p>We'll match you with another developer for a 30-minute coffee chat based on your interest and availability</p>
            <button id="find-match" onClick={() => navTo("find-match")}>Find Chat</button>
        </section>
    )
}

export default FindChat