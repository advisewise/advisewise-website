import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'About Us', href: '/about', isRoute: true },
  { name: 'Services', href: '/services', isRoute: true },
  { name: 'MBBS', href: '/#mbbs', isRoute: false },
  { name: 'Countries', href: '/#countries', isRoute: false },
  { name: 'Blog', href: '/#blog', isRoute: false },
  { name: 'Contact Us', href: '/#contact', isRoute: false },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img
            src="/images/logo.png"
            alt="Advisewise Logo"
            className={styles.logoImg}
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className={`${styles.navLink} ${isActive(link.href) ? styles.active : ''}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a href={link.href} className={styles.navLink}>
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link to="/login" className={styles.loginBtn}>
            Students Login
          </Link>
          <button
            className={styles.menuBtn}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
            <span className={`${styles.menuLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className={styles.mobileNav}>
              <ul>
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.active : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={styles.mobileNavLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>
              <Link to="/login" className={styles.mobileLoginBtn} onClick={() => setIsMobileMenuOpen(false)}>
                Students Login
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
