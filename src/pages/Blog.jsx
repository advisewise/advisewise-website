import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, BookOpen } from 'lucide-react';
import { fetchPosts } from '../utils/blogFeed';
import styles from './Blog.module.css';

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Skeleton loading components
const SkeletonFeatured = () => (
  <div className={styles.skeletonFeatured}>
    <div className={styles.skeletonFeaturedImage} />
    <div className={styles.skeletonFeaturedBody}>
      <div className={styles.skeletonFeaturedLine} />
      <div className={styles.skeletonFeaturedLine} />
      <div className={styles.skeletonFeaturedLine} />
      <div className={styles.skeletonFeaturedLine} />
      <div className={styles.skeletonFeaturedLine} />
    </div>
  </div>
);

const SkeletonCard = () => (
  <div className={styles.skeletonCard}>
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonBody}>
      <div className={styles.skeletonLine} />
      <div className={styles.skeletonLine} />
      <div className={styles.skeletonLine} />
      <div className={styles.skeletonLine} />
    </div>
  </div>
);

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchPosts()
      .then((data) => {
        if (!cancelled) {
          setPosts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          console.error('RSS fetch error:', err);
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const featured = posts[0];
  const remaining = posts.slice(1);

  return (
    <div className={styles.blogPage}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.heroTitle}>
          Our <span className={styles.gradientText}>Blog</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Insights, guides, and stories to help you navigate your education
          journey abroad with confidence.
        </p>
      </motion.section>

      {/* Error State */}
      {error && !loading && (
        <motion.section
          className={styles.errorSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.errorTitle}>
            We couldn&apos;t load the blog right now
          </h2>
          <p className={styles.errorText}>
            Please check back later, or visit our Substack directly.
          </p>
          <a
            href="https://parthikannan.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.substackLink}
          >
            Visit our Substack <ExternalLink size={18} />
          </a>
        </motion.section>
      )}

      {/* Loading State */}
      {loading && (
        <div className={styles.container}>
          <section className={styles.featuredSection}>
            <SkeletonFeatured />
          </section>
          <section className={styles.postsSection}>
            <div className={styles.skeletonGrid}>
              {[1, 2, 3].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Content */}
      {!loading && !error && posts.length > 0 && (
        <>
          {/* Featured Post — Full Article */}
          {featured && (
            <div className={styles.articleContainer}>
              {featured.image && (
                <motion.div
                  className={styles.articleHeroWrap}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className={styles.articleHeroImage}
                  />
                  <span className={styles.featuredBadge}>Latest</span>
                </motion.div>
              )}

              <motion.div
                className={styles.articleHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className={styles.articleDate}>{featured.date}</span>
                <h2 className={styles.articleTitle}>{featured.title}</h2>
              </motion.div>

              <motion.article
                className={styles.articleContent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.4 }}
                dangerouslySetInnerHTML={{ __html: featured.content }}
              />

              <motion.div
                className={styles.articleFooter}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.substackLink}
                >
                  Read on Substack <ExternalLink size={18} />
                </a>
              </motion.div>
            </div>
          )}

          {/* Posts Grid */}
          {remaining.length > 0 && (
            <div className={styles.container}>
              <motion.section
                className={styles.postsSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  className={styles.sectionTitle}
                  variants={fadeUp}
                  transition={{ duration: 0.5 }}
                >
                  More Articles
                </motion.h2>
                <div className={styles.postsGrid}>
                  {remaining.map((post, index) => (
                    <motion.a
                      key={post.link}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.postCard}
                      variants={fadeUp}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className={styles.cardImageWrap}>
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className={styles.cardImage}
                          />
                        ) : (
                          <div className={styles.placeholderImage}>
                            <BookOpen size={32} />
                          </div>
                        )}
                      </div>
                      <div className={styles.cardBody}>
                        <span className={styles.cardDate}>{post.date}</span>
                        <h3 className={styles.cardTitle}>{post.title}</h3>
                        <p className={styles.cardExcerpt}>{post.excerpt}</p>
                        <span className={styles.cardReadMore}>
                          Read More <ArrowRight size={16} />
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.section>
            </div>
          )}
        </>
      )}

      {/* Newsletter / Subscribe CTA */}
      <motion.section
        className={styles.newsletter}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.newsletterInner}>
          <h2 className={styles.newsletterTitle}>
            Stay in the <span className={styles.gradientText}>Loop</span>
          </h2>
          <p className={styles.newsletterText}>
            Subscribe to our newsletter for the latest insights on studying
            abroad, university tips, and career guidance delivered to your inbox.
          </p>
          <a
            href="https://parthikannan.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.subscribeBtn}
          >
            Subscribe on Substack <ExternalLink size={18} />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Blog;
