import React, { useState, useEffect } from 'react';
import maria from './../img/Maria.png';
import dre from './../img/Dre2.jpg';
import AOS from 'aos';
import './Team.css';
import Background2 from './../Tools/Background/Background2.jsx';

const Team = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const roles = {
        Founder: 'Founder',
        CoFounder: 'Co-Founder',
        Moderator: 'Mod.',
        TeamManager: 'Team-Manager',
        FrontEndDeveloper: 'Front-End Dev.',
        Designer: 'Ui, Ux Designer',
        Artist: 'Art.',
        Member: 'Member'
    };

    const [activeCard, setActiveCard] = useState(null); // Track which card is active

    const handleMoreDetails = (card) => {
        setActiveCard(activeCard === card ? null : card); // Toggle the active card
    };

    return (
        <>
            <Background2 />
            <section className='myteam'>
                <div className="container">
                    <div className="row">
                        <h2 className="text-center mt-3">Meet My Team</h2>

                        {activeCard === 'card1' || activeCard === null ? (
                            <div className="col-md-4 card-container" data-aos={2 === 0 ? "fade-right" : "fade-left"}>
                                <img src={dre} alt="" style={{ maxWidth: '100%', marginRight: '140px' }} />
                                <h3>Hazem Elmaghraby</h3>
                                <h4 style={{ color: roles.CoFounder ? 'red' : roles.Founder ? 'yellow' : roles.FrontEndDeveloper ? 'purple' : 'white' }}>Role: {roles.Founder}</h4>
                                <h5>Major: Junior Front-End Developer</h5>
                                <h5>Age: 19</h5>
                                <h5>Languages: English, German, Arabic</h5>
                                <h5>Experience: 3 years</h5>
                                {activeCard === 'card1' && (
                                    <div className="description">
                                        <p>Hazem is a Front-End Developer with 1 year of experience. Lorem ipsum dolor sit amet...</p>
                                    </div>
                                )}
                                <p>
                                    <button className="btn btn-primary" onClick={() => handleMoreDetails('card1')}>
                                        {activeCard === 'card1' ? 'Less Details' : 'More Details'}
                                    </button>
                                </p>
                            </div>
                        ) : null}

                        {activeCard === 'card2' || activeCard === null ? (
                            <div className="col-md-4 card-container" data-aos={2 === 0 ? "fade-right" : "fade-down"}>
                                <img src={maria} alt="" style={{ maxWidth: '100%', marginRight: '140px' }} />
                                <h3>Maria Miller</h3>
                                <h4 style={{ color: 'red' }}>Role: Co-Founder</h4>
                                <h5>Major: Senior Front-End Developer</h5>
                                <h5>Age: 19</h5>
                                <h5>Languages: English, German, Spanish</h5>
                                <h5>Experience: 3 years</h5>
                                <p>
                                    <button className="btn btn-primary" onClick={() => handleMoreDetails('card2')}>
                                        {activeCard === 'card2' ? 'Less Details' : 'More Details'}
                                    </button>
                                </p>
                                {activeCard === 'card2' && (
                                    <div className="description">
                                        <p>Lorem ipsum dolor sit amet consectetur...</p>
                                    </div>
                                )}
                            </div>
                        ) : null}

                        {activeCard === 'card3' || activeCard === null ? (
                            <div className="col-md-4 card-container" data-aos={9 === 0 ? "fade-right" : "fade-right"}>
                                <img src={dre} alt="" style={{ maxWidth: '100%', marginRight: '140px' }} />
                                <h3>Hazem Elmaghraby</h3>
                                <h4 style={{ color: roles.CoFounder ? 'red' : roles.Founder ? 'yellow' : roles.FrontEndDeveloper ? 'green' : 'white' }}>Role: {roles.FrontEndDeveloper}</h4>
                                <h5>Major: Junior Front-End Developer</h5>
                                <h5>Age: 19</h5>
                                <h5>Languages: English, German, Arabic</h5>
                                <h5>Experience: 3 years</h5>
                                {activeCard === 'card3' && (
                                    <div className="description">
                                        <p>Hazem is a Front-End Developer with 1 year of experience. Lorem ipsum dolor sit amet...</p>
                                    </div>
                                )}
                                <p>
                                    <button className="btn btn-primary" onClick={() => handleMoreDetails('card3')}>
                                        {activeCard === 'card3' ? 'Less Details' : 'More Details'}
                                    </button>
                                </p>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
