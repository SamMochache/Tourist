import React from 'react';
import { SocialIcons } from './SocialIcons';

const columns = [
{
  title: 'Explore',
  links: [
  { label: 'Destinations', href: '#destinations' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Trip Ideas', href: '#trips' },
  { label: 'Travel Guide', href: '#guide' }]

},
{
  title: 'Company',
  links: [
  { label: 'About Us', href: '#top' },
  { label: 'Contact', href: '#top' },
  { label: 'FAQ', href: '#top' },
  { label: 'Privacy Policy', href: '#top' }]

}];


export function Footer() {
  return (
    <footer className="bg-ink text-sand-200">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="font-display text-3xl font-medium tracking-tight text-white">
              Explore<span className="italic text-sunset-400">Kenya</span>
            </a>
            <p className="mt-4 max-w-xs font-display text-xl italic leading-snug text-sand-100">
              Made for travelers who want to experience more.
            </p>
          </div>

          {columns.map((col) =>
          <nav key={col.title} aria-label={col.title}>
              <h2 className="text-sm font-semibold text-white">{col.title}</h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) =>
              <li key={l.label}>
                    <a href={l.href} className="text-sm transition-colors duration-150 hover:text-white">
                      {l.label}
                    </a>
                  </li>
              )}
              </ul>
            </nav>
          )}

          <div>
            <h2 className="text-sm font-semibold text-white">Follow the journey</h2>
            <p className="mt-4 text-sm leading-relaxed">Daily wildlife sightings and coastal sunsets from our guides.</p>
            <div className="mt-5">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-sand-300 sm:flex-row sm:justify-between">
          <p>© 2026 Explore Kenya. All rights reserved.</p>
          <p>Nairobi · Mombasa · Nanyuki</p>
        </div>
      </div>
    </footer>);

}