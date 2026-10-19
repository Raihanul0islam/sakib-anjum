export interface NavItem {
  label: string;
  href: string;
  number?: string;
  isExternal?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  handle?: string;
}

export interface ProjectItem {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "SaaS" | "Commerce" | "AI" | "Mobile";
  role: string;
  year: string;
  stack: string[];
  summary: string;
  thumbnail: string;
  client: string;
  industry: string;
  timeline: string;
  projectType: string;
  briefTitle: string;
  briefDescription: string;
  briefPoints: string[];
  storyTitle: string;
  storyDescription: string[];
  galleryImages: string[];
  challenges: {
    number: string;
    title: string;
    description: string;
  }[];
  approach: {
    number: string;
    title: string;
    description: string;
    image?: string;
  };
  technologies: {
    category: string;
    items: string[];
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };
  timelinePhases?: {
    phase: string;
    title: string;
    period: string;
    description: string;
    image?: string;
  }[];
  outcome: {
    metrics: { label: string; value: string }[];
    summary: string;
  };
  nextProjectSlug?: string;
}

export interface BlogPost {
  slug: string;
  number: string;
  title: string;
  summary: string;
  category: "Engineering" | "Studio" | "Clients" | "Tools";
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  coverImage: string;
  content: string;
  tableOfContents?: { id: string; title: string }[];
}

export interface TutorialLesson {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Laravel" | "Next.js" | "Flutter" | "Shopify" | "AI";
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  featured?: boolean;
  thumbnail: string;
  videoUrl?: string;
  outline: {
    part: string;
    title: string;
    duration: string;
  }[];
  summary: string;
}

export interface TalkItem {
  number: string;
  title: string;
  event: string;
  year: string;
  type: "Keynote" | "Workshop" | "Panel";
  summary: string;
  location: string;
  videoUrl?: string;
  slidesUrl?: string;
  thumbnail?: string;
}
