import React from 'react';
import { heroData, siteText } from '../data';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer style={{
            background: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
            padding: '40px 20px',
            textAlign: 'center',
            borderTop: '1px solid var(--border-color)'
        }}>
            <p>&copy; {new Date().getFullYear()} {heroData.name}. All Rights Reserved.</p>
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>{siteText.ui.footer[language]} React</p>
        </footer>
    );
};

export default Footer;
