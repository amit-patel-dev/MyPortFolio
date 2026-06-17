import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const categories = ['All', 'Government', 'Enterprise', 'AI/ML', 'Communication'];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const res = await fetch('/projects.json');
        const data = await res.json();

        // Merge with localStorage admin projects
        const stored = localStorage.getItem('adminProjects');
        const adminProjects = stored ? JSON.parse(stored) : [];

        setProjects([...data, ...adminProjects]);
      } catch (err) {
        console.error('Failed to load projects:', err);
        // Still try localStorage
        const stored = localStorage.getItem('adminProjects');
        if (stored) {
          setProjects(JSON.parse(stored));
        }
      }
    };

    loadProjects();
  }, []);

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} style={styles.section}>
      <div style={styles.container}>
        {/* Title */}
        <motion.div
          style={styles.titleWrapper}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Projects</h2>
          <div style={styles.titleUnderline} />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          style={styles.filterRow}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              style={{
                ...styles.filterBtn,
                color: activeCategory === cat ? '#3b82f6' : 'rgba(255,255,255,0.5)',
              }}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ color: '#3b82f6' }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  style={styles.activeUnderline}
                  layoutId="activeCategory"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div style={styles.grid}>
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id || project.title || i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.p
            style={styles.emptyText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            No projects found in this category.
          </motion.p>
        )}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 24px',
    background: '#0a0f1c',
    position: 'relative',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  titleWrapper: {
    textAlign: 'center',
    marginBottom: '40px',
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
    margin: '0 auto',
  },
  filterRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '48px',
  },
  filterBtn: {
    position: 'relative',
    padding: '10px 20px',
    fontSize: '0.95rem',
    fontWeight: 500,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    letterSpacing: '0.3px',
  },
  activeUnderline: {
    position: 'absolute',
    bottom: '0',
    left: '10%',
    right: '10%',
    height: '2px',
    background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
    borderRadius: '1px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '28px',
  },
  emptyText: {
    textAlign: 'center',
    color: 'rgba(255,255,255,0.4)',
    fontSize: '1.1rem',
    padding: '60px 0',
  },
};

export default Projects;
