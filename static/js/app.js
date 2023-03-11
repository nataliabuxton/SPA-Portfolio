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

// Testimonial//

//   let swiperTestimonial = new Swiper(".testimonial-container", {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48, 

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//     },
//     breakpoints:{
//         568:{
//             slidesPerView: 2,
//         }
//     }
//   });

const  formData = getElementById('contact-content')


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


  const sections = document.querySelectorAll('.section[id]')

  function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight =current.offsetHeight
        const sectionTop = current.offsetTop - 0;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a [href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a [href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
  }

//   scrolling// 

  window.addEventListener('scroll', scrollActive),



  function scrollHeader(){
    const nav = document.getElementById('header')

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
  }

  window.addEventListener('scroll', scrollHeader)


//   showscroll//

function scrollUP(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classlist.add('show-scroll'); else scrollUp.classlist.remove('show-scroll')
}



// dark theme//


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
