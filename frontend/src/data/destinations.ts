import type { Destination } from '../types/travel';
import { images } from './images';

export const destinations: Destination[] = [
{
  id: 'maasai-mara',
  name: 'Maasai Mara',
  category: 'Wildlife & Safari',
  tagline: 'Home of the Great Migration',
  description: 'Watch two million wildebeest cross the Mara River and track the Big Five across endless golden plains.',
  image: images.maasaiMara,
  alt: 'Wildebeest crossing the Mara River in a cloud of dust'
},
{
  id: 'amboseli',
  name: 'Amboseli',
  category: 'Kilimanjaro Views',
  tagline: 'Giants beneath the snows',
  description: 'Big-tusked elephant herds framed by the snow-capped peak of Kilimanjaro at sunrise.',
  image: images.amboseli,
  alt: 'Elephants walking in Amboseli with Mount Kilimanjaro behind'
},
{
  id: 'diani',
  name: 'Diani Beach',
  category: 'Coastal Escape',
  tagline: 'Powder-white Indian Ocean sands',
  description: 'Seventeen kilometres of palm-fringed beach, coral reefs, and dhow sails on turquoise water.',
  image: images.diani,
  alt: 'Wooden dhow on turquoise water off white-sand Diani Beach'
},
{
  id: 'lamu',
  name: 'Lamu',
  category: 'Culture & History',
  tagline: 'A living Swahili town',
  description: 'Wander car-free coral-stone lanes, carved doorways, and 700 years of Swahili heritage.',
  image: images.lamu,
  alt: 'Narrow stone alley in Lamu Old Town with carved wooden doors'
},
{
  id: 'lake-nakuru',
  name: 'Lake Nakuru',
  category: 'Nature & Wildlife',
  tagline: 'Flamingo shores and rhino sanctuaries',
  description: 'Pink-fringed lake shores, black and white rhino, and tree-climbing lions in the Rift Valley.',
  image: images.nakuru,
  alt: 'Thousands of pink flamingos on Lake Nakuru with green hills'
},
{
  id: 'mount-kenya',
  name: 'Mount Kenya',
  category: 'Adventure & Hiking',
  tagline: "Africa's second-highest summit",
  description: 'Trek through giant lobelia moorland to glacial tarns and the jagged peaks of Point Lenana.',
  image: images.mountKenya,
  alt: 'Hiker on a rocky trail below the snowy peaks of Mount Kenya'
}];