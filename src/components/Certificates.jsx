import React from 'react';
import { certificatesData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import './Certificates.css';

const Certificates = () => {
    const { language } = useLanguage();

    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <h2 className="section-title">{siteText.sections.certificates[language]}</h2>
                <div className="certificates-grid">
                    {certificatesData.map((item) => (
                        <div key={item.id} className="certificate-card fade-in">
                            {item.image && <div className="cert-img-container"><img src={item.image} alt={typeof item.name === 'string' ? item.name : item.name[language]} className="certificate-image" /></div>}
                            <div className="certificate-content">
                                <h3 className="certificate-name">{typeof item.name === 'string' ? item.name : item.name[language]}</h3>
                                <p className="certificate-org">{typeof item.organization === 'string' ? item.organization : item.organization[language]}</p>
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
