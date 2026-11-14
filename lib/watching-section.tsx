import Link from "next/link";
import {
  documentsForWatchItem,
  formatDocumentDate,
} from "@/lib/documents";
import { watchingItems, type WatchingItem } from "@/lib/watching";

function SourceLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
    >
      {children}
    </a>
  );
}

function HowToWeighIn({ text }: { text: string }) {
  const parts = text.split(/(PZall@cityofnampa\.us)/);
  return (
    <p className="text-sm leading-6 text-muted">
      {parts.map((part, index) =>
        part === "PZall@cityofnampa.us" ? (
          <a
            key={part}
            href={`mailto:${part}`}
            className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
          >
            {part}
          </a>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </p>
  );
}

function WatchingCard({ item }: { item: WatchingItem }) {
  const documents = documentsForWatchItem(item.id);

  return (
    <li
      id={`watching-${item.id}`}
      className={
        item.verified
          ? "scroll-mt-28 rounded-xl border border-line bg-paper px-4 py-3"
          : "scroll-mt-28 rounded-xl border border-dashed border-line bg-paper px-4 py-3"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">
        {item.status}
      </p>
      <p className="mt-1 font-semibold text-navy">{item.title}</p>
      {item.nextDateLabel ? (
        <p className="mt-1 text-sm font-medium text-navy">{item.nextDateLabel}</p>
      ) : null}
      <p className="mt-1 text-sm leading-6 text-muted">{item.whyItMatters}</p>
      {item.letter ? (
        <details className="mt-2 text-sm leading-6 text-muted">
          <summary className="cursor-pointer font-medium text-navy">
            {item.letter.title}
          </summary>
          <p className="mt-1">{item.letter.summary}</p>
          {item.letter.bullets && item.letter.bullets.length > 0 ? (
            <ul className="mt-1 list-disc pl-5">
              {item.letter.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </details>
      ) : null}
      {item.howToWeighIn ? <HowToWeighIn text={item.howToWeighIn} /> : null}
      {documents.length > 0 ? (
        <p className="mt-2 text-sm leading-6 text-muted">
          Documents:{" "}
          {documents.map((document, index) => (
            <span key={document.id}>
              {index > 0 ? "; " : null}
              <a
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
              >
                {document.title}
              </a>
              <span aria-hidden="true"> · </span>
              {formatDocumentDate(document.date)}
            </span>
          ))}
        </p>
      ) : null}
      <p className="mt-2 text-sm leading-6 text-muted">
        {item.sources.map((source, index) => (
          <span key={source.href}>
            {index > 0 ? "; " : null}
            <SourceLink href={source.href}>{source.label}</SourceLink>
          </span>
        ))}
        .
      </p>
    </li>
  );
}

export function WatchingSection() {
  return (
    <>
      <p className="leading-7 text-muted">
        Proposals and questions we are following at or near Nampa Municipal
        Airport. This is for information only, not a position on any
        application. Please confirm dates and details on official city pages
        before you go or comment.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {watchingItems.map((item) => (
          <WatchingCard key={item.id} item={item} />
        ))}
      </ul>
      <p className="text-sm leading-6 text-muted">
        <Link
          href="/documents"
          className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
        >
          All documents
        </Link>
        .
      </p>
    </>
  );
}
