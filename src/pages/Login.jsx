import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import DottedBackground from '../components/DottedBackground';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/db.json');
      const data = await res.json();

      if (
        data.username === username &&
        data.password === password
      ) {
        localStorage.setItem('portfolioAuth', 'true');
        navigate('/admin');
      } else {
        setError('Invalid credentials');
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }
    } catch {
      setError('Authentication failed. Please try again.');
      setShake(true);
      setTimeout(() => setShake(false), 600);
    } finally {
      setLoading(false);
    }
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0a0f1c 0%, #111827 100%)',
    padding: '1rem',
    position: 'relative',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(255, 255, 255, 0.04)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    position: 'relative',
    zIndex: 1,
  };

  const lockIconStyle = {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 1.25rem',
    fontSize: '1.35rem',
    color: '#8b5cf6',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: '2rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    fontSize: '0.9rem',
    color: '#e2e8f0',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    marginBottom: '1rem',
    transition: 'all 0.2s ease',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.85rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    color: '#ffffff',
    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    border: 'none',
    borderRadius: '12px',
    cursor: loading ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    opacity: loading ? 0.7 : 1,
    marginTop: '0.5rem',
  };

  const errorStyle = {
    color: '#ef4444',
    fontSize: '0.85rem',
    textAlign: 'center',
    marginBottom: '1rem',
    padding: '0.5rem',
    background: 'rgba(239, 68, 68, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(239, 68, 68, 0.2)',
  };

  const shakeAnimation = {
    x: shake ? [0, -10, 10, -10, 10, -5, 5, 0] : 0,
  };

  return (
    <div style={containerStyle}>
      <DottedBackground />
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1, ...shakeAnimation }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={cardStyle}
      >
        <div style={lockIconStyle}>
          <FaLock />
        </div>
        <h1 style={titleStyle}>Admin Access</h1>

        {error && <div style={errorStyle}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              e.target.style.background = 'rgba(255, 255, 255, 0.07)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(59, 130, 246, 0.4)';
              e.target.style.background = 'rgba(255, 255, 255, 0.07)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
            required
          />
          <button
            type="submit"
            style={buttonStyle}
            disabled={loading}
            onMouseEnter={(e) => {
              if (!loading) e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
