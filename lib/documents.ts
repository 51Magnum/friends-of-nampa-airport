export type OfficialDocument = {
  id: string;
  title: string;
  /** Calendar date on the document, YYYY-MM-DD. */
  date: string;
  from: string;
  /** Site path under /public, or an external https URL. */
  href: string;
  topic: string;
  relatedWatchItemIds: string[];
};

/**
 * Public documents hosted on this site or linked from official sources.
 * Hosted files live in public/docs/. Do not add a document unless the
 * file is public and we have permission to share it.
 */
export const officialDocuments: OfficialDocument[] = [
  {
    id: "faa-helena-crosscreek-2026-11-13",
    title: "FAA letter (Nov. 13, 2026)",
    date: "2026-11-13",
    from: "FAA Helena Airports District Office",
    href: "/docs/faa-helena-crosscreek-2026-11-13.pdf",
    topic: "Crosscreek",
    relatedWatchItemIds: ["crosscreek"],
  },
  {
    id: "faa-helena-braeburn-2026-10-16",
    title: "FAA letter (Oct. 16, 2026)",
    date: "2026-10-16",
    from: "FAA Helena Airports District Office",
    href: "/docs/faa-helena-braeburn-2026-10-16.pdf",
    topic: "Braeburn Creek",
    relatedWatchItemIds: ["braeburn-creek"],
  },
  {
    id: "itd-aeronautics-braeburn-2026-10-15",
    title: "ITD Aeronautics letter (Oct. 15, 2026)",
    date: "2026-10-15",
    from: "Idaho Transportation Department Division of Aeronautics",
    href: "/docs/itd-aeronautics-braeburn-2026-10-15.pdf",
    topic: "Braeburn Creek",
    relatedWatchItemIds: ["braeburn-creek"],
  },
  {
    id: "aopa-braeburn-2026-10-01",
    title: "AOPA letter (Oct. 1, 2026)",
    date: "2026-10-01",
    from: "Aircraft Owners and Pilots Association",
    href: "/docs/aopa-braeburn-2026-10-01.pdf",
    topic: "Braeburn Creek",
    relatedWatchItemIds: ["braeburn-creek"],
  },
];

function byDateNewestFirst(a: OfficialDocument, b: OfficialDocument): number {
  return b.date.localeCompare(a.date) || a.title.localeCompare(b.title);
}

export function documentsNewestFirst(
  documents: OfficialDocument[] = officialDocuments,
): OfficialDocument[] {
  return documents.slice().sort(byDateNewestFirst);
}

export function documentsForWatchItem(
  watchItemId: string,
  documents: OfficialDocument[] = officialDocuments,
): OfficialDocument[] {
  return documents
    .filter((document) => document.relatedWatchItemIds.includes(watchItemId))
    .sort(byDateNewestFirst);
}

export function formatDocumentDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));
  const months = [
    "Jan.",
    "Feb.",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ] as const;
  return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}
