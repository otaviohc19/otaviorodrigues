const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-nav');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');

function closeMenu() {
  menu?.classList.add('hidden');
  menu?.classList.remove('flex');
  iconOpen?.classList.remove('hidden');
  iconClose?.classList.add('hidden');
  toggle?.setAttribute('aria-expanded', 'false');
}

toggle?.addEventListener('click', () => {
  const isOpen = menu?.classList.contains('flex');
  menu?.classList.toggle('hidden');
  menu?.classList.toggle('flex');
  iconOpen?.classList.toggle('hidden');
  iconClose?.classList.toggle('hidden');
  toggle.setAttribute('aria-expanded', String(!isOpen));
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});
