import React from 'react'
import './Home.css';
import { ReactTyped } from 'react-typed';
import Particles from 'react-tsparticles';

const Home = () => {
    return (
        <>
            <div className="header-wraper">
                <div className="home-overlay"></div>
                <div className="main-section">
                    <h1>Hazem Elmaghraby</h1>
                    <ReactTyped
                        className='animation-text'
                        strings={['Front-End Developer', 'Crypto Trader', 'Web3 User', 'German Translator']}
                        typeSpeed={30}
                        backSpeed={20}
                        loop
                    />
                    <button className="contact-btn">
                        <a href="contact-btn-link" className='contact-btn-link'>Get In Touch</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home
