type Item = { id: string; en: string; ja: string; price: number; minutes?: number; desc?: { en: string; ja: string } };
type Category = { slug: string; en: string; ja: string; items: Item[] };

export const categories: Category[] = [
  {
    slug: 'haircuts',
    en: 'Haircuts',
    ja: 'カット',
    items: [
      { id: 'classic', en: 'Classic Cut', ja: 'クラシックカット', price: 3000, minutes: 30 },
      { id: 'skinfade', en: 'Skin Fade', ja: 'スキンフェード', price: 3800, minutes: 45 },
      { id: 'kids', en: 'Kids Cut', ja: 'キッズカット', price: 2500, minutes: 30 },
    ]
  },
  {
    slug: 'color',
    en: 'Color',
    ja: 'カラー',
    items: [
      { id: 'single', en: 'Single Process', ja: 'ワンプロセス', price: 6500, minutes: 60 },
      { id: 'grey', en: 'Grey Blending', ja: '白髪ぼかし', price: 4500, minutes: 30 },
    ]
  }
];
