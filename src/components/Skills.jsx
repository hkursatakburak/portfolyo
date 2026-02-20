import React from 'react';
import { skillsData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
    const { language } = useLanguage();

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">{siteText.sections.skills[language]}</h2>
                <div className="skills-container fade-in">
                    {skillsData[language].map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
