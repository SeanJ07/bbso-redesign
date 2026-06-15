// ===== BBSO Redesign — Mobile Navigation =====

(function() {
  const toggle = document.querySelector('.nav__toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.nav__link') : [];

  if (!toggle || !mobileMenu) return;

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', function() {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu when a link is clicked
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
      toggle.focus();
    }
  });

  // Close menu on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      closeMenu();
    }
  });
})();