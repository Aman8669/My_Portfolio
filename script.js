const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = '☰';
}));

document.querySelector('#themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  document.querySelector('#themeToggle').textContent = light ? '☀' : '◐';
  document.querySelector('meta[name="theme-color"]').content = light ? '#f5f6f2' : '#080b12';
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.section-heading, .project-card, .about-layout, .stack-card, .contact-inner').forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(i % 4) * 70}ms`;
  observer.observe(el);
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', event => {
  if (glow && window.matchMedia('(pointer:fine)').matches) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }
}, { passive: true });

document.querySelector('#year').textContent = new Date().getFullYear();
