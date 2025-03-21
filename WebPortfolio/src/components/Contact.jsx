import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const form = useRef();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            <div className="inputLeft">
                                <h5>{t('contactName')}</h5>
                                <input type="text" placeholder='...' name="name" />
                                <h5>{t('contactEmail')}</h5>
                                <input type="email" placeholder='...' name="email" />
                            </div>
                            <div className="inputRight">
                                <h5>{t('contactMessage')}</h5>
                                <textarea placeholder='...' name="message" ></textarea>
                            </div>
                        </div>
                        <button className="submitButton" type="submit" onClick={handleOpen}>{t('contactButton')}</button>
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
