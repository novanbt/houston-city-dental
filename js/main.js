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
   Interactive Dental Services Quick-Switcher, 3D Parallax, and Spring Physics
   -------------------------------------------------------------------------- */
function initHeroFramerMotion() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  const Motion = window.Motion;

  // Staggered Spring Entry Animations
  const ratingBadge = heroSection.querySelector('.hero-rating-badge');
  const eyebrow = heroSection.querySelector('.hero-content .eyebrow');
  const headline = heroSection.querySelector('.hero-headline');
  const leadText = heroSection.querySelector('.hero-lead');
  const ctaGroup = heroSection.querySelector('.hero-cta-group');
  const servicesWidget = heroSection.querySelector('.framer-services-widget');
  const highlights = heroSection.querySelectorAll('.hero-highlight-item');
  const heroMedia = document.getElementById('heroMediaWrapper');
  const hero3dCard = document.getElementById('hero3dCard');
  const cardTop = document.getElementById('framerCardTop');
  const cardBottom = document.getElementById('framerCardBottom');

  if (Motion && typeof Motion.animate === 'function') {
    const springEntry = Motion.spring({ stiffness: 120, damping: 16 });

    if (ratingBadge) {
      Motion.animate(ratingBadge, { opacity: [0, 1], y: [16, 0], scale: [0.94, 1] }, { duration: 0.6, easing: springEntry });
    }
    if (eyebrow) {
      Motion.animate(eyebrow, { opacity: [0, 1], y: [18, 0] }, { duration: 0.6, delay: 0.08, easing: springEntry });
    }
    if (headline) {
      Motion.animate(headline, { opacity: [0, 1], y: [22, 0] }, { duration: 0.7, delay: 0.16, easing: springEntry });
    }
    if (leadText) {
      Motion.animate(leadText, { opacity: [0, 1], y: [18, 0] }, { duration: 0.6, delay: 0.26, easing: springEntry });
    }
    if (ctaGroup) {
      Motion.animate(ctaGroup, { opacity: [0, 1], y: [18, 0], scale: [0.96, 1] }, { duration: 0.6, delay: 0.36, easing: springEntry });
    }
    if (servicesWidget) {
      Motion.animate(servicesWidget, { opacity: [0, 1], y: [22, 0], scale: [0.97, 1] }, { duration: 0.7, delay: 0.46, easing: springEntry });
    }
    if (highlights.length) {
      highlights.forEach((item, idx) => {
        Motion.animate(item, { opacity: [0, 1], y: [14, 0] }, { duration: 0.5, delay: 0.56 + idx * 0.08, easing: springEntry });
      });
    }
    if (hero3dCard) {
      Motion.animate(hero3dCard, { opacity: [0, 1], scale: [0.92, 1], y: [26, 0] }, { duration: 0.85, delay: 0.22, easing: Motion.spring({ stiffness: 85, damping: 18 }) });
    }
    if (cardTop) {
      Motion.animate(cardTop, { opacity: [0, 1], scale: [0.8, 1], y: [-35, 0] }, { duration: 0.7, delay: 0.65, easing: Motion.spring({ stiffness: 140, damping: 14 }) });
    }
    if (cardBottom) {
      Motion.animate(cardBottom, { opacity: [0, 1], scale: [0.8, 1], y: [35, 0] }, { duration: 0.7, delay: 0.75, easing: Motion.spring({ stiffness: 140, damping: 14 }) });
    }
  }

  // A. Interactive Dental Services Switcher Logic
  const DENTAL_SERVICES = {
    invisalign: {
      title: 'Invisalign® Clear Aligners',
      desc: 'Custom transparent aligners with precision 3D digital smile simulation. No metal brackets, no impression trays, and completely removable.',
      link: '#services'
    },
    veneers: {
      title: 'Custom Porcelain Veneers',
      desc: 'Ultra-thin, handcrafted ceramic shells designed to correct discoloration, gaps, and chips for a natural, luminous smile.',
      link: '#services'
    },
    implants: {
      title: 'Precision Dental Implants & Crowns',
      desc: 'Permanent titanium-supported root replacements crowned with lifelike custom porcelain to restore full bite force and aesthetics.',
      link: '#services'
    },
    preventative: {
      title: 'Low-Radiation 3D Diagnostics',
      desc: 'Gentle ultrasonic hygiene and panoramic cone-beam 3D imaging for proactive, pain-free preventative oral wellness.',
      link: '#services'
    }
  };

  const tabs = heroSection.querySelectorAll('.framer-tab');
  const previewTitle = document.getElementById('previewTitle');
  const previewDesc = document.getElementById('previewDesc');
  const previewLink = document.getElementById('previewLink');

  function selectService(serviceKey) {
    const data = DENTAL_SERVICES[serviceKey];
    if (!data) return;

    tabs.forEach(t => {
      const isActive = t.dataset.service === serviceKey;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (previewTitle && previewDesc) {
      if (Motion && typeof Motion.animate === 'function') {
        Motion.animate(previewTitle, { opacity: [0.3, 1], x: [8, 0] }, { duration: 0.35, easing: Motion.spring({ stiffness: 200, damping: 18 }) });
        Motion.animate(previewDesc, { opacity: [0.3, 1], x: [8, 0] }, { duration: 0.35, easing: Motion.spring({ stiffness: 200, damping: 18 }) });
      }
      previewTitle.textContent = data.title;
      previewDesc.textContent = data.desc;
    }
    if (previewLink) {
      previewLink.href = data.link;
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.service;
      selectService(key);
    });

    tab.addEventListener('mouseenter', () => {
      const key = tab.dataset.service;
      selectService(key);
    });
  });

  // Auto-cycle through dental services when idle
  let activeIndex = 0;
  const serviceKeys = Object.keys(DENTAL_SERVICES);
  let isHovered = false;

  if (servicesWidget) {
    servicesWidget.addEventListener('mouseenter', () => { isHovered = true; });
    servicesWidget.addEventListener('mouseleave', () => { isHovered = false; });
  }

  setInterval(() => {
    if (!isHovered && document.visibilityState === 'visible') {
      activeIndex = (activeIndex + 1) % serviceKeys.length;
      selectService(serviceKeys[activeIndex]);
    }
  }, 4800);

  // B. Interactive 3D Mouse Parallax (Framer Motion spring physics) on Desktop
  if (heroMedia && hero3dCard && window.innerWidth >= 992) {
    let ticking = false;

    heroMedia.addEventListener('mousemove', (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = heroMedia.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

          hero3dCard.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) translate3d(${x * 8}px, ${y * 8}px, 0)`;
          
          if (cardTop) {
            cardTop.style.transform = `translate3d(${x * 24}px, ${y * 24}px, 45px)`;
          }
          if (cardBottom) {
            cardBottom.style.transform = `translate3d(${-x * 18}px, ${-y * 18}px, 35px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    heroMedia.addEventListener('mouseleave', () => {
      const springEase = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      hero3dCard.style.transition = springEase;
      hero3dCard.style.transform = '';

      if (cardTop) {
        cardTop.style.transition = springEase;
        cardTop.style.transform = '';
      }
      if (cardBottom) {
        cardBottom.style.transition = springEase;
        cardBottom.style.transform = '';
      }

      setTimeout(() => {
        hero3dCard.style.transition = '';
        if (cardTop) cardTop.style.transition = '';
        if (cardBottom) cardBottom.style.transition = '';
      }, 600);
    });
  }
}
