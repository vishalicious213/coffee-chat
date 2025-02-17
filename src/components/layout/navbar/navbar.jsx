import React from 'react'
import { useState } from 'react'
import PersonalDetails from '../../features/profile-settings/personal-details'
import AvailabilitySelector from '../../features/profile-settings/availability'
import SocialLinks from '../../features/profile-settings/social-links'
import Dashboard from '../dashboard/dashboard'
import "./navbar.css"

const icons = [
    "/icons/finger-print.svg",
    "/icons/calendar-days.svg",
    "/icons/link.svg",
]

const Navbar = () => {
    const [setting, setSetting] = useState("dashboard")

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

        if (event.target.id === "home") {
            setSetting("dashboard")
        }
    }

    return (
        <section id="profile-settings" className="profile-settings">
            <section id="profile-settings-nav" className="profile-settings-nav">
                
                {/* Top section of nav items */}
                <h2 id="my-dashboard">My Dashboard</h2>
                <ul>
                    {/* My dashboard - Section title */}
                    <li id="home" onClick={handleClick}>Home</li>
                    <li id="find-a-chat">Find a Chat</li>
                    <li id="messages">Messages</li>
                </ul>

                {/* Middle section of nav items */}
                <h2>My Profile</h2>
                <ul id="profile-menu" className="profile-menu">
                    {/* My produce - section title */}
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
                {setting === "details" ? <PersonalDetails />
                : setting === "availability" ? <AvailabilitySelector />
                : setting === "social" ? <SocialLinks />
                : setting === "dashboard" ? <Dashboard />
                : null}
            </section>
        </section>
    )
}

export default Navbar