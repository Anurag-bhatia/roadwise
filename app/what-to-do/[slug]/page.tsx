import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleFooter, ArticleSidebar } from "@/components/ArticleExtras";
import { VideoThumb } from "@/components/Cards";
import { Icon } from "@/components/Icon";
import { getChecklist, getSituation, situations, videos } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return situations.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = getSituation((await params).slug);
  return s ? { title: s.title, description: s.summary } : {};
}

export default async function SituationPage({ params }: Props) {
  const s = getSituation((await params).slug);
  if (!s) notFound();
  const checklist = getChecklist(s.checklist)!;
  const video = videos.find((v) => v.guide === `/what-to-do/${s.slug}`);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link> › <Link href="/what-to-do">What To Do</Link> › <span>{s.tag}</span>
          </nav>
          <h1>{s.question}</h1>
          <p className="lead">{s.summary}</p>
          <div className="page-meta">
            <span>{s.minRead} min read</span>
            <span>
              <Icon name="check" size={14} /> Reviewed on {site.reviewedOn}
            </span>
            <Link href={`/checklists/${checklist.slug}`}>
              <Icon name="download" size={14} /> Download checklist
            </Link>
          </div>
        </div>
      </section>

      <div className="section-pale">
        <div className="container article-layout">
          <article className="article-main">
            <div className="in-short">
              <p className="eyebrow">In short</p>
              <ul className="check-list">
                {s.inShort.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={16} /> {p}
                  </li>
                ))}
              </ul>
            </div>

            <h2>Step by step</h2>
            <ol className="steps">
              {s.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="step-num">{i + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="box">
              <p className="eyebrow">Good to know</p>
              <p>{s.goodToKnow}</p>
            </div>

            {video && (
              <div className="box watch-box">
                <VideoThumb v={video} />
                <div>
                  <p className="eyebrow">Watch</p>
                  <h3>{video.title}</h3>
                  <p className="meta">{video.duration}</p>
                </div>
              </div>
            )}

            <ArticleFooter />
          </article>
          <ArticleSidebar currentSlug={s.slug} checklist={checklist} />
        </div>
      </div>
    </>
  );
}
