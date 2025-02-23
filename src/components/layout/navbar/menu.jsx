import React from 'react'
import { useState } from 'react'
import '../../../App.css'
import "./menu.css"

const Menu = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const [menuClasses, setMenuClasses] = useState("hamburger-items hidden")

    const handleClick = () => {
        setMenuToggle(!menuToggle)

        if (menuToggle) {
            setMenuClasses("hamburger-items hidden")
        } else {
            setMenuClasses("hamburger-items")
        }
    }

    return (
        <div id="menu" className="menu">
            <section id="hamburger" className="hamburger" onClick={handleClick}>☰</section>
            <div id="hamburger-items" className={menuClasses}>
                <div id="menu-avatar">Avatar</div>
                <div id="menu-msg">Messages</div>
                <div id="menu-chat">Find a Chat</div>
            </div>

            <section id="wide-menu" className="wide-menu" onClick={handleClick}>
                <div id="menu-msg">Messages</div>
                <div id="menu-chat">Find a Chat</div>
                <div id="menu-avatar">Avatar</div>
            </section>
        </div>
    )
}

export default Menu