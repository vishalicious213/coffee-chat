import React from 'react'

const ChatRequestsCard = (props) => {
    return (
        <section className="coffee-chats-card">
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