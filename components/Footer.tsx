import Image from "next/image";
import Link from "next/link";
import { FooterColumn } from "./FooterColumn";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Image src="/roadwise-logo.png" alt="RoadWise India" width={160} height={42} />
            </div>
            <p className="footer-hindi" lang="hi">
              सड़क सुरक्षा जानकारी पोर्टल
            </p>
            <p className="muted-on-dark">{site.tagline}</p>
          </div>
          <FooterColumn title="Explore">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </FooterColumn>
          <FooterColumn title="Policies">
            <li><Link href="/privacy">Privacy policy</Link></li>
            <li><Link href="/terms">Terms of use</Link></li>
            <li><Link href="/official-sources">Official sources</Link></li>
          </FooterColumn>
        </div>
        <div className="footer-note">
          <p>
            This is an independent information platform and is not a Government of India or State Government
            website. Guides offer general safety information, not legal advice. For exact rules and penalties,
            please refer to the <Link href="/official-sources">official sources</Link>.
          </p>
          <p className="footer-reviewed">Content last reviewed: {site.reviewedOn}</p>
        </div>
      </div>
    </footer>
  );
}
