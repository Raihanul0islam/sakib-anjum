import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono, Water_Brush } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const waterBrush = Water_Brush({
  variable: "--font-water-brush",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D100E",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sakibanjum.com"),
  title: {
    default: "Sakib Anjum — Software Engineer & Founder",
    template: "%s | Sakib Anjum",
  },
  description:
    "Quiet, load-bearing software for small, serious businesses. Developer and founder of BlackDevs in Rangpur, Bangladesh.",
  keywords: [
    "Sakib Anjum",
    "Software Engineer",
    "Full-stack Developer",
    "Laravel",
    "Next.js",
    "Flutter",
    "BlackDevs",
    "Rangpur",
    "Portfolio",
  ],
  authors: [{ name: "Sakib Anjum", url: "https://sakibanjum.com" }],
  creator: "Sakib Anjum",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sakibanjum.com",
    title: "Sakib Anjum — Software Engineer & Founder",
    description:
      "Quiet, load-bearing software for small, serious businesses. Ten years of building for clients across four continents.",
    siteName: "Sakib Anjum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakib Anjum — Software Engineer & Founder",
    description:
      "Quiet, load-bearing software for small, serious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} ${waterBrush.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#0D100E] text-foreground antialiased selection:bg-accent selection:text-background">
        {children}
      </body>
    </html>
  );
}
