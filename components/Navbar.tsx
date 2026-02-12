
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">CB</div>
        <div className="flex flex-col leading-none">
          <span className="font-montserrat font-bold text-xl tracking-tighter text-gray-800 uppercase">COMPANY <span className="text-blue-600">BOX</span></span>
          <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em]">VIDRAÇARIA EM SINOP</span>
        </div>
      </div>
      
      <nav className="hidden lg:flex gap-8 text-sm font-bold text-gray-600 uppercase tracking-wider">
        <a href="#hero" className="hover:text-blue-600 transition-colors">Início</a>
        <a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre</a>
        <a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a>
        <a href="#projetos" className="hover:text-blue-600 transition-colors">Galeria</a>
        <a href="#analyzer" className="hover:text-blue-600 transition-colors text-blue-500">Consultor IA</a>
      </nav>

      <a 
        href="https://wa.me/5566999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-[#25d366] hover:bg-[#128c7e] text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all transform hover:scale-105 shadow-md"
      >
        <i className="fab fa-whatsapp text-lg"></i>
        <span className="hidden sm:inline">ORÇAMENTO</span>
      </a>
    </header>
  );
};

export default Navbar;
