import React, { useState } from 'react';
import { ExternalLink, Github, Code, Layers, Palette, X, Monitor, Instagram, BookOpen } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Gestión Médica",
      type: "Sistema Web / MVP",
      tech: ["HTML", "CSS", "PHP", "MySQL", "JS"],
      icon: <Code size={20} />,
      description: "Sistema integral para la administración de historias clínicas y pacientes.",
      details: "Desarrollado para optimizar el flujo de trabajo en consultorios médicos. Incluye módulos de registro, búsqueda avanzada de pacientes, control de citas y almacenamiento de diagnósticos bajo arquitectura MVC."
    },
    {
      id: 2,
      title: "Mi Sitio Web",
      type: "Frontend / React",
      tech: ["React", "Tailwind", "Lucide"],
      icon: <Monitor size={20} />,
      description: "Portafolio profesional optimizado con enfoque en marca personal.",
      details: "Plataforma desarrollada con React para mostrar mi trayectoria como Ingeniero. Utiliza Tailwind CSS para un diseño responsivo y Roboto Mono para reforzar la identidad técnica."
    },
    {
      id: 3,
      title: "Asignación de Aulas",
      type: "Sistema Web / MVP",
      tech: ["HTML", "CSS", "PHP", "MySQL", "JS"],
      icon: <Code size={20} />,
      description: "Software para la gestión y optimización de espacios educativos.",
      details: "Solución técnica orientada a instituciones universitarias en Aragua para evitar conflictos de horarios y maximizar la ocupación de aulas según la capacidad y necesidades académicas."
    },
    {
      id: 4,
      title: "Diseño UX/UI Web",
      type: "Diseño Digital",
      tech: ["Figma", "Adobe AI", "UX Research"],
      icon: <Palette size={20} />,
      description: "Prototipado de alta fidelidad centrado en la experiencia de usuario.",
      details: "Proceso de diseño que abarca desde el wireframing hasta el prototipo interactivo de mi sitio web, asegurando una navegación intuitiva y coherente con mi perfil profesional."
    },
    {
      id: 5,
      title: "Post para Instagram",
      type: "Social Media",
      tech: ["Diseño Gráfico", "Branding"],
      icon: <Instagram size={20} />,
      description: "Contenido visual estratégico para redes sociales.",
      details: "Diseño de piezas gráficas para Instagram enfocadas en comunicación técnica y educativa, manteniendo una línea visual limpia y profesional."
    },
    {
      id: 6,
      title: "Diseño de Cursos",
      type: "E-learning",
      tech: ["Moodle", "Canvas", "LMS"],
      icon: <BookOpen size={20} />,
      description: "Estructuración y diseño visual de entornos de aprendizaje.",
      details: "Desarrollo de interfaces y organización pedagógica para cursos virtuales, optimizando la experiencia del estudiante en plataformas como Moodle."
    }
  ];

  return (
    <section id="portafolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TÍTULO DE SECCIÓN */}
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6 mb-4">
            / Portafolio
          </h2>
          <p className="font-mono text-gray-500 italic text-sm">
            Proyectos destacados y soluciones desarrolladas como Ingeniero de Sistemas.
          </p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
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
              </div>

              <button 
                onClick={() => setSelectedProject(project)}
                className="font-mono text-xs font-bold text-white flex items-center gap-2 hover:text-blue-500 transition-colors uppercase italic w-fit mt-auto"
              >
                Ver Más <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* MODAL DETALLADO */}
        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#0A0A0A] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative">
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"
              >
                <X size={28} />
              </button>

              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <span className="font-mono text-xs font-bold text-blue-500 uppercase tracking-[0.3em] italic mb-3 block">
                    {selectedProject.type}
                  </span>
                  <h3 className="font-mono text-3xl font-black italic text-white uppercase leading-none">
                    {selectedProject.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-2xl border-l-2 border-blue-600">
                    <p className="font-mono text-gray-300 text-sm leading-relaxed italic">
                      {selectedProject.details}
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-3 italic font-bold">Stack Tecnológico</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="font-mono text-[10px] font-bold text-white border border-white/10 px-3 py-1 rounded-md uppercase italic">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-6 border-t border-white/5 pt-8">
                  <a href="#" className="flex-1 py-3 bg-white text-black font-mono text-xs font-bold rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all uppercase italic">
                    Demo en Vivo <ExternalLink size={14} />
                  </a>
                  <a href="#" className="flex-1 py-3 border border-white/10 text-gray-400 font-mono text-xs font-bold rounded-full flex items-center justify-center gap-2 hover:text-white transition-all uppercase italic">
                    GitHub <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;