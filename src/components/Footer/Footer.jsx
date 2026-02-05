import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About us', href: '#about' },
  { name: 'Why Study Abroad?', href: '#why-study-abroad' },
  { name: 'Services', href: '#services' },
  { name: 'Contact us', href: '#contact' },
  { name: 'Terms & Conditions', href: '#terms' },
];

const exploreLinks = [
  { name: 'Registration', href: '#registration' },
  { name: 'Countries', href: '#countries' },
  { name: 'MBBS', href: '#mbbs' },
  { name: 'Contact us', href: '#contact' },
  { name: 'Privacy Policy', href: '#privacy' },
  { name: 'Student Login', href: '#login' },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61581127782176',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/advisewise_studyabroad/?hl=en',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@AdvisewiseStudyAbroad',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer - Top Section */}
        <div className={styles.mainFooter}>
          {/* Logo Column */}
          <div className={styles.logoColumn}>
            <a href="#home" className={styles.logo}>
              <img
                src="/images/logo.png"
                alt="Advisewise"
                className={styles.logoImage}
              />
            </a>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>QUICK LINKS</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>EXPLORE</h4>
            <ul className={styles.linksList}>
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Offices Column */}
          <div className={styles.officesColumn}>
            <h4 className={styles.columnTitle}>CORPORATE OFFICES</h4>
            <div className={styles.officesList}>
              <div className={styles.officeItem}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.locationIcon}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Headquarter: Warsaw 01-459, Poland.</span>
              </div>
              <div className={styles.officeItem}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.locationIcon}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Branch: Dr.SJ Complex, Arulanandha Nagar Main Road, Thanjavur - 613 007.</span>
              </div>
              <div className={styles.officeItem}>
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.locationIcon}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>#56, Ground Floor, Siddhartha Apartments, Habibullah Rd. T. Nagar, Chennai, 600017</span>
              </div>
            </div>
          </div>

          {/* Reach Us Column */}
          <div className={styles.reachUsColumn}>
            <h4 className={styles.columnTitle}>REACH US</h4>
            <div className={styles.contactList}>
              <a href="tel:+919380708070" className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91-93807 08070
              </a>
              <a href="tel:+919629020847" className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91-96290 20847
              </a>
              <a href="mailto:applications@advisewise.co" className={styles.contactItem}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.contactIcon}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                applications@advisewise.co
              </a>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.bottomFooter}>
          <p className={styles.tagline}>Discover your vocation with Advisewise.</p>
          <motion.a
            href="/images/brochure.pdf"
            className={styles.brochureBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            download
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download Our Brochure
          </motion.a>
          <p className={styles.copyright}>
            &copy; 2025 | Advisewise Group of Companies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
