import React from 'react'
import PersonalDetails from './personal-details'
import "./profile-settings.css"

const ProfileSettings = () => {
    return (
        <section id="profile-settings" class="profile-settings">
            <section id="profile-settings-nav" className="profile-settings-nav">
                <h1>Profile Settings</h1>
                <ul id="profile-menu" className="profile-menu">
                    <li>Personal Details</li>
                    <li>Availability</li>
                    <li>Social Links</li>
                </ul>
            </section>
            <PersonalDetails />
        </section>
    )
}

export default ProfileSettings