import { useState, useEffect, useRef } from 'react';
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const preloadedImages = useRef([]);

  // Preload all hero images on mount
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = heroSlides.length;

    heroSlides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        preloadedImages.current[index] = img;
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      // Start transition animation
      setIsTransitioning(true);

      // After transition completes (2.5s), switch to next image and reset
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 2500);

    }, 5000); // 2.5s visible + 2.5s transition

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section id="home" className={styles.hero}>
      {/* Background Image Layer - zooms and blurs during transition */}
      <div
        className={`${styles.backgroundImage} ${isTransitioning ? styles.zoomOut : ''}`}
        style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
      />

      {/* Foreground Image Layer with Donut Mask - continuously rotates */}
      <div
        className={`${styles.foregroundImage} ${isTransitioning ? styles.zoomOut : ''}`}
        style={{ backgroundImage: `url(${heroSlides[currentIndex].image})` }}
      />

      {/* Donut Ring - continuously rotating */}
      <div className={styles.donutRing} />

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
            src="/images/girl.png"
            alt="Student 1"
            className={styles.testimonialImg}
          />
          <img
            src="/images/student.png"
            alt="Student 2"
            className={styles.testimonialImg}
          />
          <img
            src="/images/student1.png"
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
