
export interface CaseStudyFact {
  term: string;
  value: string;
  mobileOnly?: boolean;
}

export interface CaseStudyFigure {
  src: string;
  caption?: { label: string; text: string };
}

export interface TimelinePhase {
  meta: string;
  title: [string, string];
  items: string[];
  image: string;
}

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  services: string[];
  hero: string;
  facts: CaseStudyFact[];
  brief?: { heading: string; lead: { strong: string; rest: string }; body: string };
  story?: { heading: string; paragraphs: string[] };
  gallery?: CaseStudyFigure[];
  challenges?: {
    heading: string;
    summary: string;
    goals: { title: string; text: string }[];
  };
  approach?: { image: string; title: string; paragraphs: string[] };
  technology?: { name: string; role: string }[];
  testimonial?: { quote: string; author: string; photo: string };
  timeline?: { title: [string, string]; summary: string; phases: TimelinePhase[] };
  outcome?: { title: string; paragraphs: [string, string] };
  card: { meta: string; title: string; summary: string; image: string };
  next: string;
}

const M = "/images/portfolio/case/metaface";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "metaface",
    eyebrow: "Metaface Avatar Builder — SaaS platform",
    title: "Exploring and developing a new SaaS platform fuelled by data engineering",
    services: ["Web development", "Design"],
    hero: "/images/portfolio/list/preciseclock.png",
    facts: [
      { term: "Client", value: "BlackDevs" },
      { term: "Industry", value: "AI & digital experience" },
      { term: "Project type", value: "Web app development", mobileOnly: true },
      { term: "Timeline", value: "7 weeks" },
    ],
    brief: {
      heading: "A digital self, built in minutes",
      lead: {
        strong: "Build a metaverse-ready avatar with powerful customisation tools.",
        rest: " Style, personalise and express your digital self without friction.",
      },
      body: "Design 3D avatars that reflect a personality — from facial features to outfits, a look that is truly yours.",
    },
    story: {
      heading: "Scaling the avatar experience",
      paragraphs: [
        "When BlackDevs set out to build the Metaface Avatar Builder, the goal was a fast, intuitive platform for designing digital identities. The first phase focused on a clean MVP: core customisation features and a smooth experience.",
        "As people used it more, it became clear that real-time performance and scalability were critical. The system had to handle many customisation layers and reflect every change instantly.",
        "So we built a scalable architecture around a real-time rendering engine. Modern frontend tooling and efficient state management keep every avatar element in sync, and optimised asset handling makes loading fast on any device.",
        "With a modular system and dynamic data flow, the platform takes on new features, assets and integrations without giving up performance.",
      ],
    },
    gallery: [
      { src: `${M}/gallery-1.jpg` },
      { src: `${M}/gallery-2.jpg`, caption: { label: "Fig. 02", text: "Outfits and accessories, layered live." } },
      { src: `${M}/gallery-3.jpg`, caption: { label: "Fig. 03", text: "Facial feature controls." } },
      { src: `${M}/gallery-4.jpg`, caption: { label: "Fig. 04", text: "The same avatar on a phone." } },
    ],
    challenges: {
      heading: "Real-time, layered customisation in an interface that still feels calm.",
      summary:
        "A real-time avatar platform brings competing demands: complex customisation on one side, a clean and fast interface on the other.",
      goals: [
        { title: "Real-time experience", text: "Instant updates for every customisation, without delay." },
        { title: "Scalable system", text: "A flexible architecture that supports future growth." },
        { title: "User-centred design", text: "An interface that stays simple, clean and easy to navigate." },
      ],
    },
    approach: {
      image: `${M}/approach.jpg`,
      title: "Performance first, then everything else",
      paragraphs: [
        "A modern, scalable platform built for performance and usability. Real-time rendering and efficient state management mean every change appears instantly.",
        "A modular component system makes new avatar features easy to add, optimised assets keep load times short, and the interface stays clear even with advanced options open.",
      ],
    },
    technology: [
      { name: "Vue.js", role: "Interface" },
      { name: "HTML5 & CSS", role: "Markup & styling" },
      { name: "GitLab", role: "Code & CI" },
      { name: "VS Code", role: "Editor" },
    ],
    testimonial: {
      quote:
        "“Working with Ahsan was a great experience. He quickly understood our goals and transformed our ideas into a clean, intuitive, and visually polished digital experience. His attention to detail, communication, and thoughtful approach to design made the entire process smooth from start to finish.”",
      author: "— Michael Carter, Founder & CEO, AJ Well",
      photo: `${M}/testimonial.jpg`,
    },
    timeline: {
      title: ["A considered path", "from idea to launch."],
      summary: "Seven weeks. Four phases. Progress at every step.",
      phases: [
        {
          meta: "01 / WEEK 01 / RESEARCH",
          title: ["Find the", "right direction."],
          items: ["Product vision & strategy", "Market & competitor analysis", "User journey mapping"],
          image: `${M}/timeline-research.png`,
        },
        {
          meta: "02 / WEEKS 02–03 / UI/UX DESIGN",
          title: ["Give the idea", "a visual language."],
          items: ["Low-fidelity wireframes", "Design system & components", "High-fidelity prototype"],
          image: `${M}/timeline-design.png`,
        },
        {
          meta: "03 / WEEKS 04–06 / DEVELOPMENT",
          title: ["Make every", "detail work."],
          items: ["Frontend architecture", "Avatar customisation engine", "API integration & optimisation"],
          image: `${M}/timeline-development.png`,
        },
        {
          meta: "04 / WEEK 07 / TESTING",
          title: ["Polish it.", "Put it into the world."],
          items: ["QA & bug fixes", "Performance tuning", "Final deployment"],
          image: "/images/portfolio/list/preciseclock.png",
        },
      ],
    },
    outcome: {
      title: "A seamless avatar builder: powerful customisation, calm interface.",
      paragraphs: [
        "People design unique digital identities through real-time interaction, and performance holds steady across devices.",
        "The modular architecture keeps the platform ready for new features and integrations.",
      ],
    },
    card: {
      meta: "03 / COMMERCE · 2025",
      title: "Metaface Avatar Builder",
      summary: "A digital self, built in minutes.",
      image: "/images/portfolio/list/marketplace.png",
    },
    next: "preciseclock",
  },
  {
    slug: "preciseclock",
    eyebrow: "PreciseClock — SaaS platform",
    title: "Time tracking that payroll trusts",
    services: ["Web development", "SaaS"],
    hero: "/images/portfolio/list/preciseclock.png",
    facts: [
      { term: "Client", value: "PreciseWork Inc" },
      { term: "Industry", value: "Workforce & HR" },
      { term: "Project type", value: "Full-stack SaaS platform", mobileOnly: true },
      { term: "Timeline", value: "12 weeks" },
    ],
    brief: {
      heading: "Accurate hours, zero time theft",
      lead: {
        strong: "A multi-tenant time-tracking platform.",
        rest: " Geofenced clock-ins, shift rules and payroll exports that finance can sign off without a spreadsheet.",
      },
      body: "A clear, tamper-proof audit trail for every shift, job site and overtime alert.",
    },
    card: {
      meta: "01 / SAAS · 2025",
      title: "PreciseClock",
      summary: "Time tracking that payroll trusts.",
      image: "/images/portfolio/list/preciseclock.png",
    },
    next: "shopify-private",
  },
  {
    slug: "shopify-private",
    eyebrow: "5200 Weeks — Shopify private app",
    title: "A private Shopify app built to one store’s exact way of working",
    services: ["Shopify", "Web development"],
    hero: "/images/portfolio/list/5200weeks.png",
    facts: [
      { term: "Client", value: "5200 Weeks" },
      { term: "Industry", value: "Commerce" },
      { term: "Project type", value: "Shopify private app", mobileOnly: true },
      { term: "Timeline", value: "6 weeks" },
    ],
    card: {
      meta: "02 / COMMERCE · 2026",
      title: "5200 Weeks",
      summary: "A private Shopify app built to one store’s exact way of working.",
      image: "/images/portfolio/list/5200weeks.png",
    },
    next: "metaface",
  },
];

export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
