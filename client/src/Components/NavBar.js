import React from 'react'
import cartoonMe from '../img/cartoonMe.jpg';
import {NavLink} from 'react-router-dom';
import photo from "../img/cartoonMe.jpg"

function Navbar({navToggle}) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={photo} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active" onClick = {navToggle}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active" onClick = {navToggle}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active" onClick = {navToggle}>
                            Portfolio
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <span>
                        Portfolio - Last Updated 2021 - 04
                    </span>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
