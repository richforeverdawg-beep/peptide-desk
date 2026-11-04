export type Category = "repair" | "metabolic" | "growth" | "cosmetic" | "nootropic";

export type Peptide = {
  slug: string;
  name: string;
  category: Category;
  vial: string;
  priceLow: number;
  priceHigh: number;
  hook: string;
  what: string;
  siblings: [string, string];
  pillar: boolean;
  cityPage: boolean;
};

export const peptides: Peptide[] = [
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "repair",
    vial: "5mg lyophilised vial",
    priceLow: 18,
    priceHigh: 26,
    hook: "The tendon-and-gut workhorse. Sold by the box, never by the gram.",
    what: "BPC-157 is a 15-amino-acid fragment derived from a gastric protein. It is the single most requested vial on this desk and the one people reorder. We stock 5mg lyophilised vials from two labs, both with third-party COAs on file.",
    siblings: ["tb-500", "ghk-cu"],
    pillar: true,
    cityPage: true,
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "repair",
    vial: "5mg lyophilised vial",
    priceLow: 22,
    priceHigh: 30,
    hook: "Thymosin Beta-4 fragment. Stacks with BPC-157, never replaces it.",
    what: "TB-500 is the synthetic fragment of Thymosin Beta-4. Buyers almost always take it alongside BPC-157 rather than instead of it. 5mg vials, cold-packed, batch COA in the same envelope.",
    siblings: ["bpc-157", "ghk-cu"],
    pillar: true,
    cityPage: false,
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "cosmetic",
    vial: "50mg lyophilised vial",
    priceLow: 24,
    priceHigh: 32,
    hook: "Copper peptide. The one that gets bought for skin, not for the gym.",
    what: "GHK-Cu is a copper-binding tripeptide. It is the cosmetic end of this catalogue and moves in 50mg vials. Blue-tinted powder is normal; a grey or clumped cake is not.",
    siblings: ["melanotan-ii", "bpc-157"],
    pillar: true,
    cityPage: false,
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "growth",
    vial: "5mg lyophilised vial",
    priceLow: 16,
    priceHigh: 24,
    hook: "The cleanest GH secretagogue on the shelf. No cortisol spike, no appetite swing.",
    what: "Ipamorelin is a pentapeptide growth hormone secretagogue. It is chosen for being selective, which is why it is the entry point for most people moving off mk-677. 5mg vials.",
    siblings: ["cjc-1295", "mots-c"],
    pillar: true,
    cityPage: false,
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    category: "growth",
    vial: "2mg lyophilised vial",
    priceLow: 26,
    priceHigh: 34,
    hook: "Long-acting GHRH analogue. Runs in the same protocol as Ipamorelin.",
    what: "CJC-1295 is a GHRH analogue with a DAC extension that stretches its half-life. It is bought as a pair with Ipamorelin roughly nine times out of ten. 2mg vials, and the small vial size is not a mistake.",
    siblings: ["ipamorelin", "mots-c"],
    pillar: false,
    cityPage: false,
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "metabolic",
    vial: "10mg lyophilised vial",
    priceLow: 30,
    priceHigh: 40,
    hook: "Mitochondrial peptide. The one people read about for a month before buying.",
    what: "MOTS-c is a mitochondrial-derived peptide studied around metabolic regulation and exercise response. It is a research-tier buy, not a casual one. 10mg vials.",
    siblings: ["ipamorelin", "tirzepatide"],
    pillar: true,
    cityPage: false,
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "metabolic",
    vial: "10mg lyophilised vial",
    priceLow: 48,
    priceHigh: 65,
    hook: "Dual GIP/GLP-1. The volume leader. Half this desk's traffic is this one word.",
    what: "Tirzepatide is a dual GIP and GLP-1 receptor agonist. It is the highest-volume peptide on Telegram full stop. 10mg vials, and buyers usually want three or more at once, which is where the price band actually lands.",
    siblings: ["retatrutide", "semaglutide"],
    pillar: true,
    cityPage: true,
  },
  {
    slug: "retatrutide",
    name: "Retatrutide",
    category: "metabolic",
    vial: "10mg lyophilised vial",
    priceLow: 70,
    priceHigh: 95,
    hook: "Triple agonist. Priced like it, too. Not a starter vial.",
    what: "Retatrutide is a triple GIP/GLP-1/glucagon agonist. It is the most expensive thing on this list and the one with the widest price spread between dealers, which is exactly why the COA matters more here than anywhere else.",
    siblings: ["tirzepatide", "semaglutide"],
    pillar: true,
    cityPage: true,
  },
  {
    slug: "semaglutide",
    name: "Semaglutide",
    category: "metabolic",
    vial: "5mg lyophilised vial",
    priceLow: 32,
    priceHigh: 44,
    hook: "The GLP-1 everyone already knows the name of. Single agonist.",
    what: "Semaglutide is a GLP-1 receptor agonist and the peptide most buyers arrive already knowing. It is cheaper than tirzepatide per vial and weaker per milligram, so compare the two on cost per week, not cost per box.",
    siblings: ["tirzepatide", "retatrutide"],
    pillar: true,
    cityPage: false,
  },
  {
    slug: "semax",
    name: "Semax",
    category: "nootropic",
    vial: "10mg lyophilised vial",
    priceLow: 20,
    priceHigh: 28,
    hook: "Russian ACTH fragment. Focus buyers, not bodybuilders.",
    what: "Semax is a synthetic ACTH 4-10 analogue out of Russian research. It is a cognition buy and it sells to a completely different customer than tirzepatide does. 10mg vials.",
    siblings: ["selank", "mots-c"],
    pillar: false,
    cityPage: false,
  },
  {
    slug: "selank",
    name: "Selank",
    category: "nootropic",
    vial: "10mg lyophilised vial",
    priceLow: 20,
    priceHigh: 28,
    hook: "Anxiolytic peptide. Bought by people who want calm without a benzo.",
    what: "Selank is a synthetic tuftsin analogue, studied for anxiolytic effect. It pairs with Semax in the same way BPC-157 pairs with TB-500. 10mg vials.",
    siblings: ["semax", "ghk-cu"],
    pillar: false,
    cityPage: false,
  },
  {
    slug: "melanotan-ii",
    name: "Melanotan-II",
    category: "cosmetic",
    vial: "10mg lyophilised vial",
    priceLow: 18,
    priceHigh: 26,
    hook: "Tanning peptide. Cheap, fast, and the side effects are the selling point.",
    what: "Melanotan-II is an alpha-MSH analogue used for tanning. It is the cheapest thing on this list and the one with the most predictable buyer behaviour: people order two, then reorder five. 10mg vials.",
    siblings: ["ghk-cu", "semax"],
    pillar: false,
    cityPage: false,
  },
];

export const bySlug = (slug: string): Peptide => {
  const p = peptides.find((x) => x.slug === slug);
  if (!p) throw new Error("Unknown peptide: " + slug);
  return p;
};

export const pillars = peptides.filter((p) => p.pillar);
export const cityPeptides = peptides.filter((p) => p.cityPage);