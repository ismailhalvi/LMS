// ===============================
// Dark Mode
// ===============================

// On page load or when changing themes,
// best to add inline in <head> to avoid FOUC

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (
    !('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}


// ===============================
// Theme Toggle Icons
// ===============================

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


// Change the icons inside the button based on previous settings

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (
    !('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
) {
  themeToggleLightIcon.classList.remove('hidden');
} else {
  themeToggleDarkIcon.classList.remove('hidden');
}


var themeToggleBtn = document.getElementById('theme-toggle');


// ===============================
// Theme Toggle
// ===============================

themeToggleBtn.addEventListener('click', function () {

  // Toggle icons inside button
  themeToggleDarkIcon.classList.toggle('hidden');
  themeToggleLightIcon.classList.toggle('hidden');


  // If set via local storage previously
  if (localStorage.getItem('color-theme')) {

    if (localStorage.getItem('color-theme') === 'light') {

      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');

    } else {

      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');

    }

  // If NOT set via local storage previously
  } else {

    if (document.documentElement.classList.contains('dark')) {

      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');

    } else {

      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');

    }

  }

});


// ===============================
// ScrollReveal
// ===============================

// Hero content
// ScrollReveal().reveal('.hero-info', {
//   duration: 800,
//   origin: 'right',
//   distance: '100px',
//   reset: false
// });


// // Hero image
// ScrollReveal().reveal('.hero-img', {
//   duration: 800,
//   origin: 'left',
//   distance: '100px',
//   reset: false
// });


// ===============================
// Swiper
// ===============================

const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Pagination
  pagination: {
    el: '.swiper-pagination',
  },


  // Navigation arrows
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },


  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },


  // Responsive
  breakpoints: {

    // >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    // >= 570px
    570: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    // >= 786px
    786: {
      slidesPerView: 4,
      spaceBetween: 10
    }

  }

});