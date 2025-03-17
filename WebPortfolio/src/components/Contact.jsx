import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact">
            <h3>{t('contactTitle')}</h3>

            
        </section>
    );
};

export default Contact;
