import React from 'react';
import { contactData } from '../data';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container fade-in">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-text">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="contact-links">
                    <a href={`mailto:${contactData.email}`} className="contact-btn email">
                        <span className="icon">✉️</span> {contactData.email}
                    </a>
                    <a href={contactData.linkedin} target="_blank" rel="https://www.linkedin.com/in/hkursat-akburak" className="contact-btn linkedin">
                        <span className="icon">in</span> LinkedIn
                    </a>
                    <a href={contactData.github} target="_blank" rel="https://github.com/hkursatakburak" className="contact-btn github">
                        <span className="icon">🐙</span> GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
