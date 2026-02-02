import { motion } from 'framer-motion';
import { Shield, GraduationCap, FileCheck, CreditCard, Award, Heart } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    id: 1,
    title: 'Trust and Loyalty',
    description: 'Building lasting relationships through transparent and honest guidance for your educational journey.',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Expert Guidance',
    description: 'Personalized counseling from experienced advisors who understand global education systems.',
    icon: GraduationCap,
  },
  {
    id: 3,
    title: 'Surpassing Visa Success Rate',
    description: 'Industry-leading visa approval rate backed by meticulous documentation and preparation.',
    icon: FileCheck,
  },
  {
    id: 4,
    title: 'No Payment',
    description: 'No hidden charges or upfront payments. We believe in transparent pricing and honest service.',
    icon: CreditCard,
  },
  {
    id: 5,
    title: 'Visa Success Rate',
    description: 'Our proven track record ensures maximum chances of visa approval for your dream destination.',
    icon: Award,
  },
  {
    id: 6,
    title: 'Comfy & Friendly',
    description: 'A warm and welcoming environment where your concerns are heard and addressed with care.',
    icon: Heart,
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
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
            Advanced AI automations to grow your business, save time and get way more done!
          </h2>
          <p className={styles.subtitle}>
            Our company creates intelligent models of AI tech that utilize the power of advanced algorithms and strategic techniques.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <service.icon size={40} strokeWidth={1.5} color="#ffffff" />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                <a href="#contact" className={styles.exploreBtn}>
                  Explore
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
