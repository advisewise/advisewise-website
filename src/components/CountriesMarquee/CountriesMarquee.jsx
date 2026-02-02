import styles from './CountriesMarquee.module.css';

const countries = [
  { name: 'Australia', code: 'au' },
  { name: 'Canada', code: 'ca' },
  { name: 'UAE', code: 'ae' },
  { name: 'France', code: 'fr' },
  { name: 'Germany', code: 'de' },
  { name: 'Ireland', code: 'ie' },
  { name: 'Italy', code: 'it' },
  { name: 'Malaysia', code: 'my' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'New Zealand', code: 'nz' },
  { name: 'Poland', code: 'pl' },
  { name: 'Singapore', code: 'sg' },
  { name: 'Spain', code: 'es' },
  { name: 'Sweden', code: 'se' },
  { name: 'Switzerland', code: 'ch' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'United States', code: 'us' },
];

const CountriesMarquee = () => {
  // Duplicate for seamless loop
  const row1Countries = [...countries, ...countries];
  const row2Countries = [...countries.slice().reverse(), ...countries.slice().reverse()];

  return (
    <section id="countries" className={styles.section}>
      <div className={styles.marqueeContainer}>
        {/* Row 1 - Scrolls Left */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeContent}>
            {row1Countries.map((country, index) => (
              <div key={`row1-${index}`} className={styles.countryCard}>
                <img
                  src={`https://flagcdn.com/${country.code}.svg`}
                  alt={`${country.name} flag`}
                  className={styles.flag}
                />
                <span className={styles.countryName}>{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right */}
        <div className={styles.marqueeRow}>
          <div className={`${styles.marqueeContent} ${styles.reverse}`}>
            {row2Countries.map((country, index) => (
              <div key={`row2-${index}`} className={styles.countryCard}>
                <img
                  src={`https://flagcdn.com/${country.code}.svg`}
                  alt={`${country.name} flag`}
                  className={styles.flag}
                />
                <span className={styles.countryName}>{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountriesMarquee;
