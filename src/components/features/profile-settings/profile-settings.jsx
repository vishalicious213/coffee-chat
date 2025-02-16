import React from 'react'
import ProfileSettingsNav from './profile-settings-nav'
import PersonalDetails from './personal-details'
import "./profile-settings.css"

const ProfileSettings = () => {
    return (
        <section id="profile-settings" class="profile-settings">
            <ProfileSettingsNav />
            <PersonalDetails />
        </section>
    )
}

export default ProfileSettings