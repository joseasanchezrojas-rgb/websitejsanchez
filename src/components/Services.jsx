import React, { useState } from 'react';
import { Code2, GraduationCap, Settings, ExternalLink, X, CheckCircle2 } from "lucide-react";

// Importación de imágenes reales
import imgWeb from '../assets/serv_web.webp'; 
import imgDocencia from '../assets/serv_docencia.webp';
import imgSoporte from '../assets/serv_soporte.webp';

const Services = ({ idioma }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const textos = {
    ES: {
      titulo: "/ Servicios",
      subtitulo: "Soluciones integrales de ingeniería y formación técnica.",
      verServicio: "Ver Ficha Técnica",
      cerrar: "Cerrar",
      especificaciones: "Especificaciones Técnicas",
      items: [
        {
          id: 1,
          title: "Desarrollo Web",
          desc: "Sistemas Modernos, Escalables y Eficientes.",
          tags: ["REACT", "TAILWIND", "PHP", "MySQL", "JavaScript"],
          detalles: [
            "Arquitectura de software basada en componentes.",
            "Bases de datos relacionales normalizadas.",
            "Optimización de carga y SEO técnico.",
            "Seguridad en autenticación y manejo de sesiones."
          ]
        },
        {
          id: 2,
          title: "Docencia",
          desc: "Planes Educativos de Tecnología Basados en Experiencias.",
          tags: ["MOODLE", "LMS", "EDUCACIÓN", "ENSEÑANZA"],
          detalles: [
            "Diseño instruccional para entornos virtuales.",
            "Administración avanzada de plataformas Moodle.",
            "Creación de contenido educativo interactivo.",
            "Enseñanza personalizada en Tecnología."
          ]
        },
        {
          id: 3,
          title: "Soporte Técnico",
          desc: "Soluciones de Infraestructura y Optimización de Sistemas IT.",
          tags: ["SOPORTE", "IT", "INSPECCIÓN", "AUDITORIA"],
          detalles: [
            "Auditoría preventiva de sistemas críticos.",
            "Mantenimiento de hardware y redes de alta velocidad.",
            "Configuración de servidores y backup de datos.",
            "Gestión de CCTV y seguridad electrónica."
          ]
        }
      ]
    },
    EN: {
      titulo: "/ Services",
      subtitulo: "Comprehensive engineering solutions and technical training.",
      verServicio: "View Technical Sheet",
      cerrar: "Close",
      especificaciones: "Technical Specifications",
      items: [
        {
          id: 1,
          title: "Web Development",
          desc: "Modern, Scalable, and Efficient Systems.",
          tags: ["REACT", "TAILWIND", "PHP", "MySQL", "JavaScript"],
          detalles: [
            "Component-based software architecture.",
            "Normalized relational databases.",
            "Load optimization and technical SEO.",
            "Security in authentication and session handling."
          ]
        },
        {
          id: 2,
          title: "Teaching",
          desc: "Experience-Based Technology Educational Plans.",
          tags: ["MOODLE", "LMS", "EDUCATION", "TEACHING"],
          detalles: [
            "Instructional design for virtual environments.",
            "Advanced Moodle platform administration.",
            "Interactive educational content creation.",
            "Personalized teaching in Technology."
          ]
        },
        {
          id: 3,
          title: "Tech Support",
          desc: "Infrastructure Solutions and IT Systems Optimization.",
          tags: ["SUPPORT", "IT", "INSPECTION", "AUDIT"],
          detalles: [
            "Preventive audit of critical systems.",
            "High-speed hardware and network maintenance.",
            "Server configuration and data backup.",
            "CCTV and electronic security management."
          ]
        }
      ]
    }
  };

  const t = textos[idioma] || textos.ES;

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const servicesData = [
    { ...t.items[0], icon: <Code2 size={20} />, img: imgWeb },
    { ...t.items[1], icon: <GraduationCap size={20} />, img: imgDocencia },
    { ...t.items[2], icon: <Settings size={20} />, img: imgSoporte }
  ];

  return (
    <section id="servicios" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6 mb-4">
            {t.titulo}
          </h2>
          <p className="font-mono text-gray-400 italic text-sm md:text-base">
            {t.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-50 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow text-center">
                {/* Tags centrados */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  {service.tags.map(tag => (
                    <span key={tag} className="font-mono text-[9px] font-bold tracking-widest text-blue-400 bg-blue-500/5 px-2 py-1 rounded-md border border-blue-500/10 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-mono text-xl font-bold text-white mb-4 flex items-center justify-center gap-3 italic">
                  <span className="text-blue-500">{service.icon}</span>
                  {service.title}
                </h3>
                
                <p className="font-mono text-sm text-gray-400 leading-relaxed mb-8 italic flex-grow">
                  {service.desc}
                </p>

                <button 
                  onClick={() => openModal(service)}
                  className="flex items-center justify-center gap-2 font-mono text-xs font-bold text-blue-500 uppercase tracking-widest group/btn mt-auto"
                >
                  {t.verServicio} 
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL DE FICHA TÉCNICA --- */}
      {modalOpen && selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-[#0A0A0A] border border-blue-500/30 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
            
            {/* Botón Cerrar */}
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Imagen Lateral en Modal */}
              <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                <img src={selectedService.img} className="w-full h-full object-cover brightness-75" alt="" />
              </div>

              {/* Contenido Técnico */}
              <div className="p-8 md:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-500">{selectedService.icon}</span>
                  <h3 className="font-mono text-2xl font-bold text-white italic uppercase tracking-tighter">
                    {selectedService.title}
                  </h3>
                </div>

                <p className="font-mono text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border-b border-blue-500/20 pb-2">
                  {t.especificaciones}
                </p>

                <ul className="space-y-4 mb-8">
                  {selectedService.detalles.map((detalle, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <CheckCircle2 size={18} className="text-blue-500 mt-1 shrink-0" />
                      <p className="font-mono text-sm text-gray-400 italic group-hover:text-gray-200 transition-colors">
                        {detalle}
                      </p>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setModalOpen(false)}
                  className="w-full py-4 bg-blue-600/10 border border-blue-500/30 text-blue-500 font-mono text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-blue-600 hover:text-white transition-all italic"
                >
                  {t.cerrar}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;