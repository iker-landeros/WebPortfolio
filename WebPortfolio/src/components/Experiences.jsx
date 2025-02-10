import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Experiences.css';

const Experiences = () => {
    const { t } = useTranslation();

    const experiencesPhotos = {
        expCard1: {
            photo: "src/assets/img/6-exp1.jpg",
            text: "Presentador en festival de emprendimiento INCmty"
        },
        expCard2: {
            photo: "src/assets/img/6-exp2.jpg",
            text: "Coordinador de campamentos para Secretaría de la Juventud de Querétaro"
        },
        expCard3: {
            photo: "src/assets/img/6-exp3.jpg",
            text: "Delegado internacional en “AFS Youth Assembly”"
        },
        expCard4: {
            photo: "src/assets/img/6-exp4.jpg",
            text: "Responsable del encuentro del voluntariado del CRIT Puebla"
        },
        expCard5: {
            photo: "src/assets/img/6-exp5.jpg",
            text: "Ganador nacional Youth Challenge de UNICEF México"
        },
        expCard6: {
            photo: "src/assets/img/6-exp6.jpg",
            text: "Conferencista en congreso de Innovación Social de la UPAEP"
        },
        expCard7: {
            photo: "src/assets/img/6-exp7.jpg",
            text: "Coordinador nacional de voluntarios en INCmty"
        },
        expCard8: {
            photo: "src/assets/img/6-exp8.jpg",
            text: "Organizador del curso de verano “Raíces”"
        },
        expCard9: {
            photo: "src/assets/img/6-exp9.jpg",
            text: "Organizador de la capacitación integral para Embajadores SEJUVE Querétaro"
        },
        expCard10: {
            photo: "src/assets/img/6-exp10.jpg",
            text: "Ganador en hackatón en la Universidad de Pennsylvania"
        },
        expCard11: {
            photo: "src/assets/img/6-exp11.jpg",
            text: "Creación del podcast de impacto social #De5en5"
        },
        expCard12: {
            photo: "src/assets/img/6-exp12.jpg",
            text: "Líder del proyecto de impacto para el Día Nacional de Embajadores"
        }
    }

    return (
        <section id="experiences">
            <h3>Experiencias que me han inspirado</h3>

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
