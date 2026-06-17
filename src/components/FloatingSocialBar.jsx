import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/amit-patel-swe/', label: 'LinkedIn', color: '#0077b5' },
  { icon: <FaGithub />, href: 'https://github.com/amit-patel-dev', label: 'GitHub', color: '#1f2937' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/pagalladka_404/', label: 'Instagram', color: '#e1306c' },
  { icon: <FaEnvelope />, href: 'mailto:amitpatel4155@gmail.com', label: 'Email', color: '#ea4335' },
  { icon: <FaPhoneAlt />, href: 'tel:+917310252808', label: 'Call', color: '#059669' },
];

const FloatingSocialBar = () => {
  const containerStyle = {
    position: 'fixed',
    top: '30%',
    right: '0',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    backgroundColor: 'rgba(10, 15, 28, 0.8)',
    backdropFilter: 'blur(12px)',
    padding: '0.75rem 0.5rem',
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRight: 'none',
    zIndex: 9998,
    boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.3)',
  };

  const iconStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '1.2rem',
    textDecoration: 'none',
    boxShadow: '0 2px 5px rgba(0,0,0,0.5)',
    cursor: 'pointer',
  };

  return (
    <motion.div 
      style={containerStyle}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2, type: 'spring', stiffness: 100 }}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : '_self'}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
          style={{ ...iconStyle, backgroundColor: link.color }}
          whileHover={{ scale: 1.15, x: -8 }}
          whileTap={{ scale: 0.95 }}
          title={link.label}
          aria-label={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingSocialBar;
