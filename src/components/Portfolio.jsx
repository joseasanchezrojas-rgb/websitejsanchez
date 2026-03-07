import React, { useState } from 'react';
import { ExternalLink, Github, Code, Layers, Palette, X, Monitor, Instagram, BookOpen } from "lucide-react";

const Portfolio = ({ idioma }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const textos = {
    ES: {
      titulo: "/ Portafolio",
      subtitulo: "Proyectos destacados y soluciones desarrolladas como Ingeniero de Sistemas.",
      verMas: "Ver Más",
      stack: "Stack Tecnológico",
      demo: "Demo en Vivo",
      cerrar: "Cerrar",
      items: [
        {
          id: 1,
          title: "Gestión Médica",
          type: "Sistema Web / MVP",
          tech: ["HTML", "CSS", "PHP", "MySQL", "JS"],
          icon: <Code size={20} />,
          description: "Sistema integral para la administración de historias clínicas y pacientes.",
          details: "Desarrollado para optimizar el flujo de trabajo en consultorios médicos. Incluye módulos de registro, búsqueda avanzada de pacientes, control de citas y almacenamiento de diagnósticos bajo arquitectura MVC.",
          link: "https://sgmedica.infinityfreeapp.com/"
        },
        {
          id: 2,
          title: "Mi Sitio Web",
          type: "Frontend / React",
          tech: ["React", "Tailwind", "Lucide"],
          icon: <Monitor size={20} />,
          description: "Portafolio profesional optimizado con enfoque en marca personal.",
          details: "Plataforma desarrollada con React para mostrar mi trayectoria como Ingeniero. Utiliza Tailwind CSS para un diseño responsivo y Roboto Mono para reforzar la identidad técnica.",
          link:"https://jasanchezr.vercel.app/"
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
          details: "Proceso de diseño que abarca desde el wireframing hasta el prototipo alta fidelidad de mi sitio web, asegurando una navegación intuitiva y coherente con mi perfil profesional.",
          link: "https://www.figma.com/design/dL2zF5yAeFNpPlmBn3lmc3/Web-Site-Ing-Sanchez?node-id=0-1&t=GoQGmE2eZyIxEo1o-1"
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
      ]
    },
    EN: {
      titulo: "/ Portfolio",
      subtitulo: "Featured projects and solutions developed as a Systems Engineer.",
      verMas: "View More",
      stack: "Tech Stack",
      demo: "Live Demo",
      cerrar: "Close",
      items: [
        {
          id: 1,
          title: "Medical Management",
          type: "Web System / MVP",
          tech: ["HTML", "CSS", "PHP", "MySQL", "JS"],
          icon: <Code size={20} />,
          description: "Comprehensive system for managing clinical records and patients.",
          details: "Developed to optimize workflow in medical offices. Includes registration modules, advanced patient search, appointment control, and diagnostic storage under MVC architecture.",
          link: "https://sgmedica.infinityfreeapp.com/"
        },
        {
          id: 2,
          title: "My Website",
          type: "Frontend / React",
          tech: ["React", "Tailwind", "Lucide"],
          icon: <Monitor size={20} />,
          description: "Professional portfolio optimized with a personal branding focus.",
          details: "Platform developed with React to showcase my engineering career. Uses Tailwind CSS for responsive design and Roboto Mono to reinforce technical identity.",
          link:"https://jasanchezr.vercel.app/"
        },
        {
          id: 3,
          title: "Classroom Assignment",
          type: "Web System / MVP",
          tech: ["HTML", "CSS", "PHP", "MySQL", "JS"],
          icon: <Code size={20} />,
          description: "Software for the management and optimization of educational spaces.",
          details: "Technical solution oriented to university institutions in Aragua to avoid schedule conflicts and maximize classroom occupancy according to capacity and academic needs."
        },
        {
          id: 4,
          title: "UX/UI Web Design",
          type: "Digital Design",
          tech: ["Figma", "Adobe AI", "UX Research"],
          icon: <Palette size={20} />,
          description: "High-fidelity prototyping centered on user experience.",
          details: "Design process ranging from wireframing to the high-fidelity prototype of my website, ensuring intuitive navigation consistent with my professional profile.",
          link: "https://www.figma.com/design/dL2zF5yAeFNpPlmBn3lmc3/Web-Site-Ing-Sanchez?node-id=0-1&t=GoQGmE2eZyIxEo1o-1"
        },
        {
          id: 5,
          title: "Instagram Posts",
          type: "Social Media",
          tech: ["Graphic Design", "Branding"],
          icon: <Instagram size={20} />,
          description: "Strategic visual content for social media.",
          details: "Design of graphic pieces for Instagram focused on technical and educational communication, maintaining a clean and professional visual line."
        },
        {
          id: 6,
          title: "Course Design",
          type: "E-learning",
          tech: ["Moodle", "Canvas", "LMS"],
          icon: <BookOpen size={20} />,
          description: "Structuring and visual design of learning environments.",
          details: "Development of interfaces and pedagogical organization for virtual courses, optimizing the student experience on platforms like Moodle."
        }
      ]
    }
  };

  const t = textos[idioma] || textos.ES;

  return (
    <section id="portafolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6 mb-4">
            {t.titulo}
          </h2>
          {/* Ajuste de contraste: text-gray-400 */}
          <p className="font-mono text-gray-400 italic text-sm">
            {t.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((project) => (
            <div 
              key={project.id} 
              className="group bg-[#050505] border border-white/5 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl text-blue-500 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                  {/* Ajuste de contraste: text-gray-400 */}
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 italic">
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
                {t.verMas} <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center px-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-[#0A0A0A] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative">
              
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-20"
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
                    {/* Ajuste de contraste label: text-gray-400 */}
                    <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mb-3 italic font-bold">
                      {t.stack}
                    </p>
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
                  <a 
                    href={selectedProject.link || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-white text-black font-mono text-xs font-bold rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all uppercase italic"
                  >
                    {t.demo} <ExternalLink size={14} />
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