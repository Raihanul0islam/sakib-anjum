/* Content for the /blogs listing (Figma "Blog · Dark" 29:370 · 257:268 · 257:356). */

export type BlogCategory = "engineering" | "studio" | "clients" | "tools";

export const BLOG_INTRO = {
  script: "blog",
  count: "38 notes / since 2019",
  title: "Notes from a Software Engineer",
  /** Desktop line break as set in Figma. */
  titleLines: ["Notes from a", "Software Engineer"] as [string, string],
  lead: "Notes from a small studio in a small city.",
  rest: " On building software, finding clients, and keeping both happy.",
};

/* Counts are the notebook totals shown in Figma. */
export const BLOG_FILTERS: { key: "all" | BlogCategory; label: string; count: string }[] = [
  { key: "all", label: "All", count: "38" },
  { key: "engineering", label: "Engineering", count: "16" },
  { key: "studio", label: "Studio", count: "11" },
  { key: "clients", label: "Clients", count: "7" },
  { key: "tools", label: "Tools", count: "4" },
];

const IMG = "/images/blog/list";

export interface BlogEssay {
  number: string;
  slug: string;
  category: BlogCategory;
  meta: string;
  title: string;
  /** Explicit line break used by the "portrait" layout (essay 02). */
  titleLines?: [string, string];
  summary: string;
  image: string;
}

export const BLOG_ESSAYS: BlogEssay[] = [
  {
    number: "01",
    slug: "running-a-fifteen-person-studio-from-rangpur",
    category: "studio",
    meta: "FEATURED ESSAY / STUDIO / 12 MIN",
    title: "Running a fifteen-person studio from Rangpur",
    summary:
      "What changes when your clients are eight time zones away and your team is a short walk from home — hiring, pricing, and the meetings at midnight.",
    image: `${IMG}/desk-lamp.png`,
  },
  {
    number: "02",
    slug: "why-i-quote-fixed-prices",
    category: "clients",
    meta: "02 / CLIENTS / 7 MIN READ",
    title: "Why I quote fixed prices",
    titleLines: ["Why I quote", "fixed prices"],
    summary: "A pricing rule of thumb after a hundred proposals — and knowing when a fixed quote does not fit the work.",
    image: `${IMG}/notebook.png`,
  },
  {
    number: "03",
    slug: "the-boring-stack-is-a-feature",
    category: "engineering",
    meta: "ENGINEERING / 9 MIN READ",
    // Title as written in Figma (repeats essay 01) — replace when final copy is ready.
    title: "Running a fifteen-person studio from Rangpur",
    summary:
      "Laravel, Postgres and a VPS still win most arguments. A note on choosing tools that let you spend more time solving the actual problem.",
    image: `${IMG}/laptop-code.png`,
  },
];

export const BLOG_ARCHIVE_INTRO = {
  label: "THE NOTEBOOK / ARCHIVE",
  title: ["Lessons from", "the build."] as [string, string],
  summary: "Practical ideas, hard decisions, and lessons from shipping real software.",
};

export interface BlogArchiveItem {
  slug: string;
  category: BlogCategory;
  meta: string;
  title: string;
  summary: string;
  image: string;
}

export const BLOG_ARCHIVE: BlogArchiveItem[] = [
  {
    slug: "why-i-quote-fixed-prices",
    category: "clients",
    meta: "SEP 02 / CLIENTS / 7 MIN",
    title: "Why I quote fixed prices — and when I don’t",
    summary: "A pricing rule of thumb after a hundred proposals.",
    image: `${IMG}/notebook.png`,
  },
  {
    slug: "the-boring-stack-is-a-feature",
    category: "engineering",
    meta: "AUG 14 / ENGINEERING / 9 MIN",
    title: "The boring stack is a feature",
    summary: "Laravel, Postgres and a VPS still win most arguments.",
    image: `${IMG}/laptop-code.png`,
  },
  {
    slug: "what-fiverr-taught-me-about-product-management",
    category: "studio",
    meta: "JUL 03 / STUDIO / 6 MIN",
    title: "What Fiverr taught me about product management",
    summary: "Gigs are tiny products. Treat them that way.",
    image: `${IMG}/desk-lamp.png`,
  },
];
