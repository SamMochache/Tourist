import React from 'react';
import { StarIcon } from 'lucide-react';

type StarRatingProps = {
  rating: number;
  className?: string;
};

export function StarRating({ rating, className = 'text-ochre' }: StarRatingProps) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} role="img" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) =>
      <StarIcon key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'fill-current' : 'opacity-30'}`} aria-hidden />
      )}
    </span>);

}