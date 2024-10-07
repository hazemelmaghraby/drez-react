import React from 'react'
import './underDevelopment.css';
import { ReactTyped } from 'react-typed';
import Particles from 'react-tsparticles';
import BackgroundBlue from './../../../Main Components/Tools/Bckgrounds/Backround-blue';

const Maintence = () => {
    return (
        <>
            <BackgroundBlue />
            <div className="mainHeaderWraper">
                <div className="mainHomeOverlay"></div>
                <div className="Mmain-section">
                    <h1>DRE.$</h1>
                    <p style={{ color: 'white', fontSize: '1.5rem' }}>This Page Is Still Underdeveloping <br /> Thank You For Your Patience</p>
                    <ReactTyped
                        className='AanimationText'
                        style={{ color: 'red' }}
                        strings={['UnderDevelopment....']}
                        typeSpeed={150}
                        backSpeed={160}
                        backDelay={3000}
                        loop
                    />
                    <button className="mainContactBtn">
                        <a href="contact-btn-link" className='mainContactBtnLink'>Get In Touch</a>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Maintence
