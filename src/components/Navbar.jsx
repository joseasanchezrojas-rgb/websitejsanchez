import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO: SanchezIng con Roboto Mono Bold Italic */}
        <div className="font-mono text-2xl font-black italic tracking-tighter text-white">
          Sanchez<span className="text-blue-500">Ing</span>
        </div>

        {/* LINKS DE NAVEGACIÓN: Roboto Mono Medium Italic */}
        <div className="hidden md:flex items-center gap-8 text-sm font-mono font-medium italic text-gray-300">
          <a href="#inicio" className="hover:text-blue-500 transition-colors">Inicio</a>
          
          {/* Ajustado para coincidir con el id="acercademí" de tu About.jsx */}
          <a href="#acercademí" className="hover:text-blue-500 transition-colors">Acerca de Mí</a>
          
          <a href="#habilidades" className="hover:text-blue-500 transition-colors">Habilidades</a>
          <a href="#servicios" className="hover:text-blue-500 transition-colors">Servicios</a>
          <a href="#portafolio" className="hover:text-blue-500 transition-colors">Portafolio</a>
          <a href="#contacto" className="hover:text-blue-500 transition-colors">Contáctame</a>
        </div>

        {/* SELECTOR DE IDIOMA: Roboto Mono */}
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-white border border-white/20">
           <span className="text-blue-400">A</span> 文 ES ▲
        </div>
      </div>
    </nav>
  );
};

export default Navbar;