
export type PortfolioCategory = "saas" | "commerce" | "ai";

export interface Crop {
  left: string;
  top: string;
  width: string;
  height: string;
}

export interface FeaturedProject {
  number: string;
  slug: string;
  category: PortfolioCategory;
  label: string;
  title: string;
  description: string;
  meta: { term: string; value: string }[];
  shipped?: string[];
}

export const PORTFOLIO_INTRO = {
  script: "portfolio",
  count: "100+ Projects Completed",
  title: "Built to Solve Real Problems",
  description:
    "Projects are stories with a deadline. Four of mine, each told at the length it deserves — what it was for, what I built, and what changed after it shipped.",
};

export const PORTFOLIO_FILTERS: { key: "all" | PortfolioCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "saas", label: "SaaS" },
  { key: "commerce", label: "Commerce" },
  { key: "ai", label: "AI" },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    number: "01",
    slug: "preciseclock",
    category: "saas",
    label: "SaaS platform",
    title: "PreciseClock",
    description:
      "A multi-tenant time-tracking platform: geofenced clock-ins, shift rules and payroll exports that finance can sign off without a spreadsheet.",
    meta: [
      { term: "Role", value: "Lead developer" },
      { term: "Year", value: "2025" },
      { term: "Stack", value: "Laravel · Postgres" },
    ],
  },
  {
    number: "02",
    slug: "shopify-private",
    category: "commerce",
    label: "Shopify private app / 2026",
    title: "5200 Weeks",
    description:
      "A private Shopify app built to one store’s exact way of working — and the case study that grew out of it.",
    meta: [
      { term: "Role", value: "Developer" },
      { term: "Platform", value: "Shopify" },
      { term: "Stack", value: "Remix · Admin API" },
    ],
  },
  {
    number: "03",
    slug: "metaface",
    category: "commerce",
    label: "Multi-vendor commerce",
    title: "BlackDevs Marketplace",
    description:
      "A multi-tenant time-tracking platform: geofenced clock-ins, shift rules and payroll exports that finance can sign off without a spreadsheet.",
    meta: [
      { term: "Role", value: "Lead developer" },
      { term: "Year", value: "2025" },
      { term: "Stack", value: "Laravel · Postgres" },
    ],
    shipped: [
      "Local wallet and card checkout",
      "Nightly payouts split across sellers",
      "SMS tracking for every order",
    ],
  },
  {
    number: "04",
    slug: "voice-agent",
    category: "ai",
    label: "AI · Mobile",
    title: "Voice agent for service businesses",
    description:
      "A phone agent for small trades businesses that can’t afford to miss a call — designed and built as a studio experiment.",
    meta: [],
    shipped: [
      "Answers every call, day or night",
      "Books the job straight into the calendar",
      "Hands off to a person, with a summary",
    ],
  },
];

export interface ArchiveProject {
  number: string;
  title: string;
  titleSize: number;
  descWidth: number;
  description: string;
  type: string;
  year: string;
  href: string;
  thumbnail: string;
}

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    number: "05",
    title: "Crabtree’s Carpet & Flooring",
    titleSize: 18.521,
    descWidth: 332,
    description: "Website for a family-run Ohio flooring retailer and installer.",
    type: "Website",
    year: "2026",
    href: "/portfolio/crabtree",
    thumbnail: "/images/portfolio/list/voice-2.png",
  },
  {
    number: "06",
    title: "Phelps Equity Partners",
    titleSize: 18.852,
    descWidth: 303,
    description: "A seven-page site for a multifamily real-estate investment firm.",
    type: "Website",
    year: "2026",
    href: "/portfolio/phelps",
    thumbnail: "/images/portfolio/list/voice-2.png",
  },
  {
    number: "07",
    title: "Sansbeauté Airstyler",
    titleSize: 19.25,
    descWidth: 301,
    description: "Positioning and build for a three-product hair-tool family.",
    type: "Shopify",
    year: "2026",
    href: "/portfolio/sansbeaute",
    thumbnail: "/images/portfolio/list/voice-2.png",
  },
  {
    number: "08",
    title: "CaribbeanCandy",
    titleSize: 22.099,
    descWidth: 360,
    description: "A course product with payment plan, discount and QR redirect.",
    type: "Shopify",
    year: "2026",
    href: "/portfolio/caribbeancandy",
    thumbnail: "/images/portfolio/list/voice-2.png",
  },
];

const IMG = "/images/portfolio/list";

export const PORTFOLIO_IMAGES = {
  preciseclock: {
    src: `${IMG}/preciseclock.png`,
    crop: { left: "-7.65%", top: "-0.12%", width: "130.72%", height: "100%" },
  },
  weeks: {
    src: `${IMG}/5200weeks.png`,
    crop: { left: "-106.81%", top: "0%", width: "242.1%", height: "100%" },
  },
  weeksTablet: {
    src: `${IMG}/5200weeks-tablet.png`,
    crop: { left: "0%", top: "-13.61%", width: "100%", height: "195.21%" },
  },
  marketplace: {
    src: `${IMG}/marketplace.png`,
    crop: { left: "0.04%", top: "-5.72%", width: "100%", height: "145.86%" },
  },
  voice1: {
    src: `${IMG}/voice-1.png`,
    crop: { left: "-47.53%", top: "0%", width: "200%", height: "100%" },
  },
  voice2: {
    src: `${IMG}/voice-2.png`,
    crop: { left: "-83.33%", top: "0%", width: "266.67%", height: "100%" },
  },
  voice2Mobile: {
    src: `${IMG}/voice-2.png`,
    crop: { left: "-114.15%", top: "0%", width: "343.57%", height: "100%" },
  },
} satisfies Record<string, { src: string; crop: Crop }>;
