import React, { useState, useRef, useEffect } from 'react';
import '../styles/Header.css'

const Header = () => {
    const [language, setLanguage] = useState('es');

    const changeLanguage = (lang) => {
        setLanguage(lang);
    }

    const [isLanguageOptionsVisible, setIsLanguageOptionsVisible] = useState(false);
    const languageRef = useRef(null);

    const toggleLanguageOptions = () => {
        setIsLanguageOptionsVisible(!isLanguageOptionsVisible);
    };

    const handleClickOutside = (event) => {
        if (languageRef.current && !languageRef.current.contains(event.target)) {
            setIsLanguageOptionsVisible(false); // Cierra la lista si el clic fue fuera del contenedor
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section id="header">
        <div class="head-bg">
            <div class="headTop">
                <p class="slogan">Aspira e inspira</p>
                <div class="language" ref={languageRef}>
                    <div
                        class="current-language"
                        id="currentLanguage"
                        onClick={toggleLanguageOptions}    
                    >
                        <img src="src/assets/img/0-flagMX.svg" alt="ES" class="flag"/>
                        <span>es</span>
                        <i class={`fa-solid fa-chevron-down ${isLanguageOptionsVisible ? 'visible' : ''}`}></i>
                    </div>
                    <div
                        class={`language-options ${isLanguageOptionsVisible ? 'visible' : ''}`}
                        id="languageOptions"
                    >
                        <div class="language-option" data-lang="EN">
                            <img src="src/assets/img/0-flagUSA.svg" alt="EN" class="flag"/>
                            <span>en</span>
                        </div>
                    </div>                 
                </div>
            </div>
            
            <div class="headText">
                <h1>Iker Landeros</h1>
                <h2>Fundador, conferencista y educador</h2>
                <button class="knowMe">Con&oacute;ceme</button>
            </div>

            <div class="headBottom">
                <div class="socialButtons">
                    <a href="https://www.linkedin.com/in/ikerlanderos/" target="_blank" class="linkedin">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.facebook.com/ikerlanderos" target="_blank" class="facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/ikerlanderos/" target="_blank" class="instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/ikerlanderos" target="_blank" class="twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>

                <div class="codePortfolio">
                    <a href="">{">>> Conoce mi parte nerd"}</a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Header;