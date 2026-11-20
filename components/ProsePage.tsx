export function ProsePage({ label, title, lead, children }: { label: string; title: string; lead?: string; children: React.ReactNode }) {
  return (
    <>
      <section className="page-hero cream">
        <div className="container">
          <p className="eyebrow">{label}</p>
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </section>
      <div className="container">
        <div className="prose">{children}</div>
      </div>
    </>
  );
}
