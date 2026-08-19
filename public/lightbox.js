const overlay = document.getElementById('lightbox-overlay');
const overlayImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');
const triggers = document.querySelectorAll('.lightbox-trigger');

let lastFocused = null;

function openLightbox(trigger) {
  const img = trigger.querySelector('img');
  if (!img || !overlay || !overlayImg) return;

  lastFocused = trigger;
  overlayImg.src = img.currentSrc || img.src;
  overlayImg.alt = img.alt || '';

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
  lastFocused?.focus();
}

triggers.forEach((trigger) => {
  trigger.addEventListener('click', () => openLightbox(trigger));
});

closeBtn?.addEventListener('click', closeLightbox);

overlay?.addEventListener('click', (event) => {
  if (event.target === overlay) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && overlay && !overlay.classList.contains('hidden')) {
    closeLightbox();
  }
});
