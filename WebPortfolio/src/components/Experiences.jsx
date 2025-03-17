import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Experiences.css';

const Experiences = () => {
    const { t } = useTranslation();

    const experiencesPhotos = {
        expCard1: {
            photo: "src/assets/img/6-exp1.jpg",
            text: `${t('experiencesCard1')}`
        },
        expCard2: {
            photo: "src/assets/img/6-exp2.jpg",
            text: `${t('experiencesCard2')}`
        },
        expCard3: {
            photo: "src/assets/img/6-exp3.jpg",
            text: `${t('experiencesCard3')}`
        },
        expCard4: {
            photo: "src/assets/img/6-exp4.jpg",
            text: `${t('experiencesCard4')}`
        },
        expCard5: {
            photo: "src/assets/img/6-exp5.jpg",
            text: `${t('experiencesCard5')}`
        },
        expCard6: {
            photo: "src/assets/img/6-exp6.jpg",
            text: `${t('experiencesCard6')}`
        },
        expCard7: {
            photo: "src/assets/img/6-exp7.jpg",
            text: `${t('experiencesCard7')}`
        },
        expCard8: {
            photo: "src/assets/img/6-exp8.jpg",
            text: `${t('experiencesCard8')}`
        },
        expCard9: {
            photo: "src/assets/img/6-exp9.jpg",
            text: `${t('experiencesCard9')}`
        },
        expCard10: {
            photo: "src/assets/img/6-exp10.jpg",
            text: `${t('experiencesCard10')}`
        },
        expCard11: {
            photo: "src/assets/img/6-exp11.jpg",
            text: `${t('experiencesCard11')}`
        },
        expCard12: {
            photo: "src/assets/img/6-exp12.jpg",
            text: `${t('experiencesCard12')}`
        }
    }

    return (
        <section id="experiences">
            <h3>{t('experiencesTitle')}</h3>

            <div className="experiencesCards">
                {Object.keys(experiencesPhotos).map((key, index) => (
                    <div className={"expCardContainer " + key}>
                        <img src={experiencesPhotos[key].photo} alt={`Experiencia ${index + 1}: ${[key].text}`} />
                        
                        <div className="expText">
                            {experiencesPhotos[key].text}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;
