import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle, MousePointer2, ChevronDown } from "lucide-react";
import fotoPerfil from '../assets/img_perfil.png'; 

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12 selection:bg-blue-500/30">
      
      {/* COLUMNA IZQUIERDA: IMAGEN CON EFECTO DE CIRCUITO */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center">
        <div className="relative group">
          {/* Círculo de fondo con efecto tecnológico / Glow */}
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-700"></div>
          
          {/* Contenedor de la imagen con el borde decorativo de tu diseño */}
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-transparent">
            <img 
              src={fotoPerfil} 
              alt="José Sánchez" 
              className="w-full h-full rounded-full object-cover object-center border-4 border-black"
            />
          </div>

          {/* Indicador de estado verde (Online) */}
          <div className="absolute bottom-6 right-6 w-8 h-8 bg-green-500 border-4 border-black rounded-full z-20 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
        </div>

        {/* Botón Ir al CV con icono de Mouse (Debajo de la foto) */}
        <div className="mt-8 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group">
          <div className="border-2 border-gray-500 rounded-full p-2 group-hover:border-white transition-colors">
            <MousePointer2 size={20} className="rotate-180" />
          </div>
          <div className="flex items-center gap-1 font-mono text-sm font-bold tracking-widest uppercase">
            Ir al CV <ChevronDown size={14} />
          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA: TEXTO Y REDES SOCIALES */}
      <div className="w-full md:w-1/2 flex flex-row justify-between items-center md:items-start">
        
        {/* Información Principal con tipografía específica */}
        <div className="flex-1">
          {/* Roboto Mono Semibold Italic */}
          <h1 className="font-mono text-4xl md:text-6xl font-semibold italic text-white leading-tight">
            Hola, Soy <span className="text-blue-500">José Sánchez</span>
          </h1>
          
          {/* Roles Profesionales: Roboto Mono Medium Italic */}
          <div className="mt-6 space-y-2">
            <p className="font-mono text-xl md:text-2xl text-gray-200 font-medium italic tracking-wide">Ingeniero de Sistemas</p>
            <p className="font-mono text-xl md:text-2xl text-gray-200 font-medium italic tracking-wide">Webmaster</p>
            <p className="font-mono text-xl md:text-2xl text-gray-200 font-medium italic tracking-wide">Docente Universitario</p>
          </div>

          {/* Frase Inspiracional: Italic */}
          <p className="font-mono mt-8 text-gray-400 text-lg md:text-xl italic max-w-md leading-relaxed font-light">
            "Enfocado en Generar Experiencias Digitales Modernas y Eficientes."
          </p>

          {/* Botón Contáctame: Seccion 'Servicios y Proyectos' */}
          <button className="font-mono mt-10 px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase italic text-sm shadow-xl shadow-white/5 tracking-wider">
            CONTÁCTAME
          </button>
        </div>

        {/* REDES SOCIALES LATERALES (Verticales, con iconos de lucide-react) */}
        <div className="flex flex-col gap-8 text-gray-400 border-l border-white/10 pl-8 ml-4">
          <a href="#" className="hover:text-white hover:scale-110 transition-all"><Instagram size={24}/></a>
          <a href="https://github.com/joseasanchezrojas-rgb" target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all"><Github size={24}/></a>
          <a href="#" className="hover:text-blue-500 hover:scale-110 transition-all"><Linkedin size={24}/></a>
          <a href="https://wa.me/584243019823" className="hover:text-green-500 hover:scale-110 transition-all"><MessageCircle size={24}/></a>
        </div>
      </div>

    </section>
  );
};

export default Hero;