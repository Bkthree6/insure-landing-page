import { useState, useEffect } from 'react'
import React from 'react'
import logo from '../assets/logo.svg'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import '../App.css'

function Header() {
    let [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
    });

    return (
        <header className="content-wrapper header">
            <div className="header-container">
                <img src={logo} alt="Insure logo"></img>
            </div> 
            
            { width <= 699 ? <MobileNav /> : <DesktopNav />}
            
        </header>
    )
    
}

export default Header