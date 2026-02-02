import { motion } from 'framer-motion';
import styles from './DiscoverSection.module.css';

const DiscoverSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Side - Image slides in from LEFT */}
          <motion.div
            className={styles.leftSide}
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ amount: 0.3 }}
          >
            <div className={styles.imageWrapper}>
              <img
                src="https://advisewise.clicktobill.com/public/images/service2.png"
                alt="Discover your vocation"
                className={styles.discoverImage}
              />
            </div>
          </motion.div>

          {/* Right Side - Content slides in from RIGHT */}
          <motion.div
            className={styles.rightSide}
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ amount: 0.3 }}
          >
            <span className={styles.label}>DISCOVER</span>
            <h2 className={styles.title}>
              Discover your vocation with <span className={styles.highlight}>Advisewise.</span>
            </h2>
            <p className={styles.description}>
              Our aim is to promote overseas education opportunities among students. To elevate,
              we have established connections with 17 prominent countries namely Australia, Canada,
              Dubai, France, Germany, Ireland, Italy, Malaysia, Netherlands, New Zealand, Poland,
              Singapore, Spain, Sweden, Switzerland, United Kingdom and United States of America.
              We swear to strengthen an indestructible bond between the University & the students
              for a promising future.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
