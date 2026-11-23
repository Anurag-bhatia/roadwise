"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { news } from "@/lib/content";
import { site } from "@/lib/site";

function PauseIcon({ paused }: { paused: boolean }) {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" aria-hidden="true">
      {paused ? <path d="M7 5v14l12-7z" fill="currentColor" /> : <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />}
    </svg>
  );
}

export function NewsTicker() {
  const [paused, setPaused] = useState(false);

  // Start paused for people who prefer less motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  const items = news.map((n) => (
    <a key={n.headline} href={site.challanTimesUrl} target="_blank" rel="noopener">
      {n.headline}
    </a>
  ));

  return (
    <div className="ticker">
      <div className="container ticker-inner">
        <span className="ticker-label">Latest</span>
        <div className="ticker-window">
          <div className={`ticker-track${paused ? " paused" : ""}`}>
            <div className="ticker-items">{items}</div>
            <div className="ticker-items" aria-hidden="true" inert>
              {items}
            </div>
          </div>
        </div>
        <button
          className="ticker-toggle"
          aria-label={paused ? "Play headlines" : "Pause headlines"}
          onClick={() => setPaused((p) => !p)}
        >
          <PauseIcon paused={paused} />
        </button>
      </div>
    </div>
  );
}

const slides = [
  {
    image: "/hero-highway.png",
    position: "80% center",
    eyebrow: "Road safety awareness",
    hindi: "सड़क सुरक्षा, सबकी ज़िम्मेदारी",
    title: "Road safety is everyone's responsibility.",
    lead: "Free, practical guidance for every driver, rider and fleet operator in India.",
    cta: { href: "/safety-guides", label: "Explore safety guides" },
  },
  {
    image: "/images/guide-fog.jpg",
    position: "center",
    eyebrow: "Winter fog",
    hindi: "कोहरे में धीमे चलें",
    title: "Slow down and stay seen in the fog.",
    lead: "Low beams, more distance and no overtaking when you can't see far ahead.",
    cta: { href: "/safety-guides/driving-safely-in-fog", label: "Read the fog guide" },
  },
  {
    image: "/images/guide-trip.jpg",
    position: "center",
    eyebrow: "Festive travel",
    hindi: "सुरक्षित पहुँचें, खुशी से मनाएँ",
    title: "Heading home for the festivals?",
    lead: "Check your vehicle, plan your rest stops and share your route before you leave.",
    cta: { href: "/checklists/long-distance-trip", label: "Get the trip checklist" },
  },
];

export function HomeBanner() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPaused(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 7000);
    return () => clearTimeout(t);
  }, [index, paused]);

  const go = (step: number) => setIndex((i) => (i + step + slides.length) % slides.length);
  const s = slides[index];

  return (
    <div className="banner" aria-roledescription="carousel" aria-label="Road safety campaigns">
      <div className="banner-slide" aria-live={paused ? "polite" : "off"}>
        <div className="banner-photo">
          <Image
            key={s.image}
            src={s.image}
            alt=""
            fill
            priority={index === 0}
            sizes="(max-width: 960px) 100vw, 60vw"
            style={{ objectPosition: s.position }}
          />
        </div>
        <div className="banner-copy">
          <span className="banner-eyebrow">{s.eyebrow}</span>
          <p className="banner-hindi" lang="hi">
            {s.hindi}
          </p>
          <h1>{s.title}</h1>
          <p className="banner-lead">{s.lead}</p>
          <Link href={s.cta.href} className="btn btn-primary btn-sm">
            {s.cta.label} <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
      <div className="banner-controls">
        <p>
          Banner {index + 1} of {slides.length}
        </p>
        <div className="banner-dots" aria-hidden="true">
          {slides.map((_, i) => (
            <span key={i} className={i === index ? "on" : undefined} />
          ))}
        </div>
        <div className="banner-buttons">
          <button aria-label="Previous banner" onClick={() => go(-1)}>
            ‹
          </button>
          <button aria-label={paused ? "Play banners" : "Pause banners"} onClick={() => setPaused((p) => !p)}>
            <PauseIcon paused={paused} />
          </button>
          <button aria-label="Next banner" onClick={() => go(1)}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

// Portal-style tabbed box. Panels are rendered on the server and passed in.
export function TabbedBox({ tabs }: { tabs: { id: string; label: string; panel: React.ReactNode }[] }) {
  const [active, setActive] = useState(0);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    setActive(next);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  };

  return (
    <div className="tab-box">
      <div className="tab-list" role="tablist" onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            aria-selected={i === active}
            aria-controls={`panel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div key={t.id} id={`panel-${t.id}`} role="tabpanel" aria-labelledby={`tab-${t.id}`} hidden={i !== active} className="tab-panel">
          {t.panel}
        </div>
      ))}
    </div>
  );
}

