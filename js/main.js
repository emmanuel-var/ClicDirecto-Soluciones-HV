/* ============================================================
   ClicDirecto Soluciones HV — main.js (Vanilla JS)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. AOS (Animate On Scroll) ---------- */
  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }

  /* ---------- 2. Header sticky con glassmorphism al hacer scroll ---------- */
  const header = document.getElementById('header');
  const HEADER_SCROLLED_CLASSES = [
    'bg-white/80', 'backdrop-blur-xl', 'shadow-soft', 'border-b', 'border-slate-100',
  ];
  const onScroll = () => {
    const scrolled = window.scrollY > 10;
    header.classList.toggle('bg-white/80', scrolled);
    header.classList.toggle('backdrop-blur-xl', scrolled);
    header.classList.toggle('shadow-soft', scrolled);
    header.classList.toggle('border-b', scrolled);
    header.classList.toggle('border-slate-100', scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 3. Menú móvil (hamburguesa) ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const iconMenuOpen = document.getElementById('iconMenuOpen');
  const iconMenuClose = document.getElementById('iconMenuClose');

  const setNavOpen = (isOpen) => {
    navMenu.classList.toggle('translate-x-full', !isOpen);
    navMenu.classList.toggle('translate-x-0', isOpen);
    navMenu.classList.toggle('shadow-soft-lg', isOpen);
    iconMenuOpen.classList.toggle('hidden', isOpen);
    iconMenuClose.classList.toggle('hidden', !isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('translate-x-full');
    setNavOpen(isOpen);
  });

  // Cierra el menú al hacer clic en un enlace
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNavOpen(false));
  });

  /* ---------- 4. Resaltar enlace activo según la sección visible ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === '#' + entry.target.id
              );
            });
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- 5. Año dinámico en el footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
