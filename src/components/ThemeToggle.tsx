import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    
    // Always check DOM state first - it's the source of truth
    const domHasDark = document.documentElement.classList.contains('dark');
    return domHasDark;
  });

  // Sync with DOM state after hydration and set up observer
  useEffect(() => {
    const syncWithDOM = () => {
      const domHasDark = document.documentElement.classList.contains('dark');
      setIsDark(domHasDark);
    };

    // Sync immediately
    syncWithDOM();

    // Watch for changes to the document element's class list
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          syncWithDOM();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <button
      onClick={() => {
        setIsDark(prev => {
          const next = !prev;
          try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* ignore */ }
          try { document.documentElement.classList.toggle('dark', next); } catch { /* ignore */ }
          return next;
        });
      }}
      className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle theme"
    >
      {isDark ? '🌙' : '☀️'}
    </button>
  );
}
