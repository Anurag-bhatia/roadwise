"use client";

import { useState } from "react";
import { GuideCard } from "./Cards";
import { guideCategories, guides, type GuideCategory } from "@/lib/content";

export function GuideFilter({ limit }: { limit?: number }) {
  const [active, setActive] = useState<GuideCategory | "All">("All");
  const shown = guides.filter((g) => active === "All" || g.category === active).slice(0, limit);

  return (
    <>
      <div className="filter-row" role="group" aria-label="Filter guides">
        {(["All", ...guideCategories] as const).map((c) => (
          <button key={c} className={`chip${active === c ? " on" : ""}`} aria-pressed={active === c} onClick={() => setActive(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid grid-4">
        {shown.map((g) => (
          <GuideCard key={g.slug} g={g} />
        ))}
      </div>
    </>
  );
}
