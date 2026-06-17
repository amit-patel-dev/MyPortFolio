import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DottedBackground from './components/DottedBackground';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingSocialBar from './components/FloatingSocialBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

/* ─── Portfolio Layout ─── */
const Portfolio = () => (
  <>
    <Navbar />
    <DottedBackground />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    <FloatingWhatsApp />
    <FloatingSocialBar />
  </>
);

/* ─── App ─── */
const App = () => {
  const navigate = useNavigate();

  // Secret keyboard shortcut: Ctrl+L / Cmd+L → navigate to login
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        navigate('/login');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default App;
