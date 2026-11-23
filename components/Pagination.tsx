"use client";

import { useRef, useState } from "react";

// Page numbers to show: always the first and last, plus a window around the current page.
function pageList(page: number, pages: number): (number | "…")[] {
  const out: (number | "…")[] = [];
  for (let p = 1; p <= pages; p++) {
    if (p === 1 || p === pages || Math.abs(p - page) <= 1) out.push(p);
    else if (out[out.length - 1] !== "…") out.push("…");
  }
  return out;
}

export function Pagination({
  page,
  pageSize,
  total,
  label,
  onChange,
}: {
  page: number;
  pageSize: number;
  total: number;
  label: string;
  onChange: (page: number) => void;
}) {
  const pages = Math.ceil(total / pageSize);
  if (pages <= 1) return null;

  const from = (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  return (
    <nav className="pager" aria-label={`${label} pages`}>
      <p className="pager-count" aria-live="polite">
        Showing {from}–{to} of {total}
      </p>
      <ul>
        <li>
          <button onClick={() => onChange(1)} disabled={page === 1} aria-label="First page">
            «<span className="pager-text"> First</span>
          </button>
        </li>
        <li>
          <button onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="Previous page">
            ‹<span className="pager-text"> Previous</span>
          </button>
        </li>
        {pageList(page, pages).map((p, i) =>
          p === "…" ? (
            <li key={`gap-${i}`} className="pager-gap" aria-hidden="true">
              …
            </li>
          ) : (
            <li key={p}>
              <button
                onClick={() => onChange(p)}
                aria-current={p === page ? "page" : undefined}
                aria-label={`Page ${p}`}
                className={p === page ? "on" : undefined}
              >
                {p}
              </button>
            </li>
          ),
        )}
        <li>
          <button onClick={() => onChange(page + 1)} disabled={page === pages} aria-label="Next page">
            <span className="pager-text">Next </span>›
          </button>
        </li>
        <li>
          <button onClick={() => onChange(pages)} disabled={page === pages} aria-label="Last page">
            <span className="pager-text">Last </span>»
          </button>
        </li>
      </ul>
    </nav>
  );
}

// Page state plus a ref to scroll back to the top of the list when the page changes.
export function usePaging() {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);
  const goTo = (p: number) => {
    setPage(p);
    const top = topRef.current?.getBoundingClientRect().top;
    if (top !== undefined && top < 0) topRef.current?.scrollIntoView({ block: "start" });
  };
  return { page, setPage, goTo, topRef };
}

// A grid of server-rendered items, split into pages.
export function PagedGrid({
  items,
  pageSize,
  className,
  label,
}: {
  items: React.ReactNode[];
  pageSize: number;
  className: string;
  label: string;
}) {
  const { page, goTo, topRef } = usePaging();

  return (
    <div ref={topRef} className="paged">
      <div className={className}>{items.slice((page - 1) * pageSize, page * pageSize)}</div>
      <Pagination page={page} pageSize={pageSize} total={items.length} label={label} onChange={goTo} />
    </div>
  );
}
