import React from 'react';
import { technicalExperience, leadershipExperience, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const ExperienceItem = ({ item, align, language }) => (
    <div className={`timeline-item fade-in ${align}`}>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
            <span className="timeline-date">{typeof item.duration === 'string' ? item.duration : item.duration[language]}</span>
            <h3 className="timeline-role">{item.role[language]}</h3>
            <h4 className="timeline-company">{typeof item.company === 'string' ? item.company : item.company[language]}</h4>
            {item.description && <p className="timeline-description">{item.description[language]}</p>}
        </div>
    </div>
);

const Experience = () => {
    const { language } = useLanguage();

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">{siteText.sections.experience[language]}</h2>

                <div className="experience-subsection">
                    <h3 className="subsection-title">{siteText.sections.techExperience[language]}</h3>
                    <div className="timeline">
                        {technicalExperience.map((item, index) => (
                            <ExperienceItem key={item.id} item={item} align={index % 2 === 0 ? 'left' : 'right'} language={language} />
                        ))}
                    </div>
                </div>

                <div className="experience-subsection">
                    <h3 className="subsection-title">{siteText.sections.socialExperience[language]}</h3>
                    <div className="timeline">
                        {leadershipExperience.map((item, index) => (
                            <ExperienceItem key={item.id} item={item} align={index % 2 === 0 ? 'left' : 'right'} language={language} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
