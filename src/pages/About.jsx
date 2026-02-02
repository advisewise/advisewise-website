import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const rotatingTexts = [
  "Education without limits.",
  "One step closer to your dream.",
  "Create your own opportunities.",
  "Dream degree > Dream drama.",
  "Ambition booked your ticket.",
  "Success speaks with accent.",
];

const benefits = [
  {
    title: "The Decision to Transform",
    description: "Choosing to study abroad is a monumental decision, signaling a desire for more than just a degree. The experience pushes you beyond familiar territory, challenging your core beliefs and enabling personal growth in unexpected dimensions—both intellectually and developmentally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    title: "Access to Global Academic Excellence",
    description: "You gain entry to premier institutions recognized worldwide for specialized fields. You can study at prestigious, globally-ranked universities renowned for specific fields. This includes learning from foremost scholars and accessing cutting-edge facilities unavailable in your home nation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: "Experiencing a New Way of Learning",
    description: "Education varies significantly by region and cultural context. Studying abroad exposes you to entirely different academic systems and teaching philosophies. You might encounter debate-focused environments or practical project-based learning, developing adaptability in how you absorb and process knowledge.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    title: "Forging True Independence and Resilience",
    description: "Living independently abroad cultivates self-reliance rapidly. Managing finances, housing, and administrative tasks independently builds confidence. Every problem you solve builds a deep-seated resilience and an unshakeable confidence in your ability to handle anything.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"/>
      </svg>
    ),
  },
  {
    title: "Expanding Your Worldview and Empathy",
    description: "Daily immersion dissolves stereotypes through genuine cultural residence. When you live in a new culture, you make the critical shift from being a tourist to being a resident. This transition cultivates authentic cross-cultural understanding and compassion.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    title: "Mastering a New Language Through Immersion",
    description: "Classroom study differs fundamentally from environmental language acquisition. When you must use a new language every single day to order coffee, debate with classmates, or make new friends, your proficiency skyrockets. Authentic communication develops nuanced linguistic competency.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    title: "Building a Lifelong Global Network",
    description: "Your peer group becomes an international professional asset. Your classmates, roommates, and friends will come from dozens of different countries. These relationships organically transform into valuable long-term career and personal connections globally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Gaining a Competitive Career Edge",
    description: "Employers actively seek graduates demonstrating adaptability. Employers actively seek out graduates who have proven they can successfully navigate new and challenging environments. International credentials accelerate job placement and frequently result in higher initial compensation packages.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="20" x2="12" y2="10"/>
        <line x1="18" y1="20" x2="18" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
  },
  {
    title: "Developing In-Demand Soft Skills",
    description: "Employers prize practical competencies beyond traditional academics. The degree demonstrates adaptation capability, intercultural communication proficiency, problem-solving aptitude, and genuine worldwide perspective—qualities modern organizations prioritize.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: "A Lifelong Return on Investment",
    description: "Benefits transcend resume enhancement. The true benefits are not just a line on your resume or a photo album of your travels. Rather, experiences become permanently woven into character development, providing enduring advantages professionally and personally.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
];

const teamMembers = [
  { name: "@TeamMember1", time: "12 min" },
  { name: "@TeamMember2", time: "12 min" },
  { name: "@TeamMember3", time: "12 min" },
  { name: "@TeamMember4", time: "12 min" },
];

const About = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [email, setEmail] = useState('');
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section with Sliding Text */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.sliderContainer}>
            <div
              className={styles.slider}
              style={{ transform: `translateY(-${currentTextIndex * 100}px)` }}
            >
              {rotatingTexts.map((text, index) => (
                <div key={index} className={styles.slideText}>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className={styles.welcomeSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Welcome to <span className={styles.highlight}>Advisewise</span></h2>
            <p className={styles.welcomeText}>
              Welcome to Advisewise, your dedicated partner in transforming study abroad aspirations into reality.
              We believe that education is the key to unlocking potential, and our mission is to make world-class
              learning accessible to every ambitious student. Our team simplifies the study-abroad journey through
              comprehensive assistance and building strong relationships with top universities worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Goal Section - Sticky Scroll */}
      <section className={styles.visionSection}>
        <div className={styles.container}>
          <div className={styles.visionContainer}>
            <motion.div
              className={styles.visionCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left side tabs - 3 stacked */}
              <div className={styles.leftTabs}>
                <div className={styles.leftTab}></div>
                <div className={styles.leftTab}></div>
                <div className={styles.leftTab}></div>
              </div>
              {/* Right side tab */}
              <div className={styles.rightTabs}>
                <div className={styles.rightTab}></div>
              </div>
              {/* Top notches */}
              <div className={styles.notch}></div>
              <div className={styles.topRightNotch}></div>
              <h3>Our <span>Vision</span></h3>
              <p>
                To be the world's most trusted educational consultancy, empowering students
                from all backgrounds to achieve their full academic and personal potential
                on a global stage. We are committed to making foreign education accessible
                to everyone.
              </p>
            </motion.div>

            <motion.div
              className={styles.visionCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left side tabs - 3 stacked */}
              <div className={styles.leftTabs}>
                <div className={styles.leftTab}></div>
                <div className={styles.leftTab}></div>
                <div className={styles.leftTab}></div>
              </div>
              {/* Right side tab */}
              <div className={styles.rightTabs}>
                <div className={styles.rightTab}></div>
              </div>
              {/* Top notches */}
              <div className={styles.notch}></div>
              <div className={styles.topRightNotch}></div>
              <h3>Our <span>Mission</span></h3>
              <p>
                To provide honest, comprehensive, and personalized guidance to every student.
                We achieve this by operating with absolute integrity, striving for excellence,
                and building strong, lasting relationships with both our students and our
                partner universities around the world.
              </p>
            </motion.div>

            <motion.div
              className={styles.visionCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left side tabs - 3 stacked */}
              <div className={styles.leftTabs}>
                <div className={styles.leftTab}></div>
                <div className={styles.leftTab}></div>
                <div className={styles.leftTab}></div>
              </div>
              {/* Right side tab */}
              <div className={styles.rightTabs}>
                <div className={styles.rightTab}></div>
              </div>
              {/* Top notches */}
              <div className={styles.notch}></div>
              <div className={styles.topRightNotch}></div>
              <h3>Our <span>Goal</span></h3>
              <p>
                ACS has confidence in building solid and cordial relationships with its
                representatives, universities, clients, parent organizations and partner
                consultants. We aim to achieve the Vision and Mission through the objective
                to acquire the adequate knowledge about the study destinations, the institutions,
                and the programs to provide quality counseling and guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Study Abroad Section */}
      <section className={styles.benefitsSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why <span className={styles.highlight}>Study Abroad?</span>
          </motion.h2>
          <p className={styles.sectionSubtitle}>
            10 life-changing reasons to take the leap
          </p>

          <motion.div
            className={styles.benefitsGrid}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our <span className={styles.highlight}>Team</span>
          </motion.h2>

          <motion.div
            className={styles.teamCarousel}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamImageWrapper}>
                  <div className={styles.teamImagePlaceholder}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
                <div className={styles.teamInfo}>
                  <span className={styles.teamName}>{member.name}</span>
                  <span className={styles.teamTime}>{member.time}</span>
                </div>
                <div className={styles.teamSocials}>
                  <a href="#" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.newsletterContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>SUBSCRIBE ADVISEWISE AND GET THE LATEST UPDATE</h2>
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
