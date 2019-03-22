import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {


    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-sm">
                <NavLink className="navbar-brand" to="/">Ricky Chen</NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item"><NavLink className="nav-link" to="/home">Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                </ul>
                <li className="ml-auto"><NavLink className="nav-link" to="/resume">Resume</NavLink></li>
                <a href="https://www.linkedin.com/in/ricky-chen-7ab273140/" rel="noopener noreferrer" target="_blank">
                    <img style={{height: 50, width:50}} src={require("../assets/images/linkedin.png")} alt="linkedin"/>
                </a>
                <a href="https://www.github.com/hackermanone" rel="noopener noreferrer" target="_blank">
                    <img style={{height: 50, width:50}} src={require("../assets/images/github.png")} alt="github"/>
                </a>
            </nav>
        );
    }
    
}

export default NavBar;