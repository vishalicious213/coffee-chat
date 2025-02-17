import React from 'react'
import "./chat-requests-card.css"

const ChatRequestsCard = (props) => {
    return (
        <section className="chat-requests-card">
            <img src="/avatars/avocado.jpg" alt="profile pic" />
            <div>
                <h3>{props.name}</h3>
                <p>Short bio</p>
            </div>
            <div>✓ ✕</div>
        </section>
    )
}

export default ChatRequestsCard