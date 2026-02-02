import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

// Using local hero background images
const heroSlides = [
  {
    image: '/images/hero/bg1.png',
    location: 'EUROPE',
  },
  {
    image: '/images/hero/bg2.png',
    location: 'USA',
  },
  {
    image: '/images/hero/bg3.png',
    location: 'LONDON',
  },
  {
    image: '/images/hero/bg4.png',
    location: 'NEWZEALAND',
  },
  {
    image: '/images/hero/bg5.png',
    location: 'CANADA',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setIsExiting(true);
      setIsEntering(false);

      // After exit animation (2.5s), switch image and start entry
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setIsExiting(false);
        setIsEntering(true);
      }, 2500);

      // After entry animation (another 2.5s), reset
      setTimeout(() => {
        setIsEntering(false);
      }, 5000);

    }, 7500); // Full cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      {/* Background Image Layer - rotates and zooms out */}
      <div
        className={`${styles.backgroundImage} ${isExiting ? styles.exitAnim : ''} ${isEntering ? styles.enterAnim : ''}`}
        style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
      />

      {/* Foreground Image Layer with Donut Mask - counter-rotates */}
      <div
        className={`${styles.foregroundImage} ${isExiting ? styles.exitAnim : ''} ${isEntering ? styles.enterAnim : ''}`}
        style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
      />

      {/* Vignette Overlay for depth */}
      <div className={styles.vignette} />

      {/* Dark Overlay */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className={styles.title}>
            <span className={styles.titleSmall}>Your Gateway to</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                className={styles.titleMain}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {heroSlides[currentIndex].location}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className={styles.subtitle}>
            Transform your dreams into reality with expert guidance for studying abroad.
            We connect you to top universities across 30+ countries worldwide.
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Testimonial Card */}
      <motion.div
        className={styles.testimonialCard}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className={styles.testimonialImages}>
          <img
            src="https://advisewise.clicktobill.com/public/images/girl.png"
            alt="Student 1"
            className={styles.testimonialImg}
          />
          <img
            src="https://advisewise.clicktobill.com/public/images/student.png"
            alt="Student 2"
            className={styles.testimonialImg}
          />
          <img
            src="https://advisewise.clicktobill.com/public/images/student1.png"
            alt="Student 3"
            className={styles.testimonialImg}
          />
        </div>
        <div className={styles.testimonialText}>
          <span className={styles.testimonialCount}>500+</span>
          <span className={styles.testimonialLabel}>Students placed worldwide</span>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
