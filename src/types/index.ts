export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  screenshots: string[];
  tags: string[];
  role: string;
  features: string[];
  color: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: "languages" | "mobile" | "architecture" | "tools" | "backend";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Achievement {
  id: number;
  title: string;
  event: string;
  year: string;
  icon: string;
}

export interface Education {
  degree: string;
  university: string;
  location: string;
  graduationDate: string;
  gpa: string;
  scholarship: string;
  coursework: string[];
}
