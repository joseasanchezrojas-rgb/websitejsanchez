import React from 'react';
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Tu número de contacto en Aragua
  const phoneNumber = "584243019823"; 
  const message = "Hola José, vi tu portafolio y me gustaría contactarte.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[100] group"
      aria-label="Contactar por WhatsApp"
    >
      {/* BOTÓN PRINCIPAL CON EL ESTILO ORIGINAL DE VERCEL */}
      <div className="relative bg-gradient-to-br from-green-400 to-green-600 text-white p-5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] border-4 border-black group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-300 flex items-center justify-center">
        {/* ICONO CON RELIEVE */}
        <MessageCircle size={32} fill="currentColor" className="text-white opacity-95 group-hover:scale-105 transition-transform" />
      </div>

      {/* SUTIL INDICADOR DE NOTIFICACIÓN (Opcional, basado en el estilo de Vercel) */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-200"></span>
      </span>
    </a>
  );
};

export default WhatsAppButton;