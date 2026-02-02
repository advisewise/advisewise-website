import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const students = [
  {
    id: 1,
    name: 'Priya Sharma',
    description: 'Successfully placed at Oxford University pursuing MSc in Computer Science with full scholarship.',
    language: 'English',
    age: 'Young adult',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    description: 'Admitted to University of Toronto for MBA Finance program with excellent career prospects.',
    language: 'English',
    age: 'Young adult',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 3,
    name: 'Ananya Reddy',
    description: 'Pursuing MS Engineering at TU Munich with research opportunities in renewable energy.',
    language: 'German',
    age: 'Young adult',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    description: 'PhD candidate at MIT focusing on AI/ML research with groundbreaking publications.',
    language: 'English',
    age: 'Adult',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    id: 5,
    name: 'Sneha Gupta',
    description: 'Medical student at University of Melbourne with hands-on clinical experience.',
    language: 'English',
    age: 'Young adult',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
  },
  {
    id: 6,
    name: 'Arjun Kumar',
    description: 'Data Science graduate at NUS Singapore working on cutting-edge analytics projects.',
    language: 'English',
    age: 'Young adult',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? students.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= students.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Our Success Stories</h2>
          <p className={styles.subtitle}>
            Meet our students who achieved their dreams of studying abroad!
          </p>
        </motion.div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          <div
            className={styles.carousel}
            ref={carouselRef}
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {students.map((student, index) => (
              <motion.div
                key={student.id}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={student.image}
                    alt={student.name}
                    className={styles.image}
                    loading="lazy"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.studentName}>{student.name}</h3>
                  <p className={styles.description}>{student.description}</p>
                  <div className={styles.tags}>
                    <span className={styles.languageTag}>{student.language}</span>
                    <span className={styles.ageTag}>{student.age}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navigation}>
          <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className={styles.navBtn} onClick={handleNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
