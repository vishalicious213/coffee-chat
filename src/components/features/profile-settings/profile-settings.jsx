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
                <h1>Profile Settings</h1>
                <ul id="profile-menu" className="profile-menu">
                    <li id="details" onClick={handleClick}>Personal Details</li>
                    <li id="availability" onClick={handleClick}>Availability</li>
                    <li id="social" onClick={handleClick}>Social Links</li>
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