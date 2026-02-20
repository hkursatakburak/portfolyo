import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../context/LanguageContext';
import { siteText } from '../data';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { language, toggleLanguage } = useLanguage();
    const [activeHash, setActiveHash] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const sections = ['hero', 'about', 'projects', 'experience', 'programs', 'certificates', 'awards', 'skills', 'education', 'contact'];
            let currentSection = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = `#${section}`;
                        break;
                    }
                }
            }

            if (currentSection !== activeHash) {
                setActiveHash(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeHash]);

    const navLinks = [
        { name: siteText.nav.home[language], href: '#hero' },
        { name: siteText.nav.about[language], href: '#about' },
        { name: siteText.nav.projects[language], href: '#projects' },
        { name: siteText.nav.experience[language], href: '#experience' },
        { name: siteText.nav.programs[language], href: '#programs' },
        { name: siteText.nav.certificates[language], href: '#certificates' },
        { name: siteText.nav.awards[language], href: '#awards' },
        { name: siteText.nav.skills[language], href: '#skills' },
        { name: siteText.nav.education[language], href: '#education' },
        { name: siteText.nav.contact[language], href: '#contact' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="logo">HKA.</a>

                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.href}
                            className={activeHash === link.href ? 'active-link' : ''}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="nav-controls">
                    <div className="lang-toggle">
                        <span
                            className={`lang-option ${language === 'en' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('en')}
                        >EN</span>
                        <span className="lang-separator">|</span>
                        <span
                            className={`lang-option ${language === 'tr' ? 'active' : ''}`}
                            onClick={() => toggleLanguage('tr')}
                        >TR</span>
                    </div>

                    <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
