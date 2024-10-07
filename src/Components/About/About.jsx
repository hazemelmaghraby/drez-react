import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import AOS from 'aos';
import img from './../img/profileImg.png.jpg';
import { devName } from '../shared/shared';

const skills = [
    { name: 'HTML', level: 100 },
    { name: 'CSS', level: 100 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 50 },
    { name: 'Node.js - Discord.js', level: 80 },
    { name: 'C#', level: 10 },
    { name: 'React Native', level: 30 }
];

const About = () => {
    const [filled, setFilled] = useState(false);
    const skillRefs = useRef([]);
    const langRefs = useRef([]);

    useEffect(() => {
        AOS.init();
    }, []);

    const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const skillPosition = skillRefs.current[0]?.offsetTop;
        const langPosition = langRefs.current[0]?.offsetTop;
        if (skillPosition && scrollPosition > skillPosition) {
            setFilled(true);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getProgressColor = (level) => {
        if (level < 40) return '#dc3545'; // Red
        if (level <= 10) return '#ffbb0091'; // Yellow
        if (level <= 70) return 'blue'; // Yellow // Yellow
        return '#28a745'; // Green
    };

    // ------------------- Language Skills -------------------
    const langSkills = [
        { name: 'English', level: 90, CEFR: 'B2' },
        { name: 'Spanish', level: 20, CEFR: 'A2' },
        { name: 'German', level: 65, CEFR: 'B1' },
    ];

    return (
        <>
            <section className='desc-sec'>
                <h1 style={{ textAlign: 'center', marginTop: '25px' }}>About Me</h1>
                <div className="container mt-5">
                    <div className="d-flex align-items-center about-me">
                        <img
                            src={img}
                            alt="Profile"
                            className="profile-img rounded-circle"
                        />
                        <div className="about-text ms-5">
                            <h3>{devName}</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, dolor impedit... lorm
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa eos inventore at, earum nulla impedit blanditiis alias velit, praesentium accusamus, enim corrupti. Reiciendis libero magni expedita distinctio tenetur consectetur?
                            </p>
                        </div>
                    </div>
                </div>


                <div className="container mt-5">
                    <h2>Technical Skills:</h2>
                    <div className="row">
                        {skills.map((skill, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={skill.name}>
                                <h5 className="skill-label">{skill.name}</h5>
                                <div className="custom-progress" ref={el => skillRefs.current[index] = el}>
                                    <div
                                        className="progress-fill"
                                        style={{
                                            width: filled ? `${skill.level}%` : '0%',
                                            backgroundColor: filled ? getProgressColor(skill.level) : '#e0e0e0'
                                        }}
                                    >
                                        {filled ? `${skill.level}%` : ''}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2>Language Skills:</h2>
                    <div className="row">
                        {langSkills.map((skill, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={skill.name}>
                                <h5 className="skill-label">{skill.name} (CEFR: {skill.CEFR})</h5>
                                <div className="custom-progress" ref={el => langRefs.current[index] = el}>
                                    <div
                                        className="progress-fill"
                                        style={{
                                            width: filled ? `${skill.level}%` : '0%',
                                            backgroundColor: filled ? getProgressColor(skill.level) : '#e0e0e0'
                                        }}
                                    >
                                        {filled ? `${skill.level}%` : ''}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
