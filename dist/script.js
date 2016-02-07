'use strict';

(function () {
  var menuToggle = document.getElementById('mobile-menu-toggle');
  menuToggle.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggleClass('show');
  }
})();