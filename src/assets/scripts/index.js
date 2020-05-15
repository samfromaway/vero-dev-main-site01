//----Menu----//
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

const navSlide = () => {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('burger-active');
  });
};

navSlide();

//---- Observer ----//
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -200px 0px',
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

//---- Image Slide In ----//

document.querySelectorAll('.appearanim01').forEach((slider) => {
  appearOnScroll.observe(slider);
});

//---- Fade In ----//

document.querySelectorAll('.fadeinanim01').forEach((fade01) => {
  appearOnScroll.observe(fade01);
});

//----Menu Scroll----//
const scrollBehavior02 = 'smooth';

document.getElementById('cta-button').onclick = function scrollAboutMe() {
  document
    .getElementById('anchor-contact')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

document.getElementById(
  'nav-link-about-me'
).onclick = function scrollAboutMe() {
  document
    .getElementById('anchor-about-me')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

document.getElementById('nav-link-focus').onclick = function scrollWork() {
  document
    .getElementById('anchor-focus')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

document.getElementById('nav-link-videos').onclick = function scrollWork() {
  document
    .getElementById('anchor-videos')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

document.getElementById('nav-link-contact').onclick = function scrollContact() {
  document
    .getElementById('anchor-contact')
    .scrollIntoView({ behavior: scrollBehavior02 });
  scrollBehaviorMenu();
};

function scrollBehaviorMenu() {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('burger-active');
}

//----Arrow Click Scroll----//

document.getElementById('scroll-arrow').onclick = function scrollNext01() {
  document
    .getElementById('anchor-focus')
    .scrollIntoView({ behavior: scrollBehavior02 });
};

//----Slick Carousel----//

$(document).ready(function () {
  $('.videos01').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    nextArrow: $('.next2'),
    prevArrow: $('.prev2'),

    responsive: [
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
