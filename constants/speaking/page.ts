/* Content for /speaking (Figma "Speaking · Dark" 29:670 · 260:316 · 260:428). */

export const SPEAKING_INTRO = {
  script: "speaking",
  label: "Talks / workshops / panels",
  titleLines: ["Real-world lessons.", "Shared on stage."] as [string, string],
  lead: "Practical talks on building software, running a studio, and turning ideas into useful products. For developers, founders, and teams who want lessons they can apply.",
};

export const SPEAKER_PROFILE = {
  number: "01",
  label: "Speaker profile",
  title: "Building software from Rangpur",
  summary: "Sakib Anjum is a software engineer and founder of BlackDevs in Rangpur, Bangladesh, with 10 years of experience building software.",
  image: "/images/speaking/speaker-hero.jpg",
  facts: [
    { term: "Experience", value: "10 years" },
    { term: "Based in", value: "Rangpur" },
    { term: "Role", value: "Engineer · founder" },
  ],
};

export const WORKSHOP_STORY = {
  number: "02",
  label: "TALKS & HANDS-ON WORKSHOPS",
  titleLines: ["From shared ideas", "to working software."] as [string, string],
  summary:
    "Practical sessions for developers, founders, and teams. Explore production-ready systems, work through the decisions behind them, and leave with ideas you can apply to your next project.",
  /* Spaces are part of the column alignment, as set in Figma */
  meta: ["FORMAT  /  TALK · WORKSHOP · Q&A", "TOPICS  /  SOFTWARE · SYSTEMS · STUDIO", "EVENT   /  NAME & DATE TO BE CONFIRMED"],
  link: { label: "Discuss a workshop ↗", href: "/contact" },
  image: "/images/assets/figma_4aa1e6df0b.jpg",
};

export const SESSIONS_INTRO = {
  label: "SPEAKING / TALKS · WORKSHOPS · CONVERSATIONS",
  titleLines: ["Shared on stage.", "Built on experience."] as [string, string],
};

export interface SpeakingSession {
  number: string;
  label: string;
  /** One entry per line; a single entry wraps naturally. */
  titleLines: string[];
  summary: string;
  tags: string;
  event: string;
  href: string;
  image: string;
}

export const SESSIONS: SpeakingSession[] = [
  {
    number: "03",
    label: "Keynote",
    titleLines: ["Shipping from the edge"],
    summary: "International clients. Local roots. A practical conversation about clear processes, thoughtful pricing, and trust built through delivery.",
    tags: "CLIENT WORK / TRUST / DELIVERY",
    event: "EVENT / NAME & DATE TO BE CONFIRMED",
    href: "/contact",
    image: "/images/assets/figma_4aa1e6df0b.jpg",
  },
  {
    number: "04",
    label: "Workshop",
    titleLines: ["Multi-tenancy,", "made practical"],
    summary: "Work through tenant boundaries, data isolation, and the production decisions behind dependable software for multiple customers.",
    tags: "SYSTEMS / TENANT ISOLATION / LIVE Q&A",
    event: "EVENT / NAME & DATE TO BE CONFIRMED",
    href: "/contact",
    image: "/images/blog/article_image_4fbc0fe6.jpg",
  },
  {
    number: "05",
    label: "03 / Panel",
    titleLines: ["The studio", "as a product"],
    summary: "A conversation about the people, processes, and client relationships that shape a software studio.",
    tags: "PEOPLE / PROCESS / STUDIO",
    event: "EVENT / NAME & DATE TO BE CONFIRMED",
    href: "/contact",
    image: "/images/blog/list/desk-lamp.png",
  },
];

export const INVITE = {
  script: "invite me",
  titleLines: ["Bring practical ideas", "to your next event."] as [string, string],
  details: [
    { term: "Formats", value: "Keynote · workshop · panel" },
    { term: "Audience", value: "Developers · founders" },
    { term: "Travel", value: "In person or remote" },
    { term: "Notice", value: "Six weeks, ideally" },
  ],
};
