import React from 'react'
import "./connections-card.css"

const ConnectionsCard = (props) => {
    return (
        <section className="connections-card">
            <img src="/avatars/avocado.jpg" alt="profile pic" />
            <div className='name-and-connection-date-container'>
                <h2>{props.name} <span>‧ 2d</span></h2>
                <span>Short bio here about this person woohoo</span>
            </div>
            <button>Message</button>
        </section>
    )
}

export default ConnectionsCard