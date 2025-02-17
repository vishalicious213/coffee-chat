import React from 'react'
import "./coffee-chats-card.css"

const CoffeeChatsCard = (props) => {
    return (
        <section className="coffee-chats-card">
            <img src="/avatars/avocado.jpg" alt="profile pic" />
            <div>
                <h3>{props.name}</h3>
                <p>Scheduled: January 22, 2024</p>
            </div>
        </section>
    )
}

export default CoffeeChatsCard