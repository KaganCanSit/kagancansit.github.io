document.addEventListener('DOMContentLoaded', () => {
  const colorModeIcon = document.querySelector('.color-mode-icon');
  const colorModeToggle = document.querySelector('.color-mode');
  const body = document.body;

  if (localStorage.getItem('dark-mode-state') === '1') {
    colorModeIcon.classList.add('active');
    body.classList.add('dark-mode');
    setTheme();
  }
  setLoaderBackground();

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

  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.getElementById('navbarNav');
  navbarToggler?.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
  });

  document.querySelectorAll('.nav-link, .custom-btn-link').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
      const target = this.getAttribute('href');
      if (target && target.startsWith('#') && target.length > 1) {
        event.preventDefault();
        const el = document.querySelector(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        navbarNav.classList.remove('show');
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
  const navbar = document.querySelector('.navbar');
  const texts = document.querySelectorAll('p, strong, em, blockquote');

  if (body.classList.contains('dark-mode')) {
    navbar.style.backgroundColor = 'var(--background-dark)';
    body.style.backgroundColor = 'var(--background-dark)';
    body.style.color = 'var(--text-dark)';
    texts.forEach(el => el.style.color = 'var(--text-dark)');
  } else {
    navbar.style.backgroundColor = '#fff';
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