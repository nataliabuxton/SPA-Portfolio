import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Images");
    }

    async getHtml() {
        return `
        <!-- Skills -->
        
        
        <section class="skills-section" id="skills">
            <h2 class="section-title skills-text">SKILLS</h2>
            <span class="section-subtitle skills-subtxt">What am I good at?</span>
        </div>
        
        
            <div class="skills-container container grid">
                <div>
        
        <!-- Skills Section 1 -->
            <div class="skills-content skills-open">
                        <div class="skills-header">
                            <i class="uil uil-brain skills-icon"></i>
                        <div>
                        <h1 class="skills-titles">Frontend Developer</h1>
                        <span class="skills-subtitle">Under a Year</span>
                        </div>
        
                        <i class="uil uil-angle-right skills-arrow"></i>
                        </div>
                
                <div class="skills-list grid">
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">HTML</h3>
                            <span class="skills-number">85%</span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-html"></span>
                        </div>
                    </div>
        
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">CSS</h3>
                            <span class="skills-number">95%</span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-css"></span>
                        </div>
                    </div>
        
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">Javascript</h3>
                            <span class="skills-number">65%</span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-javascript"></span>
                        </div>
                        
                        <div class="skills-data">
                            <div class="skills-titles">
                                <h3 class="skills-name">React/Vue</h3>
                                <span class="skills-number">9%</span>
                            </div>
                            <div class="skills-bar">
                                <span class="skills-percentage skills-RV"></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <br>
        
            <!-- Skills Section 2 -->
            <div class="skills-content skills-close">
                        <div class="skills-header">
                            <i class="uil uil-palette skills-icon"></i>
                        <div>
                        <h1 class="skills-titles">Web Designer</h1>
                        <span class="skills-subtitle">Over 3 Years</span>
                        </div>
        
                        <i class="uil uil-angle-right skills-arrow"></i>
                        </div>
                
                <div class="skills-list grid">
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">User Interface</h3>
                            <span class="skills-number">88%</span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-ui"></span>
                        </div>
                    </div>
        
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">User Experience</h3>
                            <span class="skills-number">85%</span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-ux"></span>
                        </div>
                    </div>
        
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">Creation of Original Content</h3>
                            <span class="skills-number">92%</span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-design"></span>
                        </div>
                        
                        <div class="skills-data">
                            <div class="skills-titles">
                                <h3 class="skills-name">Figma/Canva/Balsamiq</h3>
                                <span class="skills-number">89%</span>
                            </div>
                            <div class="skills-bar">
                                <span class="skills-percentage skills-apps"></span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <br>
        
                <!-- Skills Section 3 -->
        
            <div class="skills-content skills-close">
                        <div class="skills-header">
                            <i class="uil uil-server-connection skills-icon"></i>
                        <div>
                        <h1 class="skills-titles">Future Study Routes</h1>
                        <span class="skills-subtitle"></span>
                    </div>
                    <i class="uil uil-angle-right skills-arrow"></i>
                    </div>
                
                <div class="skills-list grid">
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">AWS / Azure / GCP</h3>
                            <span class="skills-number"></span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-python"></span>
                        </div>
                    </div>
        
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">Node.JS</h3>
                            <span class="skills-number"></span>
                        </div>
                        <div class="skills-bar">
                            <span class="skills-percentage skills-php"></span>
                        </div>
                    </div>
        
                    <div class="skills-data">
                        <div class="skills-titles">
                            <h3 class="skills-name">PHP</h3>
                            <span class="skills-number"></span>
                        </div>
                        
                        <div class="skills-bar">
                            <span class="skills-percentage skills-node"></span>
                        </div>
                        
                        <div class="skills-data">
                            <div class="skills-titles">
                                <h3 class="skills-name">Vue / Angular</h3>
                                <span class="skills-number"></span>
                            </div>
                            <div class="skills-bar">
                                <span class="skills-percentage skills-aws"></span>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        
        </section>

        <hr class="hr-pager-2">

<!-- My Services -->

<section class="services-section section" id="services">
<h2 class="section-title">Services I Offer</h2>
<span class="section-subtitle">How can I help you?</span>

<div class="services-container container grid">

<!-- SERVICE 1 -->
<div class="services-content">
    <div>
    <i class="uil uil-window-grid services-icon"></i>
    <h3 class="services-title">UI/UX <br>Designer & Researcher</h3>
</div>

<span class="button button--flex button--small button--link services-button">
    View More
    <i class="uil uil-arrow-right button-icon"></i>
</span>


<div class="services-modal">
    <div class="services-modal-content">
        <h4 class="services-modal-title">UI/UX <br>Designer & Researcher</h4>
        <i class="uil uil-times services-modal-close"></i>



        <ul class="services-modal-services grid">
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will help gather data on your service users.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will help you build your web/app design based on the psychology of your users.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will create vision boards, wireframes and prototypes to show customers the best way to gain traction.</p>
            </li>
        </ul>
    </div>
</div>
</div>
<!-- SERVICE 2 -->
<div class="services-content">
    <div>
        <i class="uil uil-brackets-curly services-icon"></i>
    <h3 class="services-title">Front End <br> Development</h3>
</div>

<span class="button button--flex button--small button--link services-button">
    View More
    <i class="uil uil-arrow-right button-icon"></i>
</span>


<div class="services-modal">
    <div class="services-modal-content">
        <h4 class="services-modal-title">Front End <br> Developer</h4>
        <i class="uil uil-times services-modal-close"></i>



        <ul class="services-modal-services grid">
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will use the latest and best versions of tech in order to build your websites and apps.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will work in collaboration with other developers to improve use and function of your website and apps.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will use the tools I have to optimise running speed and troubleshoot as necessary.</p>
            </li>
        </ul>
    </div>
</div>
</div>
<!-- SERVICE 3 -->
<div class="services-content">
    <div>
        <i class="uil uil-server-network-alt services-icon"></i>
    <h3 class="services-title">Brand Marketing &<br> Development</h3>
</div>

<span class="button button--flex button--small button--link services-button">
    View More
    <i class="uil uil-arrow-right button-icon"></i>
</span>


<div class="services-modal">
    <div class="services-modal-content">
        <h4 class="services-modal-title">Brand Marketing & <br> Development</h4>
        <i class="uil uil-times services-modal-close"></i>



        <ul class="services-modal-services grid">
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will write you a branding design plan in order to maximise customer attraction.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will design your website and logo to fit your specific branding strategy to market products and services.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will use my skills to elevate your marketing strategy using research and collaboration.</p>
            </li>
        </ul>
    </div>
</div>
</div>
<!-- SERVICE 4 -->
<div class="services-content">
    <div>
        <i class="uil uil-image-check services-icon"></i>
    <h3 class="services-title">Website Creation &<br> Design</h3>
</div>

<span class="button button--flex button--small button--link services-button">
    View More
    <i class="uil uil-arrow-right button-icon"></i>
</span>


<div class="services-modal">
    <div class="services-modal-content">
        <h4 class="services-modal-title">Website Creation &<br> Design</h4>
        <i class="uil uil-times services-modal-close"></i>



        <ul class="services-modal-services grid">
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will design you a beautiful website to fit your brand.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will create multiple options for web-designs to give you choice.</p>
            </li>            
            <li class="services-modal-service">
                <i class="uil uil-check-circle services-modal-icon"></i>
                <p class="p-services">I will design your website in order to attract your ideal customer base.</p>
            </li>
        </ul>
    </div>
</div>
</div>

</div>
</section>
        
        `;
    }
}