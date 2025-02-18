import React from "react";
import { useState } from "react";
import PersonalDetails from "../../features/profile-settings/personal-details";
import AvailabilitySelector from "../../features/profile-settings/availability";
import SocialLinks from "../../features/profile-settings/social-links";
import Dashboard from "../dashboard/dashboard";
import FindChat from "../../features/find-chat/find-chat";
import Match from "../../features/find-chat/match";
import Icebreakers from "../../features/icebreakers/icebreakers";
import "./navbar.css";

const icons = [
  "/icons/finger-print.svg",
  "/icons/calendar-days.svg",
  "/icons/link.svg",
];

const Navbar = () => {
  const [setting, setSetting] = useState("dashboard");

  const handleClick = (newSetting) => {
    setSetting(newSetting)
  }

  return (
    <section id="profile-settings" className="profile-settings">
      <section id="profile-settings-nav" className="profile-settings-nav">
        {/* Sidebar Nav Header */}
        <section className="top-sidebar-wrapper">
          <section className="sideBar-header">
            <img src="public\icons\Company Logo.svg"></img>
            <ul>
              <li id="notification-bell">
                <img src="public\icons\bell.svg"></img>
              </li>
              <li id="hamburger-menu-icon">
                <img src="public\icons\hamburger-icon.svg"></img>
              </li>
            </ul>
          </section>

          {/* Top section of nav items */}
          <h2>My Dashboard</h2>
          <ul className="profile-menu">
            {/* My dashboard - Section title */}
            <li id="home" onClick={() => handleClick("dashboard")}>
              <img src="public\icons\home.svg"></img>
              Home
            </li>
            <li id="find-chat" onClick={() => handleClick("find-chat")}>
              <img src="public\icons\microphone.svg"></img>
              Find a Chat
            </li>
            <li id="messages">
              <img src="public\icons\chat-alt.svg"></img>
              Messages
            </li>
          </ul>

          {/* Middle section of nav items */}
          <h2>My Profile</h2>
          <ul id="profile-menu" className="profile-menu">
            {/* My produce - section title */}
            <li id="details" onClick={() => handleClick("details")}>
              <img src={icons[0]}></img>
              Personal Details
            </li>
            <li id="availability" onClick={() => handleClick("availability")}>
              <img src={icons[1]}></img>
              Availability
            </li>
            <li id="social" onClick={() => handleClick("social")}>
              <img src={icons[2]}></img>
              Social Links
            </li>
          </ul>
        </section>
        <section className="sidebar-footer">
          <ul>
            <li>
              <img src="public\icons\support-lifebuoy.svg"></img>
              Support
            </li>
          </ul>

          {/* Avatar with info and logout button */}
          {/* We have to grab the profile pic for the img below */}
          <section className="sidebar-footer-button">
            <img src="public/icons/avatar-icon.svg"></img>
            <section className="sidebar-footer-content">
              <span>Designership</span>
              <span>email@email.com</span>
            </section>
            <img
              className="sidebar-footer-logout-icon"
              src="public\icons\logout-right.svg"
            ></img>
          </section>
        </section>
      </section>

      <section id="profile-settings-tool" className="profile-settings-tool">
        {setting === "details" ? (
          <PersonalDetails />
        ) : setting === "availability" ? (
          <AvailabilitySelector />
        ) : setting === "social" ? (
          <SocialLinks />
        ) : setting === "dashboard" ? (
          <Dashboard navTo={handleClick} />
        ) : setting === "find-chat" ? (
          <FindChat navTo={handleClick} />
        ) : setting === "find-match" ? (
          <Match />
        ) : setting === "icebreakers" ? (
          <Icebreakers />
        ) : null}
      </section>
    </section>
  );
};

export default Navbar;