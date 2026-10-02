import React, { ReactNode } from 'react';

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  tone?: 'light' | 'dark';
};

export function SectionHeader({ title, description, action, tone = 'light' }: SectionHeaderProps) {
  const dark = tone === 'dark';
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <h2
          className={`font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl ${
          dark ? 'text-sand-50' : 'text-ink'}`
          }>
          
          {title}
        </h2>
        {description &&
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-sand-200' : 'text-ink-soft'}`}>{description}</p>
        }
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>);

}