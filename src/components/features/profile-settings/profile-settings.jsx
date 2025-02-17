import React from 'react'
import { useState } from 'react'
import PersonalDetails from './personal-details'
import AvailabilitySelector from './availability'
import SocialLinks from './social-links'
import '../../../App.css'
import "./profile-settings.css"

const icons = [
    "/icons/finger-print.svg",
    "/icons/calendar-days.svg",
    "/icons/link.svg",
]

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
                    <li id="details" onClick={handleClick}>
                        <img src={icons[0]}></img>
                        Personal Details
                    </li>
                    <li id="availability" onClick={handleClick}>
                        <img src={icons[1]}></img>
                        Availability
                    </li>
                    <li id="social" onClick={handleClick}>
                        <img src={icons[2]}></img>
                        Social Links
                    </li>
                </ul>

            
                <ul>
                    <li>Support</li>
                </ul>

                {/* Avatar with info and logout button */}
                {/* We have to grab the profile pic for the img below */}
                <section>
                    <img src={icons[0]}></img>
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