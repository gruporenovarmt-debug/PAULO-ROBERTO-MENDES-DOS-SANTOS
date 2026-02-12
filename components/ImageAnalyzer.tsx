
import React, { useState, useRef } from 'react';
import { analyzeBathroomSpace } from '../services/geminiService';

const ImageAnalyzer: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) return;
    setAnalyzing(true);
    setError(null);
    try {
      const analysis = await analyzeBathroomSpace(image);
      setResult(analysis);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro na análise");
    } finally {
      setAnalyzing(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="analyzer" className="py-24 px-6 bg-gray-900 text-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <span className="text-blue-400 font-bold tracking-widest text-xs uppercase mb-4 block">Tecnologia Exclusiva</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Consultor de Design <span className="text-blue-500">IA</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Tire uma foto do seu banheiro e receba instantaneamente uma recomendação profissional de box e acabamentos, personalizada pela nossa Inteligência Artificial.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col space-y-4">
            <div 
              onClick={triggerFileInput}
              className={`border-2 border-dashed rounded-[2rem] p-6 transition-all cursor-pointer group flex flex-col items-center justify-center min-h-[350px]
                ${image ? 'border-blue-500 bg-blue-500/5' : 'border-gray-700 hover:border-blue-500 bg-gray-800/50'}`}
            >
              {image ? (
                <img src={image} alt="Preview" className="w-full h-full max-h-[300px] object-contain rounded-2xl shadow-2xl" />
              ) : (
                <div className="text-center">
                  <div className="w-20 h-20 bg-gray-700/50 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <i className="fas fa-camera text-3xl text-blue-400"></i>
                  </div>
                  <p className="text-gray-200 font-bold text-lg">Enviar foto do banheiro</p>
                  <p className="text-gray-500 text-sm mt-2 px-4 italic">Mostre-nos o espaço onde o box será instalado</p>
                </div>
              )}
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!image || analyzing}
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 uppercase tracking-tighter
                ${!image || analyzing ? 'bg-gray-800 text-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/20'}`}
            >
              {analyzing ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Processando Layout...
                </>
              ) : (
                <>
                  <i className="fas fa-wand-magic-sparkles"></i>
                  Analisar Meu Espaço
                </>
              )}
            </button>
          </div>

          <div className="bg-gray-800/40 backdrop-blur-xl rounded-[2rem] p-8 border border-gray-700/50 text-left flex flex-col shadow-2xl">
            {analyzing ? (
              <div className="flex flex-col items-center justify-center h-full space-y-6 animate-pulse">
                <div className="w-full space-y-3">
                  <div className="h-4 w-3/4 bg-gray-700 rounded-full"></div>
                  <div className="h-4 w-5/6 bg-gray-700 rounded-full"></div>
                  <div className="h-4 w-2/3 bg-gray-700 rounded-full"></div>
                </div>
                <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-blue-400 font-medium tracking-wide">Avaliando ângulos e iluminação...</p>
              </div>
            ) : result ? (
              <div className="overflow-y-auto max-h-[450px] pr-4 custom-scrollbar">
                <div className="flex items-center gap-2 mb-6 text-blue-400 font-bold border-b border-gray-700 pb-4 uppercase tracking-widest text-sm">
                   <i className="fas fa-lightbulb"></i>
                   Projeto Recomendado
                </div>
                <div className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed prose-blue">
                  {result}
                </div>
                <div className="mt-8 p-4 bg-blue-600/10 rounded-xl border border-blue-500/20 text-xs text-blue-200">
                  <i className="fas fa-info-circle mr-2"></i>
                  Esta é uma sugestão gerada por IA. Um técnico visitará o local para medições finais.
                </div>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-full text-red-400">
                <i className="fas fa-triangle-exclamation text-4xl mb-4"></i>
                <p className="font-bold">{error}</p>
                <button onClick={() => setImage(null)} className="mt-4 text-sm underline">Tentar novamente</button>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mb-6 opacity-40">
                  <i className="fas fa-robot text-5xl"></i>
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-300">Pronto para começar?</h4>
                <p className="text-gray-500 text-sm px-8 leading-relaxed">
                  Envie uma foto para ver como as tecnologias da Company Box podem transformar seu banheiro.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageAnalyzer;
