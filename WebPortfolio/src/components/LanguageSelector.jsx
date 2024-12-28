import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LanguageSelector.css';

const languages = [
  {
    code: 'es',
    name: 'Español',
    flag: '0-flagMX.svg',
  },
  {
    code: 'en',
    name: 'English',
    flag: '0-flagUSA.svg',
  },
];

const LanguageSelector = () => {

  const { i18n } = useTranslation(); // Hook para manejar idiomas
  const [isLanguageOptionsVisible, setIsLanguageOptionsVisible] = useState(false);
  const languageRef = useRef(null);

  // Idioma actual
  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const toggleLanguageOptions = () => {
    setIsLanguageOptionsVisible(!isLanguageOptionsVisible);
  };

  const handleClickOutside = (event) => {
    if (languageRef.current && !languageRef.current.contains(event.target)) {
      setIsLanguageOptionsVisible(false); // Cierra la lista si el clic fue fuera del contenedor
    }
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code); // Cambia el idioma con i18next
    setIsLanguageOptionsVisible(false); // Cierra el menú después de seleccionar
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="language" ref={languageRef}>
      <div
        className="current-language"
        id="currentLanguage"
        onClick={toggleLanguageOptions}
      >
        <img src={`src/assets/img/${currentLanguage.flag}`} alt={currentLanguage.code} className="flag" />
        <span>{currentLanguage.code}</span>
        <i className={`fa-solid fa-chevron-down ${isLanguageOptionsVisible ? 'visible' : ''}`}></i>
      </div>
      <div
        className={`language-options ${isLanguageOptionsVisible ? 'visible' : ''}`}
        id="languageOptions"
      >
        {languages
          .filter((lang) => lang.code !== currentLanguage.code)
          .map((lang) => (
            <div
              key={lang.code}
              className="language-option"
              onClick={() => handleLanguageChange(lang.code)}
            >
              <img src={`src/assets/img/${lang.flag}`} alt={lang.code} className="flag" />
              <span>{lang.code}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
