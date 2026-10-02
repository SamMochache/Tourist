import React from 'react';
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react';
import { destinations } from '../data/destinations';
import { SectionHeader } from './SectionHeader';

// Alternating wide / narrow rhythm across a 3-column grid
const spans = ['lg:col-span-2', 'lg:col-span-1', 'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-1'];

export function Destinations() {
  return (
    <section id="destinations" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          title="Popular destinations"
          description="Six places that define Kenya — from the migration plains of the Mara to the coral-stone lanes of the Swahili coast."
          action={
          <a href="#map" className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink">
              See them on the map
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden />
            </a>
          } />
        

        <ul className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {destinations.map((d, i) =>
          <li key={d.id} className={spans[i]}>
              <article className="group relative isolate h-[440px] overflow-hidden rounded-[28px] bg-ink shadow-[0_10px_30px_-18px_rgba(28,23,18,0.5)] transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(28,23,18,0.6)] lg:h-[480px]">
                <img
                src={d.image}
                alt={d.alt}
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.04]" />
              
                <span className="absolute left-5 top-5 rounded-full bg-sand-50/95 px-3.5 py-1.5 text-xs font-semibold text-ink">
                  {d.category}
                </span>

                <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-4 rounded-[20px] bg-ink/60 p-5 text-white backdrop-blur-md">
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-sand-200">{d.tagline}</p>
                    <h3 className="mt-1 font-display text-3xl font-medium tracking-tight">{d.name}</h3>
                    <p className="mt-2 line-clamp-2 max-w-md text-sm leading-relaxed text-sand-100">{d.description}</p>
                  </div>
                  <a
                  href="#experiences"
                  aria-label={`Explore ${d.name}`}
                  className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-sand-200">
                  
                    Explore
                    <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              </article>
            </li>
          )}
        </ul>
      </div>
    </section>);

}