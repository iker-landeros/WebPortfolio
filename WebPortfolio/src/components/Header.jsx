import '../styles/Header.css'

const Header = () => {
    return (
        <section id="header">
        <div class="head-bg">
            <div class="headTop">
                <p class="slogan">Aspira e inspira</p>
                <div class="language">
                    <select name="language" class="language">
                        <option value="es">es</option>
                        <option value="en">en</option>
                    </select>
                </div>
            </div>
            
            <div class="headText">
                <h1>Iker Landeros</h1>
                <h2>Fundador, conferencista y educador</h2>
                <button class="knowMe">Con&oacute;ceme</button>
            </div>
        </div>
    </section>
    );
};

export default Header;