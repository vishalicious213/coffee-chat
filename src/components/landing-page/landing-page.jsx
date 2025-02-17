import React from 'react'
import { useState } from 'react'
import "./landing-page.css"

const LandingPage = ({changePage}) => {
    const [pageToLoad, setPageToLoad] = useState("details")

    const handleClick = (event) => {
        if (event.target.id === "login-btn") {
            changePage("navbar")
        } 

        if (event.target.id === "signup-btn") {
            changePage("signup")
        }
    }

    return (
        <section id="landing-page" className="landing-page">
            <h1>Landing Page</h1>
            {/* DON'T GET RID OF THESE BUTTONS */}
            <button id="login-btn" className="login-btn" onClick={handleClick}>Log In</button>
            <button id="signup-btn" className="signup-btn" onClick={handleClick}>Sign Up</button>
        </section>
    )
}

export default LandingPage