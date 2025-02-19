import React from 'react'
import "./match-candidate.css"

const MatchCandidate = () => {
    return (
        <section id="match-candidate" className="match-candidate">
            <section className="candidate-header">
                <img src="/avatars/avocado.jpg" alt="Match candidate's avatar" />
                <div>
                    <h2 className="match-candidate-name">Name Here</h2>
                    <p className="match-candidate-title">Short title</p>
                </div>
            </section>

            <section className="candidate-bio">
                <h3>Bio</h3>
                <p className="candidate-bio-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae sequi voluptas, sapiente necessitatibus sunt et ipsa quaerat tempora voluptate, inventore odit culpa, nobis blanditiis! Repellendus sed laudantium magnam veritatis recusandae!</p>
                <h3>Experience</h3>
                <p className="candidate-bio-experience">6 years</p>
            </section>
        </section>
    )
}

export default MatchCandidate