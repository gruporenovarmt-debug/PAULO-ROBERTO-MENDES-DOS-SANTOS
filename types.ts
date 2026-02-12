
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface AnalysisResult {
  title: string;
  description: string;
  suggestions: string[];
}
