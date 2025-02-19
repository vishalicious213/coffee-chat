import React from 'react'
import "./match.css"

const Match = () => {
    return (
        <section id="match" className="match">
            <h2>Find Chat</h2>
            <section>
                <p>Woohoo! Check out your new match</p>
                <p>You have a 94% compatibility score based on your interests and experience.</p>
            </section>

            <section id="render-chat-match" className="render-chat-match"></section>
            
            <section id="match-buttons" className="match-buttons">
                <button id="send-chat-request-btn" className="send-chat-request-btn">Send chat request</button>
                <button id="find-another-btn" className="find-another-btn">Find me another</button>
            </section>
        </section>
    )
}

export default Match