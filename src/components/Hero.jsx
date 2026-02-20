import React from 'react';
import './Hero.css';
import { heroData } from '../data';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content fade-in">
                <h1 className="hero-title">{heroData.name}</h1>
                <h2 className="hero-tagline">{heroData.tagline}</h2>
                <p className="hero-intro">{heroData.intro}</p>
                <div className="hero-buttons">
                    {heroData.buttons.map((btn, index) => {
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
