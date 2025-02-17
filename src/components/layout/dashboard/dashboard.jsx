import React from 'react'
import '../../../App.css'
import './dashboard.css'

const Dashboard = () => {
    return (
        <section id="dashboard" className="dashboard">
            <h1>Home</h1>
            <section className="dashboard-containers">
                <section id="connections-container" className="connections-container">connections</section>
                <section id="chats-requests-container" className="chats-requests-container">
                    <section id="chats-container" className="chats-container">coffee chats</section>
                    <section id="requests-container" className="requests-container">requests</section>
                </section>
            </section>
        </section>
    )
}

export default Dashboard