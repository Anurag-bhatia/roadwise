import Link from "next/link";
import { OfficialLinks, VideoCard } from "@/components/Cards";
import { GuideFilter } from "@/components/GuideFilter";
import { HomeBanner, NewsTicker, TabbedBox } from "@/components/HomeWidgets";
import { Icon } from "@/components/Icon";
import { checklists, news, situations, videos, type IconName } from "@/lib/content";
import { nav, site } from "@/lib/site";

function HomeTitle({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="home-title">
      <h2>{title}</h2>
      {action}
    </div>
  );
}

const quickLinks: { href: string; label: string; icon: IconName; external?: boolean }[] = [
  ...nav.map((n) => ({ href: n.href, label: n.label, icon: n.icon })),
  { href: site.challanTimesUrl, label: "Challan Times", icon: "news", external: true },
];

const roadSigns = [
  { name: "Stop", kind: "Mandatory sign", svg: <><path d="M17 2h14l15 15v14L31 46H17L2 31V17z" fill="#d32f2f" /><text x="24" y="29" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">STOP</text></> },
  { name: "Give way", kind: "Mandatory sign", svg: <><path d="M3 6h42L24 43z" fill="#d32f2f" /><path d="M12 11h24L24 32z" fill="#fff" /></> },
  { name: "No entry", kind: "Mandatory sign", svg: <><circle cx="24" cy="24" r="22" fill="#d32f2f" /><rect x="9" y="19" width="30" height="10" rx="1" fill="#fff" /></> },
  { name: "No horn", kind: "Mandatory sign", svg: <><circle cx="24" cy="24" r="20" fill="#fff" stroke="#d32f2f" strokeWidth="5" /><path d="M14 20h5l9-6v20l-9-6h-5z" fill="#0f172a" /><path d="M10 10l28 28" stroke="#d32f2f" strokeWidth="5" /></> },
  { name: "Pedestrian crossing", kind: "Cautionary sign", svg: <><path d="M24 4l21 38H3z" fill="#fff" stroke="#d32f2f" strokeWidth="4" strokeLinejoin="round" /><circle cx="24" cy="17" r="2.6" fill="#0f172a" /><path d="M24 20v8m0 0l-4 7m4-7l4 7m-8-12h8" stroke="#0f172a" strokeWidth="2.4" strokeLinecap="round" fill="none" /><path d="M14 37h20" stroke="#0f172a" strokeWidth="2" strokeDasharray="3 2" /></> },
  { name: "Hospital", kind: "Informatory sign", svg: <><rect x="4" y="4" width="40" height="40" rx="3" fill="#1d4ed8" /><rect x="11" y="11" width="26" height="26" fill="#fff" /><path d="M24 15v18M15 24h18" stroke="#d32f2f" strokeWidth="6" /></> },
];

export default function Home() {
  return (
    <>
      <NewsTicker />

      <section className="home-hero">
        <div className="container home-hero-grid">
          <HomeBanner />

          <aside className="helplines" aria-labelledby="helplines-title">
            <h2 id="helplines-title">
              <Icon name="alert" size={18} /> Emergency helplines
            </h2>
            <a href="tel:112" className="helpline">
              <strong>112</strong>
              <span>
                Emergency response
                <small>Police, fire and ambulance</small>
              </span>
            </a>
            <a href="tel:1033" className="helpline">
              <strong>1033</strong>
              <span>
                National highway helpline
                <small>On national highways</small>
              </span>
            </a>
            <div className="helplines-foot">
              <p>On the road right now?</p>
              <Link href="/what-to-do/road-accident">» What to do after a road accident</Link>
              <Link href="/what-to-do/breakdown-on-highway">» Vehicle breakdown on a highway</Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="services-band" aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className="visually-hidden">
            Quick links
          </h2>
          <ul className="services">
            {quickLinks.map((q) => (
              <li key={q.href}>
                <Link href={q.href} {...(q.external ? { target: "_blank", rel: "noopener" } : {})}>
                  <span className="quick-icon">
                    <Icon name={q.icon} size={22} />
                  </span>
                  <span className="services-label">
                    {q.label}
                    {q.external && " ↗"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-section home-section-pale">
        <div className="container info-layout">
          <TabbedBox
            tabs={[
              {
                id: "news",
                label: "What's new",
                panel: (
                  <>
                    <ul className="news-table">
                      {news.map((n, i) => (
                        <li key={n.headline}>
                          <span className="news-date">{n.date}</span>
                          <a href={site.challanTimesUrl} target="_blank" rel="noopener">
                            {n.headline}
                            {i < 2 && <span className="badge-new">New</span>}
                          </a>
                          <span className="news-tag">{n.tag}</span>
                        </li>
                      ))}
                    </ul>
                    <a href={site.challanTimesUrl} target="_blank" rel="noopener" className="info-more">
                      View all on Challan Times <Icon name="external" size={14} />
                    </a>
                  </>
                ),
              },
              {
                id: "steps",
                label: "What to do",
                panel: (
                  <>
                    <ol className="info-list">
                      {situations.map((s, i) => (
                        <li key={s.slug}>
                          <Link href={`/what-to-do/${s.slug}`} className="step-row">
                            <span className="step-badge">{i + 1}</span>
                            <strong>{s.title}</strong>
                            <span className="chev">»</span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                    <Link href="/what-to-do" className="info-more">
                      All what-to-do guides »
                    </Link>
                  </>
                ),
              },
              {
                id: "downloads",
                label: "Downloads",
                panel: (
                  <>
                    <div className="table-wrap">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Checklist</th>
                            <th scope="col">Meant for</th>
                            <th scope="col">Format</th>
                            <th scope="col">
                              <span className="visually-hidden">Action</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {checklists.map((c, i) => (
                            <tr key={c.slug}>
                              <td>{i + 1}.</td>
                              <td>
                                <strong>{c.title}</strong>
                              </td>
                              <td>{c.audience}</td>
                              <td>
                                <span className="file-badge">PDF</span>
                              </td>
                              <td>
                                <Link href={`/checklists/${c.slug}`} className="table-action">
                                  <Icon name="download" size={16} /> Download
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Link href="/checklists" className="info-more">
                      All checklists »
                    </Link>
                  </>
                ),
              },
            ]}
          />

          <aside className="info-panel signs-panel" aria-labelledby="signs-title">
            <h2 id="signs-title" className="info-head navy">
              Know your road signs
            </h2>
            <div className="signs-mini">
              {roadSigns.map((r) => (
                <div key={r.name} className="sign-mini">
                  <svg viewBox="0 0 48 48" width={44} height={44} aria-hidden="true">
                    {r.svg}
                  </svg>
                  <strong>{r.name}</strong>
                  <small>{r.kind}</small>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="home-section home-section-navy">
        <div className="container">
          <HomeTitle
            title="Video gallery"
            action={
              <Link href="/videos" className="text-link">
                All videos »
              </Link>
            }
          />
          <div className="grid grid-4 scroll-row">
            {videos.slice(0, 4).map((v) => (
              <VideoCard key={v.title} v={v} dark />
            ))}
          </div>
          <p className="home-disclosure">
            These videos are from the RSLA (Roadside Legal Assistance) series by LOTS247, shared as an educational
            resource.
          </p>
        </div>
      </section>

      <section className="home-section home-section-pale">
        <div className="container">
          <HomeTitle
            title="Safety guides"
            action={
              <Link href="/safety-guides" className="text-link">
                All safety guides »
              </Link>
            }
          />
          <GuideFilter limit={8} featured />
        </div>
      </section>

      <section className="home-section important-links">
        <div className="container">
          <HomeTitle
            title="Important links"
            action={
              <Link href="/official-sources" className="text-link">
                All official sources »
              </Link>
            }
          />
          <p className="home-intro">
            Rules and penalties change and can differ by state. For the exact rule or fine, please refer to the
            official source.
          </p>
          <OfficialLinks />
        </div>
      </section>
    </>
  );
}
