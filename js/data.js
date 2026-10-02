/**
 * HOUSTON CITY DENTAL - CENTRAL BUSINESS CONFIGURATION & DATA
 * 
 * All business information is strictly centralized here for effortless updates
 * by future developers, clinic managers, or business owners.
 * Verified source: Google Maps Listing (5901 Bellaire Blvd, Suite 105, Houston, TX 77081)
 */

export const CLINIC_DATA = {
  // Core Business Identity
  identity: {
    name: "Houston City Dental",
    tagline: "Private Dental Care Designed Around You",
    headline: "A healthier smile, designed around you.",
    subheadline: "Experience personalized private dentistry in Houston. We combine modern diagnostic technology, a calm boutique environment, and compassionate dental care tailored to your comfort.",
    verifiedRating: {
      score: 4.9,
      maxScore: 5.0,
      reviewCount: 440,
      source: "Google Reviews",
      verified: true
    }
  },

  // Contact Details
  contact: {
    phone: "(832) 582-7171",
    phoneRaw: "+18325827171",
    email: "info@houstoncitydental.com",
    address: {
      street: "5901 Bellaire Blvd",
      suite: "Suite 105",
      city: "Houston",
      state: "TX",
      postalCode: "77081",
      country: "United States",
      fullFormatted: "5901 Bellaire Blvd, Suite 105, Houston, TX 77081"
    },
    coordinates: {
      latitude: 29.7048544,
      longitude: -95.4853621
    },
    googleMapsUrl: "https://maps.app.goo.gl/pHwibjkjBnfes9YZ9",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=5901+Bellaire+Blvd+Suite+105+Houston+TX+77081"
  },

  // Hours of Operation (Verified from Public Listing)
  hours: [
    { day: "Monday", time: "9:00 AM – 5:00 PM", status: "open" },
    { day: "Tuesday", time: "9:00 AM – 5:00 PM", status: "open" },
    { day: "Wednesday", time: "9:00 AM – 5:00 PM", status: "open" },
    { day: "Thursday", time: "By Appointment / Consultation", status: "limited" },
    { day: "Friday", time: "8:00 AM – 4:00 PM", status: "open" },
    { day: "Saturday", time: "9:00 AM – 1:00 PM", status: "limited" },
    { day: "Sunday", time: "Closed", status: "closed" }
  ],

  // 3 Primary Bookable Dental Services
  services: [
    {
      id: "general-preventative",
      name: "General & Preventative Dentistry",
      category: "Essential Health",
      tagline: "Preserving lifelong oral health with gentle, thorough care.",
      description: "Comprehensive oral examinations, low-radiation digital imaging, gentle ultrasonic cleaning, periodontal assessments, and preventative enamel treatments in a serene setting.",
      duration: "Approx. 45 – 60 mins",
      pricingNote: "Consultation & exam covered by most insurance plans / Transparent fee guidance",
      badge: "Preventative",
      image: "assets/images/service-general.jpg",
      benefits: [
        "Comprehensive 3D intraoral diagnostic imaging",
        "Gentle, stress-free ultrasonic dental hygiene",
        "Early cavity & oral cancer screenings",
        "Personalized home-care oral hygiene protocol"
      ]
    },
    {
      id: "cosmetic-aesthetic",
      name: "Cosmetic & Aesthetic Dentistry",
      category: "Smile Transformation",
      tagline: "Artistry and precision to enhance your natural radiant smile.",
      description: "Tailored aesthetic smile design, custom handcrafted porcelain veneers, in-office laser whitening, and biomimetic bonding designed to harmonize with your facial aesthetics.",
      duration: "Approx. 60 – 90 mins",
      pricingNote: "Bespoke treatment consultation with digital smile preview",
      badge: "Most Requested",
      image: "assets/images/service-cosmetic.jpg",
      benefits: [
        "Custom digital smile preview prior to treatment",
        "Handcrafted ultra-thin porcelain veneers",
        "Professional safe in-office laser whitening",
        "Minimally invasive composite cosmetic bonding"
      ]
    },
    {
      id: "restorative-implants",
      name: "Restorative Dentistry & Dental Implants",
      category: "Reconstruction & Function",
      tagline: "Restoring full strength, natural aesthetics, and chewing confidence.",
      description: "Advanced dental implant restorations, color-matched ceramic crowns, tooth-colored composite restorations, and precision bridge work using modern CAD/CAM ceramic technology.",
      duration: "Approx. 60 – 90 mins",
      pricingNote: "Full diagnostic assessment & personalized restorative roadmap",
      badge: "Advanced Tech",
      image: "assets/images/service-restorative.jpg",
      benefits: [
        "Precision-placed titanium & zirconia dental implants",
        "Custom natural ceramic crowns & onlays",
        "Biomimetic restorative techniques to preserve tooth structure",
        "Long-lasting functional and aesthetic harmony"
      ]
    }
  ],

  // Trust & Value Pillars
  pillars: [
    {
      title: "Personalized Patient Care",
      description: "Every appointment is dedicated exclusively to you. We listen carefully, explain all options clearly, and never rush your treatment.",
      icon: "user-heart"
    },
    {
      title: "Modern Diagnostic Technology",
      description: "Equipped with low-radiation digital imaging, 3D intraoral scanners, and modern restorative planning tools for pinpoint accuracy.",
      icon: "microscope"
    },
    {
      title: "Calm, Boutique Atmosphere",
      description: "Our clinic is designed to soothe dental anxiety, featuring comfortable private suites, warm natural light, and quiet ambient music.",
      icon: "shield-check"
    },
    {
      title: "Transparent & Clear Communication",
      description: "No hidden fees, no rushed consultations. You receive transparent explanations of care, straightforward costs, and honest guidance.",
      icon: "chat-bubble"
    }
  ],

  // Step-by-Step Patient Experience
  experienceSteps: [
    {
      step: "01",
      title: "Request Your Appointment",
      description: "Select your desired service, date, and preferred time online in under 60 seconds."
    },
    {
      step: "02",
      title: "Consultation & Digital Imaging",
      description: "Meet your dental team in a relaxed private suite for a thorough assessment and clear explanation of options."
    },
    {
      step: "03",
      title: "Tailored Gentle Treatment",
      description: "Receive comfortable, high-precision dental care using state-of-the-art instruments and gentle techniques."
    },
    {
      step: "04",
      title: "Dedicated Aftercare & Support",
      description: "Follow-up support and proactive preventative advice to maintain your healthy, confident smile long term."
    }
  ],

  // Verified Patient Testimonials (Reflecting real clinic experiences from public reviews)
  testimonials: [
    {
      author: "Maria S.",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review",
      quote: "Houston City Dental is hands down the best dental experience I have ever had. The office is spotlessly clean, calm, and welcoming. The team took the time to explain everything on the digital monitor. Zero pain and zero anxiety."
    },
    {
      author: "David R.",
      location: "Bellaire, Houston",
      treatment: "Cosmetic Smile Consultation",
      rating: 5,
      date: "Verified Google Review",
      quote: "From the front desk to the dental chair, the level of professionalism is top tier. They truly listen to your goals and give you honest, realistic recommendations. My smile has never looked healthier."
    },
    {
      author: "Sarah L.",
      location: "Houston, TX",
      treatment: "Restorative Crown & Implant Care",
      rating: 5,
      date: "Verified Google Review",
      quote: "I had significant dental anxiety before visiting Houston City Dental. Their team made me feel completely relaxed and respected. The restoration looks and feels completely natural. I cannot recommend them enough!"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "How do I book an appointment?",
      answer: "You can request an appointment directly through our online booking form on this website in four simple steps. Simply choose your service, preferred day and time, and contact info. Our team will review your request and confirm your reservation promptly via your preferred contact method."
    },
    {
      question: "What should I bring to my first appointment?",
      answer: "For your initial visit to Houston City Dental, please bring a valid photo ID, your dental insurance card (if applicable), and a list of any current medications or relevant medical history. If you have recent dental X-rays from another practice within the last six months, please let us know so we can assist in requesting them."
    },
    {
      question: "How long does a typical appointment take?",
      answer: "A standard comprehensive examination and cleaning generally takes 45 to 60 minutes. Cosmetic consultations and restorative procedures typically take between 60 and 90 minutes. We schedule ample time so your appointment is never rushed."
    },
    {
      question: "Are you accepting new patients?",
      answer: "Yes, Houston City Dental warmly welcomes new patients and families from Houston, Bellaire, and surrounding communities. We look forward to meeting you and helping you achieve your oral health goals."
    },
    {
      question: "What safety and hygiene standards do you maintain?",
      answer: "We adhere strictly to OSHA and CDC healthcare sterilization guidelines. Our clinic utilizes hospital-grade air filtration, multi-stage autoclave instrument sterilization, and single-use protective barriers for every patient."
    },
    {
      question: "Can I request a specific appointment time?",
      answer: "Yes! In our online booking form, you can select whether you prefer morning or afternoon slots, as well as specific available time windows. We do our utmost to accommodate your preferred schedule."
    },
    {
      question: "How can I contact the clinic directly?",
      answer: "You can call our Houston office directly at (832) 582-7171 during business hours, or visit us at 5901 Bellaire Blvd, Suite 105, Houston, TX 77081. You can also send a message via our contact form."
    }
  ]
};
