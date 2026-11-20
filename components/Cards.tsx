import Image from "next/image";
import Link from "next/link";
import { Icon } from "./Icon";
import { guideImage, type Checklist, type Guide, type NewsItem, type Situation, type Video } from "@/lib/content";
import { officialSources, site } from "@/lib/site";

export function SectionHead({
  label,
  title,
  intro,
  action,
  dark,
}: {
  label: string;
  title: string;
  intro?: string;
  action?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`section-head${dark ? " dark" : ""}`}>
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
        {intro && <p className="intro">{intro}</p>}
      </div>
      {action && <div className="section-action">{action}</div>}
    </div>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <a className="card news-card" href={site.challanTimesUrl} target="_blank" rel="noopener">
      <div className="card-media">
        <Image src={item.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 300px" />
      </div>
      <div className="card-body">
        <span className={`pill pill-${item.tone}`}>{item.tag}</span>
        <h3>{item.headline}</h3>
        <p className="meta">{item.date} ↗</p>
      </div>
    </a>
  );
}

export function SituationCard({ s, index }: { s: Situation; index: number }) {
  return (
    <Link href={`/what-to-do/${s.slug}`} className="card situation-card">
      <div className="situation-top">
        <span className="icon-tile">
          <Icon name={s.icon} size={20} />
        </span>
        <span className="num">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>{s.title}</h3>
      <span className="text-link">
        See the steps <Icon name="arrow" size={16} />
      </span>
    </Link>
  );
}

export function GuideCard({ g }: { g: Guide }) {
  return (
    <Link href={`/safety-guides/${g.slug}`} className="card guide-card">
      <div className="card-media">
        <Image src={guideImage(g.slug)} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 300px" />
      </div>
      <div className="card-body">
        <span className="pill pill-green">{g.category}</span>
        <h3>{g.title}</h3>
        <p className="card-desc">{g.summary}</p>
        <p className="meta card-foot">{g.minRead} min read</p>
      </div>
    </Link>
  );
}

export function VideoThumb({ v, large }: { v: Video; large?: boolean }) {
  if (v.youtubeId) {
    return (
      <div className={`video-thumb${large ? " large" : ""}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
          title={v.title}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <a
      className={`video-thumb${large ? " large" : ""}`}
      href={site.rslaPlaylistUrl}
      target="_blank"
      rel="noopener"
      aria-label={`Watch ${v.title}`}
    >
      <Image src={v.thumbnail} alt="" fill sizes={large ? "(max-width: 960px) 100vw, 600px" : "(max-width: 960px) 50vw, 300px"} className="video-img" />
      <span className="play">
        <svg viewBox="0 0 24 24" width={large ? 30 : 20} height={large ? 30 : 20} aria-hidden="true">
          <path d="M8 5v14l11-7z" fill="currentColor" />
        </svg>
      </span>
      <span className="duration">{v.duration}</span>
    </a>
  );
}

export function VideoCard({ v, dark }: { v: Video; dark?: boolean }) {
  return (
    <div className={`card video-card${dark ? " dark" : ""}`}>
      <VideoThumb v={v} />
      <div className="card-body">
        <p className="video-meta">
          {v.topic} · {v.duration}
        </p>
        <h3>{v.title}</h3>
        {!dark && <p className="meta">{v.takeaway}</p>}
      </div>
    </div>
  );
}

export function ChecklistCard({ c }: { c: Checklist }) {
  return (
    <Link href={`/checklists/${c.slug}`} className="card checklist-card">
      <div className="situation-top">
        <svg className="file-icon" width="34" height="42" viewBox="0 0 34 42" aria-hidden="true">
          <path d="M4 0h19l11 11v27a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" fill="var(--green-ink)" />
          <path d="M23 0l11 11h-7a4 4 0 01-4-4V0z" fill="var(--navy)" />
          <rect x="8" y="19" width="18" height="14" rx="2" fill="none" stroke="#fff" strokeWidth="2" />
          <path d="M8 24.5h18M15 24.5V33" stroke="#fff" strokeWidth="2" />
        </svg>
        <span className="pill pill-red">PDF</span>
      </div>
      <h3>{c.title}</h3>
      <span className="text-link">
        <Icon name="download" size={16} /> Download
      </span>
    </Link>
  );
}

export function OfficialSourcesPanel({ compact }: { compact?: boolean }) {
  return (
    <section className="sources-panel">
      <div className="sources-copy">
        <span className="icon-tile teal">
          <Icon name="building" size={22} />
        </span>
        <h2>Need the exact rule or fine?</h2>
        <p>
          Rules and penalties change and can differ by state. For the latest official word, go straight to the
          source.
        </p>
        {compact && (
          <Link href="/official-sources" className="text-link">
            All official sources <Icon name="arrow" size={16} />
          </Link>
        )}
      </div>
      <div className="sources-grid">
        {officialSources.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="source-card"
            {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
          >
            <span>
              <strong>{s.name}</strong>
              <small>{s.detail}</small>
            </span>
            <Icon name="external" size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}

export function PartnerNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="partner-note">
      <div className="partner-note-img">
        <Image src="/images/partner-legal.jpg" alt="" fill sizes="160px" />
      </div>
      <div className="partner-note-body">{children}</div>
    </div>
  );
}
