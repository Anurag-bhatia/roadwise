import type { Metadata } from "next";
import { OfficialSourcesPanel, SituationCard } from "@/components/Cards";
import { situations } from "@/lib/content";

export const metadata: Metadata = {
  title: "What To Do",
  description: "Step-by-step guidance for breakdowns, accidents, emergency vehicles and document checks.",
};

export default function WhatToDoPage() {
  return (
    <>
      <section className="page-hero cream">
        <div className="container">
          <p className="eyebrow">What to do</p>
          <h1>When something happens on the road</h1>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {situations.map((s, i) => (
              <SituationCard key={s.slug} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-pale">
        <div className="container">
          <OfficialSourcesPanel />
        </div>
      </section>
    </>
  );
}
