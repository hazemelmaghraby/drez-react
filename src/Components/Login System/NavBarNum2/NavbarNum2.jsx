import React from 'react';
import logo from './../../img/pngegg.png';
import './NavBatNum2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const NavBatNum2 = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark l-NavBar">
            <div className="container">
                <a className="navbar-brand l-NavBarBrand" href="/">
                    <img src={logo} alt="error" className='l-navimg' />DRE.$
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
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 l-navbar-navv">
                        <button className='reg2'>
                            <a href="/login/adminLogin">Admin Login</a>
                        </button>
                        <button className='reg'>
                            <a href="/login">Login</a>
                        </button>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBatNum2;