import { useEffect, useState } from "react";

export default function LanguageSwitcher({ current }: { current: 'en' | 'ja' }) {
  const [lang, setLang] = useState<'en' | 'ja'>(current);

  useEffect(() => { setLang(current); }, [current]);

  const switchTo = lang === 'en' ? 'ja' : 'en';

  function handleClick() {
    const path = window.location.pathname.replace(/^\/(en|ja)/, '');
    const next = `/${switchTo}${path || '/'}`;
    // Use client-side navigation via replacing location to minimize repaint flash
    if (window.location.pathname !== next) {
      // Navigation triggers full document load; early inline theme script on next page reapplies dark class before paint
      window.location.href = next;
    }
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Switch language"
    >
      {lang === 'en' ? '日本語' : 'English'}
    </button>
  );
}
