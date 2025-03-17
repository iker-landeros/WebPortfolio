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
                // Testimonies object
                testimonies: [
                    {
                        name: "Rafael Laja",
                        relationship: "Estudiante",
                        testimony: "Iker Landeros es un líder increíble. Su energía y creatividad me inspiraron a crear proyectos de arte con gran impacto, gracias a él me convertí en un gran Embajador Juvenil. #INSPIRE"
                    },
                    {
                        name: "Fernanda Román",
                        relationship: "Collaboradora",
                        testimony: "Colaborar con Iker fue muy gratificante, debido a su liderazgo y habilidad de trabajo en equipo."
                    },
                    {
                        name: "José Pablo Ramos",
                        relationship: "Estudiante",
                        testimony: "Iker es un gran líder y un gran emprendedor. Me apoyó durante muchos años a desarrollar mi mejor versión y confiar en que todos podemos ser agentes de cambio."
                    },
                    {
                        name: "Juan De Luna",
                        relationship: "Colaborador",
                        testimony: "Trabajar con Iker es una experiencia muy inspiradora y enriquecedora, sabe cómo hablar con las personas con respeto y educación, además de que siempre encuentra la forma de acompañar y guiar a su equipo para llegar a un objetivo."
                    },
                    {
                        name: "Antonella Gispert",
                        relationship: "Estudiante",
                        testimony: "He visto lo apasionado que es Iker por su trabajo, el ayudar a gente a fortalecer su liderazgo y dar todo de él por lo que quiere me ha inspirado a hacer lo mismo. Me inspiró a seguir aprendiendo y trabajando en mí y a soltarme cuando se trata de apoyar a la gente."
                    },
                    {
                        name: "Serena Amato",
                        relationship: "Colaboradora",
                        testimony: "En la Asamblea Juvenil de AFS, presencié el profesionalismo y compromiso de Iker con la ciudadanía global. Su impulso por el cambio positivo y su empatía realmente lo destacan."
                    },
                    {
                        name: "Daniela Castrejón",
                        relationship: "Estudiante",
                        testimony: "Pocas personas logran llevar su pasión y volverlo todo lo que hoy en día es INSPIRE. Iker y su maravilloso equipo mueven el corazón de las personas y los inspiran a conseguir sus sueños."
                    },
                    {
                        name: "Anónimo",
                        testimony: "Íker es una persona apasionada, su entusiasmo transforma cualquier espacio en un lugar lleno de motivación y buena energía."
                    }
                ],
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
                // Testimonies object
                testimonies: [
                    {
                        name: "Rafael Laja",
                        relationship: "Student",
                        testimony: "Iker Landeros is an incredible leader. His energy and creativity inspired me to create art projects with great impact, thanks to him I became a great Youth Ambassador. #INSPIRE"
                    },
                    {
                        name: "Fernanda Román",
                        relationship: "Collaborator",
                        testimony: "Collaborating with Iker was very rewarding, due to his leadership and teamwork skills."
                    },
                    {
                        name: "José Pablo Ramos",
                        relationship: "Student",
                        testimony: "Iker is a great leader and a great entrepreneur. He supported me for many years to develop my best version and trust that we can all be agents of change."
                    },
                    {
                        name: "Juan De Luna",
                        relationship: "Collaborator",
                        testimony: "Working with Iker is a very inspiring and enriching experience, he knows how to talk to people with respect and education, in addition to always finding a way to accompany and guide his team to reach an objective."
                    },
                    {
                        name: "Antonella Gispert",
                        relationship: "Student",
                        testimony: "I have seen how passionate Iker is about his work, helping people strengthen their leadership and giving everything he has for what he wants has inspired me to do the same. He inspired me to continue learning and working on myself and to let go when it comes to supporting people."
                    },
                    {
                        name: "Serena Amato",
                        relationship: "Collaborator",
                        testimony: "At the AFS Youth Assembly, I witnessed Iker’s professionalism and commitment to global citizenship. His drive for positive change and his empathy truly set him apart."
                    },
                    {
                        name: "Daniela Castrejón",
                        relationship: "Student",
                        testimony: "Few people manage to take their passion and turn it into everything that INSPIRE is today. Iker and his wonderful team move people's hearts and inspire them to achieve their dreams."
                    },
                    {
                        name: "Anonymous",
                        testimony: "Íker is a passionate person, his enthusiasm transforms any space into a place full of motivation and good energy."
                    }
                ],
            },
        },
    },
});

export default i18n;