import React from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { trips } from '../data/trips';
import { SectionHeader } from './SectionHeader';

export function TripInspiration() {
  const [lead, ...rest] = trips;

  return (
    <section id="trips" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          title="Where Will Your Adventure Take You?"
          description="Ready-made itineraries, written by our Nairobi team and fully customisable." />
        

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <a
            href="#featured"
            className="group relative isolate flex min-h-[520px] flex-col justify-end overflow-hidden rounded-[28px] bg-ink p-7 text-white sm:p-10 lg:min-h-[640px]">
            
            <img
              src={lead.image}
              alt={lead.alt}
              className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.03]" />
            
            <div className="absolute inset-0 -z-10 bg-ink/40" aria-hidden />
            <div className="max-w-lg">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="rounded-full bg-sand-50 px-3 py-1 font-semibold text-ink">{lead.days}</span>
                <span className="text-sand-100">{lead.route}</span>
              </div>
              <h3 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">{lead.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-sand-100">{lead.summary}</p>
              <div className="mt-8 flex items-center justify-between border-t border-white/25 pt-5">
                <p className="text-sm text-sand-100">
                  From <span className="font-display text-2xl text-white">${lead.price.toLocaleString()}</span> per person
                </p>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-transform duration-200 ease-out-expo group-hover:rotate-45">
                  <ArrowUpRightIcon className="h-5 w-5" aria-hidden />
                </span>
              </div>
            </div>
          </a>

          <ul className="grid gap-6 sm:grid-cols-2">
            {rest.map((trip) =>
            <li key={trip.id}>
                <a href="#featured" className="group flex h-full flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-sand-200 sm:aspect-[5/4]">
                    <img
                    src={trip.image}
                    alt={trip.alt}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.04]" />
                  
                    <span className="absolute left-4 top-4 rounded-full bg-sand-50 px-3 py-1 text-xs font-semibold text-ink">{trip.days}</span>
                  </div>
                  <div className="flex flex-1 flex-col pt-4">
                    <p className="text-xs font-medium text-ink-soft">{trip.route}</p>
                    <h3 className="mt-1.5 font-display text-2xl font-medium leading-tight tracking-tight text-ink underline-offset-4 group-hover:underline">
                      {trip.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{trip.summary}</p>
                    <p className="mt-auto pt-3 text-sm text-ink-soft">
                      From <span className="font-semibold text-ink">${trip.price.toLocaleString()}</span>
                    </p>
                  </div>
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}