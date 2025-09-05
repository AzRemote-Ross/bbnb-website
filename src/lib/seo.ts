import { categories } from '../data/pricing';

export const SUPPORTED_LOCALES = ['en', 'ja'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];

export function localizedPaths() {
  const base: string[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    base.push(`/${locale}/`);
    base.push(`/${locale}/contact`);
    base.push(`/${locale}/services/`);
    for (const c of categories) {
      base.push(`/${locale}/services/${c.slug}`);
    }
  }
  return base;
}

export function buildCanonical(site: URL, path: string) {
  return new URL(path.replace(/\/+/g, '/'), site).toString();
}

export function buildAlternateLinks(site: URL, path: string) {
  // path expected to include locale at start e.g. /en/... or /ja/...
  const alt: { hrefLang: string; href: string }[] = [];
  const match = path.match(/^\/(en|ja)(\/.*)?$/);
  if (!match) return alt;
  const rest = match[2] || '/';
  for (const l of SUPPORTED_LOCALES) {
    alt.push({ hrefLang: l, href: buildCanonical(site, `/${l}${rest}`) });
  }
  alt.push({ hrefLang: 'x-default', href: buildCanonical(site, `/en${rest}`) });
  return alt;
}
