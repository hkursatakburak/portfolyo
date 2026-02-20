import React from 'react';
import { awardsData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import './Awards.css';

const Awards = () => {
    const { language } = useLanguage();
    return (
        <section id="awards" className="awards-section">
            <div className="container">
                <h2 className="section-title">{siteText.sections.awards[language]}</h2>
                <div className="awards-grid">
                    {awardsData.map((award, index) => (
                        <div key={index} className="award-card fade-in">
                            <div className="award-icon">🏆</div>
                            <div className="award-content">
                                <h3 className="award-text">{award.text[language]}</h3>
                                {award.description && <p className="award-desc">{award.description[language]}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
