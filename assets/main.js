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

  // Scroll spy
  const pills = Array.from(document.querySelectorAll('.section-nav a[href^="#"]'));
  const sections = pills.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      const link = pills.find(a => a.getAttribute('href') === `#${id}`);
      if (!link) return;
      if (entry.isIntersecting){
        pills.forEach(p => { p.classList.remove('is-active'); p.removeAttribute('aria-current'); });
        link.classList.add('is-active');
        link.setAttribute('aria-current','true');
      }
    });
  }, {rootMargin:'-35% 0px -55% 0px', threshold:0.01});
  sections.forEach(sec => spy.observe(sec));
});
