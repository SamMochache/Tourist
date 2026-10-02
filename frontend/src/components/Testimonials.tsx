import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import { SectionHeader } from './SectionHeader';
import { StarRating } from './StarRating';

export function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section aria-labelledby="testimonials" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader title="Travelers remember Kenya" description="Rated 4.9 out of 5 by more than 12,000 guests from 60 countries." />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <figure className="flex flex-col rounded-[28px] bg-forest-700 p-8 text-white sm:p-12 lg:col-span-7">
            <QuoteIcon className="h-10 w-10 text-sunset-400" aria-hidden />
            <blockquote className="mt-6 font-display text-3xl font-normal leading-snug tracking-tight sm:text-4xl">
              “{lead.quote}”
            </blockquote>
            <figcaption className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
              <div className="flex items-center gap-4">
                <img src={lead.avatar} alt={`Portrait of ${lead.name}`} className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20" />
                <div>
                  <p className="font-semibold">{lead.name}</p>
                  <p className="text-sm text-sand-200">
                    {lead.country} · {lead.trip}
                  </p>
                </div>
              </div>
              <StarRating rating={lead.rating} className="text-sunset-400" />
            </figcaption>
          </figure>

          <div className="grid gap-6 lg:col-span-5">
            {rest.map((t) =>
            <figure key={t.id} className="flex flex-col rounded-[28px] bg-white p-8 shadow-[0_2px_10px_-4px_rgba(28,23,18,0.12)]">
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-lg leading-relaxed text-ink">“{t.quote}”</blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  <img src={t.avatar} alt={`Portrait of ${t.name}`} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {t.name} <span className="font-normal text-ink-soft">· {t.country}</span>
                    </p>
                    <p className="text-sm text-ink-soft">{t.trip}</p>
                  </div>
                </figcaption>
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>);

}