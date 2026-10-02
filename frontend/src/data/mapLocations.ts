import type { MapLocation } from '../types/travel';
import { images } from './images';

// x/y are positions on the 400 × 485 Kenya map artboard
export const mapLocations: MapLocation[] = [
{
  id: 'nairobi',
  name: 'Nairobi',
  kind: 'Capital & gateway city',
  x: 146,
  y: 314,
  description: 'The only capital with a national park on its doorstep — see giraffes against the skyline before dinner in the city.',
  access: 'Main international airport',
  bestTime: 'Year-round',
  image: images.nairobi,
  alt: 'Giraffes in Nairobi National Park with the city skyline behind'
},
{
  id: 'maasai-mara',
  name: 'Maasai Mara',
  kind: 'National reserve',
  x: 62,
  y: 322,
  description: "Kenya's most celebrated reserve and stage of the Great Migration, with year-round Big Five sightings.",
  access: '45 min flight from Nairobi',
  bestTime: 'Jul – Oct',
  image: images.maasaiMara,
  alt: 'Wildebeest crossing the Mara River'
},
{
  id: 'amboseli',
  name: 'Amboseli',
  kind: 'National park',
  x: 168,
  y: 380,
  description: 'Wide swamps and dusty plains that draw huge elephant herds, all under the gaze of Kilimanjaro.',
  access: '4 hrs drive from Nairobi',
  bestTime: 'Jun – Oct',
  image: images.amboseli,
  alt: 'Elephants beneath Mount Kilimanjaro'
},
{
  id: 'mombasa',
  name: 'Mombasa',
  kind: 'Historic port city',
  x: 284,
  y: 450,
  description: 'A 1,000-year-old trading port of spice markets, Fort Jesus and a lively Swahili old town.',
  access: '1 hr flight or 5 hr train',
  bestTime: 'Dec – Mar',
  image: images.mombasa,
  alt: 'Fort Jesus on the Mombasa waterfront'
},
{
  id: 'diani',
  name: 'Diani',
  kind: 'Beach resort',
  x: 277,
  y: 469,
  description: 'Award-winning white sand, coral reefs for snorkelling, and colobus monkeys in the coastal forest.',
  access: '30 min drive from Mombasa',
  bestTime: 'Dec – Mar',
  image: images.diani,
  alt: 'Dhow on the turquoise water at Diani Beach'
},
{
  id: 'lamu',
  name: 'Lamu',
  kind: 'UNESCO World Heritage town',
  x: 344,
  y: 361,
  description: 'The oldest living Swahili settlement in East Africa, where donkeys and dhows still set the pace.',
  access: '1 hr 40 min flight from Nairobi',
  bestTime: 'Nov – Mar',
  image: images.lamu,
  alt: 'Stone alley in Lamu Old Town'
},
{
  id: 'lake-nakuru',
  name: 'Lake Nakuru',
  kind: 'National park',
  x: 109,
  y: 268,
  description: 'A Rift Valley soda lake famed for flamingos and one of the best places in Africa to see rhino.',
  access: '3 hrs drive from Nairobi',
  bestTime: 'Jun – Mar',
  image: images.nakuru,
  alt: 'Flamingos on Lake Nakuru'
},
{
  id: 'mount-kenya',
  name: 'Mount Kenya',
  kind: 'National park & summit',
  x: 170,
  y: 257,
  description: 'Straddling the equator, the 5,199 m massif offers glacier views, alpine moorland and multi-day treks.',
  access: '3 hrs drive to Nanyuki',
  bestTime: 'Jan – Feb, Aug – Sep',
  image: images.mountKenya,
  alt: 'Hiker below the peaks of Mount Kenya'
}];