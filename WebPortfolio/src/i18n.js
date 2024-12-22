import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "es",
    fallbackLng: "en",
    resources: {
        es: {
            translation: {
                // Web Portfolio
                // Header
                slogan: "Aspira e inspira",
                ikerTitle: "Fundador, conferencista y educador",
                knowMe: "Conóceme",
                codePortfolio: ">>> Conoce mi lado programador",
            },
        },
        en: {
            translation: {
                // Web Portfolio
                // Header
                slogan: "Aspire and inspire",
                ikerTitle: "Founder, speaker, and educator",
                knowMe: "Get to know me",
                codePortfolio: ">>> Check out my developer side",
            },
        },
    },
});

export default i18n;