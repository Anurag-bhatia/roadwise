import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500"], variable: "--font-mono" });

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

export const viewport: Viewport = { themeColor: "#0F172A" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${montserrat.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
