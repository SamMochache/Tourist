import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClockIcon, CompassIcon, FootprintsIcon, LandmarkIcon, MapPinIcon, MountainSnowIcon, PawPrintIcon, StarIcon, TreePalmIcon, UtensilsIcon, BoxIcon } from "lucide-react";
import { experienceCategories, experiences } from "../data/experiences";
import { ExperienceCategory } from "../types/travel";
import { SectionHeader } from "./SectionHeader";
type Filter = ExperienceCategory | 'all';
const icons: Record<Filter, BoxIcon> = {
  all: CompassIcon,
  wildlife: PawPrintIcon,
  beach: TreePalmIcon,
  mountain: MountainSnowIcon,
  culture: LandmarkIcon,
  food: UtensilsIcon,
  outdoor: FootprintsIcon
};
const ease = [0.23, 1, 0.32, 1] as const;
export function Experiences() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = filter === 'all' ? experiences : experiences.filter((e) => e.category === filter);
  const filters: {
    id: Filter;
    label: string;
  }[] = [{
    id: 'all',
    label: 'All experiences'
  }, ...experienceCategories];
  return <section id="experiences" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader title="Find Your Perfect Experience" description="Hand-picked tours and activities run by local guides. Filter by what moves you." />

        <div className="-mx-5 mt-10 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0" role="group" aria-label="Filter experiences by category">
          <div className="flex w-max gap-2 lg:w-auto lg:flex-wrap">
            {filters.map((f) => {
            const Icon = icons[f.id];
            const active = filter === f.id;
            const count = f.id === 'all' ? experiences.length : experiences.filter((e) => e.category === f.id).length;
            return <button key={f.id} type="button" onClick={() => setFilter(f.id)} aria-pressed={active} className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-500 ${active ? 'border-forest-700 bg-forest-700 text-white' : 'border-ink/10 bg-white text-ink hover:border-ink/30'}`}>
                  <Icon className="h-4 w-4" aria-hidden />
                  {f.label}
                  <span className={`text-xs tabular-nums ${active ? 'text-sand-200' : 'text-ink-soft'}`}>{count}</span>
                </button>;
          })}
          </div>
        </div>

        <motion.ul layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((exp, i) => {
            const Icon = icons[exp.category];
            const category = experienceCategories.find((c) => c.id === exp.category);
            return <motion.li key={exp.id} layout initial={{
              opacity: 0,
              scale: 0.96
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.96
            }} transition={{
              duration: 0.22,
              ease,
              delay: Math.min(i, 6) * 0.04
            }}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_10px_-4px_rgba(28,23,18,0.12)] transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-[0_22px_40px_-22px_rgba(28,23,18,0.4)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={exp.image} alt={exp.alt} className="h-full w-full object-cover transition-transform duration-300 ease-out-expo group-hover:scale-[1.04]" />
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink">
                        <Icon className="h-3.5 w-3.5 text-sunset-600" aria-hidden />
                        {category?.label}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="flex items-center gap-1.5 text-sm text-ink-soft">
                        <MapPinIcon className="h-4 w-4" aria-hidden />
                        {exp.location}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-medium leading-tight tracking-tight text-ink">{exp.title}</h3>
                      <div className="mt-3 flex items-center gap-4 text-sm text-ink-soft">
                        <span className="inline-flex items-center gap-1.5">
                          <ClockIcon className="h-4 w-4" aria-hidden />
                          {exp.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <StarIcon className="h-4 w-4 fill-ochre text-ochre" aria-hidden />
                          <span className="font-semibold text-ink">{exp.rating.toFixed(1)}</span>
                          <span>({exp.reviews})</span>
                        </span>
                      </div>
                      <div className="mt-auto pt-6">
                        <div className="flex items-end justify-between border-t border-ink/10 pt-5">
                          <p className="text-sm text-ink-soft">
                            From <span className="block font-display text-2xl font-medium text-ink">${exp.price}</span>
                          </p>
                          <a href="#featured" className="whitespace-nowrap rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors duration-150 hover:border-ink hover:bg-ink hover:text-white">
                            View details
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                </motion.li>;
          })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>;
}