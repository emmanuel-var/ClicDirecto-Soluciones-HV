/* ============================================================
   ClicDirecto Soluciones HV — main.js (Vanilla JS)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- 1. Header sticky con sombra al hacer scroll ---------- */
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('header--scrolled', window.scrollY > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 2. Menú móvil (hamburguesa) ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Cierra el menú al hacer clic en un enlace
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- 3. Botón flotante multicanal ---------- */
  const fab = document.getElementById('fab');
  const fabBtn = document.getElementById('fabBtn');
  const fabMenu = document.getElementById('fabMenu');

  fabBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = fab.classList.toggle('open');
    fabBtn.setAttribute('aria-expanded', String(isOpen));
    fabMenu.setAttribute('aria-hidden', String(!isOpen));
  });

  // Cierra el menú flotante al hacer clic fuera o presionar Escape
  document.addEventListener('click', (e) => {
    if (fab.classList.contains('open') && !fab.contains(e.target)) {
      fab.classList.remove('open');
      fabBtn.setAttribute('aria-expanded', 'false');
      fabMenu.setAttribute('aria-hidden', 'true');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fab.classList.contains('open')) {
      fab.classList.remove('open');
      fabBtn.setAttribute('aria-expanded', 'false');
      fabMenu.setAttribute('aria-hidden', 'true');
    }
  });

  /* ---------- 4. Animaciones de entrada (IntersectionObserver) ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- 5. Resaltar enlace activo según la sección visible ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
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

  /* ---------- 6. Año dinámico en el footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
