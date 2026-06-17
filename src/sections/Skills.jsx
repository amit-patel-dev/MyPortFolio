import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaCode,
  FaPalette,
  FaServer,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaVial,
  FaSitemap,
  FaToolbox,
  FaUsers,
} from 'react-icons/fa';

const skillGroups = [
  {
    icon: <FaCode />,
    title: 'Languages',
    color: '#3b82f6',
    skills: ['C#', 'JavaScript (ES6+)', 'TypeScript', 'SQL Server', 'Bash', 'C'],
  },
  {
    icon: <FaPalette />,
    title: 'Frontend',
    color: '#06b6d4',
    skills: ['React.js', 'Tailwind CSS', 'Bootstrap 5', 'Material UI', 'HTML5', 'CSS3'],
  },
  {
    icon: <FaServer />,
    title: 'Backend',
    color: '#8b5cf6',
    skills: ['ASP.NET Core', 'EF Core', 'ADO.NET', 'Web API', 'REST API', 'SignalR', 'Websocket'],
  },
  {
    icon: <FaDatabase />,
    title: 'Databases',
    color: '#10b981',
    skills: ['SQL Server', 'PostgreSQL', 'Redis', 'Firebase'],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & Servers',
    color: '#f59e0b',
    skills: ['IIS Server', 'Vercel', 'Kestrel', 'Docker'],
  },
  {
    icon: <FaCogs />,
    title: 'DevOps / CI/CD',
    color: '#ef4444',
    skills: ['Docker', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    icon: <FaVial />,
    title: 'Testing & QA',
    color: '#ec4899',
    skills: ['Postman', 'Swagger / OpenAPI', 'Graph Api Explorer'],
  },
  {
    icon: <FaSitemap />,
    title: 'Architecture',
    color: '#06b6d4',
    skills: ['MVC', 'Repository Pattern', 'CQRS', 'Clean Architecture', 'Event-Driven'],
  },
  {
    icon: <FaToolbox />,
    title: 'Tools',
    color: '#3b82f6',
    skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Figma', 'SSMS'],
  },
  {
    icon: <FaUsers />,
    title: 'Methodologies',
    color: '#8b5cf6',
    skills: ['Agile / Scrum', 'Code Review', 'Pair Programming'],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <motion.div
          style={styles.titleWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Skills & Technologies</h2>
          <div style={styles.titleUnderline} />
        </motion.div>

        {/* Skills Grid */}
        <div style={styles.grid}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              style={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: `0 16px 40px rgba(0,0,0,0.3), 0 0 20px ${group.color}15`,
                borderColor: `${group.color}40`,
              }}
            >
              {/* Card Header */}
              <div style={styles.cardHeader}>
                <span style={{ ...styles.icon, color: group.color }}>{group.icon}</span>
                <h3 style={styles.cardTitle}>{group.title}</h3>
              </div>

              {/* Skill Tags */}
              <div style={styles.tagsWrapper}>
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    style={{
                      ...styles.tag,
                      borderColor: `${group.color}30`,
                      color: group.color,
                      background: `${group.color}10`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
    background: '#0a0f1c',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '28px',
    cursor: 'default',
    transition: 'all 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '18px',
  },
  icon: {
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '1.15rem',
    fontWeight: 600,
    color: '#fff',
    margin: 0,
  },
  tagsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    padding: '6px 14px',
    fontSize: '0.82rem',
    fontWeight: 500,
    borderRadius: '20px',
    border: '1px solid',
    letterSpacing: '0.3px',
    whiteSpace: 'nowrap',
  },
};

export default Skills;
