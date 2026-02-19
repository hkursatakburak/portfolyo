import React from 'react';
import { aboutData } from '../data';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content fade-in">
                    <p className="about-text">{aboutData.bio}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
