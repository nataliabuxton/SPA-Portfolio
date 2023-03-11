import AbstractView from "./AbstractView.js";
import { u } from '../lib.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Portfolio");
    }

    async getHtml() {
        return `
        <!-- Portfolio -->
        <section class="portfolio section portfolio-section container swiper-container swiper-portfolio" id="portfolio">
            <h2 class="section-title">EXAMPLES OF MY WEB DESIGN PORTFOLIO</h2>
            <br>

        <div class="swiper mySwiper">
            <div class="swiper-wrapper">

        <!-- PORTFOLIO 1 -->
              <div class="swiper-slide portfolio-content grid">
                    <img src="assets/imgs/portfolio1.png" alt="" class="portfolio-img">
                    <div class="portfolio-data">
                        <h3 class="portfolio-title">Modern & Earthy</h3>
                        <p class="portfolio-description">A classy frontpage created for a hotel.</p>
                        <a href="https://github.com/nataliabuxton/Web-Design-Wireframes" class="button button--flex button--small portfolio-button">
                            See More
                            <i class="uil uil-github button-icon"></i>
                        </a>
                    </div>
              </div>

        <!-- PORTFOLIO 2 -->

              <div class="swiper-slide  portfolio-content grid ">
                <img src="assets/imgs/portfolio2.png" alt="" class="portfolio-img">

                <div class="portfolio-data">
                    <h3 class="portfolio-title">Brand & Bold</h3>
                    <p class="portfolio-description">A colourful, bold and beautiful record label site & branding.</p>
                    <a href="https://github.com/nataliabuxton/Web-Design-Wireframes" class="button button--flex button--small portfolio-button">
                    See More
                    <i class="uil uil-github button-icon"></i>            </a>
                </div>
              </div>

        <!-- PORTFOLIO 3 -->

              <div class="swiper-slide portfolio-content grid">
                <img src="assets/imgs/portfolio3.png" alt="" class="portfolio-img">

                <div class="portfolio-data">
                    <h3 class="portfolio-title">Light & Minimal</h3>
                    <p class="portfolio-description">A delicate frontpage for a private mental health service.</p>
                    <a href="https://github.com/nataliabuxton/Web-Design-Wireframes" class="button button--flex button--small portfolio-button">
                        See More
                        <i class="uil uil-github button-icon"></i>            </a>
                </div>
              </div>
        </div>
        <br>
        <div class="pag swiper-pagination"></div>

        </section>

        <hr class="hr-pager-2">

        <!-- LET ME DESIGN YOUR WEBSITE -->
        <section class="project project-section project-container section">
            <div class="project-bg container grid">

                <div class="project-data">
                    <h2 class="project-title">WHAT I'M CURRENTLY <BR> LOOKING FOR..</h2>
                    <p class="project-description">I am currently looking for a role as a Junior Frontend Developer or Junior Software Engineer within a collaborative, exciting environment. The most important thing for me is having the ability to improve my skills while contributing to a solid development team. <br>
                    I idealise working on a system that I can be passionate about, so I can put my knowledge to good use and see it in action!</p>
                    <a href="#contact" class="button button--flex button--white">
                        Contact
                        <i class="uil uil-message project-icon button-icon"></i>
                    </a>
                </div>

                <div class="project-data">
                <img src="static/css/imgs/laptop (1).png" alt="" class="project-img">
            </div>
            </div>
        </section>

        <hr class="hr-pager-1">
        `;
    }
}
