import '../styles/Header.css'

const Header = () => {
    return (
        <section id="header">
        <div class="head-bg">
            <div class="headTop">
                <p class="slogan">Aspira e inspira</p>
                <div class="language">
                    <div class="current-language" id="currentLanguage">
                        <img src="src/assets/img/0-flagMX.svg" alt="ES" class="flag"/>
                        <span>es</span>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="language-options" id="languageOptions">
                        <div class="language-option" data-lang="EN">
                            <img src="src/assets/img/0-flagUSA.svg" alt="EN" class="flag"/>
                            <span>es</span>
                        </div>
                    </div>
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