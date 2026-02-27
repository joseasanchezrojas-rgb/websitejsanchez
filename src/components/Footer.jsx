import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle, Mail, MapPin, ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* COLUMNA 1: IDENTIDAD */}
          <div className="space-y-6">
            <div className="font-mono font-medium italic text-2xl font-black tracking-tighter text-white">
              Sanchez<span className="text-blue-500 italic">Ing</span>
            </div>
            <p className="font-mono text-sm text-gray-400 leading-relaxed italic">
              La tecnología es una herramienta para resolver problemas humanos; la educación es la clave para que esa herramienta sea eterna.
            </p>
            <div className="flex items-center gap-4 text-gray-500">
              <a href="#" className="hover:text-white transition-all hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="https://github.com/joseasanchezrojas-rgb" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:-translate-y-1"><Github size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-all hover:-translate-y-1"><Linkedin size={20} /></a>
              <a href="https://wa.me/584243019823" className="hover:text-green-500 transition-all hover:-translate-y-1"><MessageCircle size={20} /></a>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN RÁPIDA */}
          <div className="space-y-6">
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-white border-b border-blue-500/30 pb-2 w-fit">
              Navegación
            </h3>
            <ul className="space-y-3">
              {['Inicio', 'Acerca de Mí', 'Habilidades', 'Servicios', 'Portafolio'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '')}`} className="font-mono text-sm text-gray-500 hover:text-blue-400 transition-colors flex items-center group italic">
                    <ChevronRight size={14} className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO E INFO */}
          <div className="space-y-6">
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.3em] text-white border-b border-blue-500/30 pb-2 w-fit">
              Contacto Directo
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <Mail size={18} className="text-blue-500 mt-1" />
                <div>
                  <p className="font-mono text-xs text-gray-600 uppercase font-bold">Email</p>
                  <a href="mailto:tu-correo@ejemplo.com" className="font-mono text-sm text-gray-400 hover:text-white transition-colors">joseasanchezrojas@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <div>
                  <p className="font-mono text-xs text-gray-600 uppercase font-bold">Ubicación</p>
                  <p className="font-mono text-sm text-gray-400 italic">Aragua, Venezuela</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* LÍNEA FINAL DE COPYRIGHT */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest italic">
            © {currentYear} SanchezIng • Todos los derechos reservados
          </p>
          <div className="font-mono text-[10px] text-gray-700 uppercase tracking-widest italic">
            Ingeniería de Sistemas • Webmaster • Docencia Universitaria
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;