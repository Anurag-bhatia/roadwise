import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";

export const metadata: Metadata = { title: "Terms & Conditions" };

// TODO: final wording pending legal review.
export default function TermsPage() {
  return (
    <ProsePage label="Legal" title="Terms & Conditions">
      <p>
        By using RoadWise India you agree to use its content for personal, educational and non-commercial
        purposes. You are welcome to print and share our checklists with your drivers and family.
      </p>
      <h2>No legal advice</h2>
      <p>
        Content on this site is general information and is not a substitute for official rules or professional
        legal advice. Always follow the instructions of traffic authorities on the road.
      </p>
      <h2>External links</h2>
      <p>
        We link to official and partner websites for convenience. We are not responsible for the content of those
        sites.
      </p>
    </ProsePage>
  );
}
