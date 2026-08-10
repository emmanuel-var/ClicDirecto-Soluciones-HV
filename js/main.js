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

  /* ---------- 2. Header: sombra al hacer scroll ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    const nav = header.querySelector('nav');
    nav.classList.toggle('shadow-glow', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 3. Menú móvil (dropdown bajo la píldora) ---------- */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const iconMenuOpen = document.getElementById('iconMenuOpen');
  const iconMenuClose = document.getElementById('iconMenuClose');

  const setNavOpen = (isOpen) => {
    navMenu.classList.toggle('opacity-0', !isOpen);
    navMenu.classList.toggle('scale-95', !isOpen);
    navMenu.classList.toggle('pointer-events-none', !isOpen);
    navMenu.classList.toggle('opacity-100', isOpen);
    navMenu.classList.toggle('scale-100', isOpen);
    navMenu.classList.toggle('pointer-events-auto', isOpen);
    iconMenuOpen.classList.toggle('hidden', isOpen);
    iconMenuClose.classList.toggle('hidden', !isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  };

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('opacity-100');
    setNavOpen(!isOpen);
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setNavOpen(false));
  });

  document.addEventListener('click', (e) => {
    if (!header.contains(e.target)) setNavOpen(false);
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

  /* ---------- 5. Contador animado de estadísticas del hero ---------- */
  const counters = document.querySelectorAll('[data-count]');
  // (Reservado para futuras estadísticas numéricas puras; actualmente los
  // valores del hero incluyen símbolos como % y / por lo que se muestran fijos.)

  /* ---------- 6. Formulario de contacto → WhatsApp ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('cf-nombre').value.trim();
      const contacto = document.getElementById('cf-contacto').value.trim();
      const asunto = document.getElementById('cf-asunto').value.trim();
      const mensaje = document.getElementById('cf-mensaje').value.trim();

      const partes = [
        `Hola, soy ${nombre}.`,
        asunto ? `Asunto: ${asunto}.` : '',
        mensaje ? `Mensaje: ${mensaje}` : '',
        contacto ? `Mi contacto: ${contacto}` : '',
      ].filter(Boolean);

      const texto = encodeURIComponent(partes.join(' '));
      window.open(`https://wa.me/525610853003?text=${texto}`, '_blank', 'noopener');
    });
  }

  /* ---------- 7. Año dinámico en el footer ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
