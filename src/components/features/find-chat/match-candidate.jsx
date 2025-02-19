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
        </section>
    )
}

export default MatchCandidate