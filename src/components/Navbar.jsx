import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active link tracking
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const navbarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '0 clamp(1rem, 4vw, 4rem)',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    backgroundColor: scrolled ? 'rgba(10, 15, 28, 0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(59, 130, 246, 0.1)' : '1px solid transparent',
  };

  const logoStyle = {
    height: '42px',
    width: '42px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid rgba(59, 130, 246, 0.5)',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)',
  };

  const desktopNavStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
  };

  const getLinkStyle = (isActive) => ({
    padding: '0.5rem 0.875rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: isActive ? '#3b82f6' : '#94a3b8',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    position: 'relative',
    background: isActive ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
  });

  const hamburgerStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#e2e8f0',
    fontSize: '1.35rem',
    cursor: 'pointer',
    padding: '0.5rem',
    zIndex: 1001,
  };

  const mobileOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 15, 28, 0.97)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  };



  const getMobileLinkStyle = (isActive) => ({
    padding: '0.875rem 2rem',
    fontSize: '1.25rem',
    fontWeight: 600,
    color: isActive ? '#3b82f6' : '#cbd5e1',
    cursor: 'pointer',
    borderRadius: '12px',
    transition: 'all 0.2s ease',
    background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
  });

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={navbarStyle}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src="/logo.jpg" alt="Amit Chaudhary" style={logoStyle} />
        </a>

        {/* Desktop Nav */}
        <div style={desktopNavStyle} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={getLinkStyle(activeSection === link.href.replace('#', ''))}
              onMouseEnter={(e) => {
                if (activeSection !== link.href.replace('#', '')) {
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                const isActive = activeSection === link.href.replace('#', '');
                e.currentTarget.style.color = isActive ? '#3b82f6' : '#94a3b8';
                e.currentTarget.style.background = isActive ? 'rgba(59, 130, 246, 0.08)' : 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          style={hamburgerStyle}
          className="mobile-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={mobileOverlayStyle}
          >

            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={getMobileLinkStyle(activeSection === link.href.replace('#', ''))}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles injected via <style> */}
      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-hamburger { display: none !important; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
