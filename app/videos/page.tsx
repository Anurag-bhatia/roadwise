import type { Metadata } from "next";
import Link from "next/link";
import { PartnerNote, VideoCard, VideoThumb } from "@/components/Cards";
import { Icon } from "@/components/Icon";
import { PagedGrid } from "@/components/Pagination";
import { videos } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Videos",
  description: "Short explainers on what to do in real roadside situations.",
};

export default function VideosPage() {
  const [featured] = videos;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="pill pill-dark">Watch and learn</span>
          <h1>Road safety videos</h1>
          <p className="lead">Short explainers on what to do in real roadside situations.</p>
          <div className="hero-grid" style={{ marginTop: 32 }}>
            <VideoThumb v={featured} large />
            <div>
              <p className="eyebrow" style={{ color: "var(--orange)" }}>Featured · {featured.duration}</p>
              <h2 style={{ fontSize: 28, marginBottom: 12 }}>{featured.title}</h2>
              <p style={{ color: "#cbd5e1", marginBottom: 24 }}>{featured.takeaway}</p>
              {featured.guide && (
                <Link href={featured.guide} className="btn btn-primary">
                  Read the related guide <Icon name="arrow" size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-pale">
        <div className="container">
          <h2 style={{ fontSize: 28, marginBottom: 24 }}>All videos</h2>
          <PagedGrid
            className="grid grid-3"
            pageSize={3}
            label="Videos"
            items={videos.map((v) => (
              <VideoCard key={v.title} v={v} />
            ))}
          />
          <div style={{ marginTop: 28 }}>
            <PartnerNote>
              <p>
                These videos are part of the RSLA (Roadside Legal Assistance) series by LOTS247, our partner,
                shared as an educational resource.
              </p>
              <p style={{ marginTop: 10 }}>
                <a href={site.lots247Url} target="_blank" rel="noopener">
                  About LOTS247 →
                </a>
              </p>
            </PartnerNote>
          </div>
        </div>
      </section>
    </>
  );
}
