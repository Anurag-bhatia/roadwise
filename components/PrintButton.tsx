"use client";

import { Icon } from "./Icon";

export function PrintButton() {
  return (
    <button className="btn btn-primary no-print" onClick={() => window.print()}>
      <Icon name="download" size={18} /> Print or save as PDF
    </button>
  );
}
