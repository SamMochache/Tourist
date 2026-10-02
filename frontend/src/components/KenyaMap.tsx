import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, PlaneIcon } from 'lucide-react';
import { mapLocations } from '../data/mapLocations';
import { SectionHeader } from './SectionHeader';

const KENYA_PATH =
'M5 40 L25 60 L35 90 L50 150 L35 195 L10 225 L5 245 L10 270 L5 300 L192.5 415 L265 483.5 L285 467.5 L291 452.5 L297.5 431.5 L311 411 L330 376.5 L352 362 L383 333.5 L355 292.5 L355 110 L400 51 L350 50 L315 55 L285 77.5 L255 75 L210 70 L155 32.5 L105 27.5 L95 0 L50 5 Z';
const TURKANA_PATH = 'M106 30 C114 50 118 72 123 95 C127 110 133 120 136 130 C130 127 123 113 117 98 C111 80 105 56 102 34 Z';
const W = 400;
const H = 485;
const ease = [0.23, 1, 0.32, 1] as const;

export function KenyaMap() {
  const [selectedId, setSelectedId] = useState('maasai-mara');
  const reduce = useReducedMotion();
  const selected = mapLocations.find((l) => l.id === selectedId) ?? mapLocations[0];
  const nairobi = mapLocations[0];

  return (
    <section id="map" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          title="Explore Kenya on the map"
          description="Select a destination to see what makes it special and how to get there from Nairobi." />
        

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="rounded-[32px] bg-sand-200 p-6 sm:p-10">
            <div className="relative mx-auto w-full max-w-[500px]" style={{ aspectRatio: `${W} / ${H}` }}>
              <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
                <path d={KENYA_PATH} fill="#F5EFE6" stroke="#1F3D2B" strokeWidth="1.5" strokeLinejoin="round" />
                <path d={TURKANA_PATH} fill="#A9C9C6" />
                <line x1="5" y1="250" x2="355" y2="250" stroke="#1F3D2B" strokeOpacity="0.25" strokeDasharray="4 5" />
                <text x="300" y="244" fontSize="10" fill="#5B5146" fontStyle="italic">Equator</text>
                <text x="140" y="140" fontSize="11" fill="#5B5146" letterSpacing="2">TURKANA</text>
                <text x="240" y="170" fontSize="11" fill="#5B5146" letterSpacing="2" opacity="0.7">NORTH EASTERN</text>
                <text x="318" y="440" fontSize="12" fill="#1F3D2B" fontStyle="italic" opacity="0.6">Indian Ocean</text>
                <text x="118" y="112" fontSize="9" fill="#2F5A3F" fontStyle="italic">L. Turkana</text>
                {selected.id !== nairobi.id &&
                <motion.line
                  key={selected.id}
                  x1={nairobi.x}
                  y1={nairobi.y}
                  x2={selected.x}
                  y2={selected.y}
                  stroke="#B24F1C"
                  strokeWidth="1.75"
                  strokeDasharray="5 5"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.3, ease }} />

                }
              </svg>

              {mapLocations.map((loc) => {
                const active = loc.id === selectedId;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setSelectedId(loc.id)}
                    aria-pressed={active}
                    aria-label={`Show ${loc.name}`}
                    style={{ left: `${loc.x / W * 100}%`, top: `${loc.y / H * 100}%` }}
                    className="group absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-sunset-600">
                    
                    <span
                      className={`block rounded-full border-2 border-white shadow-md transition-[transform,background-color] duration-200 ease-out-expo ${
                      active ? 'h-4 w-4 scale-125 bg-sunset-600' : 'h-3.5 w-3.5 bg-forest-700 group-hover:scale-125'}`
                      } />
                    
                    <span
                      className={`pointer-events-none absolute bottom-full mb-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm transition-[opacity,transform] duration-150 ease-out-expo ${
                      active ?
                      'translate-y-0 bg-ink text-white opacity-100' :
                      'translate-y-1 bg-white text-ink opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100'}`
                      }>
                      
                      {loc.name}
                    </span>
                  </button>);

              })}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative min-h-[460px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={selected.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease }}
                  aria-live="polite"
                  className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_40px_-24px_rgba(28,23,18,0.35)]">
                  
                  <img src={selected.image} alt={selected.alt} className="aspect-[16/9] w-full object-cover" />
                  <div className="p-7">
                    <p className="text-sm font-medium text-sunset-600">{selected.kind}</p>
                    <h3 className="mt-1 font-display text-3xl font-medium tracking-tight text-ink">{selected.name}</h3>
                    <p className="mt-3 leading-relaxed text-ink-soft">{selected.description}</p>
                    <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Getting there</dt>
                        <PlaneIcon className="h-4 w-4 text-ink-soft" aria-hidden />
                        <dd className="text-ink">{selected.access}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <dt className="sr-only">Best time to visit</dt>
                        <CalendarIcon className="h-4 w-4 text-ink-soft" aria-hidden />
                        <dd className="text-ink">Best: {selected.bestTime}</dd>
                      </div>
                    </dl>
                    <a
                      href="#experiences"
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-forest-700">
                      
                      Explore {selected.name}
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden />
                    </a>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Choose a destination">
              {mapLocations.map((loc) =>
              <button
                key={loc.id}
                type="button"
                onClick={() => setSelectedId(loc.id)}
                aria-pressed={loc.id === selectedId}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 ${
                loc.id === selectedId ? 'bg-forest-700 text-white' : 'bg-white text-ink hover:bg-sand-200'}`
                }>
                
                  {loc.name}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}