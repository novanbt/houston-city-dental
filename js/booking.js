/**
 * HOUSTON CITY DENTAL - INTERACTIVE MULTI-STEP BOOKING CONTROLLER
 * 
 * Features:
 * - 4-step progressive disclosure (Service -> Date & Time -> Contact -> Confirmation)
 * - Service auto-selection from any "Book This Service" CTA
 * - Comprehensive field validation with accessible error cues
 * - Review summary before final submission
 * - Clear integration point for future production booking backend
 */

import { CLINIC_DATA } from './data.js?v=2.3.0';

class DentalBookingManager {
  constructor() {
    this.currentStep = 1;
    this.totalSteps = 4;
    
    this.bookingState = {
      serviceId: 'general-preventative',
      serviceName: 'General & Preventative Dentistry',
      patientType: 'New Patient',
      date: '',
      timeSlot: '10:00 AM',
      fullName: '',
      phone: '',
      email: '',
      contactMethod: 'Phone Call',
      notes: ''
    };

    this.initElements();
    this.initEventListeners();
    this.setupDateConstraints();
  }

  initElements() {
    this.form = document.getElementById('appointment-booking-form');
    this.stepPanels = document.querySelectorAll('.form-step');
    this.progressSteps = document.querySelectorAll('.progress-step');
    this.dateInput = document.getElementById('preferred-date');
    this.serviceRadios = document.querySelectorAll('input[name="service_choice"]');
    this.patientTypeRadios = document.querySelectorAll('input[name="patient_type"]');
    this.timeSlotRadios = document.querySelectorAll('input[name="time_slot"]');
    this.contactMethodRadios = document.querySelectorAll('input[name="contact_method"]');
  }

  initEventListeners() {
    // Service selection
    this.serviceRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.bookingState.serviceId = e.target.value;
        const matched = CLINIC_DATA.services.find(s => s.id === e.target.value);
        if (matched) {
          this.bookingState.serviceName = matched.name;
        }
      });
    });

    // Patient type
    this.patientTypeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.bookingState.patientType = e.target.value;
      });
    });

    // Time slot
    this.timeSlotRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.bookingState.timeSlot = e.target.value;
      });
    });

    // Contact method
    this.contactMethodRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.bookingState.contactMethod = e.target.value;
      });
    });

    // Navigation buttons
    document.querySelectorAll('[data-action="next-step"]').forEach(btn => {
      btn.addEventListener('click', () => this.handleNextStep());
    });

    document.querySelectorAll('[data-action="prev-step"]').forEach(btn => {
      btn.addEventListener('click', () => this.goToStep(this.currentStep - 1));
    });

    // Form submission
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    // Global "Book This Service" buttons trigger
    document.addEventListener('click', (e) => {
      const bookBtn = e.target.closest('[data-book-service]');
      if (bookBtn) {
        e.preventDefault();
        const serviceId = bookBtn.getAttribute('data-book-service');
        this.selectServiceAndScroll(serviceId);
      }
    });

    // Clear validation error on input
    ['full-name', 'patient-phone', 'patient-email'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('input', () => {
          el.classList.remove('is-invalid');
        });
      }
    });
  }

  setupDateConstraints() {
    if (!this.dateInput) return;
    
    // Set minimum date to tomorrow to allow clinic prep
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const minIso = tomorrow.toISOString().split('T')[0];
    this.dateInput.setAttribute('min', minIso);

    // Default to tomorrow's date if empty
    this.dateInput.value = minIso;
    this.bookingState.date = minIso;

    this.dateInput.addEventListener('change', (e) => {
      this.bookingState.date = e.target.value;
    });
  }

  selectServiceAndScroll(serviceId) {
    const radio = document.querySelector(`input[name="service_choice"][value="${serviceId}"]`);
    if (radio) {
      radio.checked = true;
      this.bookingState.serviceId = serviceId;
      const matched = CLINIC_DATA.services.find(s => s.id === serviceId);
      if (matched) {
        this.bookingState.serviceName = matched.name;
      }
    }

    // Switch to step 1
    this.goToStep(1);

    // Smooth scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  handleNextStep() {
    if (this.currentStep === 1) {
      // Step 1: Ensure service is chosen
      const selectedService = document.querySelector('input[name="service_choice"]:checked');
      if (!selectedService) {
        alert('Please choose a service to proceed.');
        return;
      }
      this.bookingState.serviceId = selectedService.value;
      const matched = CLINIC_DATA.services.find(s => s.id === selectedService.value);
      if (matched) this.bookingState.serviceName = matched.name;
      this.goToStep(2);
    } else if (this.currentStep === 2) {
      // Step 2: Validate Date
      if (!this.dateInput.value) {
        this.dateInput.classList.add('is-invalid');
        this.dateInput.focus();
        return;
      }
      this.dateInput.classList.remove('is-invalid');
      this.bookingState.date = this.dateInput.value;
      
      const selectedTime = document.querySelector('input[name="time_slot"]:checked');
      if (selectedTime) {
        this.bookingState.timeSlot = selectedTime.value;
      }

      this.goToStep(3);
    } else if (this.currentStep === 3) {
      // Step 3: Validate Contact Details
      const nameEl = document.getElementById('full-name');
      const phoneEl = document.getElementById('patient-phone');
      const emailEl = document.getElementById('patient-email');
      const notesEl = document.getElementById('patient-notes');

      let isValid = true;

      if (!nameEl.value.trim() || nameEl.value.trim().length < 2) {
        nameEl.classList.add('is-invalid');
        isValid = false;
      } else {
        nameEl.classList.remove('is-invalid');
      }

      const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneEl.value.trim() || !phoneRegex.test(phoneEl.value.trim().replace(/\s/g, ''))) {
        phoneEl.classList.add('is-invalid');
        isValid = false;
      } else {
        phoneEl.classList.remove('is-invalid');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailEl.value.trim() || !emailRegex.test(emailEl.value.trim())) {
        emailEl.classList.add('is-invalid');
        isValid = false;
      } else {
        emailEl.classList.remove('is-invalid');
      }

      if (!isValid) return;

      this.bookingState.fullName = nameEl.value.trim();
      this.bookingState.phone = phoneEl.value.trim();
      this.bookingState.email = emailEl.value.trim();
      this.bookingState.notes = notesEl ? notesEl.value.trim() : '';

      // Update Review UI before showing step 4
      this.populateReviewSummary();
      this.goToStep(4);
    }
  }

  populateReviewSummary() {
    const summaryService = document.getElementById('summary-service');
    const summaryDateTime = document.getElementById('summary-datetime');
    const summaryPatient = document.getElementById('summary-patient');
    const summaryContact = document.getElementById('summary-contact');

    // Format display date
    let displayDate = this.bookingState.date;
    try {
      const parts = this.bookingState.date.split('-');
      const d = new Date(parts[0], parts[1] - 1, parts[2]);
      displayDate = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      displayDate = this.bookingState.date;
    }

    if (summaryService) summaryService.textContent = this.bookingState.serviceName;
    if (summaryDateTime) summaryDateTime.textContent = `${displayDate} at ${this.bookingState.timeSlot}`;
    if (summaryPatient) summaryPatient.textContent = `${this.bookingState.fullName} (${this.bookingState.patientType})`;
    if (summaryContact) summaryContact.textContent = `${this.bookingState.phone} • ${this.bookingState.contactMethod}`;
  }

  goToStep(stepNumber) {
    if (stepNumber < 1 || stepNumber > this.totalSteps) return;

    this.currentStep = stepNumber;

    // Toggle panels
    this.stepPanels.forEach(panel => {
      const panelStep = parseInt(panel.getAttribute('data-step'), 10);
      if (panelStep === stepNumber) {
        panel.classList.add('is-active');
      } else {
        panel.classList.remove('is-active');
      }
    });

    // Update progress tracker
    this.progressSteps.forEach((indicator, index) => {
      const stepIdx = index + 1;
      indicator.classList.remove('is-active', 'is-complete');
      if (stepIdx === stepNumber) {
        indicator.classList.add('is-active');
      } else if (stepIdx < stepNumber) {
        indicator.classList.add('is-complete');
      }
    });
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('submit-booking-btn');
    if (!submitBtn) return;

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin">
        <circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-dashoffset="12"></circle>
      </svg>
      Sending Request...
    `;

    try {
      /**
       * BACKEND INTEGRATION POINT
       * In a full-stack production deployment with an active API endpoint or Firestore:
       * await fetch('/api/appointments', { method: 'POST', body: JSON.stringify(this.bookingState) });
       */
      await new Promise(resolve => setTimeout(resolve, 800));

      const refCode = 'HCD-' + Math.floor(10000 + Math.random() * 90000);
      this.showConfirmation(refCode);
    } catch (err) {
      console.error('Booking request error:', err);
      alert('We were unable to process your request at this moment. Please call Houston City Dental directly at (832) 582-7171.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  }

  showConfirmation(refCode) {
    const bookingWrapper = document.querySelector('.booking-card-wrapper');
    if (!bookingWrapper) return;

    bookingWrapper.innerHTML = `
      <div class="confirmation-card">
        <div class="confirmation-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h2>Appointment Request Received</h2>
        <p class="lead-text" style="max-width: 600px; margin: 0 auto;">
          Thank you, <strong>${this.escapeHtml(this.bookingState.fullName)}</strong>. Your request for <strong>${this.escapeHtml(this.bookingState.serviceName)}</strong> has been registered with our Houston clinical team.
        </p>
        
        <div>
          <span class="confirmation-ref">Reference Code: ${refCode}</span>
        </div>

        <div class="confirmation-next-steps">
          <h4>What Happens Next</h4>
          <ul>
            <li>Our patient coordinator will review your requested time (${this.escapeHtml(this.bookingState.date)} at ${this.escapeHtml(this.bookingState.timeSlot)}) against our surgical suite schedule.</li>
            <li>We will contact you via <strong>${this.escapeHtml(this.bookingState.contactMethod)}</strong> at <strong>${this.escapeHtml(this.bookingState.phone)}</strong> to confirm your reserved appointment.</li>
            <li>No payment is taken online. All insurance details and coverage will be verified prior to treatment.</li>
          </ul>
        </div>

        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="tel:+18325827171" class="btn btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call Us (832) 582-7171
          </a>
          <button class="btn btn-primary" onclick="window.location.reload()">
            Book Another Visit
          </button>
        </div>
      </div>
    `;

    // Scroll to confirmation view
    bookingWrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.dentalBooking = new DentalBookingManager();
});
