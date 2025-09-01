export const BUSINESS = {
  id: 'https://www.bbnb.barbershop/#business', // adjust if actual domain differs
  name: 'BBnB Barbershop',
  description: 'BBnB Barbershop – Cuts, fades, color & grooming in Tsumagoi, Japan.',
  url: 'https://www.bbnb.barbershop',
  telephone: '+81-50-5470-4832',
  priceRange: '¥¥',
  image: 'https://www.bbnb.barbershop/og-image.jpg', // provide a real hosted image
  sameAs: [
    'https://www.instagram.com/bbnb.barbershop',
    'https://maps.app.goo.gl/6AFadN8f1iYxqQ7a6'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Example Street 1-2-3',
    addressLocality: 'Tsumagoi',
    addressRegion: 'Gunma',
    postalCode: '377-1524',
    addressCountry: 'JP'
  },
  openingHours: [
    // Wed–Sun 09:00-17:00 (example based on README description)
    { dayOfWeek: ['Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '09:00', closes: '17:00' }
  ]
} as const;

export function buildLocalBusinessJsonLd(lang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Barbershop',
    '@id': BUSINESS.id,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: BUSINESS.url,
    image: BUSINESS.image,
    telephone: BUSINESS.telephone,
    priceRange: BUSINESS.priceRange,
    sameAs: BUSINESS.sameAs,
    address: BUSINESS.address,
    openingHoursSpecification: BUSINESS.openingHours.map(h => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes
    })),
    inLanguage: lang,
  };
}