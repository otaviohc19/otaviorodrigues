const overlay = document.getElementById('lightbox-overlay');
const overlayImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
const triggers = document.querySelectorAll('.lightbox-trigger');

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.15;

let lastFocused = null;
let scale = 1;

function applyScale() {
  if (!overlayImg) return;
  overlayImg.style.transform = `scale(${scale})`;
  overlayImg.style.cursor = scale > MIN_SCALE ? 'zoom-out' : 'zoom-in';
}

function resetZoom() {
  scale = 1;
  applyScale();
}

function openLightbox(trigger) {
  const img = trigger.querySelector('img');
  if (!img || !overlay || !overlayImg) return;

  lastFocused = trigger;
  overlayImg.src = img.currentSrc || img.src;
  overlayImg.alt = img.alt || '';
  resetZoom();

  overlay.classList.remove('hidden');
  overlay.classList.add('flex');
  overlay.setAttribute('aria-hidden', 'false');
  document.documentElement.style.overflow = 'hidden';
  closeBtn?.focus();
}

function closeLightbox() {
  if (!overlay) return;
  overlay.classList.add('hidden');
  overlay.classList.remove('flex');
  overlay.setAttribute('aria-hidden', 'true');
  document.documentElement.style.overflow = '';
  if (overlayImg) overlayImg.src = '';
  resetZoom();
  lastFocused?.focus();
}

triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => openLightbox(trigger));
});

closeBtn?.addEventListener('click', closeLightbox);

overlay?.addEventListener('click', (event) => {
  if (event.target === overlay) closeLightbox();
});

overlay?.addEventListener(
  'wheel',
  (event) => {
    if (!overlay || overlay.classList.contains('hidden')) return;
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    scale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale + direction * ZOOM_STEP));
    applyScale();
  },
  { passive: false },
);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && overlay && !overlay.classList.contains('hidden')) {
    closeLightbox();
  }
});
