import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Impact.css';

const Impact = () => {
    const { t } = useTranslation();

    return (
        <section id="impact" className="impact">
            <div className="impact-bg">
                <h3>{t('impactTitle')}</h3>
                <div className="impactCards">
                    <div className="impactText">
                        <i className="fa-solid fa-user-group"></i>
                        <h2>+5,000</h2>
                        <p>{t('peopleInKeynotes')}</p>
                    </div>
                    <div className="impactText">
                        <i className="fa-solid fa-award"></i>
                        <h2>+50</h2>
                        <p>{t('trainingSpaces')}</p>
                    </div>
                    <div className="impactText">
                        <i className="fa-solid fa-laptop"></i>
                        <h2>+3,500</h2>
                        <p>{t('educationalContent')}</p>
                    </div>
                    <div className="impactText">
                        <div className="socialMedia">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-tiktok"></i>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <h2>+200,000</h2>
                        <p>{t('annualImpacts')}</p>
                    </div>
                    <div className="impactText">
                    <i className="fa-solid fa-rocket"></i>
                        <h2>+30</h2>
                        <p>{t('impactProjects')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;