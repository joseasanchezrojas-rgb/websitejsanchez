import React from 'react';
import { Github, Linkedin, Instagram, MessageCircle, MousePointer2, ChevronDown } from "lucide-react";
import fotoPerfil from '../assets/img_perfil.webp'; 

const Hero = ({ idioma }) => {
  // Diccionario de textos para la sección Hero
  const textos = {
    ES: {
      saludo: "Hola, Soy",
      roles: ["Ingeniero de Sistemas", "Webmaster", "Docente Universitario"],
      frase: '"Enfocado en Generar Experiencias Digitales Modernas y Eficientes."',
      botonContacto: "Contáctame",
      botonCV: "Ir al CV"
    },
    EN: {
      saludo: "Hi, I am",
      roles: ["Systems Engineer", "Webmaster", "University Lecturer"],
      frase: '"Focused on Generating Modern and Efficient Digital Experiences."',
      botonContacto: "Contact Me",
      botonCV: "Go to CV"
    }
  };

  const t = textos[idioma] || textos.ES;

  return (
    <section id="inicio" className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-20 gap-12 selection:bg-blue-500/30">
      
      {/* COLUMNA IZQUIERDA: IMAGEN CON EFECTO DE CIRCUITO */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center">
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-all duration-700"></div>
          
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-transparent">
            <img 
              src={fotoPerfil} 
              alt="José Sánchez" 
              className="w-full h-full rounded-full object-cover object-center border-4 border-black"
            />
          </div>

          <div className="absolute bottom-6 right-6 w-8 h-8 bg-green-500 border-4 border-black rounded-full z-20 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
        </div>

        {/* Botón Ir al CV dinámico */}
        <a href='#acercademí' className="mt-8 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group">
          <div className="border-2 border-gray-500 rounded-full p-2 group-hover:border-white transition-colors">
            <MousePointer2 size={20} className="rotate-180" />
          </div>
          <div className="flex items-center gap-1 font-mono text-sm font-bold tracking-widest uppercase">
            {t.botonCV} <ChevronDown size={14} />
          </div>
        </a>
      </div>

      {/* COLUMNA DERECHA: TEXTO Y REDES SOCIALES */}
      <div className="w-full md:w-1/2 flex flex-row justify-between items-center md:items-start">
        
        <div className="flex-1">
          <h1 className="font-mono text-4xl md:text-6xl font-semibold italic text-white leading-tight">
            {t.saludo} <span className="text-blue-500">José Sánchez</span>
          </h1>
          
          {/* Roles Profesionales Dinámicos */}
          <div className="mt-6 space-y-2">
            {t.roles.map((role, index) => (
              <p key={index} className="font-mono text-xl md:text-2xl text-gray-200 font-medium italic tracking-wide">
                {role}
              </p>
            ))}
          </div>

          <p className="font-mono mt-8 mb-8 text-gray-400 text-lg md:text-xl italic max-w-md leading-relaxed font-light">
            {t.frase}
          </p>

          <a 
            href="#contacto" 
            className="inline-block w-full sm:w-auto px-12 py-2 bg-white text-black font-mono font-bold uppercase italic rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-center shadow-lg shadow-white/5"
          >
            {t.botonContacto}
          </a>
        </div>

        {/* REDES SOCIALES LATERALES */}
        <div className="flex flex-col gap-8 text-gray-400 border-l border-white/10 pl-8 ml-4">
          <a href="https://www.instagram.com/ing.jsanchezr/" target="_blank" rel="noreferrer" aria-label="Visitar mi perfil de Instagram" className="hover:text-white hover:scale-110 transition-all"><Instagram size={24}/></a>
          <a href="https://github.com/joseasanchezrojas-rgb" target="_blank" rel="noreferrer" aria-label="Ver mi portafolio de código en GitHub" className="hover:text-white hover:scale-110 transition-all"><Github size={24}/></a>
          <a href="#" target="_blank" rel="noreferrer" aria-label="Visitar mi perfil en LinkedIn" className="hover:text-blue-500 hover:scale-110 transition-all"><Linkedin size={24}/></a>
          <a href="https://wa.me/584243019823" target="_blank" rel="noreferrer" aria-label="Contáctame a mi WhatsApp" className="hover:text-green-500 hover:scale-110 transition-all"><MessageCircle size={24}/></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;