import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { fetchPosts } from '../utils/blogFeed';
import styles from './BlogPost.module.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetchPosts()
      .then((posts) => {
        if (cancelled) return;
        const found = posts.find((p) => p.slug === slug);
        if (found) {
          setPost(found);
        } else {
          setError('Post not found');
        }
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to load post:', err);
        setError(err.message);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.skeleton}>
            <div className={styles.skeletonBack} />
            <div className={styles.skeletonImage} />
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonDate} />
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLineShort} />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.errorWrap}>
            <h1 className={styles.errorTitle}>
              {error === 'Post not found'
                ? 'Article Not Found'
                : 'Something went wrong'}
            </h1>
            <p className={styles.errorText}>
              {error === 'Post not found'
                ? "We couldn't find the article you're looking for."
                : 'Please try again later.'}
            </p>
            <Link to="/blog" className={styles.backLink}>
              <ArrowLeft size={18} /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Hero Image */}
      {post.image && (
        <motion.div
          className={styles.heroImage}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <img src={post.image} alt={post.title} />
        </motion.div>
      )}

      <div className={styles.container}>
        <motion.div
          className={styles.articleHeader}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>
          <h1 className={styles.title}>{post.title}</h1>
          <span className={styles.date}>{post.date}</span>
        </motion.div>

        <motion.article
          className={styles.articleContent}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <motion.div
          className={styles.articleFooter}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.substackBtn}
          >
            Read on Substack <ExternalLink size={16} />
          </a>
          <Link to="/blog" className={styles.backLink}>
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
