import type { Metadata } from "next";
import { OfficialLinks } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Official Sources",
  description: "Links to official government sources for traffic rules, licences, vehicle services and challans.",
};

export default function OfficialSourcesPage() {
  return (
    <>
      <section className="page-hero cream">
        <div className="container">
          <p className="eyebrow">Official sources</p>
          <h1>Go straight to the source</h1>
          <p className="lead">
            RoadWise India explains road safety in plain language. For the exact rule, fine or procedure in your
            state, always check the official government source.
          </p>
        </div>
      </section>
      <section className="home-section important-links">
        <div className="container">
          <div className="home-title">
            <h2>Important links</h2>
          </div>
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
