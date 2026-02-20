import React from 'react';
import { programsData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import './Programs.css';

const Programs = () => {
    const { language } = useLanguage();

    return (
        <section id="programs" className="programs-section">
            <div className="container">
                <h2 className="section-title">{siteText.sections.programs[language]}</h2>
                <div className="programs-grid">
                    {programsData.map((item) => (
                        <div key={item.id} className="program-card fade-in">
                            {item.image && <img src={item.image} alt={typeof item.program === 'string' ? item.program : item.program[language]} className="program-image" />}
                            <div className="program-content">
                                <h3 className="program-name">{typeof item.program === 'string' ? item.program : item.program[language]}</h3>
                                <h4 className="program-org">
                                    {typeof item.organization === 'string' ? item.organization : item.organization[language]} {item.year && `(${item.year})`}
                                </h4>
                                {item.description && <p className="program-desc">{typeof item.description === 'string' ? item.description : item.description[language]}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
