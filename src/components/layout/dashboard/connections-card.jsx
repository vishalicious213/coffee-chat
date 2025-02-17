import React from 'react'
import "./connections-card.css"

const ConnectionsCard = () => {
    return (
        <section className="connections-card">
            <img src="/avatars/avocado.jpg" alt="profile pic" />
            <h2>Name Here <span>‧ 2d</span></h2>
            <p>Short bio here about this person woohoo</p>
            <button>Message</button>
        </section>
    )
}

export default ConnectionsCard