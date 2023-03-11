import Dashboard from "./views/home.js";
import Images from "./views/skillsandservices.js";
import Info from "./views/portfolio.js";
import Settings from "./views/contact.js";



const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/skills&services", view: Images },
        { path: "/portfolio", view: Info },
        { path: "/contact-me", view: Settings }

    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});


const navMenu = document.getElementById('navmenu-id'),
      navToggler = document.getElementById('navtoggle-id'),
      navCloser = document.getElementById('navclose-id');

// Show menu//

if(navToggler){
    navToggler.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navCloser){
    navCloser.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const navLinker = document.querySelectorAll('.nav-link')

function actionLink(){
    const navMenuClass = document.getElementById('navmenu-id')
    navMenuClass.classList.remove('show-menu')
}

navLinker.forEach(n => n.addEventListener('click', actionLink))

//skills//

const skillsContent = document.getElementsByClassName('skills-content'),
      skillsHeader = document.querySelectorAll('.skills-header')

    function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i = 0; i < skillsContent.length; i++){
            skillsContent[i].className = 'skills-content skills-close'
        }
        if (itemClass === 'skills-content skills-close'){
            this.parentNode.className = 'skills-content skills-open'
        }
    }

skillsHeader.forEach((element) =>{
    element.addEventListener('click',toggleSkills)
})

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification-active')
        })
        target.classList.add('qualification-active')

        tab.forEach(tab =>{
            tab.classlist.remove('qualification-active')
        }) 
        tab.classlist.add('qualification-active') 
    })
})

// Services Modal //

const modalViews = document.querySelectorAll('.services-modal'),
      modalBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')


      let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')

}

modalBtns.forEach((modalBtn, i)=> {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

let modalClose = function(modalClickClose){
    modalViews[modalClickClose].classList.remove('active-modal')
}

modalCloses.forEach((modalCloses,i) =>{
    modalCloses.addEventListener('click', () =>{
        modalClose(i)
    })
})

// Portfolio swiper//


let swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
           breakpoints:{
        568:{
            slidesPerView: 1,
        }
    }
});


function getData(form) {
    var formData = new FormData(form);
  
    // iterate through entries...
    for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
  }
  
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    getData(e.target);

  });

