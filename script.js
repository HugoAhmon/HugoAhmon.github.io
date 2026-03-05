/* ─────────────────────────────────────────
   script.js — Hugo Pacheco Portfolio
   ───────────────────────────────────────── */

// ─── LANGUAGE SWITCHER ───
let currentLang = 'pt';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

  // Atualiza todos os elementos com data-pt / data-en
  document.querySelectorAll('[data-pt]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (text) el.innerHTML = text;
  });

  // Atualiza estado ativo dos botões de idioma
  document.getElementById('langPT').classList.toggle('active', lang === 'pt');
  document.getElementById('langEN').classList.toggle('active', lang === 'en');
}

// ─── THEME TOGGLE ───
function toggleTheme() {
  document.body.classList.toggle('light');
  const btn = document.getElementById('themeToggle');
  btn.textContent = document.body.classList.contains('light') ? '🌙' : '☀';
}

// ─── SCROLL REVEAL ───
const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.section').forEach(section => {
  sectionObserver.observe(section);
});

// ─── SCROLL TO TOP ───
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  scrollToTopBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
