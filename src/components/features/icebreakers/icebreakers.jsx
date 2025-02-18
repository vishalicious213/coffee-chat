import React from 'react'
import "./icebreakers.css"

const Icebreakers = () => {
    return (
        <div className="container">
            <header>
                <h1>Icebreaker Question Generator</h1>
            </header>
            
            <main>
                <div id="loading" className="loading">Loading questions...</div>
                <ul id="questions-list" className="questions-list"></ul>
                <button id="refresh-button" className="refresh-button">Get New Questions</button>
            </main>
            
            <footer>
                <p>Powered by AppWrite</p>
            </footer>
        </div>
    )
}

export default Icebreakers