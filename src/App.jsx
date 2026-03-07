import React, { useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatsAppButton from './components/WhatsAppButton';

// 1. Carga Diferida de componentes pesados
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  const [idioma, setIdioma] = useState('ES');

  const toggleLanguage = () => {
    setIdioma(prev => (prev === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-blue-500/30">
      <div className="bg-dots">
        <Navbar idioma={idioma} toggleLanguage={toggleLanguage} />
        
        <main className="max-w-7xl mx-auto px-6 pt-24">
          {/* El Hero es crítico, se mantiene con carga normal para un FCP rápido */}
          <Hero idioma={idioma} />

          {/* 2. Suspense maneja el estado de carga de los componentes diferidos */}
          <Suspense fallback={<div className="h-40 flex items-center justify-center text-gray-500 italic">Cargando módulos...</div>}>
            <About idioma={idioma} />
            <Skills idioma={idioma} />
            <Services idioma={idioma} />
            <Portfolio idioma={idioma} />
            <Contact idioma={idioma} />
            <Footer idioma={idioma} />
          </Suspense>
        </main>

        <WhatsAppButton idioma={idioma} />
      </div>
    </div>
  );
}