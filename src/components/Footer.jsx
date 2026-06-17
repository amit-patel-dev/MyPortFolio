import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/amit-patel-dev', label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/amit-patel-swe/', label: 'LinkedIn' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/pagalladka_404/', label: 'Instagram' },
  { icon: <FaWhatsapp />, href: 'https://wa.me/917310252808', label: 'WhatsApp' },
];

const Footer = () => {
  const footerStyle = {
    position: 'relative',
    padding: '4rem 2rem 1rem',
    backgroundColor: 'rgba(10, 15, 28, 0.5)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    zIndex: 1,
    marginTop: '4rem',
  };

  const topBorderStyle = {
    position: 'absolute',
    top: 0,
    left: '0',
    right: '0',
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5), rgba(139, 92, 246, 0.5), transparent)',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '3rem',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 0.5rem 0',
  };

  const descStyle = {
    color: '#94a3b8',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    margin: 0,
  };

  const headingStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#e2e8f0',
    margin: '0 0 0.5rem 0',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  };

  const linkStyle = {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s ease',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: '#94a3b8',
    fontSize: '0.9rem',
  };

  const iconStyle = {
    color: '#3b82f6',
    fontSize: '1rem',
  };

  const socialRowStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
  };

  const iconBtnStyle = {
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    color: '#94a3b8',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const bottomBarStyle = {
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    textAlign: 'center',
  };

  const copyrightStyle = {
    color: '#64748b',
    fontSize: '0.85rem',
    margin: 0,
  };

  return (
    <footer style={footerStyle}>
      <div style={topBorderStyle} />

      <div style={containerStyle}>
        {/* Brand Column */}
        <div style={colStyle}>
          <h3 style={brandStyle}>Amit Chaudhary</h3>
          <p style={descStyle}>
            Passionate .NET Full Stack Developer specializing in robust backends, scalable REST APIs, and modern React interfaces.
          </p>
          <div style={socialRowStyle}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={iconBtnStyle}
                aria-label={link.label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                  e.currentTarget.style.color = '#3b82f6';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div style={colStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={listStyle}>
            <li>
              <a 
                href="#about" 
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                Experience
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div style={colStyle}>
          <h4 style={headingStyle}>Contact Info</h4>
          <ul style={listStyle}>
            <li style={contactItemStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <span>Lucknow, India</span>
            </li>
            <li style={contactItemStyle}>
              <FaEnvelope style={iconStyle} />
              <a 
                href="mailto:amitpatel4155@gmail.com" 
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                amitpatel4155@gmail.com
              </a>
            </li>
            <li style={contactItemStyle}>
              <FaPhoneAlt style={iconStyle} />
              <a 
                href="tel:+917310252808" 
                style={linkStyle}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                +91 73102 52808
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={bottomBarStyle}>
        <p style={copyrightStyle}>
          &copy; {new Date().getFullYear()} Amit Chaudhary. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
