import type { Metadata, Viewport } from "next";
import { Montserrat, Noto_Sans, Noto_Sans_Devanagari } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { SearchItem } from "@/components/SiteSearch";
import { checklists, guides, situations, videos } from "@/lib/content";
import "./globals.css";

// Montserrat stays for headings (brand); Noto Sans is the body face used across Indian public-service portals and covers Hindi.
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-head" });
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const notoDeva = Noto_Sans_Devanagari({ subsets: ["devanagari"], weight: ["400", "600", "700"], variable: "--font-deva" });

export const metadata: Metadata = {
  metadataBase: new URL("https://roadwiseindia.in"),
  title: {
    default: "RoadWise India: Free road-safety guides for India",
    template: "%s · RoadWise India",
  },
  description:
    "Simple, practical road-safety guides for car owners, two-wheeler riders, commercial drivers and fleet managers in India.",
  openGraph: { siteName: "RoadWise India", type: "website", locale: "en_IN" },
};

// A slim index for the header search box, so the full article text stays on the server.
const searchIndex: SearchItem[] = [
  ...situations.map((s) => ({ title: s.title, kind: "What to do", href: `/what-to-do/${s.slug}`, text: `${s.title} ${s.tag} ${s.summary}` })),
  ...guides.map((g) => ({ title: g.title, kind: g.category, href: `/safety-guides/${g.slug}`, text: `${g.title} ${g.category} ${g.summary}` })),
  ...checklists.map((c) => ({ title: c.title, kind: "Checklist", href: `/checklists/${c.slug}`, text: `${c.title} ${c.audience}` })),
  ...videos.map((v) => ({ title: v.title, kind: "Video", href: v.guide ?? "/videos", text: `${v.title} ${v.topic} ${v.takeaway}` })),
].map((i) => ({ ...i, text: i.text.toLowerCase() }));

export const viewport: Viewport = { themeColor: "#0F172A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-text-size="sm" className={`${montserrat.variable} ${noto.variable} ${notoDeva.variable}`}>
      {/* Browser extensions such as Grammarly add attributes to <body> before React loads. */}
      <body suppressHydrationWarning>
        <Header searchIndex={searchIndex} />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
