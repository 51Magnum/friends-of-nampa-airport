import Link from "next/link";
import { pilotResourceGroups } from "./pilot-resources";

export function PilotResourcesSection({
  heading,
}: {
  heading?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      {heading ? (
        <h2 className="text-2xl font-semibold tracking-tight text-navy">
          {heading}
        </h2>
      ) : null}
      <p className="leading-7 text-muted">
        Links pilots often need for Nampa Municipal Airport (KMAN). Please
        confirm frequencies, procedures, and notices in the official Chart
        Supplement and a current briefing before you fly. For city hangar and
        commission pages, see{" "}
        <a
          href="/#airport-info"
          className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
        >
          Airport info
        </a>
        .
      </p>
      {pilotResourceGroups.map((group) => (
        <div key={group.id} className="flex flex-col gap-3">
          <h3 className="font-semibold text-navy">{group.title}</h3>
          <ul className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
            {group.links.map((link) => (
              <li
                key={link.href}
                className="border-b border-line last:border-b-0"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1 px-5 py-4 hover:bg-sky-pale sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span>
                    <span className="font-medium text-navy">{link.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {link.description}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm text-sky">Open link →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-sm leading-6 text-muted">
        Letters and other records about nearby development are in{" "}
        <Link
          href="/documents"
          className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
        >
          Public documents
        </Link>
        .
      </p>
    </div>
  );
}
