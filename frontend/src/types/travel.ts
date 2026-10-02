export type Destination = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
};

export type ExperienceCategory = 'wildlife' | 'beach' | 'mountain' | 'culture' | 'food' | 'outdoor';

export type ExperienceCategoryInfo = {
  id: ExperienceCategory;
  label: string;
};

export type Experience = {
  id: string;
  title: string;
  location: string;
  category: ExperienceCategory;
  duration: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  alt: string;
};

export type Trip = {
  id: string;
  title: string;
  days: string;
  route: string;
  summary: string;
  price: number;
  image: string;
  alt: string;
};

export type MapLocation = {
  id: string;
  name: string;
  kind: string;
  x: number;
  y: number;
  description: string;
  access: string;
  bestTime: string;
  image: string;
  alt: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  country: string;
  trip: string;
  rating: number;
  avatar: string;
};

export type Guide = {
  id: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  alt: string;
};