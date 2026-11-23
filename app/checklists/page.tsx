import type { Metadata } from "next";
import { ChecklistCard } from "@/components/Cards";
import { PagedGrid } from "@/components/Pagination";
import { checklists } from "@/lib/content";

export const metadata: Metadata = {
  title: "Checklists",
  description: "Free printable road-safety checklists for drivers, riders and fleets. No sign-up needed.",
};

export default function ChecklistsPage() {
  return (
    <>
      <section className="page-hero cream">
        <div className="container">
          <p className="eyebrow">Free downloads</p>
          <h1>Practical checklists</h1>
          <p className="lead">Print it, save it as a PDF or share it with your drivers. No sign-up needed.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <PagedGrid
            className="grid grid-3"
            pageSize={3}
            label="Checklists"
            items={checklists.map((c) => (
              <ChecklistCard key={c.slug} c={c} />
            ))}
          />
        </div>
      </section>
    </>
  );
}
