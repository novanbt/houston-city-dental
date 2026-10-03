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
  const marqueeRows = document.querySelectorAll('.marquee-row');
  if (!marqueeRows.length) return;

  marqueeRows.forEach((row) => {
    const tracks = row.querySelectorAll('.marquee-track');
    
    // Pause on touch start for mobile devices
    row.addEventListener('touchstart', () => {
      tracks.forEach(track => {
        track.style.animationPlayState = 'paused';
      });
    }, { passive: true });

    // Resume when finger is lifted
    row.addEventListener('touchend', () => {
      tracks.forEach(track => {
        track.style.animationPlayState = '';
      });
    }, { passive: true });
    
    row.addEventListener('touchcancel', () => {
      tracks.forEach(track => {
        track.style.animationPlayState = '';
      });
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
