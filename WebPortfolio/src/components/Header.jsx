import React from 'react';
import { useTranslation } from 'react-i18next';
import './language-selector.jsx';
import '../styles/Header.css';
import LanguageSelector from './language-selector.jsx';

const Header = () => {
    const { t } = useTranslation();

    return (
        <section id="header">
            <div className="head-bg">
                <div className="headTop">
                    <p className="slogan">{t("slogan")}</p>
                    <LanguageSelector />

                </div>

                <div className="headText">
                    <h1>Iker Landeros</h1>
                    <h2>{t("ikerTitle")}</h2>
                    <button className="knowMe">{t("knowMe")}</button>
                </div>

                <div className="headBottom">
                    <div className="socialButtons">
                        <a href="https://www.linkedin.com/in/ikerlanderos/" target="_blank" className="linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/iker_landeros/" target="_blank" className="instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@iker_landeros" target="_blank" className="tiktok">
                            <i className="fab fa-tiktok"></i>
                        </a>
                        <a href="https://generacioninspire.com/" target="_blank" className="genInspire">
                            <img src="src\assets\logos\0logoInsigniaGenINSPIRE.svg" alt="Generación INSPIRE" className="genInspire" />
                        </a>
                    </div>

                    <div className="codePortfolio">
                        <a href="">{t("codePortfolio")}</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;