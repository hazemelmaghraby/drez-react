import React from 'react';
import { ReactTyped } from 'react-typed';
import './Header.css';
import BackgroundBlue from '../Tools/Bckgrounds/Backround-blue';
import mainImg from './../img/pngegg.png';
import Loading from '../../Components/Tools/Loading/Loading';

const Header = () => {
    const lorem = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."];
    const companyName = "DRE.$";

    return (
        <>
            <BackgroundBlue />
            <section className="home-section">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left half: Typed text */}
                        <div className="col-lg-6 col-md-12 text-container">
                            <h1 className="welcome-text">Welcome to:
                                <ReactTyped
                                    className='company-name'
                                    strings={[companyName]}
                                    typeSpeed={400}
                                    backSpeed={300}
                                    backDelay={100}
                                    loop={false}
                                />
                            </h1>
                            <p className="description-text">
                                <ReactTyped
                                    className='descriptionN'
                                    strings={lorem}
                                    typeSpeed={20}
                                    backSpeed={0}  // Disable backspacing
                                    backDelay={0}
                                    loop={false}   // Do not loop
                                    showCursor={false}
                                />
                            </p>
                        </div>
                        {/* Right half: Image */}
                        <div className="col-lg-6 col-md-12">
                            <img src={mainImg} alt="Profile" className="Hprofile-img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
