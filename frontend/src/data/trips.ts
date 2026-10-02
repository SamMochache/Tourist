import type { Trip } from '../types/travel';
import { images } from './images';

export const trips: Trip[] = [
{
  id: 'mara-3-days',
  title: '3 Days in the Maasai Mara',
  days: '3 days',
  route: 'Nairobi → Maasai Mara → Nairobi',
  summary: 'Fly into the heart of the savanna for dawn game drives, a riverside bush lunch and sundowners overlooking the migration route.',
  price: 1250,
  image: images.maasaiMara,
  alt: 'Wildebeest crossing the Mara River'
},
{
  id: 'kenya-7-days',
  title: '7 Days Across Kenya',
  days: '7 days',
  route: 'Nairobi → Nakuru → Mara → Amboseli',
  summary: 'The classic circuit through the Rift Valley and southern parks.',
  price: 2890,
  image: images.amboseli,
  alt: 'Elephants in Amboseli beneath Kilimanjaro'
},
{
  id: 'coastal-weekend',
  title: 'Coastal Weekend Escape',
  days: '3 days',
  route: 'Mombasa → Diani',
  summary: 'Old Town history, then two slow days on the sand.',
  price: 640,
  image: images.mombasa,
  alt: 'Fort Jesus on the Mombasa coastline'
},
{
  id: 'mount-kenya-adventure',
  title: 'Mount Kenya Adventure',
  days: '5 days',
  route: 'Nanyuki → Point Lenana',
  summary: 'Summit at sunrise via the scenic Sirimon route.',
  price: 890,
  image: images.mountKenya,
  alt: 'Rocky trail below Mount Kenya'
},
{
  id: 'first-timers',
  title: 'Kenya for First-Time Travelers',
  days: '9 days',
  route: 'Nairobi → Mara → Diani',
  summary: 'Safari and beach, with every transfer handled.',
  price: 3240,
  image: images.camp,
  alt: 'Luxury safari tent glowing with lanterns at dusk'
}];