import React from 'react';
import { 
  Github, 
  Youtube, 
  Twitter, 
  ExternalLink, 
  Layers, 
  Code2 
} from "lucide-react";
import fotoPerfil from './assets/img_perfil.png'; 

// --- COMPONENTES INTERNOS ---

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

const ProjectCard = ({ title, description, tags, link, image }) => (
  <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/30 hover:-translate-y-2 transition-all duration-300 flex flex-col">
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
        <a 
          href={link} 
          className="inline-flex items-center text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors"
        >
          Ver Proyecto <ExternalLink size={14} className="ml-1" />
        </a>
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
        {/* RECUERDA: Crea tu cuenta en Formspree.io y pon tu ID aquí */}
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
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

// --- DATOS ---
const projects = [
  {
    title: "Desarrollo Web",
    description: "Creación de interfaces modernas y escalables con React.",
    tags: ["React", "Tailwind"],
    link: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80"
  },
  {
    title: "Docencia",
    description: "Compartiendo conocimientos técnicos con la comunidad.",
    tags: ["Educación", "Mentoria"],
    link: "#",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
  },
  {
    title: "Soporte Técnico",
    description: "Soluciones de infraestructura y optimización de sistemas.",
    tags: ["Soporte", "IT"],
    link: "#",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80"
  }
];

// --- APP PRINCIPAL ---
export default function App() {
  return (
    <div className="min-h-screen bg-black bg-dots text-gray-100 font-sans selection:bg-blue-500/30">
      <WhatsAppButton />
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-sm md:text-base font-bold tracking-tight">
            <span className="text-blue-500">Ing.</span> José Sánchez
          </span>
        </div>
      </nav>

      <div className="pt-16">
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
            <a href="https://github.com/joseasanchezrojas-rgb" className="hover:text-white transition-colors"><Github size={24}/></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={24}/></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={24}/></a>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 pb-24">
          <section className="max-w-2xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-6 text-center">
              Contenido y Comunidad
            </h2>
            <LinkCard title="Mi Curso de React" description="Aprende desde las bases hasta nivel experto." url="#" icon={Code2} />
            <LinkCard title="Setup de Desarrollo" description="Las herramientas que uso en mi día a día." url="#" icon={Layers} />
          </section>

          <div className="h-px bg-white/5 w-full mb-20"></div>

          <section className="mb-20">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-black text-white">Servicios y Proyectos</h2>
              <p className="text-gray-500 mt-1">Lo que puedo hacer por tu próximo proyecto.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </section>

          <Contacto />
        </main>

        <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} • José Sánchez • Portafolio Profesional</p>
        </footer>
      </div>
    </div>
  );
}