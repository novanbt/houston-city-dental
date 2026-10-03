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

import { CLINIC_DATA } from './data.js?v=2.3.0';

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initMarqueeTestimonials();
  initFloatingBarWatcher();
  initContactForm();
  initHeroFramerMotion();
});

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
   6. HERO SECTION FRAMER MOTION EFFECTS
   Spring physics entry animations, 3D mouse parallax, and ambient floating
   -------------------------------------------------------------------------- */
function initHeroFramerMotion() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const ratingBadge = heroSection.querySelector('.hero-rating-badge');
  const eyebrow = heroSection.querySelector('.hero-content .eyebrow');
  const headline = heroSection.querySelector('.hero-headline');
  const leadText = heroSection.querySelector('.hero-lead');
  const ctaGroup = heroSection.querySelector('.hero-cta-group');
  const highlights = heroSection.querySelectorAll('.hero-highlight-item');
  const imageContainer = heroSection.querySelector('.hero-image-container');
  const floatingCard = heroSection.querySelector('.floating-card-bottom');

  const Motion = window.Motion;

  // Staggered Spring Entry Animation (Framer Motion load animation)
  if (Motion && typeof Motion.animate === 'function') {
    if (ratingBadge) {
      Motion.animate(
        ratingBadge,
        { opacity: [0, 1], y: [18, 0], scale: [0.95, 1] },
        { duration: 0.6, easing: Motion.spring({ stiffness: 120, damping: 14 }) }
      );
    }

    if (eyebrow) {
      Motion.animate(
        eyebrow,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: 0.1, easing: Motion.spring({ stiffness: 110, damping: 16 }) }
      );
    }

    if (headline) {
      Motion.animate(
        headline,
        { opacity: [0, 1], y: [25, 0] },
        { duration: 0.7, delay: 0.2, easing: Motion.spring({ stiffness: 90, damping: 16 }) }
      );
    }

    if (leadText) {
      Motion.animate(
        leadText,
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: 0.32, easing: Motion.spring({ stiffness: 100, damping: 16 }) }
      );
    }

    if (ctaGroup) {
      Motion.animate(
        ctaGroup,
        { opacity: [0, 1], y: [20, 0], scale: [0.97, 1] },
        { duration: 0.6, delay: 0.44, easing: Motion.spring({ stiffness: 110, damping: 14 }) }
      );
    }

    if (highlights.length) {
      highlights.forEach((item, idx) => {
        Motion.animate(
          item,
          { opacity: [0, 1], y: [16, 0] },
          { duration: 0.5, delay: 0.54 + idx * 0.08, easing: Motion.spring({ stiffness: 120, damping: 15 }) }
        );
      });
    }

    if (imageContainer) {
      Motion.animate(
        imageContainer,
        { opacity: [0, 1], scale: [0.93, 1], y: [24, 0] },
        { duration: 0.8, delay: 0.25, easing: Motion.spring({ stiffness: 80, damping: 18 }) }
      );
    }

    if (floatingCard) {
      Motion.animate(
        floatingCard,
        { opacity: [0, 1], scale: [0.85, 1], y: [30, 0] },
        { duration: 0.7, delay: 0.6, easing: Motion.spring({ stiffness: 140, damping: 12 }) }
      );
    }
  }

  // Interactive 3D Mouse Parallax (Framer Motion depth effect) on Desktop
  if (imageContainer && floatingCard && window.innerWidth >= 992) {
    let ticking = false;

    heroSection.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = heroSection.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

          imageContainer.style.transform = `perspective(1000px) rotateY(${x * 3.5}deg) rotateX(${-y * 3.5}deg) translate3d(${x * 6}px, ${y * 6}px, 0)`;
          floatingCard.style.transform = `translate3d(${-x * 14}px, ${-y * 14}px, 20px)`;
          ticking = false;
        });
        ticking = true;
      }
    });

    heroSection.addEventListener('mouseleave', () => {
      imageContainer.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      floatingCard.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      imageContainer.style.transform = '';
      floatingCard.style.transform = '';

      setTimeout(() => {
        imageContainer.style.transition = '';
        floatingCard.style.transition = '';
      }, 600);
    });
  }
}
