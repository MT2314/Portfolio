import React from 'react'
import cartoonMe from '../img/cartoonMe.jpg';
import {NavLink} from 'react-router-dom';
import photo from "../img/mike.jpg"

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={photo} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
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
