import React from 'react';
import { 
  Github, 
  Youtube, 
  Twitter, 
  ExternalLink, 
  Layers, 
  Code2,
  Globe,
  Settings,
  GraduationCap,
  PenTool,
  LayoutTemplate,
  ArrowLeft,
  ShieldAlert
} from "lucide-react";
import fotoPerfil from './assets/img_perfil.png'; 

// --- COMPONENTES INTERNOS ---

const BotonCV = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cvPath = "/CV_Jose_Sanchez_Ingeniero.pdf";

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 mt-8 px-6">
      {isMobile ? (
        <a 
          href={cvPath} 
          download
          className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all animate-pulse"
        >
          Descargar Curriculum (PDF)
        </a>
      ) : (
        <>
          <a 
            href={cvPath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
          >
            Ver Curriculum Vitae
          </a>
          <a 
            href={cvPath} 
            download
            className="inline-flex items-center px-6 py-3 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Descargar PDF
          </a>
        </>
      )}
    </div>
  );
};

const LinkCard = ({ title, description, url, icon: Icon }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center p-4 mb-4 bg-[#111] rounded-xl border border-white/10 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all group"
  >
    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon size={24} />
    </div>
    <div className="ml-4 text-left">
      <h3 className="font-bold text-gray-100">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    <ExternalLink className="ml-auto text-gray-600 group-hover:text-blue-400" size={18} />
  </a>
);

const ProjectCard = ({ title, description, tags, link, image, onClick }) => (
  <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col">
    <div className="h-48 bg-gray-800 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 opacity-80 hover:opacity-100"
      />
    </div>
    <div className="p-6 flex flex-col grow">
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-xs font-semibold bg-blue-500/10 text-blue-400 rounded-md">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-5 line-clamp-2">
        {description}
      </p>
      <div className="mt-auto">
        <button 
  onClick={onClick}
  className="inline-flex items-center text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors cursor-pointer"
>
  Ver Proyecto <ExternalLink size={14} className="ml-1" />
</button>
      </div>
    </div>
  </div>
);

const WhatsAppButton = () => {
  const phone = "584243019823"; 
  const message = "Hola José, vi tu portafolio y me gustaría contactarte.";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
      title="Escríbeme por WhatsApp"
    >
      <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.164 1.236 8.41 3.483 2.247 2.247 3.483 5.235 3.483 8.41 0 6.556-5.332 11.89-11.888 11.89-1.996 0-3.957-.502-5.69-1.458l-6.322 1.672zm6.206-3.832c1.472.873 3.016 1.334 4.59 1.334 4.872 0 8.834-3.961 8.834-8.834 0-2.361-.919-4.58-2.587-6.248-1.668-1.668-3.887-2.587-6.248-2.587-4.873 0-8.834 3.962-8.834 8.834 0 1.691.472 3.341 1.365 4.78l-.105.183-1.008 3.681 3.774-.997.173.102z"/>
      </svg>
    </a>
  );
};

const Contacto = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto bg-[#111] p-8 rounded-2xl border border-white/10 shadow-xl">
        <h2 className="text-3xl font-black text-white mb-6 text-center">Contacto</h2>
        <form action="https://formspree.io/f/xaqdnyen" method="POST" className="space-y-4">
          <input 
            type="text" name="name" placeholder="Nombre" required 
            className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-blue-500 outline-none text-white"
          />
          <input 
            type="email" name="email" placeholder="Correo" required 
            className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-blue-500 outline-none text-white"
          />
          <textarea 
            name="message" placeholder="¿En qué puedo ayudarte?" rows="4" required 
            className="w-full p-3 rounded-lg bg-black border border-white/10 focus:border-blue-500 outline-none text-white"
          ></textarea>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all transform active:scale-95">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

const SkillBadge = ({ name, icon: Icon, colorClass }) => (
  <div className="flex flex-col items-center p-6 bg-[#111] rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all group animate-in fade-in zoom-in duration-500">
    <div className={`p-4 rounded-xl bg-white/5 mb-3 group-hover:scale-110 transition-transform ${colorClass}`}>
      <Icon size={32} />
    </div>
    <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{name}</span>
  </div>
);

// --- COMPONENTE DE VISTA DETALLADA ---

const VistaProyectosWeb = ({ onVolver }) => {
  const proyectosReales = [
    {
      title: "Sistema de Gestión Médica",
      description: "Plataforma integral para el control de citas, historias médicas y gestión de pacientes.",
      tags: ["PHP", "MySQL", "JS"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500",
      link: "#"
    },
    {
      title: "Portafolio Profesional",
      description: "Mi sitio personal actual, diseñado para destacar habilidades y proyectos con tecnología React.",
      tags: ["React", "Tailwind"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
      link: "https://jasanchezr.vercel.app"
    },
    {
      title: "Plataforma E-learning Moodle",
      description: "Implementación y personalización de entornos virtuales para formación académica online.",
      tags: ["Moodle", "LMS", "PHP"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500",
      link: "#"
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onVolver}
        className="flex items-center text-blue-400 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
        Volver al inicio
      </button>
      
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-black text-white">Proyectos: Desarrollo Web</h2>
        <p className="text-gray-500 mt-1 text-lg">Detalle de mis trabajos principales en ingeniería de software.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectosReales.map((p, i) => (
          <div key={i} className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 p-4 hover:border-blue-500/30 transition-all flex flex-col">
            <img src={p.image} className="rounded-xl mb-4 h-44 w-full object-cover opacity-90" alt={p.title} />
            <div className="flex gap-2 mb-3">
               {p.tags.map(tag => <span key={tag} className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-1 rounded font-bold uppercase">{tag}</span>)}
            </div>
            {/* Ajuste de tamaño de fuente para que quepa en una sola línea */}
            <h4 className="text-lg md:text-xl font-bold text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
              {p.title}
            </h4>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed grow">{p.description}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-400 font-bold text-sm hover:underline mt-auto">
              Visitar Demo <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- APP PRINCIPAL ---
export default function App() {
  const [vista, setVista] = React.useState('inicio');

  // Asegura que al cambiar de vista, el scroll vuelva arriba
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [vista]);

  const skills = [
    { name: "HTML", icon: Code2, colorClass: "text-orange-400" },
    { name: "CSS", icon: Layers, colorClass: "text-cyan-400" },
    { name: "PHP", icon: Code2, colorClass: "text-indigo-400" },
    { name: "MySQL", icon: Layers, colorClass: "text-red-400" },
    { name: "JavaScript", icon: Code2, colorClass: "text-yellow-400" },
    { name: "Moodle / LMS", icon: GraduationCap, colorClass: "text-orange-500" },
    { name: "Redes / CCTV", icon: Globe, colorClass: "text-green-400" },
    { name: "Soporte IT", icon: Settings, colorClass: "text-gray-400" },
    { name: "Diseño Gráfico", icon: PenTool, colorClass: "text-pink-400" },
    { name: "Diseño UI/UX", icon: LayoutTemplate, colorClass: "text-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-black bg-dots text-gray-100 font-sans selection:bg-blue-500/30">
      <WhatsAppButton />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => setVista('inicio')} className="text-sm md:text-base font-bold tracking-tight">
            <span className="text-blue-500">Ing.</span> José Sánchez
          </button>
        </div>
      </nav>

      <div className="pt-16">
        <main className="max-w-5xl mx-auto px-6 pb-24">
          
          {vista === 'inicio' ? (
            <>
              <header className="max-w-2xl mx-auto pt-16 pb-10 px-6 text-center">
                <div className="relative inline-block">
                  <img 
                    src={fotoPerfil} 
                    alt="José Sánchez" 
                    className="w-32 h-32 rounded-full mx-auto border-4 border-[#111] shadow-2xl mb-6 object-cover object-center"
                  />
                  <div className="absolute bottom-8 right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-black"></div>
                </div>
                <h1 className="text-4xl font-black text-white mb-2 tracking-tight">
                  <span className="text-blue-500">José</span> Sánchez
                </h1>
                <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
                  Ingeniero de Sistemas enfocado en crear experiencias digitales modernas y eficientes.
                </p>
                <div className="flex justify-center gap-5 mt-6 text-gray-500">
                  <a href="https://github.com/joseasanchezrojas-rgb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24}/></a>
                  <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={24}/></a>
                  <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={24}/></a>
                </div>
                <BotonCV />
              </header>

              <section className="max-w-2xl mx-auto mb-20">
                <h2 className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-6 text-center">
                  Contenido y Comunidad
                </h2>
                <LinkCard title="Mi Taller de Ciberseguridad" description="Conoce los diferentes ataques Psicológicos de la Ingenieria Social." url="#" icon={ShieldAlert} />
                <LinkCard title="Setup de Desarrollo" description="Las herramientas que uso en mi día a día." url="#" icon={Layers} />
              </section>

              <div className="h-px bg-white/5 w-full mb-10"></div>
              
              <section className="py-24">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl font-black text-white">Habilidades Técnicas</h2>
                  <p className="text-gray-500 mt-1 text-lg">Tecnologías y herramientas que domino profesionalmente.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {skills.map((skill, index) => (
                    <SkillBadge key={index} {...skill} />
                  ))}
                </div>
              </section>

              <div className="h-px bg-white/5 w-full my-20"></div>

              <section className="mb-20">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl font-black text-white">Servicios y Proyectos</h2>
                  <p className="text-gray-500 mt-1">Lo que puedo hacer por tu próximo proyecto.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ProjectCard 
                    title="Desarrollo Web" 
                    description="Creación de interfaces modernas y escalables con React." 
                    tags={["React", "Tailwind"]} 
                    image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
                    onClick={() => setVista('desarrollo-web')}
                  />
                  <ProjectCard 
                    title="Docencia" 
                    description="Compartiendo conocimientos técnicos con la comunidad." 
                    tags={["Educación", "Mentoria"]} 
                    image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                    onClick={() => {}} 
                  />
                  <ProjectCard 
                    title="Soporte Técnico" 
                    description="Soluciones de infraestructura y optimización de sistemas." 
                    tags={["Soporte", "IT"]} 
                    image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500"
                    onClick={() => {}} 
                  />
                </div>
              </section>

              <Contacto />
            </>
          ) : (
            <VistaProyectosWeb onVolver={() => setVista('inicio')} />
          )}

        </main>

        <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} • José Sánchez • Portafolio Profesional</p>
        </footer>
      </div>
    </div>
  );
}
// Fix deploy