import React from 'react'
import Connections from './connections/connections'
import CoffeeChats from './coffee-chats/coffee-chats'
import ChatRequests from './chat-requests/chat-requests'
import '../../../App.css'
import './dashboard.css'

const Dashboard = ({navTo}) => {
    return (
        <section id="dashboard" className="dashboard">
            <h1>Home</h1>
            <section className="dashboard-containers">
                <section id="connections-container" className="connections-container">
                    <Connections navTo={navTo} />
                </section>
                <section id="chats-requests-container" className="chats-requests-container">
                    <section id="chats-container" className="chats-container">
                        <CoffeeChats />
                    </section>
                    <section id="requests-container" className="requests-container">
                        <ChatRequests />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Dashboard