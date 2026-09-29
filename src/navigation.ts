import { useState, useEffect } from 'react';

export function navigateTo(url: string) {
  if (typeof window === 'undefined') return;

  if (url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:')) {
    window.location.href = url;
    return;
  }

  window.history.pushState({}, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));

  if (url.includes('#')) {
    const hash = url.split('#')[1];
    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function useCurrentPath() {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePop = () => {
      setPathname(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  return pathname;
}
