import React from 'react'
import CoffeeChatsCard from './coffee-chats-card'

const test = ["Vish Singh", "Samir Shuman", "Nabeeha Ghani", "Giovanni Nazario"]

const examples = test.map((person, index) => (
    <CoffeeChatsCard name={person} key={person} />
))


const CoffeeChats = () => {
    return (
        <section className="coffee-chat-container">
            <h2>Coffee Chats</h2>
            <section className="coffee-chats">
                {examples}
            </section>
        </section>
    )
}

export default CoffeeChats