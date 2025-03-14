import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Testimonies.css';

const Testimonies = () => {
    const { t } = useTranslation();
    

    return (
        <section id="testimonySlider">
            <h3>{t('testimonySlider')}</h3>
            <div className="sliderFade">
                <div className="testimonyContainer">
                    {/* {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                        />
                    ))} */}
                </div>
            </div>
        </section>
    );
};

export default Testimonies;
