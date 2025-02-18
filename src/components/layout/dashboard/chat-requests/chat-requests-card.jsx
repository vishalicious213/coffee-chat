import React from 'react'
import "./chat-requests-card.css"

const ChatRequestsCard = (props) => {
    return (
        <section className="chat-requests-card">
            <div className='avatar-and-text-requests'>
                <img src="/avatars/avocado.jpg" alt="profile pic" />
                <div>
                    <h3>{props.name}</h3>
                    <p>Short bio</p>
                </div>
            </div>
            <div className="requests-check-x-container">
                <img className="requests-check-x" src="../../../public/icons/check.svg"></img>
                <img className="requests-check-x" src="../../../public/icons/x.svg"></img>
            </div>
        </section>
    )
}

export default ChatRequestsCard