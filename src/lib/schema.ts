import { SITE, HANDLE } from "./tg";

export const ORG = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Peptide Desk",
  url: SITE,
  description:
    "Verified peptide dealer desk. Research chemicals, COA on every batch, Telegram-only ordering, EU cold-chain dispatch.",
  sameAs: ["https://t.me/" + HANDLE],
  foundingDate: "2022",
  areaServed: ["FR", "DE", "NL", "BE", "ES", "IT", "PT", "SE", "PL", "IE", "CH", "GB", "AE", "US", "CA"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://t.me/" + HANDLE,
    availableLanguage: ["en", "fr", "de", "nl"],
  },
};

export const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Peptide Desk",
  url: SITE,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: SITE + "/?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: SITE + it.url,
    })),
  };
}

export function faqPage(qs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qs.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: x.a },
    })),
  };
}

export function offer(opts: {
  name: string;
  url: string;
  low: string;
  high: string;
  currency: string;
  place: string;
  days: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: opts.name,
    brand: { "@type": "Brand", name: "The Peptide Desk" },
    url: SITE + opts.url,
    description:
      opts.name + " supplied as a research chemical to " + opts.place + ", dispatched on Telegram in " + opts.days + ".",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: opts.currency,
      lowPrice: opts.low,
      highPrice: opts.high,
      offerCount: 3,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "The Peptide Desk" },
    },
  };
}

export const peptideOffer = offer;

export function itemList(name: string, urls: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: urls.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: SITE + u,
    })),
  };
}