import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact Me");
    }

    async getHtml() {
        return `
        <!-- CONTACT ME -->


        <section class="contact-container contact section" id="contact">
            <h2 class="section-title">CONTACT ME</h2>
            <span class="section-subtitle"></span>
        
        <div class="contact-container container">
            <div>
                <div class="contact-info">
                    <i class="uil uil-incoming-call contact-icon"></i>
        
                    <div>
                        <h3 class="contact-title">CALL ME:</h3>
                        <SPAN class="contact-subtitle">+44 7934505774</SPAN>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="uil uil-at contact-icon"></i>
        
                    <div>
                        <h3 class="contact-title">EMAIL ME:</h3>
                        <SPAN class="contact-subtitle">nataliabuxton1@hotmail.com</SPAN>
                    </div>
                </div>
                <div class="contact-info">
                    <i class="uil uil-location-point contact-icon"></i>
        
                    <div>
                        <h3 class="contact-title">LOCATION:</h3>
                        <SPAN class="contact-subtitle">Oxfordshire, Vale of White Horse</SPAN>
                    </div>
                </div>
                <div class="contact-button submit">
                    <a href="mailto:nataliabuxton1@gmail.com"  class="button button--white contact-label">
                        SEND ME A MESSAGE  
                        <i class="uil uil-upload-alt button-message-icon"></i>
                    </a>
                </div>
                </div>
           
        </section>
        `;
    }
}