"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="RoadWise India home">
          <Image src="/roadwise-logo.png" alt="RoadWise India" width={170} height={45} priority />
        </Link>

        <nav className="main-nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a href={site.challanTimesUrl} target="_blank" rel="noopener" className="btn btn-primary btn-sm header-cta">
          Challan Times <Icon name="external" size={16} />
        </a>

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
        <div className="mobile-menu">
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
  );
}
