import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Methodology.css';

const Methodology = () => {
    const { t } = useTranslation();

    return (
        <section id="methodology">
            <h3>Mi metodología de impacto</h3>

            <div className="methodology-container">

                <div className="methodology-item inspiration">
                    <p className="centerValue">Sueños</p>
                    <p className="leftValue">Comienzo</p>
                    <p className="rightValue">Confianza</p>
                    <h4>Inspiración</h4>
                    <p className="centerValue">Amor</p>
                    <p className="rightValue">Pasión</p>
                    <p className="leftValue">Aspiración</p>
                </div>

                <div className="methodology-item education">
                    <p className="centerValue">Crecimiento</p>
                    <p className="leftValue">Libertad</p>
                    <p className="rightValue">Aprender</p>
                    <h4>Educación</h4>
                    <p className="rightValue">Apertura</p>
                    <p className="leftValue">Innovación</p>
                    <p className="centerValue">Compromiso</p>
                </div>
                
                <div className="methodology-item action">
                    <p className="centerValue">Empatía</p>
                    <p className="rightValue">Generosidad</p>
                    <p className="leftValue">Perseverancia</p>
                    <h4>Acción</h4>
                    <p className="leftValue">Gratitud</p>
                    <p className="rightValue">Impacto</p>
                    <p className="centerValue">Colaboración</p>
                </div>

            </div>

        </section>
    );
};

export default Methodology;