import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Testimonies.css';

const Testimonies = () => {
    const { t } = useTranslation();
    const testimonies = [
        {
            name: "Rafael Laja",
            relationship: "Estudiante",
            testimony: "Iker Landeros es un líder increíble. Su energía y creatividad me inspiraron a crear proyectos de arte con gran impacto, gracias a él me convertí en un gran Embajador Juvenil. #INSPIRE"
        },
        {
            name: "Fernanda Román",
            relationship: "Colaboradora",
            testimony: "Colaborar con Iker fue muy gratificante, debido a su liderazgo y habilidad de trabajo en equipo."
        }
    ]
    

    return (
        <section id="testimonySlider">
            <h3>{t('testimonySlider')}</h3>
            <div className="sliderFade">
                <div className="testimonyContainer">
                    {testimonies.map((testimony, index) => (
                        <div key={index} className="testimony">
                            <p>{testimony.testimony}</p>
                            <p className="testimonyName">{testimony.name}</p>
                            <p className="testimonyRelationship">{testimony.relationship}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonies;
