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
                    <p>Sueños</p>
                    <p>Comienzo</p>
                    <p>Confianza</p>
                    <h4>Inspiración</h4>
                    <p>Amor</p>
                    <p>Aspiración</p>
                    <p>Pasión</p>
                </div>

                <div className="methodology-item education">
                    <p>Crecimiento</p>
                    <p>Libertad</p>
                    <p>Aprender</p>
                    <h4>Educación</h4>
                    <p>Apertura</p>
                    <p>Innovación</p>
                    <p>Compromiso</p>
                </div>
                
                <div className="methodology-item action">
                    <p>Empatía</p>
                    <p>Generosidad</p>
                    <p>Perseverancia</p>
                    <h4>Acción</h4>
                    <p>Gratitud</p>
                    <p>Impacto</p>
                    <p>Colaboración</p>
                </div>

            </div>

        </section>
    );
};

export default Methodology;