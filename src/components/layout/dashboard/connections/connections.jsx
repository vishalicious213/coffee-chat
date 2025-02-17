import React from 'react'
import ConnectionsCard from './connections-card'

const test = ["Vish Singh", "Samir Shuman", "Nabeeha Ghani", "Giovanni Nazario"]

const examples = test.map((person, index) => (
    <ConnectionsCard name={person} key={person} />
))

const Connections = () => {
    return (
        <section className="connections-container">
            <div className="connections-heading">
                <h1>Connections</h1>
                <p>View conversations starter guide</p>
            </div>
            <section className="connections">
                {examples}
            </section>
        </section>
    )
}

export default Connections