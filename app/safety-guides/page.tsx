import type { Metadata } from "next";
import { GuideFilter } from "@/components/GuideFilter";

export const metadata: Metadata = {
  title: "Safety Guides",
  description: "Practical guides on defensive driving, night and monsoon driving, fatigue, vehicle checks and highways.",
};

export default function SafetyGuidesPage() {
  return (
    <>
      <section className="page-hero cream">
        <div className="container">
          <p className="eyebrow">Safety guides</p>
          <h1>Build safer driving habits</h1>
          <p className="lead">For everyday trips, long journeys and commercial vehicles.</p>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ paddingTop: 12 }}>
          <GuideFilter />
        </div>
      </section>
    </>
  );
}
