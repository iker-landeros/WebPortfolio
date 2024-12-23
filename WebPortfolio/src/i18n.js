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

                // About
                aboutTitle: "Sin miedo al éxito, crack",
                aboutTextLine1: "¡Hola! Soy Iker, y comencé en el mundo del liderazgo y emprendimiento cuando apenas tenía 15 años. De un día a otro, me enamoré del impacto social y decidí que a eso me quería dedicar para siempre.",
                aboutTextLine2: "Soy programador, baterista y voluntario, pero sobre todo, ",
                aboutTextLine2Bold: "soy emprendedor",
                aboutTextLine3: "Me encanta trabajar con jóvenes y con empresas pequeñas, medianas y grandes. Mi más grande objetivo es ",
                aboutTextLine3Bold: "inspirar a un millón de personas a alcanzar sus sueños ",
                aboutTextLine3Continue: "con mi empresa, ",
                aboutTextLine3Bold2: "Generación INSPIRE",
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

                // About
                aboutTitle: "About me",
                aboutTextLine1: "Hello! I'm Iker, and I started in the world of leadership and entrepreneurship when I was just 15 years old. Overnight, I fell in love with social impact and decided that I wanted to dedicate myself to that forever.",
                aboutTextLine2: "I'm a programmer, drummer, and volunteer, but above all, ",
                aboutTextLine2Bold: "I'm an entrepreneur",
                aboutTextLine3: "I love working with young people and with small, medium, and large companies. My biggest goal is to ",
                aboutTextLine3Bold: "inspire a million people to reach their dreams ",
                aboutTextLine3Continue: "with my company, ",
                aboutTextLine3Bold2: "Generación INSPIRE",
            },
        },
    },
});

export default i18n;