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

//close mobile menu when link clicked
function scrollBehaviorMenu() {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('burger-active');
}

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
