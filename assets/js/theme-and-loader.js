document.addEventListener('DOMContentLoaded', () => {
  const colorModeIcon = document.querySelector('.color-mode-icon');
  const colorModeToggle = document.querySelector('.color-mode');
  const body = document.body;

  // Sync the toggle icon with the dark-mode class applied by the
  // blocking init script in the <body> (see _layouts/default.html),
  // which already ran before this deferred script.
  if (body.classList.contains('dark-mode')) {
    colorModeIcon?.classList.add('active');
  }

  // Theme toggle
  colorModeToggle?.addEventListener('click', () => {
    colorModeIcon?.classList.toggle('active');
    body.classList.toggle('dark-mode');

    const currentState = localStorage.getItem('dark-mode-state');
    const nextState = currentState === '1' ? '0' : '1';
    localStorage.setItem('dark-mode-state', nextState);
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
