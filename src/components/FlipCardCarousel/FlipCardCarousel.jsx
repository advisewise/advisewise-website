import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './FlipCardCarousel.module.css';

const cards = [
  {
    id: 1,
    title: 'Global Opportunities',
    frontIcon: '🌍',
    description: 'Access to thousands of universities and courses worldwide, opening doors to unlimited possibilities.',
    color: 'linear-gradient(135deg, #0ea5a8, #0284c7)',
  },
  {
    id: 2,
    title: 'Academic Excellence',
    frontIcon: '🎓',
    description: 'Partner with top-ranked institutions known for quality education and research excellence.',
    color: 'linear-gradient(135deg, #f97316, #ea580c)',
  },
  {
    id: 3,
    title: 'Career Growth',
    frontIcon: '📈',
    description: 'Build a successful career with international exposure and globally recognized qualifications.',
    color: 'linear-gradient(135deg, #a855f7, #7c3aed)',
  },
  {
    id: 4,
    title: 'Cultural Experience',
    frontIcon: '🌏',
    description: 'Immerse yourself in diverse cultures, traditions, and perspectives from around the world.',
    color: 'linear-gradient(135deg, #ec4899, #db2777)',
  },
  {
    id: 5,
    title: 'Scholarship Support',
    frontIcon: '💰',
    description: 'Get assistance finding and applying for scholarships to make your dream affordable.',
    color: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    id: 6,
    title: 'Visa Assistance',
    frontIcon: '📋',
    description: '98% visa success rate with expert guidance through the entire application process.',
    color: 'linear-gradient(135deg, #3b82f6, #2563eb)',
  },
  {
    id: 7,
    title: 'Language Support',
    frontIcon: '🗣️',
    description: 'IELTS, TOEFL, and language preparation to help you meet university requirements.',
    color: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
  {
    id: 8,
    title: 'Alumni Network',
    frontIcon: '🤝',
    description: 'Connect with our global alumni network for mentorship and career opportunities.',
    color: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  },
];

const FlipCardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const visibleCards = 4;
  const maxIndex = cards.length - visibleCards;

  const nextSlide = () => {
    setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Travel Diaries, <span className={styles.highlight}>Insights from Adventurers</span>
          </h2>
          <p className={styles.subtitle}>
            Explore the world with us and embark on unforgettable journeys to mesmerizing destinations.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          className={styles.carouselWrapper}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.carousel}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
              }}
            >
              {cards.map((card, index) => (
                <div key={card.id} className={styles.cardWrapper}>
                  <div className={styles.flipCard}>
                    <div className={styles.flipCardInner}>
                      {/* Front */}
                      <div
                        className={styles.flipCardFront}
                        style={{ background: card.color }}
                      >
                        <span className={styles.cardIcon}>{card.frontIcon}</span>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                      </div>
                      {/* Back */}
                      <div
                        className={styles.flipCardBack}
                        style={{ background: card.color }}
                      >
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <p className={styles.cardDescription}>{card.description}</p>
                        <a href="#contact" className={styles.cardLink}>
                          Learn More
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <button
              className={styles.navBtn}
              onClick={prevSlide}
              disabled={activeIndex === 0}
              aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className={styles.dots}>
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              className={styles.navBtn}
              onClick={nextSlide}
              disabled={activeIndex === maxIndex}
              aria-label="Next"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlipCardCarousel;
