import Image from "next/image";
import Link from "next/link";
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
            <p className="muted-on-dark">{site.tagline}</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link href="/editorial-policy">Editorial Policy</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
        <p className="footer-note">
          This is an independent information platform and is not a Government of India or State Government
          website. Guides offer general safety information, not legal advice. For exact rules and penalties,
          please refer to the <Link href="/official-sources">official sources</Link>. Content reviewed on{" "}
          {site.reviewedOn}.
        </p>
      </div>
    </footer>
  );
}
