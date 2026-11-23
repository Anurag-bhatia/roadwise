import Image from "next/image";
import Link from "next/link";
import {
  ChecklistCard,
  NewsCard,
  OfficialSourcesPanel,
  SectionHead,
  SituationCard,
  VideoCard,
} from "@/components/Cards";
import { GuideFilter } from "@/components/GuideFilter";
import { Icon } from "@/components/Icon";
import { checklists, news, situations, videos } from "@/lib/content";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-frame">
          <div className="hero-photo">
            <Image
              src="/hero-highway.png"
              alt="A white SUV driving on a highway at sunset, past a warning sign and a green traffic signal"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 55vw"
              className="hero-bg"
            />
          </div>
          <div className="container hero-content">
            <p className="eyebrow">Free road-safety guides for India</p>
            <h1>
              Drive safer. <span>Know what to do</span> on the road.
            </h1>
            <p className="lead">
              Simple, practical guides for car owners, two-wheeler riders, commercial drivers and fleet managers.
            </p>
            <div className="hero-actions">
              <Link href="/safety-guides" className="btn btn-primary">
                Explore safety guides <Icon name="arrow" size={18} />
              </Link>
              <Link href="/what-to-do" className="btn btn-outline">
                What to do in an emergency
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            label="Challan Times"
            title="Latest traffic and challan news"
            action={
              <a href={site.challanTimesUrl} target="_blank" rel="noopener" className="text-link">
                Read more on Challan Times <Icon name="external" size={16} />
              </a>
            }
          />
          <div className="grid grid-4 scroll-row">
            {news.map((n) => (
              <NewsCard key={n.headline} item={n} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy section-photo">
        <Image src="/images/videos-bg.jpg" alt="" fill sizes="100vw" className="section-photo-bg" />
        <div className="container">
          <SectionHead
            dark
            label="Watch and learn"
            title="Road safety videos"
            intro="Short explainers on real roadside situations."
            action={
              <Link href="/videos" className="btn btn-primary btn-sm">
                See all videos <Icon name="arrow" size={16} />
              </Link>
            }
          />
          <div className="grid grid-4">
            {videos.slice(0, 4).map((v) => (
              <VideoCard key={v.title} v={v} dark />
            ))}
          </div>
          <p className="disclosure">
            From the RSLA (Roadside Legal Assistance) video series by LOTS247, shared as an educational resource.
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="container">
          <SectionHead
            label="What to do"
            title="When something happens on the road"
            action={
              <Link href="/what-to-do" className="text-link">
                All what-to-do guides <Icon name="arrow" size={16} />
              </Link>
            }
          />
          <div className="grid grid-4">
            {situations.map((s, i) => (
              <SituationCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            label="Safety guides"
            title="Build safer driving habits"
            intro="For everyday trips, long journeys and commercial vehicles."
            action={
              <Link href="/safety-guides" className="text-link">
                All safety guides <Icon name="arrow" size={16} />
              </Link>
            }
          />
          <GuideFilter />
        </div>
      </section>

      <section className="section section-pale">
        <div className="container">
          <SectionHead
            label="Free downloads"
            title="Practical checklists"
            intro="Print it, save it or share it with your drivers. No sign-up needed."
          />
          <div className="grid grid-4">
            {checklists.map((c) => (
              <ChecklistCard key={c.slug} c={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <OfficialSourcesPanel compact />
        </div>
      </section>
    </>
  );
}
