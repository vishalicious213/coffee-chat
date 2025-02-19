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

            <section className="candidate-interests">
                <h3>Interests</h3>
                <section className="candidate-interests-list">
                    <div>Interest Here</div>
                    <div>Interest Here</div>
                    <div>Interest Here</div>
                    <div>Interest Here</div>
                    <div>Interest Here</div>
                    <div>Interest Here</div>
                </section>
            </section>

            <section className="candidate-availability">
                <h3>Available Times</h3>
                <p>Monday 6-9pm EST</p>
                <p>Tuesday 3-4pm EST</p>
                <p>Friday 1-4pm EST</p>
            </section>
        </section>
    )
}

export default MatchCandidate