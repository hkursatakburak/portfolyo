import React from 'react';
import { technicalExperience, leadershipExperience } from '../data';
import './Experience.css';

const ExperienceItem = ({ item, align }) => (
    <div className={`timeline-item fade-in ${align}`}>
        <div className="timeline-dot"></div>
        <div className="timeline-content">
            <span className="timeline-date">{item.duration}</span>
            <h3 className="timeline-role">{item.role}</h3>
            <h4 className="timeline-company">{item.company}</h4>
            {item.description && <p className="timeline-description">{item.description}</p>}
        </div>
    </div>
);

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="experience-subsection">
                    <h3 className="subsection-title">Technical Experience</h3>
                    <div className="timeline">
                        {technicalExperience.map((item, index) => (
                            <ExperienceItem key={item.id} item={item} align={index % 2 === 0 ? 'left' : 'right'} />
                        ))}
                    </div>
                </div>

                <div className="experience-subsection">
                    <h3 className="subsection-title">Social & Leadership Experience</h3>
                    <div className="timeline">
                        {leadershipExperience.map((item, index) => (
                            <ExperienceItem key={item.id} item={item} align={index % 2 === 0 ? 'left' : 'right'} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
