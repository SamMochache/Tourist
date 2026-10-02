import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';

const links = [
{ label: 'Destinations', href: '#destinations' },
{ label: 'Experiences', href: '#experiences' },
{ label: 'Trip Ideas', href: '#trips' },
{ label: 'Map', href: '#map' },
{ label: 'Travel Guide', href: '#guide' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300 ease-out-expo ${
      solid ? 'bg-sand-50/95 text-ink shadow-[0_1px_0_rgba(28,23,18,0.08)] backdrop-blur-md' : 'bg-transparent text-white'}`
      }>
      
      <nav aria-label="Main" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-1.5 font-display text-2xl font-medium tracking-tight">
          Explore<span className={solid ? 'italic text-sunset-600' : 'italic text-sand-200'}>Kenya</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className={`whitespace-nowrap text-sm font-medium transition-opacity duration-150 hover:opacity-100 ${
              solid ? 'opacity-80' : 'opacity-90'}`
              }>
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#trips"
            className="hidden whitespace-nowrap rounded-full bg-sunset-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-sunset-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-500 sm:inline-flex">
            
            Plan Your Trip
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-ink/10 bg-sand-50 px-5 pb-6 pt-2 lg:hidden">
          
            <ul className="flex flex-col">
              {links.map((link) =>
            <li key={link.href}>
                  <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/5 py-4 font-display text-xl text-ink">
                
                    {link.label}
                  </a>
                </li>
            )}
            </ul>
            <a
            href="#trips"
            onClick={() => setOpen(false)}
            className="mt-5 flex justify-center rounded-full bg-sunset-600 px-5 py-3 text-sm font-semibold text-white">
            
              Plan Your Trip
            </a>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}