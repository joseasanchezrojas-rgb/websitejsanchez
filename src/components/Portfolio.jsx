import React from 'react';
import { ExternalLink, Github, Layers, Code, Palette } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Gestión Médica",
      type: "Sistema Web",
      tech: ["PHP", "MySQL", "JS"],
      icon: <Code size={20} />,
      description: "MVP para la gestión eficiente de pacientes e historias clínicas."
    },
    {
      title: "Mi Sitio Web",
      type: "Frontend",
      tech: ["React", "Tailwind"],
      icon: <Layers size={20} />,
      description: "Portafolio profesional con enfoque en performance y diseño moderno."
    },
    {
      title: "Asignación de Aulas",
      type: "Sistema Web",
      tech: ["PHP", "MySQL", "JS"],
      icon: <Code size={20} />,
      description: "Optimización de espacios educativos mediante algoritmos de asignación."
    },
    {
      title: "UX/UI Mi Sitio Web",
      type: "Diseño",
      tech: ["Figma", "Adobe AI"],
      icon: <Palette size={20} />,
      description: "Prototipado de alta fidelidad centrado en la experiencia del usuario."
    },
    {
      title: "Post Instagram",
      type: "Social Media",
      tech: ["Branding", "Diseño"],
      icon: <Palette size={20} />,
      description: "Creación de contenido visual para marcas en redes sociales."
    },
    {
      title: "Diseño de Cursos",
      type: "E-learning",
      tech: ["Moodle", "Canvas"],
      icon: <Layers size={20} />,
      description: "Estructuración pedagógica y visual de entornos virtuales de aprendizaje."
    }
  ];

  return (
    <section id="portafolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO TÉCNICO */}
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6 mb-4">
            / Portafolio
          </h2>
          <p className="font-mono text-gray-500 italic text-sm md:text-base">
            Proyectos destacados y soluciones desarrolladas (MVP).
          </p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* EFECTO DE LUZ AL FONDO */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all"></div>

              <div className="relative z-10">
                {/* TIPO Y ICONO */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl text-blue-500">
                    {project.icon}
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-600 italic">
                    {project.type}
                  </span>
                </div>

                <h3 className="font-mono text-xl font-bold italic text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="font-mono text-sm text-gray-400 italic mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* TECNOLOGÍAS */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="font-mono text-[9px] font-bold text-blue-400/80 border border-blue-400/20 px-2 py-0.5 rounded uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS DE ACCIÓN */}
                <div className="flex gap-4">
                  <button className="font-mono text-xs font-bold text-white flex items-center gap-2 hover:text-blue-500 transition-colors uppercase italic">
                    Ver Más<ExternalLink size={14} />
                  </button>
                  <button className="font-mono text-xs font-bold text-gray-500 flex items-center gap-2 hover:text-white transition-colors uppercase italic">
                    GitHub <Github size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;