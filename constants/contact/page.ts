import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site";

const social = (name: string) => SOCIAL_LINKS.find((s) => s.name === name)?.href ?? "#";

export const CONTACT_PAGE = {
  script: "hello",
  title: "Have something interesting in mind?",
  email: SITE_CONFIG.email,
  availability: { label: "Availability", lines: ["Taking one new product ", "build for Q1 2027."] },
  whereWhen: { label: "Where & when", place: SITE_CONFIG.location, reply: "I reply within one working day." },
  elsewhere: {
    label: "Elsewhere",
    links: [
      { label: "GitHub", href: social("GitHub") },
      { label: "LinkedIn", href: social("LinkedIn") },
      { label: "Email", href: `mailto:${SITE_CONFIG.email}` },
    ],
  },
  form: {
    title: "Or leave a note",
    name: { label: "Your name", placeholder: "Ada Lovelace" },
    email: { label: "Email", placeholder: "ada@company.com" },
    message: { label: "What are you building?", placeholder: "A sentence or two is plenty." },
    submit: "Send",
    note: "No newsletters. I read every message myself.",
  },
};
