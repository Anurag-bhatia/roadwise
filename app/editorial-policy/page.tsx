import type { Metadata } from "next";
import Link from "next/link";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Editorial Policy" };

// TODO: final wording pending legal review.
export default function EditorialPolicyPage() {
  return (
    <ProsePage label="Legal" title="Editorial Policy">
      <p>
        RoadWise India is an independent, brand-neutral information platform. It is not a Government of India or
        State Government website and is not affiliated with any government body.
      </p>
      <h2>What we publish</h2>
      <p>
        Our guides offer general road-safety information in plain language, not legal advice. We do not quote
        section numbers, fines or state-specific rules, because these change and differ by state. For exact rules
        and penalties, please refer to the <Link href="/official-sources">official sources</Link>.
      </p>
      <h2>How content is reviewed</h2>
      <p>
        Every guide shows the date it was last reviewed. Content was last reviewed on {site.reviewedOn}. If you
        spot something out of date, <Link href="/contact">tell us</Link> and we will check it.
      </p>
      <h2>Partner content</h2>
      <p>
        Content from partners, including videos from the RSLA (Roadside Legal Assistance) series by LOTS247, is
        always labelled as such and shared as an educational resource.
      </p>
    </ProsePage>
  );
}
