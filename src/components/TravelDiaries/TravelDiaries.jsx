import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './TravelDiaries.module.css';

// Placeholder videos - replace with actual feedback video URLs
const feedbackVideos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
    videoUrl: '', // Add actual video URL
    name: 'Student Feedback 1',
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80',
    videoUrl: '', // Add actual video URL
    name: 'Student Feedback 2',
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80',
    videoUrl: '', // Add actual video URL
    name: 'Student Feedback 3',
  },
  {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=80',
    videoUrl: '', // Add actual video URL
    name: 'Student Feedback 4',
  },
];

const TravelDiaries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? feedbackVideos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === feedbackVideos.length - 1 ? 0 : prev + 1));
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
          <h2 className={styles.title}>
            Travel Diaries, <span className={styles.highlight}>Insights from Adventurers</span>
          </h2>
          <p className={styles.subtitle}>
            Explore the world with us and embark on unforgettable journeys to mesmerizing destinations.
          </p>
        </motion.div>

        {/* Videos Carousel */}
        <motion.div
          className={styles.carouselWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.carousel}>
            {feedbackVideos.map((video, index) => (
              <div
                key={video.id}
                className={`${styles.videoCard} ${index === activeIndex ? styles.active : ''}`}
              >
                <div className={styles.videoWrapper}>
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className={styles.thumbnail}
                  />
                  <div className={styles.playButton}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <p className={styles.videoName}>{video.name}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <button className={styles.navBtn} onClick={handlePrev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className={styles.dots}>
              {feedbackVideos.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
            <button className={styles.navBtn} onClick={handleNext} aria-label="Next">
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

export default TravelDiaries;
