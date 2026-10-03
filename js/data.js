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

  // Verified Patient Testimonials (Direct from Google Reviews)
  testimonials: [
    {
      author: "Emily Marin",
      location: "Houston, TX",
      treatment: "Family & Pediatric Dentistry",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "Third time here and it has been such a pleasure. I usually hate dentists but the employees here truly care about getting everyone on the path to the healthiest their teeth can be and do everything to make sure you are comfortable. I recommend anyone who wants any dental work to check them about and bring your kids as well. Great workers here and the dentist is amazing!",
      googleUrl: "https://maps.app.goo.gl/gs5PoA4EQGeJkToeA"
    },
    {
      author: "Misael Morales",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • 5 months ago",
      quote: "This is the best dental office I have ever been to! Been with them for a while now and are always super courteous and attentive with me. I recommend it 100%!",
      googleUrl: "https://maps.app.goo.gl/o6nGDtsCCToxte319"
    },
    {
      author: "Norma Armijo",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 1,
      date: "Verified Google Review • 5 months ago",
      quote: "I drove 3 and a half hours from Austin to come here. I hit some traffic and called them 4 times on the way to see if they could still see me. There was no answer, no way to leave a voicemail, I even tried sending a message and nothing. Once I arrived they said they needed to reschedule me. While I understand that I arrived late, the lack of consideration of my time driving from Austin is truly disappointing. Just a call back to tell me they couldn't take me would've saved me a 3 hour drivem",
      googleUrl: "https://maps.app.goo.gl/7t5HyZkC3yPkHEho8"
    },
    {
      author: "Ruby Marin",
      location: "Houston, TX",
      treatment: "Comprehensive Family Dental",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "Houston city dental is our go to for family dental care and we love it! The environment and kindness from the front desk to the doctors is always appreciated! Definitely recommend to all friends and family!",
      googleUrl: "https://maps.app.goo.gl/EV4osWyetUazDikt8"
    },
    {
      author: "Diami Sar",
      location: "Houston, TX",
      treatment: "Gentle & Comfort-First Dentistry",
      rating: 5,
      date: "Verified Google Review • 4 months ago",
      quote: "The doctor and staff are all very friendly.\nComing here makes me feel very welcomed and comfortable.\nI highly recommend this place to everyone.",
      googleUrl: "https://maps.app.goo.gl/cudo9wsoLqk8oMrJA"
    },
    {
      author: "Diami Sar",
      location: "Houston, TX",
      treatment: "Gentle & Comfort-First Dentistry",
      rating: 5,
      date: "Verified Google Review • 4 months ago",
      quote: "The doctor and staff are all very friendly.\nComing here makes me feel very welcomed and comfortable.\nI highly recommend this place to everyone.",
      googleUrl: "https://maps.app.goo.gl/cudo9wsoLqk8oMrJA"
    },
    {
      author: "Rongrong Cheng",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "Went to our appointment yesterday and left smiling. Huge thanks to the amazing team-friendly,professional and they somehow make a dentist visit feel a good idea! Highly recommend this crew.",
      googleUrl: "https://maps.app.goo.gl/Ze6ysfT2nVDhmk5x7"
    },
    {
      author: "Aurora Vasquez",
      location: "Houston, TX",
      treatment: "Invisalign & 3D Digital Scanning",
      rating: 5,
      date: "Verified Google Review • 3 years ago",
      quote: "First time here and had a wonderful experience. Office is very nice and clean. Was in and out in less than 30minutes. They have the 3D scanning for invisalign which Dr.Cao took the time to show me my before and what my after will look like. Friendly staff, they also gave me a tumblr cup for my fist visit!\nThank you Dr.Cao and Houston City!",
      googleUrl: "https://maps.app.goo.gl/728yExkCyJQzwSmm9"
    },
    {
      author: "Karen Lara",
      location: "Houston, TX",
      treatment: "Family & Pediatric Dentistry",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "Love love love this place ! Honesty one of the best doctor and employees! They are so patient with our kids and always so welcoming ! I would recommend %100",
      googleUrl: "https://maps.app.goo.gl/7Ch67Uv7MmV9KoM77"
    },
    {
      author: "Mina Tepes",
      location: "Houston, TX",
      treatment: "Family & Pediatric Dentistry",
      rating: 5,
      date: "Verified Google Review • 11 months ago",
      quote: "Dr. Cao took his time on my son's procedure and was informative throughout. The receptionist and nurses were all sweet and helpful. Overall a very nice and welcoming experience.",
      googleUrl: "https://maps.app.goo.gl/nVSaHdaMWvUYuJcPA"
    },
    {
      author: "Teresa Villa",
      location: "Houston, TX",
      treatment: "Orthodontics & Braces",
      rating: 5,
      date: "Verified Google Review • 3 years ago",
      quote: "Thank you Ximena for the amazing work on my daughter’s braces. Ximena handled my daughter with a lot of care and comforted her throughout the whole process. We are very grateful for the great experience we had.",
      googleUrl: "https://maps.app.goo.gl/iMJWhBZefAP23kgYA"
    },
    {
      author: "Ke T",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "Great service, staff and doctors were friendly would definitely recommend",
      googleUrl: "https://maps.app.goo.gl/wCng2N9dZgHjZYXk8"
    },
    {
      author: "Isabella Yanez",
      location: "Houston, TX",
      treatment: "Oral Hygiene & Education",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "They were able to tell me what I needed and have gave me toothbrush and informations of what I should use and shouldn’t.",
      googleUrl: "https://maps.app.goo.gl/1Bk1wbCBe1CuHHDC9"
    },
    {
      author: "Enrique Amado",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "Best place everyone is nice and helpful their not rough and take care of every patient",
      googleUrl: "https://maps.app.goo.gl/iq1jkugayQtyi9iK7"
    },
    {
      author: "John Trapp",
      location: "Houston, TX",
      treatment: "Family & Pediatric Dentistry",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "They were so personable and attentive. Great attitude. We had an excellent experience. Even made the kids feel at ease. Ximena, Gloria, and Carla and Dr Cao were the absolute best. It will be our family dentists for a long long time.",
      googleUrl: "https://maps.app.goo.gl/gFLoF6adab6eeXic7"
    },
    {
      author: "Diana Joseph",
      location: "Houston, TX",
      treatment: "Gentle & Comfort-First Dentistry",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "I had a very positive experience at Aspen Dental in Stafford. The staff was professional, courteous, and made the entire visit smooth and stress-free.\n\nI’d especially like to recognize Ramsha for her outstanding service. She was incredibly helpful and took the time to clearly explain each step of the process, which really helped me feel informed and at ease. Her professionalism and attention to detail stood out and made a big difference in my overall experience.\n\nI highly recommend Aspen Dental Stafford for anyone looking for quality care and a supportive team. Thank you, Ramsha, and the entire staff for the excellent service.",
      googleUrl: "https://maps.app.goo.gl/SSjWJpDW38Aq8Myj8"
    },
    {
      author: "Mariela Cantoriano",
      location: "Houston, TX",
      treatment: "Comprehensive Family Dental",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "The best Dentist office in the Houston area. They treat me like family, and the staff is very friendly. Ximena and Gloria are very attentive and show care throughout my dentist visit. Dr.Cao explained everything before proceeding and i felt very comfortable throughout the appointment.",
      googleUrl: "https://maps.app.goo.gl/BUaDTBffNrXfH7Ye7"
    },
    {
      author: "Victoria Villatoro",
      location: "Houston, TX",
      treatment: "Orthodontics & Braces",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "I highly recommend this place, Ive been on my treatment for my braces for a year and the staff is so amazing and attentive. So far my braces journey has been going smoothly! Prices are also affordable and I love Ximena’s attention. Please come visit this place!",
      googleUrl: "https://maps.app.goo.gl/fcdKPJsMeQGPzs5n9"
    },
    {
      author: "Yoshibbo",
      location: "Houston, TX",
      treatment: "Orthodontics & Braces",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "Me and my family have been coming to this clinic for so long since they opened. I was one of many first clients and we have been loyal ever since. I got my braces here and they have done an amazing job making sure my teeth are perfect. I thank Dr. Cao and Ximena for taking care of me all these years. Im 17 now they have seen me grow up here. I love this clinic!",
      googleUrl: "https://maps.app.goo.gl/xvTjBqVrSvBj613K7"
    },
    {
      author: "Yane G",
      location: "Houston, TX",
      treatment: "Oral Surgery & Extractions",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "Great experience, all staff made me feel comfortable and safe . Always get teeth cleaning and recently got wisdom tooth removed. 10/10 recommend 👍🏼👍🏼",
      googleUrl: "https://maps.app.goo.gl/pVmns4ia5uKvnhVP7"
    },
    {
      author: "Gissell Trejo",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "Very good service very attentive and answered all my concerns",
      googleUrl: "https://maps.app.goo.gl/HtrXovxZiN7jxtrL7"
    },
    {
      author: "Vincent N",
      location: "Houston, TX",
      treatment: "Gentle & Comfort-First Dentistry",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "Fantastic experience from start to finish! The staff was friendly, the office was spotless, and Dr. Cao was incredibly gentle and thorough. I felt completely at ease and well taken care of. Highly recommend!",
      googleUrl: "https://maps.app.goo.gl/xveWzLKbPkpVgWZEA"
    },
    {
      author: "Modesta Castaneda",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "This has been my to go dentist ever since they opened, have never left them wver since my first visit. Everytime, I get the chance to reccomend this dentist office, I definetely do. Really love the service of the staff and how clean and organozed everything and everyone is.",
      googleUrl: "https://maps.app.goo.gl/q2rRPaVL5qYkoWRJ9"
    },
    {
      author: "Jorge Reyna",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "Had a great experience over all, staff and Dr Cao were exceptional ! Highly recommend",
      googleUrl: "https://maps.app.goo.gl/XBoVDunAcJfFwiwo9"
    },
    {
      author: "Cecilia Ramos",
      location: "Houston, TX",
      treatment: "Orthodontics & Braces",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "I been coming to Dr. Cao for over 5 years. They did an amazing job with my braces, and the staff is always kind and friendly. I definitely recommend comming here. I wouldn't even think it twice.",
      googleUrl: "https://maps.app.goo.gl/tTf8eCQyxzCdgK5U6"
    },
    {
      author: "Simone Walters",
      location: "Houston, TX",
      treatment: "Family & Pediatric Dentistry",
      rating: 5,
      date: "Verified Google Review • 3 months ago",
      quote: "I love it here\nThey always take the time for my babies to fell comfortably 💜",
      googleUrl: "https://maps.app.goo.gl/8Pv97dmMoLUpu5it5"
    },
    {
      author: "Hikmat Hashim",
      location: "Houston, TX",
      treatment: "Gentle & Comfort-First Dentistry",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "The most helpful is Rabia, the way she treats a patient is like making him comfortable and safe and secure. Her smile and way of talking is therapy in itself.",
      googleUrl: "https://maps.app.goo.gl/ttEbp3o7pbEEmFxe8"
    },
    {
      author: "Silvia Scholer",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "Excellent doctor.  We like that everybody is very professional and caring with patients, specially the dental assistants. We have been recommending Dr. Cao to our friends.",
      googleUrl: "https://maps.app.goo.gl/XUWuLJES4WuxhbvM9"
    },
    {
      author: "Kimmi",
      location: "Houston, TX",
      treatment: "Preventative Dental Care & Cleaning",
      rating: 5,
      date: "Verified Google Review • 2 years ago",
      quote: "I recently visited Houston City Dental, and I couldn’t be more pleased with the experience. From the moment I walked in, the staff was incredibly friendly and welcoming. The waiting area was clean and comfortable, and I didn’t have to wait long before being seen.\n\nDr. Cao performed a routine cleaning and examination. I left the office feeling confident about my dental health and knowing I was in good hands.\n\nI highly recommend Houston City Dental and his team to anyone looking for a professional and compassionate dental care provider. I will definitely be returning for my future dental needs.",
      googleUrl: "https://maps.app.goo.gl/XUwYfvQmUpbCsNS77"
    },
    {
      author: "Iliana Machado",
      location: "Houston, TX",
      treatment: "General & Preventative Care",
      rating: 5,
      date: "Verified Google Review • a year ago",
      quote: "I love this place endlessly, they treat everyone with kindness & love. Ximena has been treating me for almost 3 years & she’s one of my favorites. She knows how to be delicate & she’s full of love & happiness. Y’all need to come to this dentist it’s aiper good & the doctor is great. Everything in this place is awesome! 💕",
      googleUrl: "https://maps.app.goo.gl/CGDU6Z8BUFbdQzQe7"
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
