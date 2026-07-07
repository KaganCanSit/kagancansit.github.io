document.addEventListener('DOMContentLoaded', () => {
  const colorModeToggle = document.querySelector('.color-mode');
  const body = document.body;

  // Re-run the single theme-application function now that the toggle
  // icon exists in the DOM (it didn't yet when the blocking init script
  // in _layouts/default.html made its first call).
  window.applyStoredTheme?.();

  // Theme toggle
  colorModeToggle?.addEventListener('click', () => {
    const isDark = localStorage.getItem('dark-mode-state') === '1';
    localStorage.setItem('dark-mode-state', isDark ? '0' : '1');
    window.applyStoredTheme?.();
  });

  // Mobile Sidebar functionality
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    if (!mobileSidebar || !mobileMenuToggle) return;
    mobileSidebar.classList.add('active');
    mobileSidebar.setAttribute('aria-hidden', 'false');
    mobileMenuToggle.classList.add('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'true');
    body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    if (!mobileSidebar || !mobileMenuToggle) return;
    mobileSidebar.classList.remove('active');
    mobileSidebar.setAttribute('aria-hidden', 'true');
    mobileMenuToggle.classList.remove('active');
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('sidebar-open');
  }

  // Toggle sidebar
  mobileMenuToggle?.addEventListener('click', () => {
    if (mobileSidebar?.classList.contains('active')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  // Close sidebar
  sidebarClose?.addEventListener('click', closeSidebar);
  sidebarOverlay?.addEventListener('click', closeSidebar);

  // Close sidebar when clicking a link
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', () => {
      closeSidebar();
    });
  });

  // Close sidebar on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileSidebar?.classList.contains('active')) {
      closeSidebar();
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('.nav-link, .sidebar-link, .custom-btn-link').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const href = this.getAttribute('href');
      if (!href) return;

      const parsedUrl = new URL(href, window.location.origin);
      const isSamePage = parsedUrl.pathname === window.location.pathname;

      if (isSamePage && parsedUrl.hash && parsedUrl.hash.length > 1) {
        event.preventDefault();
        const el = document.querySelector(parsedUrl.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }
});
