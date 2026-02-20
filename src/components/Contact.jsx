import React from 'react';
import { contactData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container fade-in">
                <h2 className="section-title">{siteText.sections.contact[language]}</h2>
                <p className="contact-text">
                    {siteText.ui.contactIntro[language]}
                </p>

                <div className="contact-links">
                    <a href={`mailto:${contactData.email}`} className="contact-btn email">
                        <span className="icon">✉️</span> {contactData.email}
                    </a>
                    <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
                        <span className="icon">in</span> LinkedIn
                    </a>
                    <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="contact-btn github">
                        <span className="icon">🐙</span> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
