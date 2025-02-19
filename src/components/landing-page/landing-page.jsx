import React from 'react'
import "./landing-page.css"

const LandingPage = ({changePage}) => {
    const handleClick = (pageToLoad) => {
        changePage(pageToLoad)
    }

    return (
        <section id="landing-page" className="landing-page">
            {/* Nav bar */}
            <section className='nav-container'>
                <nav>
                    <ul>
                        <li>
                            <img className="logo-landing" src="/icons/logo-light.svg" alt="" />
                        </li>
                        <li id="about-us" className="nav-item" onClick={() => handleClick("about-us")}>About Us</li>
                        <li className="nav-item">FAQ</li>
                        <li className="nav-item">
                            <a href="mailto:coffeechat1@protonmail.com">Contact</a>
                        </li>
                    </ul>
                    <ul>
                        {/* DON'T GET RID OF THESE BUTTONS */}
                        <button id="login-btn" className="login-btn" onClick={() => handleClick("navbar")}>Log In</button>
                        {/* <button id="signup-btn" className="signup-btn" onClick={() => handleClick("signup")}>Sign Up</button> */}
                        {/* <a href="https://codebrew.authui.site/">
                            <button id="login-btn" className="login-btn" >
                                Log in
                            </button>
                        </a> */}
                        <a href="https://codebrew.authui.site/sign-up">
                            <button id="signup-btn" className="signup-btn" >
                                Sign Up
                            </button>
                        </a>
                    </ul>
                    <button className="landing-mobile-menu-button">
                        {/* <a href="javascript:void(0);" className="icon" onClick="myFunction()">
                            <img src="../../../public/icons/MenuLandingMobile.svg"></img>
                        </a> */}
                    </button>
                </nav>
            </section>

            {/* Hero section */}
            <section className='hero'>
                <div className='hero-text'>
                    <h1>Coffee chats, simplified.</h1>
                    <p>Use our tool to find like-minded and connect over a virtual coffee</p>
                    {/* <button id="signup-btn" className="signup-btn" onClick={handleClick}>Sign Up</button> */}
                    <a href="https://codebrew.authui.site/sign-up">
                        <button id="signup-btn" className="signup-btn" >
                            Sign Up
                        </button>
                    </a>
                </div>
            </section>

            {/* How to get started */}
            <section className='how-to-get-started'>
                <section className='how-to-get-started-container'>
                    {/* Left-hand side */}
                    <div className='how-to-get-started-text-section'>
                        <h2>How to get started</h2>
                        <p>Finding great conversations is easy. Just follow these three simple steps:</p>
                    </div>

                    {/* Accordion Section */}
                    <div className="accordion-wrapper">
                        <div className="accordion">
                            <input type="radio" name="radio-a" id="check1" defaultChecked />
                            <label className="accordion-label" htmlFor="check1">Sign Up</label>
                            <div className="accordion-content">
                                <p>Create a profile and tell us a little about yourself. It's free and takes less than a minute.</p>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="radio" name="radio-a" id="check2" />
                            <label className="accordion-label" htmlFor="check2">Get Matched</label>
                            <div className="accordion-content">
                                <p>We'll pair you with someone who shares your interests, goals, or industry.</p>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="radio" name="radio-a" id="check3" />
                            <label className="accordion-label" htmlFor="check3">Grab a Virtual Coffee</label>
                            <div className="accordion-content">
                                <p>Schedule a time, hop on a call, and enjoy a great conversation!</p>
                            </div>
                        </div>
                    </div>
                </section>
                
            </section>

            {/* 3 Benefits for using us */}
            <section className='benefits'>
                <div className='benefits-container'>
                    <div className='benefits-title'>
                        <span>Why codebrew</span>
                        <h3>Meet new people over a virtual coffee</h3>
                        <p>Making meaningful connections shouldn't be hard. Whether you're looking for mentorship, networking, or just a great conversation, our platform helps you find like-minded people for a virtual coffee chat.</p>
                    </div>
                    {/* 3 Features layout */}
                    <section className='benefits-cards'>
                        <section>
                            <img className="benefits-cards-icons" src="/icons/brown-star-empty.svg"></img>
                            <h4>Effortless Matching</h4>
                            <p>Tell us your interests, and we'll connect you with someone who shares your goals and passions.</p>
                            <div className='benefits-cards-view-more'>
                                <span>View more</span>
                                <img src="/icons/LightBrownArrow.svg"></img>
                            </div>
                        </section>
                        <section>
                            <img className="benefits-cards-icons" src="/icons/brown-globe.svg"></img>
                            <h4>Expand Your Network</h4>
                            <p>Meet professionals, students, and interesting people—right from home.</p>
                            <div className='benefits-cards-view-more'>
                                <span>View more</span>
                                <img src="/icons/LightBrownArrow.svg"></img>
                            </div>
                        </section>
                        <section>
                            <img className="benefits-cards-icons" src="/icons/brown-clock.svg"></img>
                            <h4>Chat on Your Schedule</h4>
                            <p>Set up a time that works for you and enjoy a relaxed, engaging conversation.</p>
                            <div className='benefits-cards-view-more'>
                                <span>View more</span>
                                <img src="/icons/LightBrownArrow.svg"></img>
                            </div>
                        </section>
                    </section>
                </div>

            </section>

            {/* Footer */}
            <section className="footer">
                <section>
                    <img src="/icons/logo-dark.svg"/>

                    <ul>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li><a href="mailto:coffeechat1@protonmail.com">Contact</a></li>
                    </ul>

                    <span>© 2025 codebrew. All rights reserved.</span>
                </section>
            </section>
        </section>
    )
}

export default LandingPage