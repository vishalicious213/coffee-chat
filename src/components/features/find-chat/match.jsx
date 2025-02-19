import React from 'react'
import MatchCandidate from './match-candidate'
import "./match.css"

const Match = () => {
    return (
        <section id="match" className="match">
            <h2>Find Chat</h2>
            <section>
                <p><img src="/icons/star-empty.svg" />Woohoo! Check out your new match</p>
                <p>You have a 94% compatibility score based on your interests and experience.</p>
            </section>

            <section id="render-chat-match" className="render-chat-match">
                <MatchCandidate />
            </section>

            <section id="match-buttons" className="match-buttons">
                <button id="send-chat-request-btn" className="send-chat-request-btn">
                    Send chat request
                    <img src="/icons/check.svg"></img>
                </button>
                <button id="find-another-btn" className="find-another-btn">
                    Find me another
                    <img src="/icons/x.svg"></img>
                </button>
            </section>
        </section>
    )
}

export default Match