import { motion } from 'framer-motion';
import styles from './UniversitiesMarquee.module.css';

// Using local university logos (21 logos)
const universities = Array.from({ length: 21 }, (_, i) => ({
  id: i,
  logo: `/images/universities/uni${i === 0 ? '' : i}.png`,
}));

const UniversitiesMarquee = () => {
  // Duplicate logos for seamless infinite scroll
  const logos = [...universities, ...universities];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>UNIVERSITIES</span>
          <h2 className={styles.title}>WORLD OF OPPORTUNITIES OPEN FOR YOU</h2>
        </motion.div>
      </div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          <div className={styles.marqueeContent}>
            {logos.map((uni, index) => (
              <div key={`uni-${index}`} className={styles.universityCard}>
                <img
                  src={uni.logo}
                  alt={`University ${uni.id + 1}`}
                  className={styles.logo}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitiesMarquee;
