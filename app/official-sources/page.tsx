import type { Metadata } from "next";
import { OfficialSourcesPanel } from "@/components/Cards";

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
      <section className="section">
        <div className="container">
          <OfficialSourcesPanel />
        </div>
      </section>
    </>
  );
}
