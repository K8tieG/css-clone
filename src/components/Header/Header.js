import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className="container">
            Start Bootstrap
          <a className="site-name" href="#page-top"></a>
            <ul className="nav-bar">
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="team">Team</a>
                </li>
                <li>
                    <a href="contact">Contact</a>
                </li>
            </ul>
    
            
        </div>
    )
}

export default Header