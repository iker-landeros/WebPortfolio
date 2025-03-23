import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {

    const { t } = useTranslation();

    return (
        <section id="footer">
            <footer>
                <div className="footer-container">
                    <div className="footer-content">
                        <h3>{t('footerText')}</h3>
                    </div>
                    
                    <div className='capsuleRed'></div>
                    <div className='capsuleBlue'></div>
                    <div className='capsuleYellow'></div>
                </div>
                <div className="codePortfolio">
                        {/* <a href="/code">{t("codePortfolio")}</a> */}
                </div>
            </footer>
        </section>
    );
};

export default Footer;