"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GuideCard } from "./Cards";
import { Pagination, usePaging } from "./Pagination";
import { guideCategories, guideImage, guides, type GuideCategory } from "@/lib/content";

export function GuideFilter({ limit, featured, pageSize }: { limit?: number; featured?: boolean; pageSize?: number }) {
  const [active, setActive] = useState<GuideCategory | "All">("All");
  const { page, setPage, goTo, topRef } = usePaging();
  const matching = guides.filter((g) => active === "All" || g.category === active).slice(0, limit);
  const shown = pageSize ? matching.slice((page - 1) * pageSize, page * pageSize) : matching;

  return (
    <div ref={topRef} className="paged">
      <div className="filter-row" role="group" aria-label="Filter guides">
        {(["All", ...guideCategories] as const).map((c) => (
          <button
            key={c}
            className={`chip${active === c ? " on" : ""}`}
            aria-pressed={active === c}
            onClick={() => {
              setActive(c);
              setPage(1);
            }}
          >
            {c}
          </button>
        ))}
      </div>
      {featured ? (
        // One large guide on the left, the next three as compact rows, any more as cards below.
        <>
          <div className="guide-feature">
            {shown[0] && <GuideCard g={shown[0]} />}
            {shown.length > 1 && (
              <ul className="guide-rows">
                {shown.slice(1, 4).map((g) => (
                  <li key={g.slug}>
                    <Link href={`/safety-guides/${g.slug}`}>
                      <span className="guide-row-img">
                        <Image src={guideImage(g.slug)} alt="" fill sizes="120px" />
                      </span>
                      <span>
                        <small>{g.category}</small>
                        <strong>{g.title}</strong>
                        <span className="guide-row-desc">{g.summary}</span>
                        <span className="guide-row-meta">{g.minRead} min read · Read guide »</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {shown.length > 4 && (
            <div className="grid grid-4 guide-more">
              {shown.slice(4).map((g) => (
                <GuideCard key={g.slug} g={g} />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="grid grid-4">
          {shown.map((g) => (
            <GuideCard key={g.slug} g={g} />
          ))}
        </div>
      )}
      {pageSize ? <Pagination page={page} pageSize={pageSize} total={matching.length} label="Guides" onChange={goTo} /> : null}
    </div>
  );
}
