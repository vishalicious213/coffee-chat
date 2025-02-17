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
            {/* Nav bar */}
            <section className='nav-container'>
                <nav>
                    <ul>
                        <li>
                            <img src="../../../public/icons/Right.svg" alt="" />
                        </li>
                        <li>About Us</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        {/* DON'T GET RID OF THESE BUTTONS */}
                        <button id="login-btn" className="login-btn" onClick={handleClick}>Log In</button>
                        <button id="signup-btn" className="signup-btn" onClick={handleClick}>Sign Up</button>
                    </ul>
                </nav>
            </section>

            {/* Hero section */}
            <section className='hero'>
                <div className='hero-text'>
                    {/* <h1>Coffee chats,<br/>simplified.</h1> */}
                    <h1>Coffee chats, simplified.</h1>
                    <p>Use our tool to find like-minded and connect over a virtual coffee</p>
                    <button id="signup-btn" className="signup-btn" onClick={handleClick}>Sign Up</button>
                </div>
            </section>

            {/* How to get started */}
            <section className='how-to-get-started'>
                <section className='how-to-get-started-container'>
                    {/* Left-hand side */}
                    <div className='how-to-get-started-text-section'>
                        <h2>How to get started</h2>
                        <p>Find coffee chats easily with [COMPANY] with others in your field. Get started 100% for free.</p>
                    </div>

                    {/* Accordion Section */}
                    <div className="accordion-wrapper">
                        <div className="accordion">
                            <input type="radio" name="radio-a" id="check1" defaultChecked />
                            <label className="accordion-label" htmlFor="check1">Accordion 1</label>
                            <div className="accordion-content">
                                <p>Hey there, you are watching codiesbugs &#128522;</p>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="radio" name="radio-a" id="check2" />
                            <label className="accordion-label" htmlFor="check2">Accordion 2</label>
                            <div className="accordion-content">
                                <p>I hope you are enjoying the video. Don't forget to give your feedback in the comment section.</p>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="radio" name="radio-a" id="check3" />
                            <label className="accordion-label" htmlFor="check3">Accordion 3</label>
                            <div className="accordion-content">
                                <p>If you liked this, don't forget to subscribe to the channel for the latest videos.</p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </section>

            {/* 3 Benefits for using us */}
            <section className='benefits'>
                <div className='benefits-container'>
                    <div className='benefits-title'>
                        <span>Why [COMPANY]</span>
                        <h3>A catchy heading that brings some<br></br> interest to visitors</h3>
                    </div>
                    {/* 3 Features layout */}
                    <section className='benefits-cards'>
                        <section>
                            <img className="benefits-cards-icons" src="../../../public/icons/Right.svg"></img>
                            <h4>The most inspiring feature</h4>
                            <p>Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.</p>
                            <div className='benefits-cards-view-more'>
                                <span>View more</span>
                                <img src="../../../public/icons/Right.svg"></img>
                            </div>
                        </section>
                        <section>
                            <img className="benefits-cards-icons" src="../../../public/icons/Right.svg"></img>
                            <h4>The most inspiring feature</h4>
                            <p>Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.</p>
                            <div className='benefits-cards-view-more'>
                                <span>View more</span>
                                <img src="../../../public/icons/Right.svg"></img>
                            </div>
                        </section>
                        <section>
                            <img className="benefits-cards-icons" src="../../../public/icons/Right.svg"></img>
                            <h4>The most inspiring feature</h4>
                            <p>Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.</p>
                            <div className='benefits-cards-view-more'>
                                <span>View more</span>
                                <img src="../../../public/icons/Right.svg"></img>
                            </div>
                        </section>
                    </section>
                </div>

            </section>

            {/* Footer */}
            <section className="footer">
                <section>
                    <img src="../../../public/icons/Right.svg"/>

                    <ul>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>

                    <span>© 2025 [COMPANY]. All rights reserved.</span>
                </section>
            </section>
        </section>
    )
}

export default LandingPage