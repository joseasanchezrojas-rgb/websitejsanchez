import React from 'react';
import { ExternalLink, Code2, GraduationCap, Laptop } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creación de interfaces modernas, escalables y eficientes con React.",
      tags: ["React", "Tailwind"],
      icon: <Code2 size={20} />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Docencia",
      description: "Compartiendo conocimientos técnicos con la comunidad universitaria.",
      tags: ["Educación", "Mentoría"],
      icon: <GraduationCap size={20} />,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Soporte Técnico",
      description: "Soluciones de infraestructura y optimización de sistemas IT.",
      tags: ["Soporte", "IT"],
      icon: <Laptop size={20} />,
      image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=600",
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO */}
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6 mb-4">
            / Servicios 
          </h2>
          <p className="font-mono text-gray-500 italic text-sm md:text-base">
            Lo que puedo hacer por tu próximo proyecto.
          </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#0A0A0A] rounded-3xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full"
            >
              {/* IMAGEN DEL SERVICIO */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENIDO */}
              <div className="p-8 flex flex-col flex-grow">
                {/* TAGS */}
                <div className="flex gap-2 mb-6">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="font-mono text-[10px] font-bold uppercase tracking-widest bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-mono text-xl font-bold italic text-white mb-4 flex items-center gap-3">
                  <span className="text-blue-500">{service.icon}</span>
                  {service.title}
                </h3>
                
                <p className="font-mono text-sm text-gray-400 italic leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* BOTÓN VER PROYECTO */}
                <a 
                  href="#" 
                  className="font-mono text-xs font-bold italic text-blue-500 flex items-center gap-2 hover:text-white transition-colors group/btn w-fit"
                >
                  Ver Proyecto 
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;