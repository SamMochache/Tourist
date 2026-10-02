import React from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

type GuestCounterProps = {
  label: string;
  hint: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
};

export function GuestCounter({ label, hint, value, min, max, onChange }: GuestCounterProps) {
  const btn =
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-150 hover:border-ink/40 disabled:cursor-not-allowed disabled:opacity-30';
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="text-xs text-ink-soft">{hint}</p>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" className={btn} onClick={() => onChange(value - 1)} disabled={value <= min} aria-label={`Fewer ${label.toLowerCase()}`}>
          <MinusIcon className="h-4 w-4" />
        </button>
        <span className="w-5 text-center text-sm font-semibold tabular-nums" aria-live="polite">
          {value}
        </span>
        <button type="button" className={btn} onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`More ${label.toLowerCase()}`}>
          <PlusIcon className="h-4 w-4" />
        </button>
      </div>
    </div>);

}