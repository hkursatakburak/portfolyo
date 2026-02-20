import React from 'react';
import './Education.css';
import { educationData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';

const Education = () => {
    const { language } = useLanguage();

    return (
        <section id="education" className="education-section fade-in">
            <div className="container">
                <h2 className="section-title">{siteText.sections.education[language]}</h2>
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3 className="degree">{typeof edu.degree === 'string' ? edu.degree : edu.degree[language]}</h3>
                            <p className="university">{typeof edu.university === 'string' ? edu.university : edu.university[language]}</p>
                            <p className="details">{typeof edu.details === 'string' ? edu.details : edu.details[language]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
