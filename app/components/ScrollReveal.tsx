'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Fades each top-level page section in as it scrolls into view, site-wide.
// Content stays visible if JS never runs, because hiding is gated on `.reveal-ready`.
const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('main section, main [data-reveal]')
    ).filter((el) => !el.parentElement?.closest('main section') && !el.hasAttribute('data-noreveal'));

    if (!('IntersectionObserver' in window)) return;

    targets.forEach((el) => el.setAttribute('data-reveal', ''));
    document.documentElement.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

export default ScrollReveal;
