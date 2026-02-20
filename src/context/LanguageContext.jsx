import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const toggleLanguage = useCallback((newLang) => {
        if (newLang === language) return;

        setIsTransitioning(true);

        // Wait for fade out
        setTimeout(() => {
            setLanguage(newLang);

            // Remove fade out class and add fade in class (handled by CSS)
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50); // Small buffer to ensure state is updated and DOM is ready before fading back in
        }, 200); // 200ms matches the CSS transition duration
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, isTransitioning }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
