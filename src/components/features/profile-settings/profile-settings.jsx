import React from 'react'
import { useState } from 'react'
import PersonalDetails from './personal-details'
import AvailabilitySelector from './availability'
import SocialLinks from './social-links'
import '../../../App.css'
import "./profile-settings.css"

const ProfileSettings = () => {
    const [setting, setSetting] = useState("details")

    const handleClick = (event) => {
        if (event.target.id === "details") {
            setSetting("details")
        } 

        if (event.target.id === "availability") {
            setSetting("availability")
        }

        if (event.target.id === "social") {
            setSetting("social")
        }
    }

    return (
        <section id="profile-settings" className="profile-settings">
            <section id="profile-settings-nav" className="profile-settings-nav">
                
                {/* Top section of nav items */}
                <ul>
                    {/* My dashboard - Section title */}
                    <li id="my-dashboard">My Dashboard</li>
                    <li id="home">Home</li>
                    <li id="find-a-chat">Find a Chat</li>
                    <li>Messages</li>
                </ul>

                {/* Middle section of nav items */}
                <ul id="profile-menu" className="profile-menu">
                    {/* My produce - section title */}
                    <li>My Profile</li>
                    <li id="details" onClick={handleClick}>Personal Details</li>
                    <li id="availability" onClick={handleClick}>Availability</li>
                    <li id="social" onClick={handleClick}>Social Links</li>
                </ul>

            
                <ul>
                    <li>Support</li>
                </ul>

                {/* Avatar with info and logout button */}
                <section>
                    <img src=""></img>
                    <span>Designership</span>
                    <span>email@email.com</span>
                </section>
            </section>

            <section id="profile-settings-tool" className="profile-settings-tool">
            <h1>Profile Settings</h1>
            {setting === "details" ? <PersonalDetails />
            : setting === "availability" ? <AvailabilitySelector />
            : setting === "social" ? <SocialLinks />
            : null}

            </section>
        </section>
    )
}

export default ProfileSettings