/**
 * HOUSTON CITY DENTAL - MAIN INTERACTION CONTROLLER
 * 
 * Features:
 * - Dynamic header scroll transitions
 * - Mobile navigation menu toggle
 * - Testimonial interactive carousel
 * - Mobile floating action bar smart visibility
 * - Contact quick-form handler
 */

import { CLINIC_DATA } from './data.js?v=2.5.0';

function boot() {
  const safeRun = (fn, name) => {
    try { fn(); } catch (err) { console.warn('Error initializing ' + name + ':', err); }
  };
  safeRun(initStickyHeader, 'StickyHeader');
  safeRun(initMobileNav, 'MobileNav');
  safeRun(initMarqueeTestimonials, 'MarqueeTestimonials');
  safeRun(initFloatingBarWatcher, 'FloatingBarWatcher');
  safeRun(initContactForm, 'ContactForm');
  safeRun(initHeroFramerMotion, 'HeroFramerMotion');
  safeRun(initFaqAccordion, 'FaqAccordion');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* --------------------------------------------------------------------------
   1. STICKY HEADER SCROLL LISTENER
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --------------------------------------------------------------------------
   2. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  const toggle = () => {
    const isOpen = drawer.classList.contains('is-open');
    if (isOpen) {
      drawer.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('is-open');
      toggleBtn.classList.add('is-active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  };

  toggleBtn.addEventListener('click', toggle);

  // Close when clicking any nav link
  drawer.querySelectorAll('.nav-link, .btn').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   3. MARQUEE TESTIMONIALS INTERACTION
   Seamless looping marquee with touch-pause support for mobile
   -------------------------------------------------------------------------- */
function initMarqueeTestimonials() {
  const marqueeViewports = document.querySelectorAll('.marquee-viewport');
  if (!marqueeViewports.length) return;

  marqueeViewports.forEach((vp) => {
    const track = vp.querySelector('.marquee-track');
    if (!track) return;
    
    // Pause on touch start for mobile devices
    vp.addEventListener('touchstart', () => {
      track.style.animationPlayState = 'paused';
    }, { passive: true });

    // Resume when finger is lifted
    vp.addEventListener('touchend', () => {
      track.style.animationPlayState = 'running';
    }, { passive: true });
    
    vp.addEventListener('touchcancel', () => {
      track.style.animationPlayState = 'running';
    }, { passive: true });
  });
}

/* --------------------------------------------------------------------------
   4. MOBILE FLOATING BAR WATCHER
   Hide floating bar when the user is actively inside the booking form
   -------------------------------------------------------------------------- */
function initFloatingBarWatcher() {
  const bottomBar = document.querySelector('.mobile-bottom-bar');
  const bookingSection = document.getElementById('booking');
  if (!bottomBar || !bookingSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bottomBar.style.transform = 'translateY(100%)';
      } else {
        bottomBar.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  observer.observe(bookingSection);
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM HANDLER
   -------------------------------------------------------------------------- */
function initContactForm() {
  const contactForm = document.getElementById('general-contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Message Sent';
      btn.style.backgroundColor = 'var(--color-success)';
      btn.style.borderColor = 'var(--color-success)';
    }

    const note = document.createElement('p');
    note.style.color = 'var(--color-success)';
    note.style.fontSize = '0.85rem';
    note.style.marginTop = '0.75rem';
    note.textContent = "Thank you! Our patient team has received your message and will respond promptly.";
    contactForm.appendChild(note);
    contactForm.reset();
  });
}

/* --------------------------------------------------------------------------
   6. HERO SECTION SPLASH & 3D PARALLAX
   -------------------------------------------------------------------------- */
function initHeroFramerMotion() {
  const heroCard = document.querySelector('.hero-card-canvas');
  const toothWrapper = document.querySelector('.hero-tooth-wrapper');
  if (!heroCard || !toothWrapper) return;

  const Motion = window.Motion;

  // Staggered Spring Entry
  if (Motion && typeof Motion.animate === 'function') {
    const springEntry = Motion.spring({ stiffness: 100, damping: 16 });
    const bannerTitle = document.querySelector('.hero-banner-title');
    const colLeft = document.querySelector('.hero-col-left');
    const colRight = document.querySelector('.hero-col-right');

    if (bannerTitle) {
      Motion.animate(bannerTitle, { opacity: [0, 1], y: [-24, 0], scale: [0.95, 1] }, { duration: 0.8, easing: springEntry });
    }
    if (toothWrapper) {
      Motion.animate(toothWrapper, { opacity: [0, 1], scale: [0.85, 1], y: [20, 0] }, { duration: 0.9, delay: 0.15, easing: springEntry });
    }
    if (colLeft) {
      Motion.animate(colLeft, { opacity: [0, 1], x: [-30, 0] }, { duration: 0.8, delay: 0.25, easing: springEntry });
    }
    if (colRight) {
      Motion.animate(colRight, { opacity: [0, 1], x: [30, 0] }, { duration: 0.8, delay: 0.35, easing: springEntry });
    }
  }

  // Interactive 3D Mouse Parallax
  if (window.innerWidth >= 992) {
    let ticking = false;
    heroCard.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = heroCard.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

          toothWrapper.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 12}deg) translate3d(${x * 16}px, ${y * 14}px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    });

    heroCard.addEventListener('mouseleave', () => {
      toothWrapper.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      toothWrapper.style.transform = '';
      setTimeout(() => {
        toothWrapper.style.transition = '';
      }, 600);
    });
  }
}

/* --------------------------------------------------------------------------
   7. MINIMAL TWO-COLUMN ANIMATED FAQ ACCORDION (MUTUALLY EXCLUSIVE)
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqGrid = document.querySelector('.faq-two-col-grid');
  if (!faqGrid || faqGrid.dataset.faqInitialized === 'true') return;
  faqGrid.dataset.faqInitialized = 'true';

  const faqItems = Array.from(faqGrid.querySelectorAll('.faq-item'));
  if (!faqItems.length) return;

  function closeItem(item) {
    item.classList.remove('is-open');
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (panel) panel.setAttribute('aria-hidden', 'true');
  }

  function openItem(item) {
    // Mutually exclusive: close all other items first
    faqItems.forEach((other) => {
      if (other !== item && other.classList.contains('is-open')) {
        closeItem(other);
      }
    });

    item.classList.add('is-open');
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    if (panel) panel.setAttribute('aria-hidden', 'false');
  }

  function toggleItem(item) {
    if (item.classList.contains('is-open')) {
      closeItem(item);
    } else {
      openItem(item);
    }
  }

  faqItems.forEach((item) => {
    // Single click handler on the FAQ item (handles row, question, and '+' icon clicks)
    item.addEventListener('click', (e) => {
      // Do not toggle if the user is interacting with content inside the open answer panel
      if (e.target.closest('.faq-panel')) return;
      toggleItem(item);
    });

    // Keyboard support on the trigger button (Enter/Space handled natively, Arrow keys for roving focus)
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('keydown', (e) => {
        const allTriggers = faqItems.map((it) => it.querySelector('.faq-trigger')).filter(Boolean);
        const idx = allTriggers.indexOf(trigger);
        if (idx === -1) return;

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          allTriggers[(idx + 1) % allTriggers.length]?.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          allTriggers[(idx - 1 + allTriggers.length) % allTriggers.length]?.focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          allTriggers[0]?.focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          allTriggers[allTriggers.length - 1]?.focus();
        }
      });
    }
  });
}
