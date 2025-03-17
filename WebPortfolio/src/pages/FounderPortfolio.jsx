import Header from '../components/Header';
import About from '../components/About';
import Methodology from '../components/Methodology';
import Impact from '../components/Impact';
import LogoSlider from '../components/LogoSlider';
import Experiences from '../components/Experiences';
import Testimonies from '../components/Testimonies';
import Keynote from '../components/Keynote';
import Contact from '../components/Contact';

const FounderPortfolio = () => {
    return (
        <>
            <Header />
            <About />
            <Methodology />
            <Impact />
            <LogoSlider />
            <Experiences />
            {/* <Testimonies /> --> No se agregará hasta estar arreglado */}
            <Keynote />
            <Contact />
        </>
    );
}

export default FounderPortfolio;