import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Impact.css';

const Impact = () => {
    const { t } = useTranslation();

    return (
        <section id="impact" class="impact">
            <div class="impact-bg">
                <h3>Impacto en n&uacute;meros</h3>
                <div class="impactCards">
                    <div class="impactText">
                        <i class="fa-solid fa-user-group"></i>
                        <h2>+5,000</h2>
                        <p>Personas han escuchado mis conferencias</p>
                    </div>
                    <div class="impactText">
                        <i class="fa-solid fa-award"></i>
                        <h2>+30</h2>
                        <p>Espacios de capacitaci&oacute;n liderados</p>
                    </div>
                    <div class="impactText">
                        <i class="fa-solid fa-laptop"></i>
                        <h2>+3,500</h2>
                        <p>Minutos de contenido educativo creado</p>
                    </div>
                    <div class="impactText">
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-tiktok"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <h2>+200,000</h2>
                        <p>Impactos anuales en redes sociales</p>
                    </div>
                    <div class="impactText">
                    <i class="fa-solid fa-rocket"></i>
                        <h2>+10</h2>
                        <p>Emprendimientos y proyectos de impacto creados</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;