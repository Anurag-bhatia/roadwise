import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PrevNext } from "@/components/Cards";
import { PrintButton } from "@/components/PrintButton";
import { checklists, getChecklist } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return checklists.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = getChecklist((await params).slug);
  return c ? { title: c.title, description: `Free printable ${c.title.toLowerCase()}.` } : {};
}

export default async function ChecklistPage({ params }: Props) {
  const c = getChecklist((await params).slug);
  if (!c) notFound();

  return (
    <>
      <section className="page-hero cream">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <Link href="/checklists">Checklists</Link>
          </nav>
          <h1>{c.title}</h1>
          <p className="lead">For {c.audience.toLowerCase()}. Tick items on screen, or print and keep a copy in the vehicle.</p>
          <div className="hero-actions">
            <PrintButton />
          </div>
        </div>
      </section>
      <section className="section section-pale">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="checklist-sheet">
            {c.groups.map((g) => (
              <div key={g.heading}>
                <h2>{g.heading}</h2>
                <ul className="tick-list">
                  {g.items.map((item) => (
                    <li key={item}>
                      <label>
                        <input type="checkbox" /> {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="sheet-foot">
              <span>Date: ____________ &nbsp; Vehicle no.: ____________</span>
              <span>RoadWise India · General safety information, not legal advice. Reviewed {site.reviewedOn}.</span>
            </div>
          </div>
          <div className="no-print">
            <PrevNext items={checklists} current={c.slug} basePath="/checklists" label="checklist" />
          </div>
        </div>
      </section>
    </>
  );
}
