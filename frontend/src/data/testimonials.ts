import type { Testimonial } from '../types/travel';
import { images } from './images';

export const testimonials: Testimonial[] = [
{
  id: 'hannah',
  quote: 'This was more than a vacation — it was an experience I will remember for the rest of my life. Watching the river crossing at dawn with our guide Daniel, I actually forgot to take photos.',
  name: 'Hannah Lindqvist',
  country: 'Sweden',
  trip: '7 Days Across Kenya',
  rating: 5,
  avatar: images.avatar1
},
{
  id: 'kenji',
  quote: 'Diani was pure calm after the safari. Every transfer was on time and the dhow cruise at sunset was the highlight of our honeymoon.',
  name: 'Kenji Watanabe',
  country: 'Japan',
  trip: 'Coastal Weekend Escape',
  rating: 5,
  avatar: images.avatar2
},
{
  id: 'wanjiru',
  quote: 'I grew up in Nairobi and still discovered so much. The Mount Kenya trek was tough, beautiful and brilliantly organised.',
  name: 'Wanjiru Mwangi',
  country: 'Kenya',
  trip: 'Mount Kenya Adventure',
  rating: 5,
  avatar: images.avatar3
}];