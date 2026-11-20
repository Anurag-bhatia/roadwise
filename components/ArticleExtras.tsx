import Link from "next/link";
import { PartnerNote } from "./Cards";
import { Icon } from "./Icon";
import { news, situations, type Checklist } from "@/lib/content";
import { site } from "@/lib/site";

export function ArticleFooter() {
  return (
    <>
      <PartnerNote>
        <p className="eyebrow">Related resource · From our partner LOTS247</p>
        <p>
          <strong>Need help with a legal issue on the road?</strong> See how Roadside Legal Assistance works.{" "}
          <a href={site.lots247Url} target="_blank" rel="noopener">
            Learn more →
          </a>
        </p>
      </PartnerNote>
      <div className="official-strip">
        <p>
          <strong>Need the exact rule or fine?</strong> Check the official source for your state.
        </p>
        <Link href="/official-sources">Official sources ↗</Link>
      </div>
      <p className="fine-print">
        This guide offers general safety information, not legal advice. Reviewed on {site.reviewedOn}. Spotted
        something out of date? <Link href="/contact">Tell us</Link>.
      </p>
    </>
  );
}

export function ArticleSidebar({ currentSlug, checklist }: { currentSlug?: string; checklist: Checklist }) {
  return (
    <aside className="sidebar">
      <div className="side-box">
        <p className="eyebrow">{currentSlug ? "Other situations" : "What to do"}</p>
        <ul>
          {situations
            .filter((s) => s.slug !== currentSlug)
            .map((s) => (
              <li key={s.slug}>
                <Link href={`/what-to-do/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="side-box dark">
        <p className="eyebrow">Free checklist</p>
        <h3>{checklist.title}</h3>
        <Link href={`/checklists/${checklist.slug}`} className="btn btn-primary btn-sm">
          <Icon name="download" size={16} /> Download PDF
        </Link>
      </div>
      <div className="side-box">
        <p className="eyebrow">From Challan Times</p>
        <ul>
          {news.slice(0, 2).map((n) => (
            <li key={n.headline}>
              <a href={site.challanTimesUrl} target="_blank" rel="noopener">
                {n.headline} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
