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
                <h1>Profile Settings</h1>
                <ul id="profile-menu" className="profile-menu">
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
            </section>

            <section id="profile-settings-tool" className="profile-settings-tool">
            {setting === "details" ? <PersonalDetails />
            : setting === "availability" ? <AvailabilitySelector />
            : setting === "social" ? <SocialLinks />
            : null}

            </section>
        </section>
    )
}

export default ProfileSettings