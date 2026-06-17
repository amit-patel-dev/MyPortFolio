import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    '.NET Full Stack Developer',
    'ASP.NET Core Specialist',
    'React.js Developer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <FaEnvelope />, href: 'mailto:amitpatel4155@gmail.com', label: 'Email' },
    { icon: <FaPhone />, href: 'tel:+917310252808', label: 'Phone' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/amit-patel-swe/', label: 'LinkedIn' },
    { icon: <FaGithub />, href: 'https://github.com/amit-patel-dev', label: 'GitHub' },
  ];

  const floatingShapes = [
    { width: '100px', height: '100px', top: '15%', left: '5%', delay: 0 },
    { width: '60px', height: '60px', top: '65%', left: '8%', delay: 1 },
    { width: '150px', height: '150px', top: '25%', right: '8%', delay: 0.5 },
    { width: '80px', height: '80px', top: '75%', right: '12%', delay: 1.5 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" style={styles.section}>
      {/* Floating Background Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{
            ...styles.floatingShape,
            width: shape.width,
            height: shape.height,
            top: shape.top,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 45, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div style={styles.container}>
        <div style={styles.grid} className="hero-grid">
          {/* Left Column: Content */}
          <motion.div 
            style={styles.contentCol}
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} style={styles.photoContainer}>
              <img src="/logo.jpg" alt="Amit Chaudhary" style={styles.photo} />
            </motion.div>
            
            <motion.h3 variants={itemVariants} style={styles.greeting}>
              HELLO, I'M
            </motion.h3>
            
            <motion.h1 variants={itemVariants} style={styles.name}>
              AMIT CHAUDHARY
            </motion.h1>
            
            <motion.div variants={itemVariants} style={styles.roleWrapper}>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={styles.roleText}
              >
                {roles[roleIndex]}
              </motion.span>
              <span style={styles.cursor}>|</span>
            </motion.div>
            
            <motion.p variants={itemVariants} style={styles.summary} className="hero-summary">
              I am a 23-year-old passionate software developer with 3+ years of professional experience building scalable web applications. Specialized in the .NET ecosystem and React.js.
            </motion.p>
            
            <motion.div variants={itemVariants} style={styles.ctaRow}>
              <motion.button
                style={styles.ctaPrimary}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59,130,246,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('projects')}
              >
                View Projects
              </motion.button>
              
              <motion.a
                href="/Amit_Resume.pdf"
                download="Amit_Resume.pdf"
                style={{ ...styles.ctaSecondary, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(59,130,246,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
            
            <motion.div variants={itemVariants} style={styles.socialRow}>
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={styles.socialLink}
                  whileHover={{ scale: 1.1, color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Video */}
          <motion.div 
            style={styles.videoCol}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div style={styles.videoWrapper}>
              <video 
                src="/HeroSection.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                style={styles.videoPlayer}
                poster="/logo.jpg"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Responsive adjustments injected via style block for edge cases */}
      <style>{`
        @media (max-width: 900px) {
          #home .hero-grid {
            flex-direction: column !important;
            text-align: center;
          }
          #home .hero-content {
            align-items: center !important;
          }
          #home .hero-summary {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '120px 20px 60px 20px',
    overflow: 'hidden',
  },
  floatingShape: {
    position: 'absolute',
    border: '1px solid rgba(59,130,246,0.15)',
    background: 'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(6,182,212,0.05))',
    zIndex: 0,
    pointerEvents: 'none',
    borderRadius: '20px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    zIndex: 1,
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    alignItems: 'center',
  },
  contentCol: {
    flex: '1 1 500px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  videoCol: {
    flex: '1 1 400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    marginBottom: '20px',
  },
  photo: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid rgba(59, 130, 246, 0.5)',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
  },
  greeting: {
    fontSize: '1rem',
    color: '#06b6d4',
    letterSpacing: '2px',
    fontWeight: 600,
    margin: '0 0 10px 0',
  },
  name: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    margin: '0 0 10px 0',
    color: '#e2e8f0',
    lineHeight: 1.1,
  },
  roleWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    minHeight: '30px',
  },
  roleText: {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    color: '#8b5cf6',
    fontWeight: 500,
    fontFamily: "'Fira Code', 'Courier New', monospace",
  },
  cursor: {
    color: '#8b5cf6',
    animation: 'blink 1s step-end infinite',
    marginLeft: '5px',
    fontSize: '1.5rem',
  },
  summary: {
    fontSize: '1.05rem',
    color: '#94a3b8',
    lineHeight: 1.7,
    maxWidth: '550px',
    marginBottom: '30px',
  },
  ctaRow: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  ctaPrimary: {
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  ctaSecondary: {
    padding: '12px 30px',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#3b82f6',
    background: 'transparent',
    border: '2px solid rgba(59,130,246,0.3)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  socialRow: {
    display: 'flex',
    gap: '15px',
  },
  socialLink: {
    width: '45px',
    height: '45px',
    borderRadius: '8px',
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#94a3b8',
    fontSize: '1.2rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  },
  videoWrapper: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(59, 130, 246, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(10, 15, 28, 0.5)',
  },
  videoPlayer: {
    width: '100%',
    height: 'auto',
    display: 'block',
  }
};

export default Hero;
