import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about">
            <img src="assets/img/1-about.jpg" alt="Iker Landeros"></img>
            <div className="aboutText">
                <h2>{t('aboutTitle')}</h2>
                <br></br>
                <p>{t("aboutTextLine1")}</p>
                <br></br>
                <p>{t("aboutTextLine2")}<span className="bold">{t("aboutTextLine2Bold")}</span>.</p>
                <br></br>
                <p>{t("aboutTextLine3")}<span className="bold">{t("aboutTextLine3Bold")}</span>{t("aboutTextLine3Continue")}<span className="bold">{t("aboutTextLine3Bold2")}</span>.</p>
            </div>
        </section>
    );
};

export default About;