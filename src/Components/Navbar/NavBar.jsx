import React from 'react';
import logo from './../img/pngegg.png';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand" href='/'>
                    <img src={logo} alt="error" className='navimg' />DRE.$
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />

                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clients</a>
                        </li>
                        <button className='reg'>
                            <a href="/login">Login</a>
                        </button>
                        <button className='reg'>
                            <a href="/register">Sign up</a>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;