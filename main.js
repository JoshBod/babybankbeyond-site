// Accessible mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  const mq = window.matchMedia('(max-width: 840px)');
  const sync = () => {
    if (mq.matches){
      btn.style.display = 'inline-block';
      nav.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    } else {
      btn.style.display = 'none';
      nav.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    }
  };
  sync();
  mq.addEventListener('change', sync);
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    nav.hidden = open;
  });
});

// Smooth scroll for on-page links with header/section offset
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  const y = target.getBoundingClientRect().top + window.scrollY - 80; // header + section-nav
  window.scrollTo({ top: y, behavior: 'smooth' });
});
