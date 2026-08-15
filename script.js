document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) sidebar.classList.remove('menu-open');
  });
});

const sections = [...document.querySelectorAll('#top, #works, #gallery, #about')];
const navLinks = [...document.querySelectorAll('.nav a')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id || 'top';
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

sections.forEach((section) => observer.observe(section));



// Gallery modal preview with next/previous navigation
(() => {
  const modal = document.getElementById('galleryModal');
  if (!modal) return;

  const modalImage = document.getElementById('galleryModalImage');
  const modalTitle = document.getElementById('galleryModalTitle');
  const modalLabel = document.getElementById('galleryModalLabel');
  const closeButton = modal.querySelector('.gallery-modal-close');
  const prevButton = modal.querySelector('.gallery-modal-prev');
  const nextButton = modal.querySelector('.gallery-modal-next');
  const cards = Array.from(document.querySelectorAll('.gallery-card'));
  let currentIndex = 0;

  const render = () => {
    const card = cards[currentIndex];
    if (!card) return;

    const full = card.dataset.full;
    const title = card.dataset.title || '';
    const label = card.dataset.label || '';

    modalImage.src = full;
    modalImage.alt = title;
    modalTitle.textContent = title;
    modalLabel.textContent = label;
  };

  const openModal = (card) => {
    currentIndex = Math.max(0, cards.indexOf(card));
    render();
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('gallery-modal-open');
  };

  const closeModal = () => {
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('gallery-modal-open');
    modalImage.src = '';
  };

  const move = (step) => {
    if (!cards.length) return;
    currentIndex = (currentIndex + step + cards.length) % cards.length;
    render();
  };

  cards.forEach((card) => {
    card.addEventListener('click', () => openModal(card));
  });

  closeButton?.addEventListener('click', closeModal);
  prevButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    move(-1);
  });
  nextButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    move(1);
  });

  modal.addEventListener('click', (event) => {
    if (event.target?.dataset?.close === 'true') closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (modal.getAttribute('aria-hidden') !== 'false') return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });
})();

