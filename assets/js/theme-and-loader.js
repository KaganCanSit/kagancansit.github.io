document.addEventListener('DOMContentLoaded', () => {
  const colorModeIcon = document.querySelector('.color-mode-icon');
  const colorModeToggle = document.querySelector('.color-mode');
  const body = document.body;

  // Initialize dark mode
  if (localStorage.getItem('dark-mode-state') === '1') {
    colorModeIcon.classList.add('active');
    body.classList.add('dark-mode');
    setTheme();
  }
  setLoaderBackground();

  // Theme toggle
  colorModeToggle?.addEventListener('click', () => {
    colorModeIcon.classList.toggle('active');
    body.classList.toggle('dark-mode');
    setTheme();

    if (localStorage.getItem('dark-mode-state') !== null) {
      const temp = localStorage.getItem('dark-mode-state') === '1' ? '0' : '1';
      localStorage.setItem('dark-mode-state', temp);
    } else {
      localStorage.setItem('dark-mode-state', '1');
    }
  });

  // Mobile Sidebar functionality
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  function openSidebar() {
    mobileSidebar.classList.add('active');
    mobileMenuToggle.classList.add('active');
    body.classList.add('sidebar-open');
  }

  function closeSidebar() {
    mobileSidebar.classList.remove('active');
    mobileMenuToggle.classList.remove('active');
    body.classList.remove('sidebar-open');
  }

  // Toggle sidebar
  mobileMenuToggle?.addEventListener('click', () => {
    if (mobileSidebar.classList.contains('active')) {
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
    if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  // Old navbar toggle (for backwards compatibility)
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.getElementById('navbarNav');
  navbarToggler?.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('.nav-link, .sidebar-link, .custom-btn-link').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const target = this.getAttribute('href');
      if (target && target.startsWith('#') && target.length > 1) {
        event.preventDefault();
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (navbarNav) navbarNav.classList.remove('show');
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

function setTheme() {
  const body = document.body;
  const navbar = document.querySelector('.navbar, .modern-navbar');
  const texts = document.querySelectorAll('p, strong, em, blockquote');

  if (body.classList.contains('dark-mode')) {
    if (navbar) navbar.style.backgroundColor = 'var(--background-dark)';
    body.style.backgroundColor = 'var(--background-dark)';
    body.style.color = 'var(--text-dark)';
    texts.forEach(el => el.style.color = 'var(--text-dark)');
  } else {
    if (navbar) navbar.style.backgroundColor = '#fff';
    body.style.backgroundColor = 'var(--background-light)';
    body.style.color = 'var(--text-light)';
    texts.forEach(el => el.style.color = 'var(--text-light)');
  }
  setLoaderBackground();
}

function setLoaderBackground() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  if (document.body.classList.contains('dark-mode')) {
    loader.classList.remove('loader-light');
    loader.classList.add('loader-dark');
  } else {
    loader.classList.remove('loader-dark');
    loader.classList.add('loader-light');
  }
}