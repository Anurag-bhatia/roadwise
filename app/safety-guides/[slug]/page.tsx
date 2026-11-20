import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleFooter, ArticleSidebar } from "@/components/ArticleExtras";
import { Icon } from "@/components/Icon";
import { checklists, getGuide, guideImage, guides, type GuideCategory } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const checklistFor: Record<GuideCategory, string> = {
  "Driver Safety": "monsoon-and-night",
  "Vehicle & Fleet": "pre-trip-fleet",
  Highway: "long-distance-trip",
};

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const g = getGuide((await params).slug);
  return g ? { title: g.title, description: g.summary } : {};
}

export default async function GuidePage({ params }: Props) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const checklist = checklists.find((c) => c.slug === checklistFor[g.category])!;

  return (
    <>
      <section className="page-hero has-photo">
        <div className="page-hero-photo">
          <Image src={guideImage(g.slug)} alt="" fill priority sizes="(max-width: 960px) 100vw, 60vw" />
        </div>
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <Link href="/safety-guides">Safety Guides</Link> › <span>{g.category}</span>
          </nav>
          <h1>{g.title}</h1>
          <p className="lead">{g.summary}</p>
          <div className="page-meta">
            <span>{g.minRead} min read</span>
            <span>
              <Icon name="check" size={14} /> Reviewed on {site.reviewedOn}
            </span>
          </div>
        </div>
      </section>

      <div className="section-pale">
        <div className="container article-layout">
          <article className="article-main">
            {g.sections.map((sec) => (
              <div key={sec.heading} className="guide-section">
                <h2>{sec.heading}</h2>
                <ul className="check-list">
                  {sec.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={16} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <ArticleFooter />
          </article>
          <ArticleSidebar checklist={checklist} />
        </div>
      </div>
    </>
  );
}
