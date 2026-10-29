
export interface ArticleBullet {
  text: string;
  desktopWidth?: number;
}

export interface ArticleSection {
  id: string;
  title: string;
  body: string;
  bullets?: ArticleBullet[];
  images?: [string, string];
  quote?: string;
}

export interface BlogArticle {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  lead: string;
  leadRest: string;
  hero: string;
  sections: ArticleSection[];
}

export interface RelatedLesson {
  href: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  image: string;
}

const HERO = "/images/blog/single/hero.png";

const SECTIONS: ArticleSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    body: "Paid advertising is evolving at a rapid pace. With new technologies, changing consumer behaviors, and increasing privacy regulations, marketers must stay informed and agile. In this blog, we explore the key trends shaping the future of paid advertising—and how you can use them to gain a competitive edge today in an ever-changing digital marketing landscape.",
  },
  {
    id: "simple-process",
    title: "Simple process",
    body: "We break down the future of paid advertising in a simple, digestible way: exploring emerging technologies, consumer insights, data strategies, and actionable tips to help brands adapt, thrive, and lead in a competitive digital ecosystem.",
    bullets: [
      { text: "Understand the trends shaping paid advertising and how they impact your strategy" },
      { text: "Explore Real-World Impacts of Emerging Trends on Your Advertising Campaigns and ROI", desktopWidth: 657 },
      { text: "Apply What Works: Proven Strategies to Boost Your Paid Advertising Success Today" },
    ],
    images: [HERO, HERO],
  },
  {
    id: "privacy-first-advertising",
    title: "Privacy-first advertising",
    body: "As privacy laws tighten, marketers must rely on ethically collected first-party data and transparent for the practices to maintain consumer trust and personalization.",
    quote:
      "\"I didn’t realize how much impact a small marketing gap could have. After working with Merkli, they uncovered key opportunities and fixed our strategy before it affected our growth.\"",
  },
  {
    id: "final-thoughts",
    title: "Final Thoughts",
    body: "Technology should empower your business—not slow it down. Whether you need proactive IT support, robust cybersecurity, or scalable cloud solutions, our team is committed to delivering reliable service, expert guidance, and long-term success. Let's build a stronger, more secure IT foundation together.",
  },
];

const LEAD = "Learn it the way I learned it: on a real project, with the mess left in.";
const LEAD_REST = " Every lesson starts from client work and is rebuilt so you can follow along.";

const post = (slug: string, title: string, category: string, date: string, readTime: string): BlogArticle => ({
  slug,
  category,
  date,
  readTime,
  title,
  lead: LEAD,
  leadRest: LEAD_REST,
  hero: HERO,
  sections: SECTIONS,
});

export const BLOG_POSTS: BlogArticle[] = [
  post("hiring-developers-outside-the-capital", "Hiring developers outside the capital", "Lifestyle", "28 Aug 2026", "4 min read"),
  post("running-a-fifteen-person-studio-from-rangpur", "Running a fifteen-person studio from Rangpur", "Studio", "28 Aug 2026", "12 min read"),
  post("why-i-quote-fixed-prices", "Why I quote fixed prices — and when I don’t", "Clients", "02 Sep 2026", "7 min read"),
  post("the-boring-stack-is-a-feature", "The boring stack is a feature", "Engineering", "14 Aug 2026", "9 min read"),
  post("what-fiverr-taught-me-about-product-management", "What Fiverr taught me about product management", "Studio", "03 Jul 2026", "6 min read"),
];

export const getBlogPost = (slug: string) => BLOG_POSTS.find((p) => p.slug === slug);

export const RELATED_LESSONS: RelatedLesson[] = [
  {
    href: "/tutorials",
    category: "Lifestyle",
    date: "28 Aug 2026",
    readTime: "4 min read",
    title: "Geofenced clock-ins in Flutter",
    summary: "Location permissions, battery life, and the edge cases that break payroll.",
    image: "/images/portfolio/list/preciseclock.png",
  },
  {
    href: "/tutorials",
    category: "Lifestyle",
    date: "28 Aug 2026",
    readTime: "4 min read",
    title: "A Shopify private app in a weekend",
    summary: "Remix, the Admin API and a deploy you can hand to a client.",
    image: "/images/portfolio/list/5200weeks.png",
  },
  {
    href: "/tutorials",
    category: "Lifestyle",
    date: "28 Aug 2026",
    readTime: "4 min read",
    title: "A voice agent that books appointments",
    summary: "From phone number to calendar entry in one evening.",
    image: "/images/portfolio/list/voice-2.png",
  },
];
