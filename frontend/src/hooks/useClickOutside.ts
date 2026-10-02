import { RefObject, useEffect } from 'react';

export function useClickOutside(ref: RefObject<HTMLElement>, onOutside: () => void) {
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside();
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOutside();
    };
    document.addEventListener('mousedown', handle);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handle);
      document.removeEventListener('keydown', handleKey);
    };
  }, [ref, onOutside]);
}