import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="education" ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <motion.div
          style={styles.titleWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Education</h2>
          <div style={styles.titleUnderline} />
        </motion.div>

        {/* Education Card */}
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{
            y: -6,
            boxShadow: '0 20px 50px rgba(0,0,0,0.3), 0 0 30px rgba(59,130,246,0.1)',
          }}
        >
          {/* Icon */}
          <motion.div
            style={styles.iconCircle}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
          >
            <FaGraduationCap style={styles.icon} />
          </motion.div>

          {/* Details */}
          <div style={styles.details}>
            <h3 style={styles.degree}>Master of Computer Applications (MCA)</h3>
            <p style={styles.university}>Integral University, Lucknow</p>
            <div style={styles.tagRow}>
              <span style={styles.tag}>Computer Science & Engineering</span>
            </div>
          </div>

          {/* Decorative gradient border glow */}
          <div style={styles.glowAccent} />
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 24px',
    background: '#0a0f1c',
    position: 'relative',
  },
  container: {
    maxWidth: '750px',
    margin: '0 auto',
  },
  titleWrapper: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  title: {
    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: 700,
    margin: '0 0 12px 0',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  titleUnderline: {
    width: '60px',
    height: '4px',
    background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
    borderRadius: '2px',
    margin: '0 auto',
  },
  card: {
    position: 'relative',
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '20px',
    padding: '48px 40px',
    textAlign: 'center',
    overflow: 'hidden',
    cursor: 'default',
    transition: 'all 0.3s ease',
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 28px auto',
    boxShadow: '0 8px 30px rgba(59,130,246,0.3)',
  },
  icon: {
    fontSize: '2rem',
    color: '#fff',
  },
  details: {
    position: 'relative',
    zIndex: 1,
  },
  degree: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#fff',
    margin: '0 0 10px 0',
  },
  university: {
    fontSize: '1.1rem',
    color: '#06b6d4',
    margin: '0 0 20px 0',
    fontWeight: 500,
  },
  tagRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  tag: {
    padding: '8px 20px',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#8b5cf6',
    background: 'rgba(139,92,246,0.1)',
    border: '1px solid rgba(139,92,246,0.25)',
    borderRadius: '20px',
    letterSpacing: '0.3px',
  },
  glowAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)',
    borderRadius: '20px 20px 0 0',
  },
};

export default Education;
