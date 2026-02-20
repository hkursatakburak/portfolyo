import React from 'react';
import './Hero.css';
import { heroData } from '../data';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { language } = useLanguage();

    return (
        <section id="hero" className="hero-section">
            <div className="hero-content fade-in">
                <h1 className="hero-title">{heroData.name}</h1>
                <h2 className="hero-tagline">{heroData.tagline[language]}</h2>
                <div className="hero-buttons">
                    {heroData.buttons[language].map((btn, index) => {
                        const isExternal = btn.link.startsWith('http');
                        return (
                            <a
                                key={index}
                                href={btn.link}
                                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className={`btn ${btn.primary ? 'btn-primary' : 'btn-secondary'}`}
                            >
                                {btn.text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
