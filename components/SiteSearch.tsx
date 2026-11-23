"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useId, useState } from "react";

export type SearchItem = { title: string; kind: string; href: string; text: string };

export function SiteSearch({ index }: { index: SearchItem[] }) {
  const router = useRouter();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const q = query.trim().toLowerCase();
  const results = q.length < 2 ? [] : index.filter((i) => i.text.includes(q)).slice(0, 6);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  return (
    <form
      className="site-search"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        if (results[0]) go(results[0].href);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <input
        type="search"
        value={query}
        placeholder="Search guides, checklists, videos"
        aria-label="Search the portal"
        aria-controls={listId}
        aria-expanded={open && q.length >= 2}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
      />
      <button type="submit" aria-label="Search">
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4-4" />
        </svg>
      </button>
      {open && q.length >= 2 && (
        <ul id={listId} className="search-results">
          {results.length === 0 && <li className="search-empty">No matches for “{query.trim()}”</li>}
          {results.map((r) => (
            <li key={r.href + r.title}>
              <Link href={r.href} onClick={() => go(r.href)}>
                <small>{r.kind}</small>
                {r.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
