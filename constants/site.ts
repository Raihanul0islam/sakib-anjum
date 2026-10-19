import { NavItem, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Sakib Anjum",
  title: "Sakib Anjum — Software Engineer & Founder",
  description:
    "Quiet, load-bearing software for small, serious businesses. Developer and founder of BlackDevs in Rangpur, Bangladesh.",
  email: "hello@sakibanjum.com",
  location: "Rangpur, Bangladesh · GMT+6",
  coordinates: "25.74° N, 89.25° E",
  experienceYears: 10,
  yearsRange: "2016 — 2026",
  badgeText: "No. 10 — the tenth year of shipping / 2016 — 2026",
  availabilityStatus: "Taking one new product build for Q1 2027.",
  monogram: "sa.",
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/", number: "01" },
  { label: "Portfolio", href: "/portfolio", number: "02" },
  { label: "Tutorials", href: "/tutorials", number: "03" },
  { label: "Blog", href: "/blogs", number: "04" },
  { label: "Speaking", href: "/speaking", number: "05" },
  { label: "Contact", href: "/contact", number: "06" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: "github",
    handle: "@sakibanjum",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "linkedin",
    handle: "sakib-anjum",
  },
  {
    name: "Twitter",
    href: "https://x.com",
    icon: "twitter",
    handle: "@sakibanjum",
  },
  {
    name: "Email",
    href: "mailto:hello@sakibanjum.com",
    icon: "mail",
    handle: "hello@sakibanjum.com",
  },
];
