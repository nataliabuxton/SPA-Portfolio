import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <main class="main">
        <!-- Hi I'm Natalia (Section) -->
                <div class="home-data">
                    <h1 class="home-title">Hi, I'm Natalia</h1>
                    <h3 class="home-subtitle">A Frontend Developer</h3>
                    <p class="home-description">Welcome to my Web-Folio! <br> I am a frontend developer, web developer and software engineer in training!
                <div class="home-button-container">
                <a href="#contact" class="button home-button button--flex">
                    Contact Me 
                    <i class="uil uil-message button-icon"></i>
                </a>
                </div>
    
            </div>
            </div>
    </section>
    
        <!-- About Me -->
        <hr class="hr-pager-3">
    
        <section class="about-section" id="about">
        <h2 class="section-title about-me">ABOUT ME</h2>
        <span class="section-subtitle intro-text">Who am I?</span>
    
    
        <div class="about-container container grid">
            <img src="static/css/imgs/IMG_3701.jpg" alt="" class="about-img">
    
            <div class="about-data">
                <p class="about-description">After starting my journey into frontend development after making the decision to venture into tech, I found my love for design, UX/UI, software and app/web development. I started my journey with HTML, CSS & Javascript in August. However I have actually been designing for many years! I have finally found somewhere to put my passion for design and creation, along side my love for tech and thats when I decided to venture into programming.
                </p>
                <p class="about-description">I have a great love of psychology, this also lead me to study at home UX / UI design,  and I have a love for creating products and websites ideal for customers to use. Using my experience with creative design, I can make seamless websites and application designs with the user in mind.
                </p>
           
    
            <div class="about-info">
                <div class="about-info-container">
                    <span class="about-info-title">8+</span>
                    <span class="about-info-name"> Years <br>In <br> Art & Design</span>
                </div>
                <div class="about-info-container">
                    <span class="about-info-title">5+</span>
                    <span class="about-info-name"> Years <br> In<br> Tech </span>
                </div>
                <div class="about-info-container">
                    <span class="about-info-title">1+</span>
                    <span class="about-info-name"> Year <br>In <br> Programming  </span>
                </div>
                </div>        
    
    
                <div class="about-buttons">
                    <a download="" href="Resume (4).pdf" class="button button--flex">Download CV <i class="uil uil-download-alt button-icon"></i></a>
                    
                </div>
        </div>
        </div>
    
    </section>
    <hr class="hr-pager-1">
        
        `;
    }
}