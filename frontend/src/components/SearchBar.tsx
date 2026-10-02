import React, { FormEvent, useCallback, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarIcon, CircleCheckIcon, LoaderCircleIcon, MapPinIcon, SearchIcon, UsersIcon, ChevronDownIcon } from 'lucide-react';
import { mapLocations } from '../data/mapLocations';
import { useClickOutside } from '../hooks/useClickOutside';
import { GuestCounter } from './GuestCounter';

type Status = 'idle' | 'loading' | 'success';

const ease = [0.23, 1, 0.32, 1] as const;

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [kids, setKids] = useState(0);
  const [guestsOpen, setGuestsOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);
  const whereRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  const closeSuggest = useCallback(() => setSuggestOpen(false), []);
  const closeGuests = useCallback(() => setGuestsOpen(false), []);
  useClickOutside(whereRef, closeSuggest);
  useClickOutside(guestsRef, closeGuests);

  const today = new Date().toISOString().split('T')[0];
  const matches = mapLocations.filter((l) => l.name.toLowerCase().includes(query.trim().toLowerCase()));
  const total = adults + kids;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (checkIn && checkOut && checkOut <= checkIn) {
      setError('Your return date needs to be after your arrival date.');
      setStatus('idle');
      return;
    }
    setSuggestOpen(false);
    setGuestsOpen(false);
    setStatus('loading');
    window.setTimeout(() => setStatus('success'), 900);
  };

  const fieldLabel = 'block text-[11px] font-semibold uppercase tracking-wide text-ink-soft';
  const fieldWrap = 'relative flex items-center gap-3 rounded-2xl px-4 py-3 transition-colors duration-150 hover:bg-sand-100 focus-within:bg-sand-100';

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Search trips in Kenya"
        className="grid grid-cols-1 gap-1 rounded-3xl bg-white p-2 text-ink shadow-[0_24px_60px_-20px_rgba(28,23,18,0.45)] sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_auto] lg:items-center">
        
        <div ref={whereRef} className={`${fieldWrap} sm:col-span-2 lg:col-span-1`}>
          <MapPinIcon className="h-5 w-5 shrink-0 text-sunset-600" aria-hidden />
          <div className="min-w-0 flex-1">
            <label htmlFor="where" className={fieldLabel}>
              Where
            </label>
            <input
              id="where"
              type="text"
              autoComplete="off"
              value={query}
              placeholder="Where do you want to go?"
              onChange={(e) => {
                setQuery(e.target.value);
                setSuggestOpen(true);
                setStatus('idle');
              }}
              onFocus={() => setSuggestOpen(true)}
              aria-expanded={suggestOpen}
              aria-controls="where-suggestions"
              aria-autocomplete="list"
              role="combobox"
              className="w-full bg-transparent text-[15px] font-medium text-ink placeholder:text-ink-soft/70 focus:outline-none" />
            
          </div>
          <AnimatePresence>
            {suggestOpen && matches.length > 0 &&
            <motion.ul
              id="where-suggestions"
              role="listbox"
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.16, ease }}
              className="absolute left-0 right-0 top-full z-30 mt-2 origin-top overflow-hidden rounded-2xl bg-white p-1.5 shadow-xl ring-1 ring-ink/5">
              
                {matches.map((loc) =>
              <li key={loc.id} role="option" aria-selected={query === loc.name}>
                    <button
                  type="button"
                  onClick={() => {
                    setQuery(loc.name);
                    setSuggestOpen(false);
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-150 hover:bg-sand-100 focus-visible:bg-sand-100 focus-visible:outline-none">
                  
                      <img src={loc.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                      <span>
                        <span className="block text-sm font-semibold text-ink">{loc.name}</span>
                        <span className="block text-xs text-ink-soft">{loc.kind}</span>
                      </span>
                    </button>
                  </li>
              )}
              </motion.ul>
            }
          </AnimatePresence>
        </div>

        <div className={fieldWrap}>
          <CalendarIcon className="h-5 w-5 shrink-0 text-sunset-600" aria-hidden />
          <div className="min-w-0 flex-1">
            <label htmlFor="check-in" className={fieldLabel}>
              Arrive
            </label>
            <input
              id="check-in"
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-[15px] font-medium text-ink focus:outline-none" />
            
          </div>
        </div>

        <div className={fieldWrap}>
          <CalendarIcon className="h-5 w-5 shrink-0 text-sunset-600" aria-hidden />
          <div className="min-w-0 flex-1">
            <label htmlFor="check-out" className={fieldLabel}>
              Depart
            </label>
            <input
              id="check-out"
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'search-error' : undefined}
              className="w-full bg-transparent text-[15px] font-medium text-ink focus:outline-none" />
            
          </div>
        </div>

        <div ref={guestsRef} className={`${fieldWrap} sm:col-span-2 lg:col-span-1`}>
          <UsersIcon className="h-5 w-5 shrink-0 text-sunset-600" aria-hidden />
          <button
            type="button"
            onClick={() => setGuestsOpen((v) => !v)}
            aria-expanded={guestsOpen}
            aria-controls="guests-panel"
            className="flex min-w-0 flex-1 items-center justify-between text-left focus:outline-none">
            
            <span>
              <span className={fieldLabel}>Travelers</span>
              <span className="block whitespace-nowrap text-[15px] font-medium text-ink">
                {total} {total === 1 ? 'traveler' : 'travelers'}
              </span>
            </span>
            <ChevronDownIcon className={`h-4 w-4 text-ink-soft transition-transform duration-200 ${guestsOpen ? 'rotate-180' : ''}`} aria-hidden />
          </button>
          <AnimatePresence>
            {guestsOpen &&
            <motion.div
              id="guests-panel"
              initial={{ opacity: 0, y: -4, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.98 }}
              transition={{ duration: 0.16, ease }}
              className="absolute right-0 top-full z-30 mt-2 w-72 origin-top-right divide-y divide-ink/10 rounded-2xl bg-white px-5 py-2 shadow-xl ring-1 ring-ink/5">
              
                <GuestCounter label="Adults" hint="Ages 13 and above" value={adults} min={1} max={12} onChange={setAdults} />
                <GuestCounter label="Children" hint="Ages 2 – 12" value={kids} min={0} max={8} onChange={setKids} />
              </motion.div>
            }
          </AnimatePresence>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-sunset-600 px-7 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-sunset-700 active:scale-[0.98] disabled:cursor-wait disabled:opacity-80 sm:col-span-2 lg:col-span-1 lg:h-[60px]">
          
          {status === 'loading' ?
          <LoaderCircleIcon className="h-5 w-5 animate-spin" aria-hidden /> :

          <SearchIcon className="h-5 w-5" aria-hidden />
          }
          <span className="whitespace-nowrap">{status === 'loading' ? 'Searching' : 'Search'}</span>
        </button>
      </form>

      <div aria-live="polite" className="min-h-[28px] pt-3">
        <AnimatePresence mode="wait">
          {error &&
          <motion.p
            key="error"
            id="search-error"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease }}
            className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-medium text-sunset-700">
            
              {error}
            </motion.p>
          }
          {status === 'success' && !error &&
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm text-ink">
            
              <CircleCheckIcon className="h-4 w-4 text-forest-500" aria-hidden />
              <span>
                <strong className="font-semibold">{query ? 18 : 64} trips</strong> in {query || 'Kenya'} for {total}{' '}
                {total === 1 ? 'traveler' : 'travelers'}
              </span>
              <a href="#experiences" className="font-semibold text-sunset-600 underline-offset-2 hover:underline">
                View
              </a>
            </motion.p>
          }
        </AnimatePresence>
      </div>
    </div>);

}