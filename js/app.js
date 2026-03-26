/* ============================================================
   THE FOUNDER'S JOURNEY — app.js
   Reading progress, scroll animations, nav active state
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* === READING PROGRESS BAR === */
  const progressBar = document.getElementById('readingProgress');
  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(pct, 100) + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* === ACTIVE NAV LINK === */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* === SCROLL-TRIGGERED ANIMATIONS (IntersectionObserver) === */
  const animatedSelectors = [
    '.chapter-card',
    '.timeline-step',
    '.motion-card',
    '.concept-block',
    '.framework-card',
    '.outcome-card',
    '.epilogue-stat-num'
  ];

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animatedSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el) {
        observer.observe(el);
      });
    });
  } else {
    /* Fallback: show everything immediately if no IntersectionObserver */
    animatedSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el) {
        el.classList.add('visible');
      });
    });
  }

  /* === CHECKLIST INTERACTION === */
  document.querySelectorAll('.checklist-item').forEach(function (item) {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    function syncState() {
      if (checkbox.checked) {
        item.classList.add('checked');
      } else {
        item.classList.remove('checked');
      }
    }

    checkbox.addEventListener('change', syncState);
    syncState(); /* init state */

    /* Allow clicking anywhere on the row to toggle */
    item.addEventListener('click', function (e) {
      if (e.target !== checkbox && e.target.tagName !== 'LABEL') {
        checkbox.checked = !checkbox.checked;
        syncState();
      }
    });
  });

  /* === SMOOTH STAGGER FOR CHAPTER CARDS (index.html only) === */
  const chapterCards = document.querySelectorAll('.chapter-card');
  if (chapterCards.length > 0 && 'IntersectionObserver' in window) {
    chapterCards.forEach(function (card, i) {
      card.style.transitionDelay = (i * 100) + 'ms';
    });
  }

});
