import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const validateForm = () => {
        const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{5,}$/; // Solo letras y espacios, mínimo 2 caracteres
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validación básica de email

        const isValidName = nameRegex.test(name);
        const isValidEmail = email.length >= 8 && emailRegex.test(email);
        const isValidMessage = message.length >= 10;

        let errors = {};

        if (!isValidName) errors.name = 'Text';
        if (!isValidEmail) errors.email = 'Text';
        if (!isValidMessage) errors.message = 'Text';

        setErrors(errors);

        setIsValid(isValidName && isValidEmail && isValidMessage);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') setName(value);
        if (name === 'email') setEmail(value);
        if (name === 'message') setMessage(value);

        validateForm();
    }

    const sendEmail = (e) => {
        console.log('Sending email...');
        e.preventDefault();

        emailjs
            .sendForm('service_y2xen73', 'template_efqkazx', form.current, {
                publicKey: 'e3026VJauNlGvO6OG',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setName('');
                    setEmail('');
                    setMessage('');

                    setErrors({});

                    setIsValid(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        borderRadius: '30px',
    };

    return (
        <section id="contact">

            <div className="contactFormContainer">

                <div className="formLeft">
                    <h3>{t('contactTitle')}</h3>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <div className="inputContainer">

                            <label>{t('contactName')}
                            {errors.name && <p className="error">{t('nameError')}</p>}
                            </label>
                            <input type="text" placeholder='...' name="name" value={name} onChange={handleChange} />

                            <label>{t('contactEmail')}
                            {errors.email && <p className="error">{t('emailError')}</p>}
                            </label>
                            <input type="email" placeholder='...' name="email" value={email} onChange={handleChange} />

                            <label>{t('contactMessage')}
                            {errors.message && <p className="error">{t('messageError')}</p>}
                            </label>
                            <textarea placeholder='...' name="message" value={message} onChange={handleChange} ></textarea>

                        </div>
                        <button className="submitButton" type="submit" onClick={handleOpen} disabled={!isValid}>{t('contactButton')}</button>
                    </form>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <h2 className="modalTitle">{t('modalTitle')}</h2>
                            <p className="modalConfirmation">{t('modalConfirmation')}</p>
                        </Box>
                    </Modal>
                </div>

                <div className="formRight">
                    <img className="formImage" src="src\assets\img\0-head.webp" alt="Iker Landeros Keynote Speaker" />
                </div>
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
