import React from 'react'
import ChatRequestsCard from './chat-requests-card'

const test = ["Vish Singh", "Samir Shuman", "Nabeeha Ghani", "Giovanni Nazario"]

const examples = test.map((person, index) => (
    <ChatRequestsCard name={person} key={person} />
))

const ChatRequests = () => {
    return (
        <section className="chat-requests-container">
            <h2>Requests</h2>
            <section className="chat-requests">
                {examples}
            </section>
        </section>
    )
}

export default ChatRequests