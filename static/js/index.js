(() => {
  'use strict';

  // Fill in these URLs to enable the corresponding header buttons.
  // Leave a value empty to keep that button in its pending state.
  const projectLinks = {
    paper: 'static/pdfs/paper.pdf',
    github: '',
    arxiv: '',
  };

  document.querySelectorAll('[data-resource]').forEach((link) => {
    const url = projectLinks[link.dataset.resource];
    if (url) {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener';
      link.classList.remove('is-pending');
      link.removeAttribute('aria-disabled');
      link.removeAttribute('title');
    } else {
      link.removeAttribute('href');
      link.classList.add('is-pending');
      link.setAttribute('aria-disabled', 'true');
      link.title = `${link.textContent.trim()} link coming soon`;
    }
  });

  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    const updateBackToTop = () => { backToTop.hidden = window.scrollY < 650; };
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
  }
  const video = document.querySelector('#demo-video');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (video && !reducedMotion.matches) {
    // Native controls remain available if the browser disallows autoplay.
    video.play().catch(() => {});
  }
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches && video) video.pause();
  });
})();
