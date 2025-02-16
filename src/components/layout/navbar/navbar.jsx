import React from 'react'
import Menu from './menu'
import '../../../App.css'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav id="navbar" className="navbar">
                <h1>App Icon</h1>
                <Menu />
            </nav>
        </>
    )
}

export default Navbar