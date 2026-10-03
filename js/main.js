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

import { CLINIC_DATA } from './data.js?v=2.2.0';

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileNav();
  initTestimonialCarousel();
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
   3. TESTIMONIAL CAROUSEL
   -------------------------------------------------------------------------- */
function initTestimonialCarousel() {
  const testimonials = CLINIC_DATA.testimonials;
  const quoteEl = document.getElementById('testimonial-quote');
  const authorEl = document.getElementById('testimonial-author');
  const locEl = document.getElementById('testimonial-location');
  const treatmentEl = document.getElementById('testimonial-treatment');
  const starsEl = document.getElementById('testimonial-stars');
  const linkEl = document.getElementById('testimonial-link');
  const counterEl = document.getElementById('testimonial-counter');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  const dotsContainer = document.getElementById('testimonial-dots');

  if (!quoteEl || !testimonials || testimonials.length === 0) return;

  let currentIndex = 0;

  // Render dots
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    testimonials.forEach((_, idx) => {
      const dot = document.createElement('button');
      dot.className = `dot ${idx === 0 ? 'is-active' : ''}`;
      dot.setAttribute('aria-label', `Go to review ${idx + 1}`);
      dot.addEventListener('click', () => updateTestimonial(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateTestimonial(newIndex) {
    currentIndex = newIndex;
    const item = testimonials[currentIndex];

    // Fade effect
    const card = document.querySelector('.testimonial-card-single');
    if (card) {
      card.style.opacity = '0.4';
      card.style.transform = 'translateY(4px)';
    }

    setTimeout(() => {
      quoteEl.textContent = `“${item.quote}”`;
      authorEl.textContent = item.author;
      locEl.textContent = `${item.location} • ${item.date}`;
      if (treatmentEl) treatmentEl.textContent = item.treatment;

      // Update stars
      if (starsEl) {
        const rating = item.rating || 5;
        starsEl.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);
      }

      // Update external Google Review link
      if (linkEl) {
        linkEl.href = item.googleUrl || '#';
        linkEl.setAttribute('aria-label', `View ${item.author}'s review on Google Maps`);
      }

      // Update slide counter
      if (counterEl) {
        counterEl.textContent = `${currentIndex + 1} / ${testimonials.length}`;
      }

      // Update dots & scroll active dot into view
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.dot').forEach((d, idx) => {
          if (idx === currentIndex) {
            d.classList.add('is-active');
            d.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            d.classList.remove('is-active');
          }
        });
      }

      if (card) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    }, 150);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const nextIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(nextIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIdx = (currentIndex + 1) % testimonials.length;
      updateTestimonial(nextIdx);
    });
  }

  // Touch swipe support for mobile
  const wrapper = document.querySelector('.testimonials-wrapper');
  if (wrapper) {
    let touchStartX = 0;
    let touchEndX = 0;
    wrapper.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    wrapper.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        const nextIdx = (currentIndex + 1) % testimonials.length;
        updateTestimonial(nextIdx);
      } else if (touchEndX - touchStartX > 50) {
        const nextIdx = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(nextIdx);
      }
    }, { passive: true });
  }

  // Initialize first testimonial
  updateTestimonial(0);
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
