import React from 'react';
import { StatCounter } from './StatCounter';

const stats = [
{ value: 40, suffix: '+', label: 'National parks & reserves' },
{ value: 500, suffix: '+', label: 'Wildlife species' },
{ value: 500, suffix: ' km+', label: 'Of Indian Ocean coastline' },
{ value: 100, suffix: '+', label: 'Unique experiences' }];


export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="bg-sunset-700 py-20 text-white lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_2fr] lg:items-end">
        <h2 id="stats-title" className="max-w-sm font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          One country, a whole continent of experiences.
        </h2>
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((s) =>
          <div key={s.label} className="flex flex-col-reverse border-l border-white/25 pl-5">
              <dt className="mt-2 text-sm text-sand-100">{s.label}</dt>
              <dd className="whitespace-nowrap font-display text-4xl font-medium tracking-tight sm:text-5xl xl:text-6xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          )}
        </dl>
      </div>
    </section>);

}