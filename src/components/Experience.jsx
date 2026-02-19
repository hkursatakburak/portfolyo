import React from 'react';
import { experienceData } from '../data';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <div key={item.id} className="timeline-item fade-in">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{item.duration}</span>
                                <h3 className="timeline-role">{item.role}</h3>
                                <h4 className="timeline-company">{item.company}</h4>
                                <p className="timeline-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
