import Link from "next/link";
import { ProsePage } from "@/components/ProsePage";

export default function NotFound() {
  return (
    <ProsePage label="404" title="Wrong turn" lead="We couldn't find that page.">
      <p>
        Head back to the <Link href="/">home page</Link> or browse our <Link href="/safety-guides">safety guides</Link>.
      </p>
    </ProsePage>
  );
}
