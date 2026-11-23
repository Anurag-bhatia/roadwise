"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { SiteSearch, type SearchItem } from "./SiteSearch";
import { nav, site } from "@/lib/site";

const textSizes = [
  { key: "sm", label: "A-", name: "Smaller text" },
  { key: "md", label: "A", name: "Default text size" },
  { key: "lg", label: "A+", name: "Larger text" },
] as const;
type TextSize = (typeof textSizes)[number]["key"];

function useTextSize() {
  const [size, setSize] = useState<TextSize>("sm");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("text-size");
      if (saved === "md" || saved === "lg") setSize(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.textSize = size;
    try {
      localStorage.setItem("text-size", size);
    } catch {}
  }, [size]);

  return [size, setSize] as const;
}

export function Header({ searchIndex }: { searchIndex: SearchItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [textSize, setTextSize] = useTextSize();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (open && headerRef.current) setMenuTop(Math.max(0, headerRef.current.getBoundingClientRect().bottom));
    // Lock scrolling on <html>, not <body>: hidden overflow on body would release the sticky header.
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="site-header" ref={headerRef}>
        <div className="utility-bar">
          <div className="container utility-inner">
            <p>
              <span className="hide-sm">Independent road-safety information portal · </span>Not a government website
            </p>
            <a href="#main" className="skip-link">
              Skip to main content
            </a>
            <div className="text-size" role="group" aria-label="Text size">
              {textSizes.map((t) => (
                <button
                  key={t.key}
                  aria-label={t.name}
                  aria-pressed={textSize === t.key}
                  className={textSize === t.key ? "on" : undefined}
                  onClick={() => setTextSize(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="container brand-row">
          <Link href="/" className="brand" aria-label="RoadWise India home">
            <Image src="/roadwise-logo.png" alt="RoadWise India" width={228} height={60} priority />
            <span className="brand-sub">
              <span lang="hi">सड़क सुरक्षा जानकारी पोर्टल</span>
              Road Safety Information Portal
            </span>
          </Link>

          <SiteSearch index={searchIndex} />

          <button
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={24} />
          </button>
        </div>

        {open && (
          <div className="mobile-menu" style={{ top: menuTop }}>
            <nav aria-label="Mobile">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Icon name={item.icon} size={22} />
                  <span>{item.label}</span>
                  <span className="chev">›</span>
                </Link>
              ))}
              <a href={site.challanTimesUrl} target="_blank" rel="noopener" className="ct">
                <Icon name="news" size={22} />
                <span>Challan Times</span>
                <Icon name="external" size={18} />
              </a>
            </nav>
            <p className="mobile-menu-foot">
              <Link href="/editorial-policy">Editorial Policy</Link> · <Link href="/privacy">Privacy Policy</Link> ·{" "}
              <Link href="/terms">Terms &amp; Conditions</Link>
              <br />
              Independent platform. Not a government website.
            </p>
          </div>
        )}
      </header>

      <nav className="nav-bar" aria-label="Main">
        <div className="container nav-bar-inner">
          <Link href="/" className={`nav-home${pathname === "/" ? " active" : ""}`} aria-label="Home">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" aria-hidden="true">
              <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z" />
            </svg>
          </Link>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "active" : undefined}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a href={site.challanTimesUrl} target="_blank" rel="noopener" className="nav-ct">
            Challan Times <Icon name="external" size={14} />
          </a>
        </div>
      </nav>
    </>
  );
}
