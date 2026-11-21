import type { Metadata } from "next";
import Link from "next/link";
import {
  documentsGroupedByProject,
  formatDocumentDate,
  oeaaaSearch,
  officialDocuments,
} from "@/lib/documents";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Documents",
  description: `Public letters and records related to ${siteConfig.name} and Nampa Municipal Airport.`,
};

export default function DocumentsPage() {
  const groups = documentsGroupedByProject(officialDocuments);

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
        Letters and other records about Nampa Municipal Airport and nearby
        development proposals, grouped by project. These include FAA and state
        agency compatibility letters. They are not, by themselves, FAA Form
        7460-1 obstruction evaluations. To look up official airspace cases and
        determinations, use the{" "}
        <a
          href={oeaaaSearch.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
        >
          {oeaaaSearch.label}
        </a>
        . Documents open in a new tab. For context, see{" "}
        <Link
          href="/#watching"
          className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
        >
          What we’re watching
        </Link>
        .
      </p>
      {groups.length === 0 ? (
        <p className="leading-7 text-muted">No documents are posted yet.</p>
      ) : (
        groups.map((group) => (
          <section
            key={group.project.id}
            id={`documents-${group.project.id}`}
            className="flex scroll-mt-28 flex-col gap-4"
          >
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-navy">
                {group.project.title}
              </h2>
              <p className="mt-2 max-w-3xl leading-7 text-muted">
                {group.project.description}
              </p>
            </div>
            <ul className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
              {group.documents.map((document) => (
                <li
                  key={document.id}
                  className="border-b border-line last:border-b-0"
                >
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-1 px-5 py-4 hover:bg-sky-pale"
                  >
                    <span className="font-semibold text-navy">
                      {document.title}
                    </span>
                    <span className="text-sm leading-6 text-muted">
                      {formatDocumentDate(document.date)}
                      <span aria-hidden="true"> · </span>
                      {document.from}
                    </span>
                    <span className="text-sm leading-6 text-muted">
                      {document.summary}
                    </span>
                    <span className="text-sm text-sky">
                      {document.href.startsWith("https://")
                        ? "Open official copy →"
                        : "Open PDF →"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </main>
  );
}
