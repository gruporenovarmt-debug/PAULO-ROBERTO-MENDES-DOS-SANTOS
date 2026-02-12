
import React from 'react';
import Navbar from './components/Navbar';
import ImageAnalyzer from './components/ImageAnalyzer';
import { Project } from './types';

const App: React.FC = () => {
  // Using high-reliability Unsplash source IDs for bathroom and glass themes
  const projects: Project[] = [
    { id: 1, title: 'Box Elegance de Canto', category: 'Vidro Temperado 8mm', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Fechamento de Sacada', category: 'Sistema Versatik', image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Espelho de Luxo LED', category: 'Acabamento Lapidado', image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Box Frontal Correr', category: 'Linha Tradicional', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5566999999999?text=Olá! Gostaria de um orçamento para box de vidro." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25d366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl transition-all hover:scale-110 active:scale-90 animate-pulse-subtle group"
        aria-label="Fale conosco no WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="absolute right-20 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
          Orçamento Grátis
        </span>
      </a>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1920&q=85" 
              alt="Ambiente de banheiro moderno com box de vidro premium" 
              className="w-full h-full object-cover animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/50 md:to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-white">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-12 bg-blue-500"></span>
                <span className="text-blue-400 font-bold tracking-[0.3em] text-xs uppercase">Vidraçaria Especializada em Sinop</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-extrabold leading-[0.9] mb-8 tracking-tighter">
                O Box que seu <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">banheiro merece.</span>
              </h1>
              <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-xl">
                Vidros temperados de alta segurança, espelhos sob medida e projetos personalizados para transformar sua casa em um spa particular.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="https://wa.me/5566999999999" className="bg-[#25d366] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#128c7e] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-600/30 group">
                  <i className="fab fa-whatsapp text-xl"></i>
                  ORÇAMENTO WHATSAPP
                  <i className="fas fa-chevron-right text-sm opacity-50 group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a href="#analyzer" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center gap-3">
                  <i className="fas fa-wand-sparkles"></i>
                  CONSULTOR IA
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Nós */}
        <section id="sobre" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img src="https://images.unsplash.com/photo-1600566752355-3979ff1040ad?auto=format&fit=crop&w=1000&q=80" alt="Equipe Company Box instalando vidro temperado" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-blue-700 rounded-[3rem] -z-0 flex items-center justify-center p-8 text-white shadow-2xl">
                <div className="text-center">
                  <span className="block text-6xl font-black">+10</span>
                  <span className="block text-sm font-bold uppercase tracking-widest mt-2">Anos em Sinop</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">Qualidade Certificada</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Experiência que faz a diferença no seu projeto.</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Localizada no coração de Sinop - MT, a <strong>Company Box</strong> é referência em soluções de vidro. Utilizamos materiais de primeira linha e técnicas de instalação modernas para garantir durabilidade e estética impecável.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: 'fa-shield-check', text: 'Vidro 8mm e 10mm' },
                  { icon: 'fa-ruler-combined', text: 'Medição a Laser' },
                  { icon: 'fa-truck-fast', text: 'Entrega Pontual' },
                  { icon: 'fa-award', text: 'Garantia Estendida' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                    <i className={`fas ${item.icon} text-blue-600 text-xl`}></i>
                    <span className="font-bold text-gray-800 text-sm uppercase tracking-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="py-24 bg-slate-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 uppercase tracking-tighter italic">Nossas Especialidades</h2>
              <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8"></div>
              <p className="text-gray-500 text-lg">Projetos residenciais e comerciais com o que há de mais moderno no mercado de vidros e ferragens.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: 'Box para Banheiro', desc: 'Sistemas de correr, canto, pivotante e a sofisticada linha Elegance com roldanas aparentes.', img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80' },
                { title: 'Espelhos Decorativos', desc: 'Espelhos prata, bronze e fumê com lapidação premium, bisotê ou iluminação LED integrada.', img: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=800&q=80' },
                { title: 'Fechamentos e Portas', desc: 'Envidraçamento de sacadas, portas de vidro temperado e divisórias para escritórios.', img: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80' }
              ].map((service, i) => (
                <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-200/50">
                  <div className="h-72 overflow-hidden relative">
                    <img src={service.img} alt={`Serviço de ${service.title} em Sinop`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-500 leading-relaxed mb-8">{service.desc}</p>
                    <a href="https://wa.me/5566999999999" className="bg-gray-900 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-colors">
                      <i className="fab fa-whatsapp"></i> Solicitar Orçamento
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria */}
        <section id="projetos" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-blue-600 font-black tracking-widest text-xs uppercase mb-3 block">Projetos Reais</span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase italic">Obras Entregues</h2>
              </div>
              <button className="bg-blue-50 text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-blue-100 transition-all flex items-center gap-3">
                VER MAIS NO INSTAGRAM <i className="fab fa-instagram"></i>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group relative">
                  <div className="relative h-[480px] overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={`Instalação de ${project.title} - Company Box Sinop`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                      <span className="text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-3">{project.category}</span>
                      <h3 className="text-white font-bold text-2xl leading-tight mb-4">{project.title}</h3>
                      <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-xl">
                        <i className="fas fa-camera"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ImageAnalyzer />

        {/* Contato Final */}
        <section id="contato" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-blue-800 rounded-[4rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative shadow-[0_40px_100px_-20px_rgba(30,58,138,0.4)]">
              <div className="flex-1 text-white z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Fale direto com <br /> o especialista.</h2>
                <p className="text-blue-100 text-xl mb-12 font-light leading-relaxed">Não perca tempo com orçamentos demorados. Nossa equipe em Sinop está online para te atender agora.</p>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-3xl">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <span className="block text-blue-200 text-xs font-bold uppercase tracking-[0.2em]">Telefone</span>
                      <span className="text-2xl font-black">(66) 3531-0000</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-3xl">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <span className="block text-blue-200 text-xs font-bold uppercase tracking-[0.2em]">Localização</span>
                      <span className="text-2xl font-black">Sinop - MT</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5566999999999" 
                  className="inline-flex items-center gap-4 bg-white text-blue-800 px-12 py-6 rounded-[2rem] font-black text-xl transition-all shadow-2xl hover:bg-[#25d366] hover:text-white"
                >
                  <i className="fab fa-whatsapp text-3xl"></i>
                  ENVIAR MENSAGEM
                </a>
              </div>
              
              <div className="flex-1 w-full z-10 max-w-lg">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-3xl">
                  <h3 className="text-2xl font-black text-gray-900 mb-10 uppercase tracking-tighter">Solicite sua visita</h3>
                  <form className="space-y-6">
                    <input type="text" className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl p-5 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" placeholder="Nome completo" required />
                    <input type="text" className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl p-5 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all" placeholder="Seu WhatsApp" required />
                    <textarea className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl p-5 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none h-40 transition-all resize-none" placeholder="Qual o seu projeto?" required></textarea>
                    <button className="w-full bg-blue-700 text-white py-6 rounded-2xl font-black text-lg hover:bg-blue-800 transition-all uppercase tracking-widest">Enviar Agora</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xl">CB</div>
                <span className="font-montserrat font-black text-2xl tracking-tighter text-white uppercase">COMPANY <span className="text-blue-500">BOX</span></span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Especialistas em vidros de alto padrão para residências e empresas em Sinop e região. Qualidade técnica e estética em cada instalação.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-sm">Site</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#hero" className="hover:text-blue-500 transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-blue-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#servicos" className="hover:text-blue-500 transition-colors">Serviços</a></li>
                <li><a href="#projetos" className="hover:text-blue-500 transition-colors">Galeria</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-8 uppercase tracking-[0.2em] text-sm">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center text-xl hover:bg-blue-600 transition-all" aria-label="Siga-nos no Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" className="w-12 h-12 rounded-2xl bg-gray-800 flex items-center justify-center text-xl hover:bg-blue-600 transition-all" aria-label="Siga-nos no Facebook"><i className="fab fa-facebook-f"></i></a>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; 2026 Company Box - Box de Vidro em Sinop MT. CNPJ: 00.000.000/0000-00. <br className="md:hidden" /> Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
