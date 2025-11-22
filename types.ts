export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Skill {
  name: string;
  category: 'Management' | 'Technical' | 'Soft Skill';
  level: number; // 1-100 for chart visualization
}

export interface Activity {
  role: string;
  organization: string;
  period: string;
  details: string[];
}