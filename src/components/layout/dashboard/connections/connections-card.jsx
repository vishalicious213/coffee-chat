import React from 'react'
import "./connections-card.css"

const ConnectionsCard = (props) => {
    return (
        <section className="connections-card">
            <img src="/avatars/avocado.jpg" alt="profile pic" />
            <div className='name-and-connection-date-container'>
                <h2><span className='name-on-card'>{props.name}</span> <span className='card-connection-time-elapsed'>‧ 2d</span></h2>
                <span className='card-bio'>Short bio here about this person woohoo</span>
            </div>
            <button className='card-button'>Message</button>
        </section>
    )
}

export default ConnectionsCard