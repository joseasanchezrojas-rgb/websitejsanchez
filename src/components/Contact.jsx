import React, { useState } from 'react';
import { Send, MessageSquare, CheckCircle } from "lucide-react";

const Contact = ({ idioma }) => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Diccionario de traducciones
  const textos = {
    ES: {
      titulo: "/ Contáctame",
      subtitulo: "¿Tienes un proyecto en mente? Trabajemos juntos.",
      hablemos: "Hablemos",
      descHablemos: "Disponible para proyectos freelance, consultorías o formación universitaria en Aragua.",
      labelNombre: "Nombre",
      labelCorreo: "Correo",
      labelMensaje: "Mensaje",
      placeNombre: "Ej. Juan Pérez",
      placeCorreo: "juan@ejemplo.com",
      placeMensaje: "Describe tu proyecto...",
      btnEnviar: "Enviar Mensaje",
      btnEnviando: "Enviando...",
      exitoTitulo: "¡Mensaje Enviado!",
      exitoDesc: "Gracias por contactarme, José te responderá muy pronto.",
      btnOtro: "Enviar otro mensaje",
      error: "Ocurrió un error. Por favor, intenta de nuevo."
    },
    EN: {
      titulo: "/ Contact Me",
      subtitulo: "Have a project in mind? Let's work together.",
      hablemos: "Let's Talk",
      descHablemos: "Available for freelance projects, consulting, or university training in Aragua.",
      labelNombre: "Name",
      labelCorreo: "Email",
      labelMensaje: "Message",
      placeNombre: "e.g. John Doe",
      placeCorreo: "john@example.com",
      placeMensaje: "Describe your project...",
      btnEnviar: "Send Message",
      btnEnviando: "Sending...",
      exitoTitulo: "Message Sent!",
      exitoDesc: "Thanks for reaching out, Jose will get back to you soon.",
      btnOtro: "Send another message",
      error: "An error occurred. Please try again."
    }
  };

  const t = textos[idioma] || textos.ES;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaqdnyen", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="font-mono text-3xl md:text-4xl font-bold italic text-white border-l-4 border-blue-500 pl-6 mb-4">
            {t.titulo}
          </h2>
          <p className="font-mono text-gray-500 italic text-sm">
            {t.subtitulo}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 italic">
              <MessageSquare className="text-blue-500 mb-4" size={32} />
              <h3 className="font-mono text-white font-bold mb-2">{t.hablemos}</h3>
              <p className="font-mono text-sm text-gray-400 leading-relaxed">
                {t.descHablemos}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-[#0A0A0A] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>

            {status === "SUCCESS" ? (
              <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle size={64} className="text-green-500 mb-6" />
                <h3 className="font-mono text-2xl font-bold text-white mb-2 italic">{t.exitoTitulo}</h3>
                <p className="font-mono text-gray-400 italic mb-8">{t.exitoDesc}</p>
                <button 
                  onClick={() => setStatus("")}
                  className="font-mono text-xs font-bold text-blue-500 uppercase tracking-widest hover:underline"
                >
                  {t.btnOtro}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-blue-500 font-bold uppercase tracking-widest ml-1 italic">{t.labelNombre}</label>
                    <input 
                      type="text" name="name" placeholder={t.placeNombre} required 
                      className="w-full p-4 rounded-xl bg-black border border-white/10 focus:border-blue-500 outline-none text-white font-mono text-sm transition-all italic"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-blue-500 font-bold uppercase tracking-widest ml-1 italic">{t.labelCorreo}</label>
                    <input 
                      type="email" name="email" placeholder={t.placeCorreo} required 
                      className="w-full p-4 rounded-xl bg-black border border-white/10 focus:border-blue-500 outline-none text-white font-mono text-sm transition-all italic"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-blue-500 font-bold uppercase tracking-widest ml-1 italic">{t.labelMensaje}</label>
                  <textarea 
                    name="message" placeholder={t.placeMensaje} rows="5" required 
                    className="w-full p-4 rounded-xl bg-black border border-white/10 focus:border-blue-500 outline-none text-white font-mono text-sm transition-all resize-none italic"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black font-mono font-bold italic rounded-full hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm disabled:opacity-50"
                >
                  {isSubmitting ? t.btnEnviando : t.btnEnviar} <Send size={18} />
                </button>

                {status === "ERROR" && (
                  <p className="text-red-500 font-mono text-xs italic text-center">{t.error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;