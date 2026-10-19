/* Content for /tutorials (Figma "Tutorials · Dark" 29:896 · 261:340 · 261:511). */

export type TutorialCategory = "laravel" | "nextjs" | "flutter" | "shopify" | "ai";

export const TUTORIALS_INTRO = {
  script: "tutorials",
  count: "24 lessons / new each month",
  titleLines: ["Learn by building.", "Grow by doing."] as [string, string],
  lead: "Learn it the way I learned it: on a real project, with the mess left in.",
  rest: " Every lesson starts from client work and is rebuilt so you can follow along.",
};

/* Counts are the catalogue totals shown in Figma. */
export const TUTORIAL_FILTERS: { key: "all" | TutorialCategory; label: string; count: string }[] = [
  { key: "all", label: "All", count: "24" },
  { key: "laravel", label: "Laravel", count: "8" },
  { key: "nextjs", label: "Next.js", count: "5" },
  { key: "flutter", label: "Flutter", count: "4" },
  { key: "shopify", label: "Shopify", count: "4" },
  { key: "ai", label: "AI", count: "3" },
];

const IMG = {
  speaker: "/images/assets/figma_cf3c31ab3c.jpg",
  laptop: "/images/blog/article_image_4fbc0fe6.jpg",
  preciseclock: "/images/portfolio/list/preciseclock.png",
  weeks: "/images/portfolio/list/5200weeks.png",
  desk: "/images/blog/list/desk-lamp.png",
};

export interface FeaturedLesson {
  number: string;
  category: TutorialCategory;
  label: string;
  title: string;
  summary: string;
  level: string;
  time: string;
  parts: string;
  href: string;
  /** Desktop still; the stacked layouts and the hover reveal use `preview`. */
  image: string;
  preview: string;
  /** Desktop crop of `image` as set in Figma (object-cover when absent). */
  crop?: { left: string; width: string };
  /** Desktop card title width when Figma draws it wider than the 288px heading column. */
  cardTitleWidth?: number;
  /** Caption revealed with the preview on hover (desktop). */
  previewCaption?: string;
}

/* 01 is the featured lesson; 02 / 03 alternate card right / card left. */
export const FEATURED_LESSONS: FeaturedLesson[] = [
  {
    number: "01",
    category: "laravel",
    label: "Laravel / Featured lesson",
    title: "Multi-tenant Laravel with Postgres row-level security",
    summary: "One codebase serving many companies, safely: the schema, the policies, the tests and the deploy.",
    level: "Intermediate",
    time: "42 min",
    parts: "06",
    href: "/tutorials",
    image: IMG.speaker,
    preview: IMG.laptop,
    previewCaption: "Featured lesson / Laravel development · 16:10",
  },
  {
    number: "02",
    category: "flutter",
    label: "Flutter",
    title: "Geofenced clock-ins in Flutter",
    summary: "Build location-aware attendance and handle permissions, battery life, and payroll edge cases.",
    level: "Intermediate",
    time: "26 min",
    parts: "06",
    href: "/tutorials",
    image: IMG.preciseclock,
    preview: IMG.preciseclock,
    crop: { left: "-0.85%", width: "116.89%" },
  },
  {
    number: "03",
    category: "shopify",
    label: "Shopify",
    title: "Build your first Shopify private app",
    cardTitleWidth: 339,
    summary: "Set up a Remix app, connect the Shopify Admin API, and build a product workflow ready for deployment.",
    level: "Beginner",
    time: "35 min",
    parts: "06",
    href: "/tutorials",
    image: IMG.weeks,
    preview: IMG.weeks,
  },
];

export const REAL_PROJECTS_INTRO = {
  label: "LEARN BY BUILDING / REAL PROJECTS",
  titleLines: ["Real projects.", "Your next breakthrough."] as [string, string],
};

export interface GuidedBuild {
  label: string;
  category: TutorialCategory;
  title: string;
  /** Desktop title width as drawn in Figma, where it wraps narrower than the column. */
  desktopTitleWidth?: number;
  summary: string;
  level: string;
  time: string;
  parts: string;
  href: string;
  image: string;
}

export const GUIDED_BUILDS_INTRO = {
  label: "BUILD ALONG / MORE TUTORIALS",
  title: "Pick a build. Make it yours.",
};

export const GUIDED_BUILDS: GuidedBuild[] = [
  {
    label: "02 / NEXT.JS",
    category: "nextjs",
    title: "Build a secure dashboard with Next.js and Supabase",
    desktopTitleWidth: 463,
    summary: "From sign-in to protected data: build a dashboard with authentication, database policies, and server-side rendering.",
    level: "Intermediate",
    time: "48 min",
    parts: "07",
    href: "/tutorials",
    image: IMG.laptop,
  },
  {
    label: "03 / SHOPIFY",
    category: "shopify",
    title: "Create your first Shopify app with Remix",
    summary: "Connect a store, query the Admin API, and build a useful product-management workflow from setup to deployment.",
    level: "Beginner",
    time: "35 min",
    parts: "05",
    href: "/tutorials",
    image: IMG.weeks,
  },
  {
    label: "04 / AI AUTOMATION",
    category: "ai",
    title: "Build a voice agent that books appointments",
    summary: "Turn a phone enquiry into a calendar booking with a voice workflow, structured tool calls, and clear error handling.",
    level: "Advanced",
    time: "54 min",
    parts: "08",
    href: "/tutorials",
    image: IMG.desk,
  },
];
