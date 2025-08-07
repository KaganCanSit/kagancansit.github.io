document.addEventListener('DOMContentLoaded', () => {
  const blogContainer = document.getElementById('blog_content_area');
  const paginationContainer = document.getElementById('pagination');

  if (!blogContainer || !paginationContainer) return;

  const cards = Array.from(blogContainer.querySelectorAll('.card'));
  const blogsPerPage = 10;
  const totalPages = Math.ceil(cards.length / blogsPerPage);

  const list = document.createElement('ul');
  list.classList.add('pagination', 'justify-content-center');
  paginationContainer.appendChild(list);

  function showPage(page) {
    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;

    cards.forEach((card, index) => {
      const wrapper = card.closest('.col-lg-6') || card.parentElement;
      wrapper.style.display = index >= start && index < end ? '' : 'none';
    });

    Array.from(list.children).forEach((li, index) => {
      if (index + 1 === page) {
        li.classList.add('active');
      } else {
        li.classList.remove('active');
      }
    });
  }

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    li.classList.add('page-item');

    const link = document.createElement('a');
    link.href = '#blog';
    link.textContent = i;
    link.classList.add('page-link');
    link.style.color = 'var(--text-light)';
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(i);
    });

    li.appendChild(link);
    list.appendChild(li);
  }

  showPage(1);
});