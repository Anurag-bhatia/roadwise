import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

// TODO: final wording pending legal review.
export default function PrivacyPage() {
  return (
    <ProsePage label="Legal" title="Privacy Policy">
      <p>
        RoadWise India does not require an account or sign-up. Checklists can be downloaded and printed without
        sharing any personal information.
      </p>
      <h2>What we collect</h2>
      <p>
        We may collect anonymous usage data, such as pages visited, to improve our content. If you email us, we
        use your email address only to reply.
      </p>
      <h2>Third-party content</h2>
      <p>
        Embedded videos and links to external sites, including Challan Times and government portals, are governed
        by those sites&apos; own privacy policies.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about privacy? Email <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </ProsePage>
  );
}
