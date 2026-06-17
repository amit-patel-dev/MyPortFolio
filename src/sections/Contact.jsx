import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'amitpatel4155@gmail.com',
    href: 'mailto:amitpatel4155@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+91 7310252808',
    href: 'tel:+917310252808',
    color: '#06b6d4',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Lucknow, India',
    href: null,
    color: '#8b5cf6',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/amit-patel-swe',
    href: 'https://www.linkedin.com/in/amit-patel-swe/',
    color: '#0a66c2',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'github.com/amit-patel-dev',
    href: 'https://github.com/amit-patel-dev',
    color: '#e6edf3',
  },
];

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="contact" ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <motion.div
          style={styles.titleWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Get In Touch</h2>
          <div style={styles.titleUnderline} />
          <motion.p
            style={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div style={styles.grid}>
          {contactItems.map((item, i) => {
            const CardWrapper = item.href ? motion.a : motion.div;
            const linkProps = item.href
              ? {
                  href: item.href,
                  target: item.href.startsWith('http') ? '_blank' : undefined,
                  rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                }
              : {};

            return (
              <CardWrapper
                key={i}
                {...linkProps}
                style={{
                  ...styles.card,
                  textDecoration: 'none',
                  cursor: item.href ? 'pointer' : 'default',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.3), 0 0 25px ${item.color}20`,
                  borderColor: `${item.color}40`,
                }}
              >
                {/* Icon */}
                <motion.div
                  style={{
                    ...styles.iconWrapper,
                    background: `${item.color}15`,
                    color: item.color,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.div>

                {/* Label */}
                <p style={styles.label}>{item.label}</p>

                {/* Value */}
                <p style={{ ...styles.value, color: item.href ? item.color : 'rgba(255,255,255,0.7)' }}>
                  {item.value}
                </p>
              </CardWrapper>
            );
          })}
        </div>

        {/* Bottom social row */}
        <motion.div
          style={styles.socialRow}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: <FaEnvelope />, href: 'mailto:amitpatel4155@gmail.com', color: '#3b82f6' },
            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/amit-patel-swe/', color: '#0a66c2' },
            { icon: <FaGithub />, href: 'https://github.com/amit-patel-dev', color: '#e6edf3' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={styles.socialIcon}
              whileHover={{
                scale: 1.2,
                color: social.color,
                borderColor: social.color,
                boxShadow: `0 0 20px ${social.color}30`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
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
    margin: '0 auto 20px auto',
  },
  subtitle: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.55)',
    margin: 0,
    lineHeight: 1.6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
    marginBottom: '48px',
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
    padding: '32px 24px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    display: 'block',
  },
  iconWrapper: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    margin: '0 auto 16px auto',
  },
  label: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.4)',
    margin: '0 0 6px 0',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  value: {
    fontSize: '0.95rem',
    margin: 0,
    fontWeight: 500,
    wordBreak: 'break-word',
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  socialIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.04)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    color: 'rgba(255,255,255,0.5)',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
};

export default Contact;
