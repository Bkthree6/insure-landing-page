import React from 'react'
import Hamburger from '../assets/icon-hamburger.svg'
import { useState } from 'react'

function MobileNav() {
    // Determine if link is active
    let [active, setActive] = useState(false)

    // onToggle method
    function onToggle() {
        if (active === false) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    return (
        <div className="mobile-nav">
            <button className="mobile-nav__btn" onClick={onToggle}><img src={Hamburger} alt="Hamburger menu"></img></button>
        </div>
    )
}

export default MobileNav