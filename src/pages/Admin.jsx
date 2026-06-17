import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSignOutAlt,
  FaPlus,
  FaTrashAlt,
  FaExternalLinkAlt,
  FaCheck,
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
import DottedBackground from '../components/DottedBackground';

const iconMap = {
  FaShieldAlt, FaChartLine, FaBrain, FaComments, FaVideo,
  FaGraduationCap, FaWhatsapp, FaCode, FaLaptopCode,
  FaMobile: FaMobileAlt, FaMobileAlt, FaRocket,
};

const iconOptions = [
  'FaShieldAlt', 'FaChartLine', 'FaBrain', 'FaComments', 'FaVideo',
  'FaGraduationCap', 'FaWhatsapp', 'FaCode', 'FaLaptopCode', 'FaMobile', 'FaRocket',
];

const categoryOptions = ['Government', 'Enterprise', 'AI/ML', 'Communication', 'Other'];

const emptyForm = {
  title: '',
  subtitle: '',
  category: 'Other',
  description: '',
  techStackRaw: '',
  featuresRaw: '',
  url: '',
  logo: 'FaCode',
  color: '#3b82f6',
};

const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Admin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...emptyForm });
  const [adminProjects, setAdminProjects] = useState([]);
  const [jsonProjects, setJsonProjects] = useState([]);
  const [toast, setToast] = useState('');

  // Auth guard
  useEffect(() => {
    if (!localStorage.getItem('portfolioAuth')) {
      navigate('/');
    }
  }, [navigate]);

  // Load projects
  useEffect(() => {
    // From localStorage
    const stored = localStorage.getItem('adminProjects');
    if (stored) {
      try { setAdminProjects(JSON.parse(stored)); } catch { /* noop */ }
    }
    // From JSON
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setJsonProjects(Array.isArray(data) ? data : data.projects || []))
      .catch(() => {});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('portfolioAuth');
    navigate('/');
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    const newProject = {
      id: slugify(form.title),
      title: form.title.trim(),
      subtitle: form.subtitle.trim(),
      category: form.category,
      description: form.description.trim(),
      techStack: form.techStackRaw.split(',').map((s) => s.trim()).filter(Boolean),
      features: form.featuresRaw.split('\n').map((s) => s.trim()).filter(Boolean),
      url: form.url.trim(),
      logo: form.logo,
      color: form.color,
    };

    const updated = [...adminProjects, newProject];
    setAdminProjects(updated);
    localStorage.setItem('adminProjects', JSON.stringify(updated));
    setForm({ ...emptyForm });
    showToast('Project added successfully!');
  };

  const handleDelete = (id) => {
    const updated = adminProjects.filter((p) => p.id !== id);
    setAdminProjects(updated);
    localStorage.setItem('adminProjects', JSON.stringify(updated));
    showToast('Project deleted');
  };

  const allProjects = [...jsonProjects, ...adminProjects];

  // ─── Styles ───
  const pageStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0a0f1c 0%, #111827 100%)',
    position: 'relative',
  };

  const contentStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '2rem 1.5rem 3rem',
    position: 'relative',
    zIndex: 1,
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2.5rem',
    paddingTop: '1rem',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const headerTitle = {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const logoutBtn = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.6rem 1.25rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#ef4444',
    background: 'rgba(239, 68, 68, 0.08)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const sectionTitle = {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#e2e8f0',
    marginBottom: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '20px',
    padding: '2rem',
    marginBottom: '2.5rem',
  };

  const formGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1rem',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#94a3b8',
    marginBottom: '0.4rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#e2e8f0',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    transition: 'all 0.2s ease',
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: '100px',
    resize: 'vertical',
    fontFamily: 'inherit',
  };

  const selectStyle = {
    ...inputStyle,
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    paddingRight: '2.5rem',
  };

  const submitBtn = {
    padding: '0.75rem 2rem',
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '0.5rem',
  };

  const projectCardStyle = {
    background: 'rgba(255, 255, 255, 0.03)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    borderRadius: '14px',
    padding: '1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  const projectInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
    minWidth: '200px',
  };

  const deleteBtn = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.4rem 0.85rem',
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#ef4444',
    background: 'rgba(239, 68, 68, 0.08)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  const toastStyle = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    padding: '0.85rem 1.5rem',
    background: 'rgba(16, 185, 129, 0.15)',
    border: '1px solid rgba(16, 185, 129, 0.3)',
    borderRadius: '12px',
    color: '#10b981',
    fontSize: '0.875rem',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    zIndex: 9999,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
  };

  return (
    <div style={pageStyle}>
      <DottedBackground />

      <div style={contentStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={headerTitle}>Project Management</h1>
          <button
            style={logoutBtn}
            onClick={handleLogout}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)';
            }}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        {/* Add New Project */}
        <div style={cardStyle}>
          <h2 style={sectionTitle}>
            <FaPlus style={{ color: '#3b82f6', fontSize: '0.9rem' }} />
            Add New Project
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={formGridStyle}>
              <div>
                <label style={labelStyle}>Title *</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={form.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                  placeholder="Project title"
                  required
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <div>
                <label style={labelStyle}>Subtitle</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={form.subtitle}
                  onChange={(e) => handleChange('subtitle', e.target.value)}
                  placeholder="Short subtitle"
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <div>
                <label style={labelStyle}>Category</label>
                <select
                  style={selectStyle}
                  value={form.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                >
                  {categoryOptions.map((c) => (
                    <option key={c} value={c} style={{ background: '#1e293b', color: '#e2e8f0' }}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Logo Icon</label>
                <select
                  style={selectStyle}
                  value={form.logo}
                  onChange={(e) => handleChange('logo', e.target.value)}
                >
                  {iconOptions.map((ic) => (
                    <option key={ic} value={ic} style={{ background: '#1e293b', color: '#e2e8f0' }}>{ic}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>URL (optional)</label>
                <input
                  style={inputStyle}
                  type="url"
                  value={form.url}
                  onChange={(e) => handleChange('url', e.target.value)}
                  placeholder="https://..."
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <div>
                <label style={labelStyle}>Accent Color</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input
                    type="color"
                    value={form.color}
                    onChange={(e) => handleChange('color', e.target.value)}
                    style={{
                      width: '44px',
                      height: '44px',
                      border: '2px solid rgba(255,255,255,0.1)',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      background: 'transparent',
                      padding: '2px',
                    }}
                  />
                  <span style={{ color: '#64748b', fontSize: '0.82rem', fontFamily: 'JetBrains Mono, monospace' }}>
                    {form.color}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem' }}>
              <label style={labelStyle}>Description</label>
              <textarea
                style={textareaStyle}
                value={form.description}
                onChange={(e) => handleChange('description', e.target.value)}
                placeholder="Project description..."
                onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
              <div>
                <label style={labelStyle}>Tech Stack (comma-separated)</label>
                <input
                  style={inputStyle}
                  type="text"
                  value={form.techStackRaw}
                  onChange={(e) => handleChange('techStackRaw', e.target.value)}
                  placeholder="React, Node.js, MongoDB"
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
              <div>
                <label style={labelStyle}>Features (one per line)</label>
                <textarea
                  style={{ ...textareaStyle, minHeight: '80px' }}
                  value={form.featuresRaw}
                  onChange={(e) => handleChange('featuresRaw', e.target.value)}
                  placeholder={"Feature one\nFeature two\nFeature three"}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button
                type="submit"
                style={submitBtn}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Add Project
              </button>
            </div>
          </form>
        </div>

        {/* Existing Projects */}
        <div>
          <h2 style={sectionTitle}>Existing Projects ({allProjects.length})</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {allProjects.length === 0 && (
              <p style={{ color: '#64748b', fontSize: '0.9rem', textAlign: 'center', padding: '2rem' }}>
                No projects yet. Add one above!
              </p>
            )}
            {allProjects.map((project) => {
              const IconComp = iconMap[project.logo] || FaCode;
              const isAdmin = adminProjects.some((p) => p.id === project.id);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  style={projectCardStyle}
                >
                  <div style={projectInfoStyle}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: `${project.color || '#3b82f6'}18`,
                      border: `1px solid ${project.color || '#3b82f6'}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: project.color || '#3b82f6',
                      fontSize: '1rem',
                      flexShrink: 0,
                    }}>
                      <IconComp />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>
                        {project.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                        {project.category || 'Uncategorized'}
                        {isAdmin && (
                          <span style={{
                            marginLeft: '0.5rem',
                            padding: '0.1rem 0.4rem',
                            fontSize: '0.65rem',
                            background: 'rgba(139, 92, 246, 0.15)',
                            color: '#8b5cf6',
                            borderRadius: '4px',
                            fontWeight: 600,
                          }}>
                            LOCAL
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: '0.4rem 0.7rem',
                          fontSize: '0.78rem',
                          color: '#3b82f6',
                          background: 'rgba(59, 130, 246, 0.08)',
                          border: '1px solid rgba(59, 130, 246, 0.2)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} /> Link
                      </a>
                    )}
                    {isAdmin && (
                      <button
                        style={deleteBtn}
                        onClick={() => handleDelete(project.id)}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.08)'; }}
                      >
                        <FaTrashAlt style={{ fontSize: '0.7rem' }} /> Delete
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            style={toastStyle}
          >
            <FaCheck /> {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
