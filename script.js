// Progress bar
const prog = document.getElementById('prog');
const hdr  = document.getElementById('hdr');
const hbg  = document.getElementById('hbg');
const drw  = document.getElementById('drawer');

window.addEventListener('scroll', () => {
  const h   = document.documentElement;
  const pct = (h.scrollTop || document.body.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  prog.style.width = pct + '%';
  hdr.classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger menu
hbg.addEventListener('click', () => {
  hbg.classList.toggle('open');
  drw.classList.toggle('open');
});
drw.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    hbg.classList.remove('open');
    drw.classList.remove('open');
  }
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.r').forEach(el => io.observe(el));