import type { Metadata } from "next";
import { ProsePage } from "@/components/ProsePage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <ProsePage label="Contact" title="Get in touch" lead="Spotted something out of date, or have a topic you'd like us to cover?">
      <p>
        Email us at <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>. Please include the page link
        if you are reporting a correction.
      </p>
      <h2>In an emergency</h2>
      <p>
        We can&apos;t respond to emergencies. Dial <a href="tel:112">112</a> for police, fire and ambulance, or{" "}
        <a href="tel:1033">1033</a> for the national highway helpline.
      </p>
    </ProsePage>
  );
}
