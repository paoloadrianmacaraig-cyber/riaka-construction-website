'use client';

import { useEffect } from 'react';

export default function ServiceAnchorScroll() {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#design-planning') {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Run on initial mount (with a tick delay to ensure DOM is ready)
    const timer = setTimeout(handleHash, 50);

    window.addEventListener('hashchange', handleHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  return null;
}
