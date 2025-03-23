import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LogoSlider.css';

const LogoSlider = () => {
    const { t } = useTranslation();
    const logos = [
        "src/assets/logos/1logoTec.svg",
        "src/assets/logos/2logoSamsung.svg",
        "src/assets/logos/3logoUNICEF.svg",
        "src/assets/logos/4logoNatura.svg",
        "src/assets/logos/5logoAFS.svg",
        "src/assets/logos/6logoUPAEP.svg",
        "src/assets/logos/7logoLiks.svg",
        "src/assets/logos/8logoINCmty.svg",
        "src/assets/logos/9logoSEJUVE.svg",
        "src/assets/logos/10logoHeraldo.svg",
        "src/assets/logos/11logoBP.svg",
        "src/assets/logos/12logoDisruptivoTV.svg",
        "src/assets/logos/13logoSocialab.svg",
    ];

    return (
        <section id="logoSlider">
            <h3>{t('logoSliderTitle')}</h3>
            <div className="sliderFade">
                <div className="logoSlide">
                    {logos.concat(logos).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoSlider;
