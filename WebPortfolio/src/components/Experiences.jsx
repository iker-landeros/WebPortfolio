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
            text: "Coordinador del Agendatón de la SEJUVE Querétaro"
        },
        expCard3: {
            photo: "src/assets/img/6-exp3.jpg",
            text: "Delegado internacional en “AFS Youth Assembly”"
        },
        expCard4: {
            photo: "src/assets/img/6-exp4.jpg",
            text: "Ganador nacional Youth Challenge de UNICEF México"
        },
        expCard5: {
            photo: "src/assets/img/6-exp5.jpg",
            text: "Conferencista en congreso de Innovación Social de la UPAEP"
        },
        expCard6: {
            photo: "src/assets/img/6-exp6.jpg",
            text: "Coordinador nacional de voluntarios en INCmty"
        },
        expCard7: {
            photo: "src/assets/img/6-exp7.jpg",
            text: "Ganador en hackatón en la Universidad de Pennsylvania"
        },
        expCard8: {
            photo: "src/assets/img/6-exp8.jpg",
            text: "Creación del podcast de impacto social #De5en5"
        },
        expCard9: {
            photo: "src/assets/img/6-exp9.jpg",
            text: "Beca a Nueva York por programa de agentes de cambio"
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
                {/* <div class="expCard1">Presentador en festival de emprendimiento INCmty</div>
                <div class="expCard2">Coordinador del Agendatón de la SEJUVE Querétaro</div>
                <div class="expCard3">Delegado internacional en “AFS Youth Assembly”</div>
                <div class="expCard4">Ganador nacional Youth Challenge de UNICEF México</div>
                <div class="expCard5">Conferencista en congreso de Innovación Social de la UPAEP</div>
                <div class="expCard6">Coordinador nacional de voluntarios en INCmty</div>
                <div class="expCard7">Ganador en hackatón en la Universidad de Pennsylvania</div>
                <div class="expCard8">Creación del podcast de impacto social #De5en5</div>
                <div class="expCard9">Beca a Nueva York por programa de agentes de cambio</div> */}
            </div>
        </section>
    );
};

export default Experiences;
