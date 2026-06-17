import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FloatingWhatsApp = () => {
  const floatStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    width: '60px',
    height: '60px',
    backgroundColor: '#25D366',
    color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.4)',
    zIndex: 9999,
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <motion.a
      href="https://wa.me/917310252808"
      target="_blank"
      rel="noopener noreferrer"
      style={floatStyle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  );
};

export default FloatingWhatsApp;
