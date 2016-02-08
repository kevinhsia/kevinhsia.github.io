'use strict';

console.log('loaded');
var menuToggle = document.getElementById('mobile-menu-toggle');
menuToggle.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(e) {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('show');
  if (navMenu.classList.contains('show')) {
    e.target.innerHTML = 'Close';
  } else {
    e.target.innerHTML = 'Menu';
  }
}