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

                // Methodology
                methodologyTitle: "Mi metodología de impacto",
                valueDreams: "Sueños",
                valueStart: "Comienzo",
                valueTrust: "Confianza",
                valueInspiration: "Inspiración",
                valueLove: "Amor",
                valuePassion: "Pasión",
                valueAspiration: "Aspiración",
                valueGrowth: "Crecimiento",
                valueFreedom: "Libertad",
                valueLearn: "Aprender",
                valueEducation: "Educación",
                valueOpenness: "Apertura",
                valueInnovation: "Innovación",
                valueCommitment: "Compromiso",
                valueEmpathy: "Empatía",
                valueGenerosity: "Generosidad",
                valuePerseverance: "Perseverancia",
                valueAction: "Acción",
                valueGratitude: "Gratitud",
                valueImpact: "Impacto",
                valueCollaboration: "Colaboración",

                // Impact
                impactTitle: "Impacto en números",
                peopleInKeynotes: "Personas impactadas en conferencias",
                trainingSpaces: "Espacios de capacitación liderados",
                educationalContent: "Minutos de contenido educativo creado",
                annualImpacts: "Impactos anuales en redes sociales",
                impactProjects: "Emprendimientos y proyectos de impacto creados",
                logoSliderTitle: "Han confiado en mí:",

                // Testimonies
                testimonySlider: "Esto dicen de mí:",

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

                // Methodology
                methodologyTitle: "My impact methodology",
                valueDreams: "Dreams",
                valueStart: "Start",
                valueTrust: "Trust",
                valueInspiration: "Inspiration",
                valueLove: "Love",
                valuePassion: "Passion",
                valueAspiration: "Aspiration",
                valueGrowth: "Growth",
                valueFreedom: "Freedom",
                valueLearn: "Learn",
                valueEducation: "Education",
                valueOpenness: "Openness",
                valueInnovation: "Innovation",
                valueCommitment: "Commitment",
                valueEmpathy: "Empathy",
                valueGenerosity: "Generosity",
                valuePerseverance: "Perseverance",
                valueAction: "Action",
                valueGratitude: "Gratitude",
                valueImpact: "Impact",
                valueCollaboration: "Collaboration",

                // Impact
                impactTitle: "Impact in numbers",
                peopleInKeynotes: "People impacted in keynotes",
                trainingSpaces: "Training spaces led",
                educationalContent: "Minutes of educational content created",
                annualImpacts: "Annual impacts on social media",
                impactProjects: "Impactful ventures and projects created",

                // LogoSlider
                logoSliderTitle: "Impact partners:",

                // Testimonies
                testimonySlider: "Testimonies:",
            },
        },
    },
});

export default i18n;