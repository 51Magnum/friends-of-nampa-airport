import type { Metadata } from "next";
import Link from "next/link";
import {
  documentsNewestFirst,
  formatDocumentDate,
  officialDocuments,
} from "@/lib/documents";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Documents",
  description: `Public documents related to ${siteConfig.name} and Nampa Municipal Airport.`,
};

export default function DocumentsPage() {
  const documents = documentsNewestFirst(officialDocuments);

  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16"
    >
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky">
        <span
          className="h-1.5 w-8 shrink-0 rounded-full bg-amber-bright"
          aria-hidden="true"
        />
        Documents
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-navy">
        Public documents
      </h1>
      <p className="max-w-3xl leading-7 text-muted">
        Letters and other records we are making available about Nampa Municipal
        Airport. Documents open as PDFs in a new tab. For context, see{" "}
        <Link
          href="/#watching"
          className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
        >
          What we’re watching
        </Link>
        .
      </p>
      {documents.length === 0 ? (
        <p className="leading-7 text-muted">No documents are posted yet.</p>
      ) : (
        <ul className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
          {documents.map((document) => (
            <li
              key={document.id}
              className="border-b border-line last:border-b-0"
            >
              <a
                href={document.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 px-5 py-4 hover:bg-sky-pale sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span>
                  <span className="font-semibold text-navy">
                    {document.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">
                    {formatDocumentDate(document.date)}
                    <span aria-hidden="true"> · </span>
                    {document.from}
                    <span aria-hidden="true"> · </span>
                    {document.topic}
                  </span>
                </span>
                <span className="shrink-0 text-sm text-sky">Open PDF →</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
