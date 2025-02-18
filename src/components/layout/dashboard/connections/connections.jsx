import React from 'react'
import ConnectionsCard from './connections-card'
import "./connections.css"

const test = ["Vish Singh", "Samir Shuman", "Nabeeha Ghani", "Giovanni Nazario", "Vish Singh", "Samir Shuman", "Nabeeha Ghani", "Vish Singh", "Samir Shuman"]

const examples = test.map((person, index) => (
    <ConnectionsCard name={person} key={index} />
))

const Connections = ({navTo}) => {
    return (
        <section className="">
            <div className="connections-heading">
                <h2>Connections</h2>
                <p onClick={() => navTo("icebreakers")}>
                    View conversations starters
                    <img src="/icons/arrow-top-right-on-square.svg" />
                </p>
            </div>
            <section className="connections">
                {examples}
            </section>
        </section>
    )
}

export default Connections