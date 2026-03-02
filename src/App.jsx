import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  // 1. Estado global del idioma
  const [idioma, setIdioma] = useState('ES');

  // 2. Función para alternar idioma que pasaremos al Navbar
  const toggleLanguage = () => {
    setIdioma(prev => (prev === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-blue-500/30">
      <div className="bg-dots">
        {/* Pasamos el estado y la función al Navbar */}
        <Navbar idioma={idioma} toggleLanguage={toggleLanguage} />
        
        <main className="max-w-7xl mx-auto px-6 pt-24">
          {/* Pasamos la prop 'idioma' a cada componente para que sepan qué texto mostrar */}
          <Hero idioma={idioma} />
          <About idioma={idioma} />
          <Skills idioma={idioma} />
          <Services idioma={idioma} />
          <Portfolio idioma={idioma} />
          <Contact idioma={idioma} />
        </main>

        <Footer idioma={idioma} />
        <WhatsAppButton idioma={idioma} />
      </div>
    </div>
  );
}