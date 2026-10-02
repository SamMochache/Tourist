import type { Experience, ExperienceCategoryInfo } from '../types/travel';
import { images } from './images';

export const experienceCategories: ExperienceCategoryInfo[] = [
{ id: 'wildlife', label: 'Wildlife Safaris' },
{ id: 'beach', label: 'Beach Escapes' },
{ id: 'mountain', label: 'Mountain Adventures' },
{ id: 'culture', label: 'Cultural Experiences' },
{ id: 'food', label: 'Food & Cuisine' },
{ id: 'outdoor', label: 'Outdoor Adventures' }];


export const experiences: Experience[] = [
{
  id: 'big-five',
  title: 'Big Five Game Drive',
  location: 'Maasai Mara',
  category: 'wildlife',
  duration: 'Full day',
  price: 180,
  rating: 4.9,
  reviews: 842,
  image: images.maasaiMara,
  alt: 'Wildebeest migration crossing a river'
},
{
  id: 'kilimanjaro-elephants',
  title: 'Elephants Under Kilimanjaro',
  location: 'Amboseli',
  category: 'wildlife',
  duration: '2 days',
  price: 420,
  rating: 4.8,
  reviews: 516,
  image: images.amboseli,
  alt: 'Elephants in front of Mount Kilimanjaro'
},
{
  id: 'flamingo-rhino',
  title: 'Flamingo & Rhino Trail',
  location: 'Lake Nakuru',
  category: 'wildlife',
  duration: 'Full day',
  price: 150,
  rating: 4.7,
  reviews: 391,
  image: images.nakuru,
  alt: 'Flamingos on the shore of Lake Nakuru'
},
{
  id: 'dhow-sunset',
  title: 'Dhow Sunset Cruise',
  location: 'Diani Beach',
  category: 'beach',
  duration: '3 hours',
  price: 65,
  rating: 4.9,
  reviews: 627,
  image: images.diani,
  alt: 'Traditional dhow on turquoise water'
},
{
  id: 'fort-jesus-coast',
  title: 'Old Town & Coastline Day',
  location: 'Mombasa',
  category: 'beach',
  duration: 'Full day',
  price: 90,
  rating: 4.6,
  reviews: 288,
  image: images.mombasa,
  alt: 'Fort Jesus fortress beside the ocean in Mombasa'
},
{
  id: 'sirimon-trek',
  title: 'Sirimon Route Summit Trek',
  location: 'Mount Kenya',
  category: 'mountain',
  duration: '5 days',
  price: 890,
  rating: 4.9,
  reviews: 214,
  image: images.mountKenya,
  alt: 'Hiker below the peaks of Mount Kenya'
},
{
  id: 'maasai-village',
  title: 'Maasai Community Visit',
  location: 'Maasai Mara',
  category: 'culture',
  duration: 'Half day',
  price: 45,
  rating: 4.8,
  reviews: 703,
  image: images.culture,
  alt: 'Maasai warriors performing the traditional jumping dance'
},
{
  id: 'lamu-heritage',
  title: 'Lamu Heritage Walk',
  location: 'Lamu',
  category: 'culture',
  duration: '4 hours',
  price: 40,
  rating: 4.8,
  reviews: 245,
  image: images.lamu,
  alt: 'Stone alley in Lamu Old Town'
},
{
  id: 'nairobi-food',
  title: 'Nairobi Nyama Choma Tour',
  location: 'Nairobi',
  category: 'food',
  duration: '4 hours',
  price: 55,
  rating: 4.9,
  reviews: 468,
  image: images.food,
  alt: 'Nyama choma, ugali and kachumbari on a wooden table'
},
{
  id: 'hells-gate',
  title: "Hell's Gate Cycle & Gorge Hike",
  location: 'Naivasha',
  category: 'outdoor',
  duration: 'Full day',
  price: 95,
  rating: 4.8,
  reviews: 532,
  image: images.outdoor,
  alt: "Hikers along the red cliffs of Hell's Gate gorge"
},
{
  id: 'balloon',
  title: 'Sunrise Hot-Air Balloon',
  location: 'Maasai Mara',
  category: 'outdoor',
  duration: '4 hours',
  price: 480,
  rating: 5.0,
  reviews: 389,
  image: images.balloon,
  alt: 'Hot-air balloon over the savanna at sunrise'
}];