import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const bullets = [
  'Designed and implemented 10+ production-grade RESTful APIs using ASP.NET Core, reducing API response times by 30% through query optimization and Redis caching strategies.',
  'Built and maintained internal API documentation and coding standards, improving team onboarding efficiency and ensuring consistent code quality across projects.',
  'Integrated major social media platforms (Facebook, Instagram, Twitter/X, LinkedIn, WhatsApp, YouTube) using official APIs for social logins, data sharing, and content publishing.',
  'Developed a centralized Social Media Management Platform enabling multi-account management, post scheduling, real-time analytics, and engagement tracking from a single dashboard.',
  'Implemented Meta WhatsApp Business Platform for chatbot automation, live agent support, and case registration workflows, improving customer response efficiency.',
  'Integrated DigiLocker, API Setu, and Aadhaar-based verification into School Games Federation of India platform for secure digital document authentication.',
  'Built a Media Monitoring & Intelligence Platform integrating RSS feeds, YouTube Data API, TV streams, and news APIs with NLP-based Entity Recognition, Sentiment Analysis, and Severity Detection.',
  'Delivered Women Power Line (1090) — a government call centre system with IVRS integration, live monitoring, IP authentication, and real-time analytics dashboards.',
  'Optimized database queries and stored procedures in SQL Server, improving data retrieval speed and overall platform scalability.',
];

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <motion.div
          style={styles.titleWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Professional Experience</h2>
          <div style={styles.titleUnderline} />
        </motion.div>

        {/* Timeline */}
        <div style={styles.timeline}>
          {/* Timeline line */}
          <motion.div
            style={styles.timelineLine}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          />

          {/* Timeline dot */}
          <motion.div
            style={styles.timelineDot}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3, type: 'spring' }}
          >
            <FaBriefcase style={{ fontSize: '1rem', color: '#fff' }} />
          </motion.div>

          {/* Content card */}
          <motion.div
            style={styles.card}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Header */}
            <div style={styles.cardHeader}>
              <div>
                <h3 style={styles.role}>Software Developer</h3>
                <p style={styles.company}>Technosys Services Pvt. Ltd., Lucknow</p>
              </div>
              <span style={styles.period}>March 2023 – Present</span>
            </div>

            {/* Bullets */}
            <ul style={styles.bulletList}>
              {bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  style={styles.bulletItem}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                >
                  <span style={styles.bulletDot} />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 24px',
    background: '#111827',
    position: 'relative',
  },
  container: {
    maxWidth: '950px',
    margin: '0 auto',
  },
  titleWrapper: {
    textAlign: 'center',
    marginBottom: '56px',
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
  timeline: {
    position: 'relative',
    paddingLeft: '50px',
  },
  timelineLine: {
    position: 'absolute',
    left: '18px',
    top: '0',
    bottom: '0',
    width: '2px',
    background: 'linear-gradient(180deg, #3b82f6, #06b6d4, rgba(6,182,212,0.1))',
    transformOrigin: 'top',
  },
  timelineDot: {
    position: 'absolute',
    left: '6px',
    top: '0',
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 20px rgba(59,130,246,0.4)',
    zIndex: 1,
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '32px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '24px',
    paddingBottom: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
  },
  role: {
    fontSize: '1.4rem',
    fontWeight: 700,
    margin: '0 0 6px 0',
    color: '#fff',
  },
  company: {
    fontSize: '1rem',
    color: '#06b6d4',
    margin: 0,
    fontWeight: 500,
  },
  period: {
    fontSize: '0.9rem',
    color: '#8b5cf6',
    fontWeight: 600,
    padding: '6px 16px',
    background: 'rgba(139,92,246,0.1)',
    borderRadius: '20px',
    border: '1px solid rgba(139,92,246,0.2)',
    whiteSpace: 'nowrap',
  },
  bulletList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.7,
  },
  bulletDot: {
    width: '6px',
    height: '6px',
    minWidth: '6px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    marginTop: '9px',
  },
};

export default Experience;
