import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y2xen73', 'template_efqkazx', form.current, {
                publicKey: 'e3026VJauNlGvO6OG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact">

            <div className="contactFormContainer">

                <div className="formLeft">
                    <h3>{t('contactTitle')}</h3>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <div className="inputContainer">
                            <div className="inputLeft">
                                <h5>{t('contactName')}</h5>
                                <input type="text" placeholder='...' name="name" />
                                <h5>{t('contactEmail')}</h5>
                                <input type="email" placeholder='...' name="email"/>
                            </div>
                            <div className="inputRight">
                                <h5>{t('contactMessage')}</h5>
                                <textarea placeholder='...' name="message" ></textarea>
                            </div>
                        </div>
                        <button className="submitButton" type="submit">{t('contactButton')}</button>
                    </form>
                </div>

                <img className="formImage" src="src\assets\img\0-head.webp" alt="Iker Landeros Keynote Speaker" />
            </div>

            <div className="contactButtons">
                <a href="mailto:iker.landelao@gmail.com" className="email">
                    <i className="far fa-envelope"></i>
                </a>
                <a href="https://www.linkedin.com/in/ikerlanderos/" target="_blank" className="linkedin">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/iker_landeros/" target="_blank" className="instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@iker_landeros" target="_blank" className="tiktok">
                    <i className="fab fa-tiktok"></i>
                </a>
            </div>

        </section>
    );
};

export default Contact;
