import React from 'react';
import { programsData } from '../data';
import './Programs.css';

const Programs = () => {
    return (
        <section id="programs" className="programs-section">
            <div className="container">
                <h2 className="section-title">Programs, Workshops & Acceptances</h2>
                <div className="programs-grid">
                    {programsData.map((item) => (
                        <div key={item.id} className="program-card fade-in">
                            {item.image && <img src={item.image} alt={item.program} className="program-image" />}
                            <div className="program-content">
                                <h3 className="program-name">{item.program}</h3>
                                <h4 className="program-org">
                                    {item.organization} {item.year && `(${item.year})`}
                                </h4>
                                {item.description && <p className="program-desc">{item.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
