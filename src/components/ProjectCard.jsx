import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {
  FaShieldAlt,
  FaChartLine,
  FaBrain,
  FaComments,
  FaVideo,
  FaGraduationCap,
  FaWhatsapp,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaRocket,
} from 'react-icons/fa';

// Map string names to actual icon components
const iconMap = {
  FaShieldAlt,
  FaChartLine,
  FaBrain,
  FaComments,
  FaVideo,
  FaGraduationCap,
  FaWhatsapp,
  FaCode,
  FaLaptopCode,
  FaMobile: FaMobileAlt,
  FaMobileAlt,
  FaRocket,
};

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);

  const {
    title,
    subtitle,
    category,
    description,
    techStack = [],
    features = [],
    url,
    logo,
    color = '#3b82f6',
  } = project;

  const IconComponent = iconMap[logo] || FaCode;

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
    padding: '1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    position: 'relative',
  };

  const topSectionStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
  };

  const iconWrapperStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '14px',
    background: `linear-gradient(135deg, ${color}22, ${color}11)`,
    border: `1px solid ${color}33`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '1.3rem',
    color: color,
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: '0.15rem',
    lineHeight: 1.3,
  };

  const subtitleStyle = {
    fontSize: '0.8rem',
    color: '#64748b',
    fontWeight: 400,
    marginBottom: '0.35rem',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '0.2rem 0.6rem',
    fontSize: '0.68rem',
    fontWeight: 600,
    color: color,
    background: `${color}15`,
    border: `1px solid ${color}30`,
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const descStyle = {
    fontSize: '0.85rem',
    color: '#94a3b8',
    lineHeight: 1.65,
  };

  const showMoreBtnStyle = {
    background: 'none',
    border: 'none',
    color: '#3b82f6',
    fontSize: '0.8rem',
    fontWeight: 600,
    cursor: 'pointer',
    padding: 0,
    marginTop: '0.25rem',
  };

  const techContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  };

  const techTagStyle = {
    padding: '0.25rem 0.6rem',
    fontSize: '0.72rem',
    fontWeight: 500,
    color: '#06b6d4',
    background: 'rgba(6, 182, 212, 0.08)',
    border: '1px solid rgba(6, 182, 212, 0.15)',
    borderRadius: '6px',
  };

  const featureStyle = {
    fontSize: '0.8rem',
    color: '#94a3b8',
    padding: '0.2rem 0',
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
  };

  const featureDotStyle = {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    background: color,
    flexShrink: 0,
    marginTop: '0.35rem',
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.25rem',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: '#ffffff',
    background: `linear-gradient(135deg, ${color}, ${color}cc)`,
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '0.25rem',
    alignSelf: 'flex-start',
  };

  const descText = description || '';
  const shouldTruncate = descText.length > 150;
  const displayedDesc = expanded ? descText : descText.slice(0, 150);

  const visibleFeatures = featuresExpanded ? features : features.slice(0, 3);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 8px 40px ${color}15`,
      }}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}30`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
      }}
    >
      {/* Top: Icon + Title + Badge */}
      <div style={topSectionStyle}>
        <div style={iconWrapperStyle}>
          <IconComponent />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={titleStyle}>{title}</h3>
          {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
          {category && <span style={badgeStyle}>{category}</span>}
        </div>
      </div>

      {/* Description */}
      {descText && (
        <div>
          <p style={descStyle}>
            {displayedDesc}
            {shouldTruncate && !expanded && '...'}
          </p>
          {shouldTruncate && (
            <button
              style={showMoreBtnStyle}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      )}

      {/* Tech Stack */}
      {techStack.length > 0 && (
        <div style={techContainerStyle}>
          {techStack.map((tech) => (
            <span key={tech} style={techTagStyle}>
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Features */}
      {features.length > 0 && (
        <div>
          {visibleFeatures.map((feature, i) => (
            <div key={i} style={featureStyle}>
              <span style={featureDotStyle} />
              <span>{feature}</span>
            </div>
          ))}
          {features.length > 3 && (
            <button
              style={{ ...showMoreBtnStyle, marginTop: '0.4rem' }}
              onClick={() => setFeaturesExpanded(!featuresExpanded)}
            >
              {featuresExpanded
                ? 'Show Less'
                : `+${features.length - 3} more features`}
            </button>
          )}
        </div>
      )}

      {/* View Live Button */}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.9';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          View Live <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
        </a>
      )}
    </motion.div>
  );
};

export default ProjectCard;
