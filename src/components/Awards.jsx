import React from 'react';
import { awardsData } from '../data';
import './Awards.css';

const Awards = () => {
    return (
        <section id="awards" className="awards-section">
            <div className="container">
                <h2 className="section-title">Awards & Honors</h2>
                <div className="awards-grid">
                    {awardsData.map((award, index) => (
                        <div key={index} className="award-card fade-in">
                            <div className="award-icon">🏆</div>
                            <h3 className="award-text">{award.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
