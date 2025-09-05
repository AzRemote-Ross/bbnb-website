import en from './en';
import ja from './ja';

export type Lang = 'en' | 'ja';

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/ja')) return 'ja';
  return 'en';
}

export function t(lang: Lang) {
  return lang === 'ja' ? ja : en;
}
