// Añade el año en el footer
document.addEventListener('DOMContentLoaded', () => {
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;

  // cursor follower
  const cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // pequeños efectos sobre botones
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => { cursor.style.width = '36px'; cursor.style.height = '36px'; cursor.style.background = 'linear-gradient(90deg,var(--accent1),var(--accent2))' });
      btn.addEventListener('mouseleave', () => { cursor.style.width = '14px'; cursor.style.height = '14px'; cursor.style.background = 'transparent' });
    });
  }

  // Scroll Reveal (Simple version)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.style.opacity = 1;
    })
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .hero').forEach(el => {
    el.style.opacity = 0;
    el.style.transition = 'opacity 0.6s ease';
    observer.observe(el);
  });

  // easter egg: click logo to toggle theme-ish effect
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', () => {
      document.body.classList.toggle('inverted');
      logo.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }], { duration: 350 });
    });
  }

  // Handle contact form by opening mailto: (simple client-side handler)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const message = formData.get('message') || '';
      const subject = encodeURIComponent('Contacto desde portfolio');
      const body = encodeURIComponent(`Nombre: ${name}%0AEmail: ${email}%0A%0A${message}`);
      // Open default mail client
      window.location.href = `mailto:david.jimenezcastro61@outlook.es?subject=${subject}&body=${body}`;
    });
  }
});
