import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LogoSlider.css';

const LogoSlider = () => {
    const { t } = useTranslation();

    return (
        <section id="logoSlider">
        <h3>Han confiado en m&iacute;:</h3>

        <div class="sliderFade">
            <div class="logoSlide">
                <img src="src/assets/logos/9logoSEJUVE.svg" alt="Logo de la Secretaría de la Juventud en Querétaro" />
                <img src="src/assets/logos/1logoTec.svg" alt="Logo del Tecnológico de Monterrey" />
                <img src="src/assets/logos/2logoSamsung.svg" alt="Logo de Samsung" />
                <img src="src/assets/logos/3logoUNICEF.svg" alt="Logo de UNICEF" />
                <img src="src/assets/logos/4logoNatura.svg" alt="Logo de Natura" />
                <img src="src/assets/logos/5logoAFS.svg" alt="Logo de AFS" />
                <img src="src/assets/logos/6logoUPAEP.svg" alt="Logo de UPAEP" />
                <img src="src/assets/logos/7logoLiks.svg" alt="Logo de Liks" />
                <img src="src/assets/logos/8logoINCmty.svg" alt="Logo de INCmty" />
                <img src="src/assets/logos/10logoHeraldo.svg" alt="Logo del Heraldo de México" />
                <img src="src/assets/logos/11logoBP.svg" alt="Logo de British Petroleum" />
                <img src="src/assets/logos/12logoDisruptivoTV.svg" alt="Logo de Disruptivo TV" />
                <img src="src/assets/logos/13logoSocialab.svg" alt="Logo de Socialab" />
            </div>

            <div class="logoSlide">
                <img src="src/assets/logos/9logoSEJUVE.svg" alt="Logo de la Secretaría de la Juventud en Querétaro" />
                <img src="src/assets/logos/1logoTec.svg" alt="Logo del Tecnológico de Monterrey" />
                <img src="src/assets/logos/2logoSamsung.svg" alt="Logo de Samsung" />
                <img src="src/assets/logos/3logoUNICEF.svg" alt="Logo de UNICEF" />
                <img src="src/assets/logos/4logoNatura.svg" alt="Logo de Natura" />
                <img src="src/assets/logos/5logoAFS.svg" alt="Logo de AFS" />
                <img src="src/assets/logos/6logoUPAEP.svg" alt="Logo de UPAEP" />
                <img src="src/assets/logos/7logoLiks.svg" alt="Logo de Liks" />
                <img src="src/assets/logos/8logoINCmty.svg" alt="Logo de INCmty" />
                <img src="src/assets/logos/10logoHeraldo.svg" alt="Logo del Heraldo de México" />
                <img src="src/assets/logos/11logoBP.svg" alt="Logo de British Petroleum" />
                <img src="src/assets/logos/12logoDisruptivoTV.svg" alt="Logo de Disruptivo TV" />
                <img src="src/assets/logos/13logoSocialab.svg" alt="Logo de Socialab" />
            </div>

        </div>
    </section>
    );
}

export default LogoSlider;