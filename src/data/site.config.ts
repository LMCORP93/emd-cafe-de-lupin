// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number;
  name: string;
  brand: string;
  slug: string;
  image: string;
  brandLogo: string;
  rating: number;
  reviewCount: number;
  promoCode: string;
  promoPercent: number;
  originalPrice: string;
  discountPrice: string;
  affiliateLink: string;
  origin: string;
  availability: string;
  productType: string;
  pros: string[];
  cons: string[];
  description: string;
}

export interface SiteConfig {
  domain: string;
  isIndexable?: boolean;
  siteName: string;
  brand: string;
  product: string;
  productCategory: string;
  productFormat: string;
  tagline: string;
  affiliateLink: string;
  promoCode: string;
  originalPrice: string;
  discountPrice: string;
  rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string;
  breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[];
  cons: string[];
  faq: { question: string; answer: string }[];
  products: Product[];
  tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string; image?: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Café de Lupin Bio - Lupi Coffee',
    brand: 'Lupi Coffee',
    slug: 'lupi-coffee',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/696ea99ab6b6dd5318a50851_lupi%20coffee%201.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/696ea662cd5ffcabd5d452df_Lupi_Coffee_logo.avif',
    rating: 8.8,
    reviewCount: 300,
    promoCode: 'LMC',
    promoPercent: 15,
    originalPrice: '19,00 €',
    discountPrice: '17,10 €',
    affiliateLink: 'https://www.lupicoffee.com/products/cafe-de-lupin-bio-boite-de-decouverte?ref=LMC',
    origin: '🇫🇷 France',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Café de lupin bio sans caféine',
    pros: [
      'Positionnement le plus pur sur le café de lupin',
      'Alternative sans caféine pensée pour remplacer le café du matin',
      'Prix d’entrée accessible avec code LMC',
      'Marque française très cohérente avec la requête café de lupin',
    ],
    cons: [
      'Moins orienté boisson prête-à-l’emploi qu’une marque lifestyle',
      'Goût torréfié à apprivoiser si l’on attend un espresso classique',
      'Distribution surtout en ligne',
    ],
    description: 'Lupi Coffee prend la première place parce que c’est la marque la plus directement alignée avec l’intention “café de lupin”. Le produit ne cherche pas à vendre une boisson fonctionnelle vague : il propose une vraie alternative au café, bio, française, sans caféine et centrée sur le lupin torréfié. C’est le meilleur choix si vous voulez garder le rituel de la tasse chaude sans les effets nerveux du café classique. Le prix reste lisible, le code LMC apporte une vraie remise, et la promesse est simple à comprendre. La limite principale vient du goût : ce n’est pas un espresso, mais une boisson torréfiée douce, plus végétale et plus digeste.',
  },
  {
    rank: 2,
    name: 'Boisson au Lupin - Arsène Boisson',
    brand: 'Arsène Boisson',
    slug: 'arsene-boisson',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69de882d99ab489dbd2e6cd2_69de8365ad19915005719272_bento1-arsene-boisson.webp',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/69de8367a2f69f57470f9f1e_69de8365b38c2279c8e45f20_logo-arsene-boisson.png',
    rating: 8.6,
    reviewCount: 70,
    promoCode: 'LMC10',
    promoPercent: 10,
    originalPrice: '25,40 €',
    discountPrice: '22,86 €',
    affiliateLink: 'https://arseneboissons.fr/LMC10',
    origin: '🇫🇷 France',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Alternative au café à base de lupin et pois chiche torréfiés',
    pros: [
      'Formule française à base de lupin et pois chiche torréfiés',
      'Très bon angle alternative au café sans caféine',
      'Code LMC10 clair et facile à utiliser',
      'Positionnement artisanal et rassurant',
    ],
    cons: [
      'Prix plus élevé que Lupi Coffee après remise',
      'Moins de volume d’avis publics',
      'Moins exact-match sur le café de lupin pur',
    ],
    description: 'Arsène Boisson est deuxième parce que l’offre est très pertinente, mais légèrement moins exacte que Lupi Coffee pour une page centrée sur le “café de lupin”. La marque propose une alternative sans caféine à base de lupin et de pois chiche torréfiés, avec un profil gourmand et local. C’est une très bonne option pour quelqu’un qui cherche une boisson chaude plus douce que le café, mais qui veut un goût rond et une recette plus travaillée. Elle passe derrière Lupi Coffee surtout pour deux raisons : le prix après remise est plus haut et la formule s’éloigne un peu du lupin pur. En revanche, elle mérite clairement d’être dans le comparatif principal.',
  },
];

const config: SiteConfig = {
  domain: 'https://cafe-de-lupin.fr',
  isIndexable: true,
  siteName: 'Café de Lupin',
  brand: 'Lupi Coffee',
  product: 'Comparatif 2026',
  productCategory: 'Café de Lupin',
  productFormat: 'Boisson chaude sans caféine',
  tagline: 'Comparatif des meilleures alternatives au café à base de lupin',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: {
    name: 'Tim',
    avatar: '/author-avatar.png',
    bio: 'Rédacteur spécialisé en compléments alimentaires, boissons fonctionnelles et alternatives naturelles au café.',
  },
  seo: {
    title: 'Meilleur Café de Lupin 2026 : comparatif Lupi Coffee et Arsène',
    description: 'Comparatif café de lupin 2026 : avis, prix, codes promo, goût et choix entre Lupi Coffee et Arsène Boisson pour remplacer le café sans caféine.',
    ogImage: '/images/content/cafe-de-lupin-hero.webp',
  },
  analyticsMeasurementId: 'G-QRQ4HLNMX6',
  breadcrumbs: [{ label: 'Comparatif café de lupin', href: '/' }],
  quickSummary: {
    assets: [
      'Lupi Coffee est le choix le plus direct si vous cherchez un vrai café de lupin bio et sans caféine.',
      'Arsène Boisson est l’alternative la plus intéressante si vous voulez une recette plus ronde, à base de lupin et pois chiche torréfiés.',
      'Les deux marques sont françaises, disponibles en ligne, et proposent un code promo LMC.',
      'Le café de lupin vise surtout les personnes sensibles à la caféine, à l’acidité ou aux pics d’énergie du café classique.',
    ],
    considerations: [
      'Le goût reste différent d’un espresso classique.',
      'Le choix dépend surtout du profil recherché : lupin pur ou boisson torréfiée plus gourmande.',
    ],
  },
  pros: [
    'Naturellement sans caféine',
    'Rituel chaud proche du café',
    'Options françaises et disponibles en ligne',
    'Codes promo disponibles chez les deux marques',
  ],
  cons: [
    'Goût différent du café classique',
    'Offre encore limitée en France',
    'Peu de marques réellement spécialisées',
  ],
  faq: [],
  products,
  tocItems: [
    { id: 'introduction', label: 'Introduction' },
    { id: 'ranking', label: 'Comparatif' },
    { id: 'methodologie', label: 'Méthodologie' },
    { id: 'choisir', label: 'Comment choisir' },
    { id: 'prix', label: 'Prix et codes promo' },
    { id: 'verdict', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'comparatif', label: 'Comparatif', slug: '/', image: '/images/content/cafe-de-lupin-hero.webp' },
    { type: 'blog', label: "Avis Lupi Coffee", slug: '/avis-lupi-coffee/', image: '/images/content/avis-lupi-coffee-natural.webp' },
    { type: 'blog', label: "Avis Arsène", slug: '/avis-arsene-boisson/', image: '/images/content/avis-arsene-boisson-natural.webp' },
    { type: 'blog', label: "Danger", slug: '/cafe-de-lupin-danger/', image: '/images/content/cafe-de-lupin-danger-natural.webp' },
    { type: 'blog', label: "Bienfaits", slug: '/cafe-de-lupin-bienfaits/', image: '/images/content/cafe-de-lupin-bienfaits-natural.webp' },
    { type: 'blog', label: "Lupin vs café", slug: '/cafe-de-lupin-vs-cafe/', image: '/images/content/cafe-de-lupin-vs-cafe-natural.webp' },
    { type: 'blog', label: "Sans caféine", slug: '/alternative-au-cafe-sans-cafeine/', image: '/images/content/alternative-au-cafe-sans-cafeine-natural.webp' },
    { type: 'blog', label: "Instantané", slug: '/cafe-de-lupin-instantane/', image: '/images/content/cafe-de-lupin-instantane-natural.webp' },
    { type: 'blog', label: "Recette", slug: '/cafe-de-lupin-recette/', image: '/images/content/cafe-de-lupin-recette-natural.webp' },
    { type: 'blog', label: "Farine lupin", slug: '/farine-de-lupin-bienfaits/', image: '/images/content/farine-de-lupin-bienfaits-natural.webp' },
    { type: 'blog', label: "Graines lupin", slug: '/graines-de-lupin-bienfaits/', image: '/images/content/graines-de-lupin-bienfaits-natural.webp' },
  ],
};

export default config;
