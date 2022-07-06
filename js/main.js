// Menu Toggle
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

if (hamburger) {
    hamburger.addEventListener('click', () => { 
        navigation.classList.toggle('navigation-show');
    })
}

// Menu close on link click 
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navigation.classList.remove('navigation-show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Initialize Swiper
let swiperPopular = new Swiper(".popular-container", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 'auto',
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },

        400: {
            slidesPerView: 1.5,
        },

        500: {
            slidesPerView: 1.7,
        },

        600: {
            slidesPerView: 1.9,
        },

        650: {
            slidesPerView: 2.2,
        },

        700: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 3,
        },

        900: {
            slidesPerView: 3,
        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 15,
        }
    }
});

// Link active featured
const linkFeatured = document.querySelectorAll('.filter-button');

function activeFeatured() {
  linkFeatured.forEach(i => i.classList.remove('featured-active'));
  this.classList.add('featured-active');
}

linkFeatured.forEach(i => i.addEventListener('click', activeFeatured));

// Mixitup Filter 
let mixerFeatured = mixitup('.featured-content', {
  selectors: {
      target: '.featured-card',
  },
  animation: {
      duration: 300,
  }
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 2500,
    delay: 300,
});

sr.reveal('.logo-header, .hamburger, .hero-title, .hero-subtitle, .hero-image, .popular-container');
sr.reveal('.hero-paragraph', {delay: 300});
sr.reveal('.specs', {delay: 500, interval: 100, origin: 'bottom'});
sr.reveal('.hero-button', {delay: 300, origin: 'bottom'})
sr.reveal('.about-group, .about-text, .features-card-1, .features-card-2, .features-card-3, .featured-content, .offer-text', {origin: 'left'});
sr.reveal('.features-image, .offer-image', {origin: 'bottom'});
sr.reveal('.features-map', {delay: 400, origin: 'top'});
sr.reveal('.features-card, .logos-content, .footer-content', {interval: 200});







