// Añade el año en el footer
document.addEventListener('DOMContentLoaded',()=>{
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // cursor follower
  const cursor = document.getElementById('cursor');
  if(cursor){
    document.addEventListener('mousemove', (e)=>{
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // pequeños efectos sobre botones
    document.querySelectorAll('.btn').forEach(btn=>{
      btn.addEventListener('mouseenter', ()=>{cursor.style.width='36px'; cursor.style.height='36px'; cursor.style.background='linear-gradient(90deg,var(--accent1),var(--accent2))'});
      btn.addEventListener('mouseleave', ()=>{cursor.style.width='14px'; cursor.style.height='14px'; cursor.style.background='transparent'});
    });
  }

document.addEventListener('DOMContentLoaded', function () {
  const range = document.getElementById('avatar-size');
  if (!range) return;
  const key = 'avatarSize';
  const root = document.documentElement;
  const stored = localStorage.getItem(key);

  if (stored) {
    root.style.setProperty('--avatar-size', stored + 'px');
    range.value = stored;
  } else {
    const computed = parseInt(getComputedStyle(root).getPropertyValue('--avatar-size')) || 84;
    range.value = computed;
  }

  range.addEventListener('input', function (e) {
    root.style.setProperty('--avatar-size', e.target.value + 'px');
  });

  range.addEventListener('change', function (e) {
    localStorage.setItem(key, e.target.value);
  });
});

  // easter egg: click logo to toggle theme-ish effect
  const logo = document.querySelector('.logo');
  if(logo){
    logo.addEventListener('click', ()=>{
      document.body.classList.toggle('inverted');
      logo.animate([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:350});
    });
  }
  
  // Handle contact form by opening mailto: (simple client-side handler)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const message = formData.get('message') || '';
      const subject = encodeURIComponent('Contacto desde portfolio');
      const body = encodeURIComponent(`Nombre: ${name}%0AEmail: ${email}%0A%0A${message}`);
      // Open default mail client
      window.location.href = `mailto:tu@email.com?subject=${subject}&body=${body}`;
    });
  }
});
