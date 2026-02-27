import React from 'react';
import { 
  Code2, Terminal, Database, Globe, 
  GraduationCap, Share2, Settings, PenTool, Layout 
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <Code2 size={32} />, color: "text-orange-500" },
    { name: "CSS", icon: <Layout size={32} />, color: "text-blue-500" },
    { name: "PHP", icon: <Terminal size={32} />, color: "text-indigo-400" },
    { name: "MySQL", icon: <Database size={32} />, color: "text-blue-600" },
    { name: "JavaScript", icon: <Code2 size={32} />, color: "text-yellow-500" },
    { name: "Moodle / LMS", icon: <GraduationCap size={32} />, color: "text-orange-400" },
    { name: "Redes / CCTV", icon: <Globe size={32} />, color: "text-green-500" },
    { name: "Soporte IT", icon: <Settings size={32} />, color: "text-gray-400" },
    { name: "Diseño Gráfico", icon: <PenTool size={32} />, color: "text-pink-500" },
    { name: "Diseño UI/UX", icon: <Share2 size={32} />, color: "text-purple-500" },
  ];

  return (
    <section id="habilidades" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ENCABEZADO DE SECCIÓN */}
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6 mb-4">
            / Habilidades Técnicas
          </h2>
          <p className="font-mono text-gray-500 italic text-sm md:text-base">
            Tecnologías y herramientas que domino profesionalmente.
          </p>
        </div>

        {/* GRID DE HABILIDADES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group bg-[#0A0A0A] border border-white/5 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-blue-500/50 hover:bg-[#111] transition-all duration-300"
            >
              <div className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;