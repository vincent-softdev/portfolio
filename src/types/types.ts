export interface IWorkExperience {
  id: number;
  title: string;
  logo: string;
  role: string;
  description: string;
  time: string;
  detail: {
    daily: string[];
    achievement: string[];
  };
}

export interface ISkill {
  id: number;
  name: string;
  src: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  src: string;
  time: string;
  github: string;
  demo: string;
}
