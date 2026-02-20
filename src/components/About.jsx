import React from 'react';
import { aboutData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { language } = useLanguage();
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">{siteText.sections.about[language]}</h2>
                <div className="about-content fade-in">
                    <p className="about-text">{aboutData.bio[language]}</p>
                </div>
            </div>
        </section>
    );
};

export default About;
