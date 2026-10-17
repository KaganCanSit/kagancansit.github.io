// Theme toggle, mobile menu and page loader.
// window.applyTheme is defined in _layouts/default.html so the saved theme
// is applied before the first paint.

document.addEventListener('DOMContentLoaded', () => {
  // The toggle icon did not exist yet at first paint; sync it now.
  window.applyTheme();

  // Theme toggle (moon / sun button)
  document.querySelector('.color-mode').addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    try {
      localStorage.setItem('dark-mode-state', isDark ? '1' : '0');
    } catch {
      // Storage blocked by the browser: switch anyway, just don't remember it.
    }
    window.applyTheme(isDark);
  });

  // Mobile menu
  const toggle = document.getElementById('mobileMenuToggle');
  const sidebar = document.getElementById('mobileSidebar');

  function setMenuOpen(open) {
    sidebar.classList.toggle('active', open);
    sidebar.setAttribute('aria-hidden', String(!open));
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('sidebar-open', open);
  }

  toggle.addEventListener('click', () => setMenuOpen(!sidebar.classList.contains('active')));
  document.getElementById('sidebarClose').addEventListener('click', () => setMenuOpen(false));
  document.getElementById('sidebarOverlay').addEventListener('click', () => setMenuOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenuOpen(false);
  });
  // A menu link jumps to a section; close the menu so the page can scroll.
  document.querySelectorAll('.sidebar-link').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
});

// Hide the loading screen once all images and fonts have loaded.
window.addEventListener('load', () => {
  document.getElementById('loader')?.remove();
});
