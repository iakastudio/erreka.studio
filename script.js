// =====================
// NAV MOBILE
// =====================
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const toggle = document.querySelector('.nav-toggle');
  links.classList.toggle('open');
  toggle.classList.toggle('is-open');
}

// Ferme le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
    document.querySelector('.nav-toggle').classList.remove('is-open');
  });
});

// =====================
// NAV — scroll effect
// =====================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (!nav) return;
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(242,239,233,0.95)';
    nav.style.backdropFilter = 'blur(8px)';
  } else {
    nav.style.background = '';
    nav.style.backdropFilter = '';
  }
});

// =====================
// HERO SLIDESHOW
// =====================
(function () {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length < 2) return;
  let current = 0;
  slides[0].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 5500); // 4s visible + 1.5s transition
})();

// =====================
// LIGHTBOX
// =====================
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  if (!lb || !img) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  lb.focus();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

// Accessibilité : Entrée sur masonry-item
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('masonry-item')) {
    const img = e.target.querySelector('img');
    if (img) openLightbox(img.src);
  }
});

// =====================
// PROTECTION IMAGES
// =====================
document.addEventListener('contextmenu', (e) => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});


// =====================
// PRE-SELECT depuis URL param
// ex: contact.html?type=surf ou ?type=tirage
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const select = document.getElementById('type');
  if (type && select) {
    select.value = type;
  }
});
