import type { Guide } from '../types/travel';
import { images } from './images';

export const guides: Guide[] = [
{
  id: 'best-time',
  title: 'Best Time to Visit Kenya',
  category: 'Planning',
  readTime: '6 min read',
  excerpt: 'Migration season, green season and beach weather — a month-by-month guide to timing your trip.',
  image: images.hero,
  alt: 'Sunset over the Maasai Mara savanna'
},
{
  id: 'safari-guide',
  title: 'Kenya Safari Guide',
  category: 'Safari',
  readTime: '9 min read',
  excerpt: 'How to choose parks, camps and game drives, plus the etiquette every first-timer should know.',
  image: images.safari,
  alt: 'Safari vehicle watching lions at sunset'
},
{
  id: 'what-to-pack',
  title: 'What to Pack for a Safari',
  category: 'Essentials',
  readTime: '5 min read',
  excerpt: 'Neutral layers, soft luggage and the small extras that make early game drives comfortable.',
  image: images.packing,
  alt: 'Safari packing essentials laid out on canvas'
},
{
  id: 'top-beaches',
  title: 'Top Beaches in Kenya',
  category: 'Coast',
  readTime: '7 min read',
  excerpt: "From Diani's reef-protected lagoons to the quiet dunes of Shela in Lamu.",
  image: images.diani,
  alt: 'White sand and turquoise water at Diani Beach'
},
{
  id: 'safety-tips',
  title: 'Kenya Travel Safety Tips',
  category: 'Practical',
  readTime: '4 min read',
  excerpt: 'Visas, health, getting around and staying savvy in the city — practical advice from local experts.',
  image: images.nairobi,
  alt: 'Giraffes with the Nairobi skyline behind'
},
{
  id: 'kenyan-food',
  title: 'Kenyan Food You Should Try',
  category: 'Food',
  readTime: '6 min read',
  excerpt: 'Nyama choma, pilau, mandazi and Swahili coastal curries — what to order and where.',
  image: images.food,
  alt: 'Traditional Kenyan dishes on a wooden table'
}];