export type ActiveTab = 'home' | 'about' | 'services' | 'prices' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  iconName: string;
  details: string[];
  imagePlaceholder?: string;
}

export interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
  grade?: string;
}
