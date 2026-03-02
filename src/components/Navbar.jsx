import React from 'react';

// Ahora recibimos idioma y toggleLanguage como props desde App.jsx
const Navbar = ({ idioma, toggleLanguage }) => {
  
  // Diccionario de textos para la navegación
  const textos = {
    ES: {
      inicio: "Inicio",
      sobreMi: "Acerca de Mí",
      habilidades: "Habilidades",
      servicios: "Servicios",
      portafolio: "Portafolio",
      contacto: "Contáctame"
    },
    EN: {
      inicio: "Home",
      sobreMi: "About Me",
      habilidades: "Skills",
      servicios: "Services",
      portafolio: "Portfolio",
      contacto: "Contact Me"
    }
  };

  const t = textos[idioma];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="font-mono text-2xl font-black italic tracking-tighter text-white">
          Sanchez<span className="text-blue-500">Ing</span>
        </div>

        {/* LINKS DE NAVEGACIÓN DINÁMICOS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono font-medium italic text-gray-300">
          <a href="#inicio" className="hover:text-blue-500 transition-colors">{t.inicio}</a>
          <a href="#acercademí" className="hover:text-blue-500 transition-colors">{t.sobreMi}</a>
          <a href="#habilidades" className="hover:text-blue-500 transition-colors">{t.habilidades}</a>
          <a href="#servicios" className="hover:text-blue-500 transition-colors">{t.servicios}</a>
          <a href="#portafolio" className="hover:text-blue-500 transition-colors">{t.portafolio}</a>
          <a href="#contacto" className="hover:text-blue-500 transition-colors">{t.contacto}</a>
        </div>

        {/* SELECTOR DE IDIOMA QUE ACTIVA EL CAMBIO GLOBAL */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-white border border-white/20 hover:bg-white/20 transition-all active:scale-95"
        >
           <span className="text-blue-400">A</span> 文 {idioma} {idioma === 'ES' ? '▲' : '▼'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;