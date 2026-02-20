import React from 'react';
import { certificatesData } from '../data';
import './Certificates.css';

const Certificates = () => {
    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <h2 className="section-title">Certificates & Trainings</h2>
                <div className="certificates-grid">
                    {certificatesData.map((item) => (
                        <div key={item.id} className="certificate-card fade-in">
                            {item.image && <div className="cert-img-container"><img src={item.image} alt={item.name} className="certificate-image" /></div>}
                            <div className="certificate-content">
                                <h3 className="certificate-name">{item.name}</h3>
                                <p className="certificate-org">{item.organization}</p>
                                <span className="certificate-year">{item.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
