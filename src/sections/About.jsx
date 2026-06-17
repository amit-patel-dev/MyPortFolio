import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCode, FaProjectDiagram } from 'react-icons/fa';

const stats = [
  { icon: <FaBriefcase />, value: '3+', label: 'Years Experience', color: '#3b82f6' },
  { icon: <FaCode />, value: '10+', label: 'APIs Delivered', color: '#06b6d4' },
  { icon: <FaProjectDiagram />, value: '7+', label: 'Key Projects', color: '#8b5cf6' },
];

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Section Title */}
        <motion.div
          style={styles.titleWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>About Me</h2>
          <div style={styles.titleUnderline} />
        </motion.div>

        {/* Summary */}
        <motion.p
          style={styles.summary}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Results-driven .NET Full Stack Developer with over 3 years of professional experience at
          Technosys Services Pvt. Ltd., Lucknow. I specialize in building high-performance, scalable
          web applications using ASP.NET Core, React.js, and SQL Server. My expertise spans designing
          RESTful APIs, implementing clean architecture patterns, integrating third-party services, and
          delivering government and enterprise-grade solutions. I am passionate about writing clean,
          maintainable code and continuously learning emerging technologies to drive impactful software
          solutions.
        </motion.p>

        {/* Stats Grid */}
        <div style={styles.statsGrid}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              style={styles.statCard}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 30px ${stat.color}22`,
              }}
            >
              <div style={{ ...styles.iconWrapper, color: stat.color }}>
                {stat.icon}
              </div>
              <h3 style={{ ...styles.statValue, color: stat.color }}>{stat.value}</h3>
              <p style={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
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
    maxWidth: '1000px',
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
  summary: {
    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 1.9,
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 56px auto',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '28px',
  },
  statCard: {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '40px 28px',
    textAlign: 'center',
    cursor: 'default',
    transition: 'all 0.3s ease',
  },
  iconWrapper: {
    fontSize: '2.2rem',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'center',
  },
  statValue: {
    fontSize: '2.8rem',
    fontWeight: 800,
    margin: '0 0 8px 0',
  },
  statLabel: {
    fontSize: '1rem',
    color: 'rgba(255,255,255,0.6)',
    margin: 0,
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
};

export default About;
