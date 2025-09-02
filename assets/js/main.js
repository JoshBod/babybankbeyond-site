// Mobile nav, smooth scroll, reveal, and scroll spy
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (btn && nav) {
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
  }

  // Smooth scroll
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const y = target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
  });

  // Reveal-on-scroll
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries){
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, {rootMargin:'-10% 0px -10% 0px', threshold:0.01});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Safety fallback: reveal everything if observer fails
  try {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    }
  } catch(e){
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }
});
