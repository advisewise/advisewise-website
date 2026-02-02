import { motion } from 'framer-motion';
import styles from './PoweringSection.module.css';

const studentImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
];

const PoweringSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.subtitle}>Our numbers speaking for themselves</p>
          <h2 className={styles.title}>
            Powering modern business and teams around the world!
          </h2>
          <p className={styles.description}>
            Our content policy does not allow users to generate violent, adult, or political content, among other categories and human monitoring systems guard.
          </p>
        </motion.div>

        <motion.div
          className={styles.imagesRow}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {studentImages.map((image, index) => (
            <div key={index} className={styles.imageWrapper}>
              <img
                src={image}
                alt={`Student ${index + 1}`}
                className={styles.image}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PoweringSection;
