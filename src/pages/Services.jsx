import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: "Career Counselling & University Selection",
    description: "It all starts with a plan. This is the most crucial step in your journey to studying abroad. At Advisewise, we begin with an in-depth profiling session to understand your unique ambitions, academic strengths, and long-term career goals. Based on this comprehensive analysis, our experienced counselors curate a personalized list of universities and programs that align perfectly with your profile and aspirations, ensuring you make the right choice for your future.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Expert SOP & LOR Assistance",
    description: "A strong SOP and LOR are critical components of your application. Your application documents are your voice—they tell your story to the admissions committee. Our expert writers work closely with you to craft compelling Statements of Purpose that highlight your unique journey, motivations, and goals. We also guide you in securing impactful Letters of Recommendation from the right recommenders who can speak to your strengths authentically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    title: "Application Processing & Documentation",
    description: "The application process involves meticulous attention to detail. We handle the entire process of completing application forms with precision and ensure every required document is properly verified, organized, and submitted on time. Our systematic approach eliminates errors that could delay or jeopardize your admission. From transcripts to financial documents, we ensure your application package is complete and compelling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  {
    title: "Active University Follow-Up",
    description: "Once your application is submitted, the waiting game begins. But you won't be waiting alone. We maintain proactive and continuous communication with university admissions offices to track your application status in real-time. Our dedicated team follows up on pending decisions, requests additional information when needed, and ensures you are never left in the dark about where you stand in the admissions process.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "Scholarship & Education Loan Support",
    description: "Financing your education is a critical step in making your dreams a reality. We provide comprehensive guidance on available scholarships based on your academic merit, background, and chosen field of study. Additionally, we have strong partnerships with leading banks and financial institutions to help you secure education loans with favorable terms and competitive interest rates, making quality education accessible.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "Comprehensive Visa Guidance",
    description: "Navigating visa requirements can be complex and stressful. Our experienced team provides updated, country-specific guidance on visa regulations, required documentation, and application procedures. We assist with thorough document preparation, financial proof requirements, and conduct mock interviews to ensure you are fully prepared and confident for your visa appointment. Our high success rate speaks to our expertise.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" rx="2"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <line x1="7" y1="15" x2="7" y2="15"/>
        <line x1="11" y1="15" x2="17" y2="15"/>
      </svg>
    ),
  },
  {
    title: "Travel & Accommodation Planning",
    description: "Your journey doesn't end with admission. We assist with booking your flights at competitive rates and help you find safe, vetted accommodation options near your university. From arranging airport pickup services to helping you settle into your new home, we ensure your transition is smooth and stress-free. Our local contacts in various countries provide on-ground support when you need it most.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    title: "Pre-Departure & Onboarding Briefing",
    description: "Before you embark on your journey, we conduct thorough pre-departure briefings to prepare you for what lies ahead. This includes detailed guidance on travel logistics, foreign exchange, setting up a bank account abroad, understanding local laws and regulations, cultural nuances, and tips for integrating smoothly into your new academic and social environment. We ensure you feel confident and prepared for this exciting chapter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
  },
];

const Services = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span>Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Advisewise Gives Complete Guidance To The Student From Admission To Accommodation Assistance.
          </motion.p>
        </div>
      </section>

      {/* Services Cards Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles.serviceCard} ${index % 2 === 1 ? styles.reversed : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardText}>
                  <span className={styles.serviceNumber}>0{index + 1}</span>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <div className={styles.cardIcon}>
                  {service.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
