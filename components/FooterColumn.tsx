"use client";

import { useId, useState } from "react";

// A footer link column. On phones the heading becomes a toggle; on wider screens the list is always shown.
export function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={`footer-col${open ? " open" : ""}`}>
      <h3>
        <button aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
          {title}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
      </h3>
      <ul id={id}>{children}</ul>
    </div>
  );
}
