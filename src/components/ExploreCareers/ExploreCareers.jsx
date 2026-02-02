import { motion } from 'framer-motion';
import { Trophy, Landmark, BookOpen, Building2 } from 'lucide-react';
import styles from './ExploreCareers.module.css';

const statCards = [
  {
    id: 1,
    icon: Trophy,
    title: 'Success Stories',
    number: '500+',
    description: 'Students successfully placed in top universities worldwide with our expert guidance.',
  },
  {
    id: 2,
    icon: Landmark,
    title: 'Universities',
    number: '3,000+',
    description: 'Partner universities across 17+ countries offering diverse programs.',
  },
  {
    id: 3,
    icon: BookOpen,
    title: 'Courses',
    number: '1,000+',
    description: 'Wide range of courses from undergraduate to doctoral programs available.',
  },
  {
    id: 4,
    icon: Building2,
    title: 'Branches',
    number: '4',
    description: 'Offices across India to serve students from every corner of the country.',
  },
];

const ExploreCareers = () => {
  return (
    <section id="careers" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>FIND YOUR CAREER</span>
          <h2 className={styles.title}>
            Find Your Career with <span className={styles.highlight}>Advisewise</span>
          </h2>
          <p className={styles.subtitle}>
            Discover endless opportunities with our comprehensive career guidance and university placement services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className={styles.carouselWrapper}>
          <div className={styles.cardsTrack}>
            {statCards.map((card, index) => (
              <motion.div
                key={card.id}
                className={`${styles.statCard} ${index % 2 === 0 ? styles.cardUp : styles.cardDown}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className={styles.cardIcon}>
                  <card.icon size={48} strokeWidth={1.5} color="#ffffff" />
                </span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <span className={styles.cardNumber}>{card.number}</span>
                <p className={styles.cardDescription}>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCareers;
