import React from 'react';
import './Sidenav.css'; // Create a CSS file for your side nav styles

const SideNav = () => {
    return (
        <div className="sidenav">
            <h2>Menu</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Ranks</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            <div className="sidenav-footer">
                <button className='reg'><a href="/login">Login</a></button>
                <button className='reg'><a href="/register">Sign up</a></button>
            </div>
        </div>
    );
};

export default SideNav;
