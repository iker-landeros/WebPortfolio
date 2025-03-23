import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/LogoSlider.css';

const LogoSlider = () => {
    const { t } = useTranslation();
    const logos = [
        "assets/logos/1logoTec.svg",
        "assets/logos/2logoSamsung.svg",
        "assets/logos/3logoUNICEF.svg",
        "assets/logos/4logoNatura.svg",
        "assets/logos/5logoAFS.svg",
        "assets/logos/6logoUPAEP.svg",
        "assets/logos/7logoLiks.svg",
        "assets/logos/8logoINCmty.svg",
        "assets/logos/9logoSEJUVE.svg",
        "assets/logos/10logoHeraldo.svg",
        "assets/logos/11logoBP.svg",
        "assets/logos/12logoDisruptivoTV.svg",
        "assets/logos/13logoSocialab.svg",
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
