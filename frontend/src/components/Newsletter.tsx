import React, { FormEvent, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleCheckIcon, LoaderCircleIcon } from 'lucide-react';
import { images } from '../data/images';

type Status = 'idle' | 'loading' | 'success' | 'error';

const ease = [0.23, 1, 0.32, 1] as const;

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    window.setTimeout(() => setStatus('success'), 900);
  };

  return (
    <section aria-labelledby="newsletter-title" className="bg-sand-100 px-5 pb-24 sm:px-8 lg:pb-32">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-ink">
        <img
          src={images.balloon}
          alt="Hot-air balloon drifting over the Maasai Mara at sunrise"
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        
        <div className="absolute inset-0 -z-10 bg-ink/40" aria-hidden />

        <div className="px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <h2 id="newsletter-title" className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
              Get Inspired to Travel
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-sand-100">
              Receive destination guides, travel inspiration, and exclusive offers straight to your inbox.
            </p>

            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ?
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, ease }}
                role="status"
                className="mt-8 flex items-start gap-3 rounded-2xl bg-white p-5 text-ink">
                
                  <CircleCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-forest-500" aria-hidden />
                  <p>
                    <span className="font-semibold">You're on the list.</span> Your first guide, “Best Time to Visit Kenya”, is
                    on its way to {email}.
                  </p>
                </motion.div> :

              <motion.form
                key="form"
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease }}
                onSubmit={handleSubmit}
                noValidate
                className="mt-8">
                
                  <div className="flex flex-col gap-2 rounded-2xl bg-white p-2 sm:flex-row">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>
                    <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="you@example.com"
                    aria-invalid={status === 'error'}
                    aria-describedby={status === 'error' ? 'newsletter-error' : 'newsletter-note'}
                    className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-ink placeholder:text-ink-soft/70 focus:outline-none" />
                  
                    <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-sunset-600 px-6 py-3 font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-sunset-700 active:scale-[0.98] disabled:cursor-wait disabled:opacity-80">
                    
                      {status === 'loading' && <LoaderCircleIcon className="h-4 w-4 animate-spin" aria-hidden />}
                      {status === 'loading' ? 'Subscribing' : 'Subscribe'}
                    </button>
                  </div>
                  {status === 'error' ?
                <p id="newsletter-error" className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-sunset-700">
                      Please enter a valid email address.
                    </p> :

                <p id="newsletter-note" className="mt-3 text-sm text-sand-100">
                      One email a fortnight. Unsubscribe anytime.
                    </p>
                }
                </motion.form>
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>);

}