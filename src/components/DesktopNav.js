import React from 'react'

function DesktopNav() {
    return (
        <nav className="desktop-nav__nav">
            <ul className="desktop-nav__links">
                <li className="desktop-nav__link"><a href=".">How we work</a></li>
                <li className="desktop-nav__link"><a href=".">Blog</a></li>
                <li className="desktop-nav__link"><a href=".">Account</a></li>
                <li className="desktop-nav__link"><button className="desktop-nav__btn" href=".">View plans</button></li>
            </ul>
        </nav>
    )
}

export default DesktopNav