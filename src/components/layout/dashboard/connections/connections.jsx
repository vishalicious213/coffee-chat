import React from 'react'
import ConnectionsCard from './connections-card'
import "./connections.css"

const test = ["Vish Singh", "Samir Shuman", "Nabeeha Ghani", "Giovanni Nazario", "Vish Singh", "Samir Shuman", "Nabeeha Ghani", "Vish Singh", "Samir Shuman"]

const examples = test.map((person, index) => (
    <ConnectionsCard name={person} key={index} />
))

const Connections = () => {
    return (
        <section className="">
            <div className="connections-heading">
                <h2>Connections</h2>
                <p>View conversations starters</p>
            </div>
            <section className="connections">
                {examples}
            </section>
        </section>
    )
}

export default Connections