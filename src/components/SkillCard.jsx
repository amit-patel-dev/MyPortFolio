import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon: Icon, title, skills, index = 0 }) => {
  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '16px',
    padding: '1.75rem',
    transition: 'all 0.3s ease',
    cursor: 'default',
  };

  const iconContainerStyle = {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    fontSize: '1.35rem',
    color: '#3b82f6',
  };

  const titleStyle = {
    fontSize: '1.05rem',
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: '1rem',
  };

  const skillsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  };

  const pillStyle = {
    padding: '0.3rem 0.75rem',
    fontSize: '0.775rem',
    fontWeight: 500,
    color: '#94a3b8',
    background: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '20px',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 40px rgba(59, 130, 246, 0.08)',
      }}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.15)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
      }}
    >
      <div style={iconContainerStyle}>
        {Icon && <Icon />}
      </div>
      <h3 style={titleStyle}>{title}</h3>
      <div style={skillsContainerStyle}>
        {skills.map((skill) => (
          <span key={skill} style={pillStyle}>
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
