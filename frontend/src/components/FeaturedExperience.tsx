import React from 'react';
import { ArrowRightIcon, CheckIcon, ClockIcon, UsersIcon } from 'lucide-react';
import { images } from '../data/images';
import { StarRating } from './StarRating';

const highlights = [
'Twice-daily game drives with expert Maasai guides',
'Luxury tented camp on the banks of the Talek River',
'Return flights from Nairobi Wilson Airport included'];


export function FeaturedExperience() {
  return (
    <section id="featured" aria-labelledby="featured-title" className="bg-forest-900 text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <img
            src={images.safari}
            alt="Safari vehicle watching a pride of lions resting in golden grass at sunset"
            className="absolute inset-0 h-full w-full object-cover" />
          
          <div className="absolute bottom-6 left-6 rounded-2xl bg-sand-50 px-5 py-4 text-ink shadow-lg">
            <p className="text-xs font-semibold text-ink-soft">Traveler rating</p>
            <p className="mt-1 flex items-center gap-2">
              <span className="font-display text-3xl font-medium">4.9</span>
              <span>
                <StarRating rating={4.9} />
                <span className="block text-xs text-ink-soft">1,284 reviews</span>
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-sunset-400">Featured experience</p>
            <h2 id="featured-title" className="mt-4 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
              Safari in the Maasai Mara
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-sand-200">
              Three days in the reserve that made Kenya famous. Follow lion prides at first light, witness the river
              crossings, and end each evening by the fire under an impossibly wide sky.
            </p>

            <ul className="mt-8 space-y-3">
              {highlights.map((h) =>
              <li key={h} className="flex gap-3 text-[15px] text-sand-100">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sunset-400" aria-hidden />
                  {h}
                </li>
              )}
            </ul>

            <dl className="mt-10 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-6">
              <div className="pr-4">
                <dt className="flex items-center gap-1.5 text-xs font-medium text-sand-300">
                  <ClockIcon className="h-3.5 w-3.5" aria-hidden />
                  Duration
                </dt>
                <dd className="mt-1.5 font-display text-xl">3 days</dd>
              </div>
              <div className="px-4">
                <dt className="flex items-center gap-1.5 text-xs font-medium text-sand-300">
                  <UsersIcon className="h-3.5 w-3.5" aria-hidden />
                  Group
                </dt>
                <dd className="mt-1.5 font-display text-xl">Max 6</dd>
              </div>
              <div className="pl-4">
                <dt className="text-xs font-medium text-sand-300">Starting from</dt>
                <dd className="mt-1.5 font-display text-xl">
                  $1,250<span className="font-sans text-xs text-sand-300"> /person</span>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#trips"
                className="group inline-flex items-center gap-2 rounded-full bg-sunset-600 px-7 py-4 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-sunset-700">
                
                View Experience
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden />
              </a>
              <p className="text-sm text-sand-300">Free cancellation up to 30 days before</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}