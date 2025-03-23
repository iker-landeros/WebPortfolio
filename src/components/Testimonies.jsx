import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Testimonies.css';

const Testimonies = () => {
    const { t } = useTranslation();
    const testimonies = t('testimonies', { returnObjects: true });

    return (
        <section id="testimonySlider">
            <h3>{t('testimonySlider')}</h3>
            <div className="sliderFade">
                <div className="testimonyContainer">
                    {testimonies.map((testimony, index) => (
                        <div key={index} className="testimony">
                            <p className="testimonyContent">{testimony.testimony}</p>
                            <div className="testimonyWriter">
                                <p className="testimonyName">{testimony.name}</p>
                                <p className="testimonyRelationship">{testimony.relationship}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonies;
