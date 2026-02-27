import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';


export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-blue-500/30">
      {/* El fondo de puntos (bg-dots) debe estar definido en tu index.css o main.css */}
      <div className="bg-dots">
        <Navbar />
        
        <main className="max-w-7xl mx-auto px-6 pt-24">
          <Hero />
          <About/>
          <Skills/>
          <Services/>
          <Portfolio/>
          <Contact />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
}