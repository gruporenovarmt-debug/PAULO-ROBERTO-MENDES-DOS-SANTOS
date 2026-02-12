
import { GoogleGenAI, Type } from "@google/genai";

export const analyzeBathroomSpace = async (base64Image: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: base64Image.split(',')[1] || base64Image,
    },
  };

  const promptPart = {
    text: "Você é um especialista em design de interiores e consultor técnico da 'Company Box', especialista em box de vidro em Sinop - MT. Analise esta imagem de um banheiro. Forneça uma avaliação profissional em PORTUGUÊS incluindo: 1. Tipo de box recomendado (Canto, Correr, Frontal, Elegance, etc.), 2. Sugestão de acabamento do vidro (Incolor, Jateado, Fumê, Antílope), 3. Acabamento das ferragens (Cromado, Preto Fosco, Dourado, Rose Gold), e 4. Considerações técnicas de instalação baseadas no layout. Use um tom profissional e persuasivo."
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: { parts: [imagePart, promptPart] },
      config: {
        temperature: 0.7,
        topP: 0.95,
        topK: 64,
      }
    });

    return response.text || "Desculpe, não consegui gerar a análise. Por favor, tente com outra foto.";
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw new Error("Falha na análise. Verifique sua conexão ou tente novamente.");
  }
};
