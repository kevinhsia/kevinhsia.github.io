(()=> {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  menuToggle.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggleClass('show');
  }
})();
