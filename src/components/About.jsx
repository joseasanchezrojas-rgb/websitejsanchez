import React from 'react';
import { FileText, Download, ChevronRight, MousePointer2, ChevronDown } from "lucide-react";

const About = () => {
  const cvPath = "/CV_Jose_Sanchez_Ingeniero.pdf";

  return (
    <section id="acercademí" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO DE SECCIÓN CON ESTILO TERMINAL */}
        <div className="mb-12">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6">
            / Acerca de Mí
          </h2>
        </div>

        {/* CONTENEDOR GRID PARA EQUILIBRAR EL ESPACIO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA IZQUIERDA: CONTENIDO Y BOTONES */}
          <div>
            <div className="space-y-6 mb-12">
              <p className="font-mono text-lg text-gray-300 leading-relaxed italic">
                Soy un apasionado de la tecnología con una visión integral de la Ingeniería de Sistemas. Mi enfoque combina la precisión técnica con la pedagogía y el análisis, permitiéndome no solo desarrollar sistemas robustos, sino también formar a las generaciones interesadas en Tecnología.
              </p>
              <p className="font-mono text-gray-400 leading-relaxed italic">
                Como <span className="text-blue-400 font-medium italic">Ingeniero de Sistemas</span> y <span className="text-blue-400 font-medium italic">Webmaster</span> en Aragua, me especializo en transformar problemas complejos en soluciones digitales modernas y altamente eficientes.
              </p>
            </div>

            {/* SECCIÓN DE ACCIÓN: BOTONES DE CV */}
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <a 
                href={cvPath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-mono font-bold italic rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              >
                <FileText size={20} />
                VER CURRICULUM
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href={cvPath} 
                download
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-mono font-bold italic rounded-full hover:bg-white/5 transition-all duration-300"
              >
                <Download size={20} />
                DESCARGAR PDF
              </a>
            </div>

            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.3em] mt-8 italic">
              Documentación profesional actualizada • {new Date().getFullYear()}
            </p>
          </div>

          {/* COLUMNA DERECHA: BOTÓN IR AL PORTAFOLIO (ESTILO HERO) */}
          <div className="hidden lg:flex flex-col items-center justify-center animate-bounce-slow">
            <a 
              href="#portafolio" 
              className="flex flex-col items-center gap-4 text-gray-500 hover:text-blue-500 transition-all duration-500 group"
            >
              <div className="border-2 border-gray-700 rounded-full p-4 group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all">
                <MousePointer2 size={32} className="rotate-180" />
              </div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-xs font-bold tracking-[0.4em] uppercase">
                  Ir al Portafolio
                </span>
                <ChevronDown size={20} className="mt-2 group-hover:translate-y-1 transition-transform" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;