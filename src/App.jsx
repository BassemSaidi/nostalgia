import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar.jsx';
import SectionIndicator from './components/SectionIndicator.jsx';
import Header from './components/Header.jsx';
import Histoires from './components/Histoires.jsx';
import Creativite from './components/Creativite.jsx';
import Tarifs from './components/Tarifs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['header', 'histoires', 'creativite', 'tarifs', 'contact'];
      const scrollPosition = window.pageYOffset + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'header', name: 'Accueil' },
    { id: 'histoires', name: 'Histoires' },
    { id: 'creativite', name: 'Créativité' },
    { id: 'tarifs', name: 'Tarifs' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      
      <SectionIndicator 
        sections={sections} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      
      <Header />
      <Histoires />
      <Creativite />
      <Tarifs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
