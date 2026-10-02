import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { guides } from '../data/guides';
import { SectionHeader } from './SectionHeader';

export function TravelGuide() {
  return (
    <section id="guide" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          title="Kenya travel guide"
          description="Honest, practical advice from the people who live here."
          action={
          <a href="#guide" className="group inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink">
              All articles
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden />
            </a>
          } />
        

        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) =>
          <li key={g.id}>
              <a href="#guide" className="group flex h-full flex-col">
                <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-sand-200">
                  <img
                  src={g.image}
                  alt={g.alt}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.04]" />
                
                </div>
                <p className="mt-5 text-sm text-ink-soft">
                  <span className="font-semibold text-sunset-600">{g.category}</span> · {g.readTime}
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tight text-ink underline-offset-4 group-hover:underline">
                  {g.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{g.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-ink">
                  Read guide
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden />
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>);

}