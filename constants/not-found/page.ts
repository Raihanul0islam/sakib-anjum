
export const NOT_FOUND = {
  script: "lost",
  number: "404",
  label: "Error 404 / Page not found",
  titleLines: ["This page took", "a different road."] as [string, string],
  lead: "The link may be old, or the page has moved on. Everything else is right where you left it.",
  primary: { label: "Back home ↗", href: "/" },
  secondary: { label: "Start a project ↗", href: "/contact" },
  explore: {
    label: "Keep exploring",
    title: "Everything else is still here.",
    links: [
      { number: "01", title: "Portfolio", summary: "Case studies and client work, told at the length they deserve.", href: "/portfolio" },
      { number: "02", title: "Tutorials", summary: "Lessons rebuilt from real projects, so you can follow along.", href: "/tutorials" },
      { number: "03", title: "Blog", summary: "Notes on building software, finding clients, and keeping both happy.", href: "/blogs" },
      { number: "04", title: "Speaking", summary: "Talks, workshops and panels on software and studio life.", href: "/speaking" },
      { number: "05", title: "Contact", summary: "Have something interesting in mind? Say hello.", href: "/contact" },
    ],
  },
};
