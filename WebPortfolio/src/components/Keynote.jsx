import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Keynote.css';

const Keynote = () => {
    const { t } = useTranslation();

    return (
        <section id="keynote">
            <h3>{t('keynoteTitle')}</h3>
            <div id="keynoteVideo" className="keynoteVideo">
                <iframe
                    className="videoFrame"
                    src="https://www.youtube.com/embed/ZLb9QqvC_nc?si=gVD2yGzXQxtBce0y"
                    title='Conferencia "Encuentra tu Propósito de Impacto"'
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>
            </div>
        </section>
    );
};

export default Keynote;
