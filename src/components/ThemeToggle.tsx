import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

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
