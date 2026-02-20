import React from 'react';
import './Education.css';
import { educationData } from '../data';

const Education = () => {
    return (
        <section id="education" className="education-section fade-in">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card">
                            <h3 className="degree">{edu.degree}</h3>
                            <p className="university">{edu.university}</p>
                            <p className="details">{edu.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
