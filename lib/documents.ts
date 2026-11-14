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
    id: "airport-commission-2026-11-09-agenda",
    title: "Airport Commission agenda (Nov. 9, 2026)",
    date: "2026-11-09",
    from: "Nampa Airport Commission",
    href: "/docs/airport-commission-2026-11-09-agenda.pdf",
    topic: "Hangars 0450 and 0540",
    relatedWatchItemIds: ["hangar-sales"],
  },
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
    id: "iaa-braeburn-2026-11-02",
    title: "IAA letter (Nov. 2, 2026)",
    date: "2026-11-02",
    from: "Idaho Aviation Association",
    href: "/docs/iaa-braeburn-2026-11-02.pdf",
    topic: "Braeburn Creek",
    relatedWatchItemIds: ["braeburn-creek"],
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
  {
    id: "airport-commission-2026-07-13-minutes",
    title: "Airport Commission minutes (July 13, 2026)",
    date: "2026-07-13",
    from: "Nampa Airport Commission",
    href: "/docs/airport-commission-2026-07-13-minutes.pdf",
    topic: "Hangars 0450 and 0540",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "airport-commission-2026-05-11-minutes",
    title: "Airport Commission minutes (May 11, 2026)",
    date: "2026-05-11",
    from: "Nampa Airport Commission",
    href: "/docs/airport-commission-2026-05-11-minutes.pdf",
    topic: "Hangars 0450 and 0540",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "city-council-workshop-2026-04-16-minutes",
    title: "City Council workshop minutes (April 16, 2026)",
    date: "2026-04-16",
    from: "Nampa City Council",
    href: "/docs/city-council-workshop-2026-04-16-minutes.pdf",
    topic: "Hangars 0450 and 0540",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "nampa-airport-hangar-assessment-2025-07",
    title: "Hangar Assessment (updated July 2025)",
    date: "2024-08-28",
    from: "City of Nampa",
    href: "https://www.cityofnampa.us/DocumentCenter/View/19852/Nampa_Airport_Hangar_Assessment_revised_jul_25",
    topic: "Hangars 0450 and 0540",
    relatedWatchItemIds: ["hangar-sales"],
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
