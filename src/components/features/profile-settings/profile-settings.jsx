import React from 'react'
import PersonalDetails from './personal-details'
import Availability from './availability'
import "./profile-settings.css"

const ProfileSettings = () => {
    return (
        <section id="profile-settings" className="profile-settings">
            <section id="profile-settings-nav" className="profile-settings-nav">
                <h1>Profile Settings</h1>
                <ul id="profile-menu" className="profile-menu">
                    <li>Personal Details</li>
                    <li>Availability</li>
                    <li>Social Links</li>
                </ul>
            </section>

            <section id="profile-settings-tool" className="profile-settings-tool">
                <PersonalDetails />
                <Availability />
            </section>
        </section>
    )
}

export default ProfileSettings