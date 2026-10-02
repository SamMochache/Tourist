import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { images } from '../data/images';
import { SearchBar } from './SearchBar';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <img
        src={images.hero}
        alt="Golden sunset over the Maasai Mara savanna, with elephants walking past a lone acacia tree"
        className="absolute inset-0 -z-10 h-full w-full object-cover" />
      
      <div className="absolute inset-0 -z-10 bg-ink/45" aria-hidden />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-8 pt-32 sm:px-8 lg:pb-12">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease }}
            className="font-display text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[104px]">
            
            Discover the <em className="font-normal text-sand-200">Magic</em> of Kenya
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.06, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100 sm:text-xl">
            
            From breathtaking safaris to pristine beaches, ancient cultures, and unforgettable adventures.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.12, ease }}
            className="mt-8 flex flex-wrap gap-3">
            
            <a
              href="#destinations"
              className="group inline-flex items-center gap-2 rounded-full bg-sunset-600 px-7 py-4 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-sunset-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              
              Explore Destinations
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#trips"
              className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-7 py-4 text-[15px] font-semibold text-white backdrop-blur-sm transition-colors duration-150 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              
              Plan Your Trip
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.18, ease }}
          className="mt-12 lg:mt-16">
          
          <SearchBar />
        </motion.div>
      </div>
    </section>);

}