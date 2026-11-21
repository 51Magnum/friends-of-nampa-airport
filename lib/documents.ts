export type OfficialDocument = {
  id: string;
  title: string;
  /** Calendar date on the document, YYYY-MM-DD. */
  date: string;
  from: string;
  /** Site path under /public, or an external https URL. */
  href: string;
  topic: string;
  /** One-sentence neutral summary shown on the documents page. */
  summary: string;
  kind: "letter" | "agenda" | "minutes" | "report" | "decision";
  relatedWatchItemIds: string[];
};

export type DocumentProject = {
  id: string;
  title: string;
  description: string;
  /**
   * If true, this group is shown in a clearly labeled reference section,
   * separate from Nampa Municipal Airport (KMAN) project groups.
   */
  reference?: boolean;
};

/**
 * Projects whose letters and related records appear on the documents page.
 * Add a new project here, then add documents with the matching
 * relatedWatchItemIds value.
 */
export const documentProjects: DocumentProject[] = [
  {
    id: "crosscreek",
    title: "Crosscreek",
    description:
      "Proposed annexation and RS-4 zoning at Victory Road near Nampa Municipal Airport (ANN-00373-2026).",
  },
  {
    id: "braeburn-creek",
    title: "Braeburn Creek",
    description:
      "Proposed annexation and residential development at Amity Avenue and Happy Valley Road (ANN-00371-2026, SPP-00184-2026).",
  },
  {
    id: "hangar-sales",
    title: "Hangars 0450 and 0540",
    description:
      "City-owned hangars at Nampa Municipal Airport that the Airport Commission and City Council have been discussing.",
  },
  {
    id: "other-airports-reference",
    title: "Other airports / reference",
    description:
      "FAA and other official decisions about airports other than Nampa Municipal Airport (KMAN). These are included as reference only and are not about KMAN.",
    reference: true,
  },
];

export const oeaaaSearch = {
  label: "FAA OE/AAA search",
  href: "https://oeaaa.faa.gov",
  description:
    "Search official FAA obstruction evaluation (Form 7460-1) cases and determinations.",
};

/**
 * Public documents hosted on this site or linked from official sources.
 * Hosted files live in public/docs/. Do not add a document unless the
 * file is public and we have permission to share it. Add new letters by
 * placing the PDF in public/docs/ and appending an entry below.
 */
export const officialDocuments: OfficialDocument[] = [
  {
    id: "itd-aeronautics-crosscreek-2026-11-20",
    title: "ITD Aeronautics letter (Nov. 20, 2026)",
    date: "2026-11-20",
    from: "Idaho Transportation Department Division of Aeronautics",
    href: "/docs/itd-aeronautics-crosscreek-2026-11-20.pdf",
    topic: "Crosscreek",
    summary:
      "The Idaho Transportation Department Division of Aeronautics wrote that the proposed Crosscreek project is in the airport traffic-pattern area, that lower-density development is recommended, and that avigation easements and fair-disclosure statements are needed to meet state land-use guidelines.",
    kind: "letter",
    relatedWatchItemIds: ["crosscreek"],
  },
  {
    id: "airport-commission-2026-11-09-agenda",
    title: "Airport Commission agenda (Nov. 9, 2026)",
    date: "2026-11-09",
    from: "Nampa Airport Commission",
    href: "/docs/airport-commission-2026-11-09-agenda.pdf",
    topic: "Hangars 0450 and 0540",
    summary:
      "Airport Commission agenda including an action item on city hangars 0450 and 0540.",
    kind: "agenda",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "faa-helena-crosscreek-2026-11-13",
    title: "FAA letter (Nov. 13, 2026)",
    date: "2026-11-13",
    from: "FAA Helena Airports District Office",
    href: "/docs/faa-helena-crosscreek-2026-11-13.pdf",
    topic: "Crosscreek",
    summary:
      "The FAA Helena Airports District Office wrote that it does not issue advance clearances for zoning, reminded the city of Grant Assurance 21, and asked the city to consider land-use compatibility for the proposed Victory Road annexation near the runway.",
    kind: "letter",
    relatedWatchItemIds: ["crosscreek"],
  },
  {
    id: "iaa-braeburn-2026-11-02",
    title: "IAA letter (Nov. 2, 2026)",
    date: "2026-11-02",
    from: "Idaho Aviation Association",
    href: "/docs/iaa-braeburn-2026-11-02.pdf",
    topic: "Braeburn Creek",
    summary:
      "The Idaho Aviation Association wrote the city about airport compatibility at Braeburn Creek, encouraged avigation easements and disclosures, and asked the council to consider FAA and ITD comments before deciding.",
    kind: "letter",
    relatedWatchItemIds: ["braeburn-creek"],
  },
  {
    id: "faa-helena-braeburn-2026-10-16",
    title: "FAA letter (Oct. 16, 2026)",
    date: "2026-10-16",
    from: "FAA Helena Airports District Office",
    href: "/docs/faa-helena-braeburn-2026-10-16.pdf",
    topic: "Braeburn Creek",
    summary:
      "The FAA Helena Airports District Office wrote the City of Nampa about Grant Assurance 21 and land-use compatibility for the proposed Braeburn Creek residential development near KMAN, and noted that a Part 77 “No Hazard” determination would address structure height only, not land-use compatibility.",
    kind: "letter",
    relatedWatchItemIds: ["braeburn-creek"],
  },
  {
    id: "itd-aeronautics-braeburn-2026-10-15",
    title: "ITD Aeronautics letter (Oct. 15, 2026)",
    date: "2026-10-15",
    from: "Idaho Transportation Department Division of Aeronautics",
    href: "/docs/itd-aeronautics-braeburn-2026-10-15.pdf",
    topic: "Braeburn Creek",
    summary:
      "The Idaho Transportation Department Division of Aeronautics wrote about land-use compatibility for the proposed Braeburn Creek development under the approach to Runway 29, and recommended lower-density housing, avigation easements, and fair-disclosure statements.",
    kind: "letter",
    relatedWatchItemIds: ["braeburn-creek"],
  },
  {
    id: "aopa-braeburn-2026-10-01",
    title: "AOPA letter (Oct. 1, 2026)",
    date: "2026-10-01",
    from: "Aircraft Owners and Pilots Association",
    href: "/docs/aopa-braeburn-2026-10-01.pdf",
    topic: "Braeburn Creek",
    summary:
      "AOPA asked the FAA Helena Airports District Office to review Braeburn Creek for compatibility with KMAN operations and to advise the City of Nampa of its Grant Assurance 21 responsibilities before final city action.",
    kind: "letter",
    relatedWatchItemIds: ["braeburn-creek"],
  },
  {
    id: "airport-commission-2026-07-13-minutes",
    title: "Airport Commission minutes (July 13, 2026)",
    date: "2026-07-13",
    from: "Nampa Airport Commission",
    href: "/docs/airport-commission-2026-07-13-minutes.pdf",
    topic: "Hangars 0450 and 0540",
    summary:
      "Minutes recording that the Commission tabled the item on hangars 0450 and 0540.",
    kind: "minutes",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "airport-commission-2026-05-11-minutes",
    title: "Airport Commission minutes (May 11, 2026)",
    date: "2026-05-11",
    from: "Nampa Airport Commission",
    href: "/docs/airport-commission-2026-05-11-minutes.pdf",
    topic: "Hangars 0450 and 0540",
    summary:
      "Minutes reporting that staff said Council wanted to move forward with a sale of hangars 0450 and 0540.",
    kind: "minutes",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "city-council-workshop-2026-04-16-minutes",
    title: "City Council workshop minutes (April 16, 2026)",
    date: "2026-04-16",
    from: "Nampa City Council",
    href: "/docs/city-council-workshop-2026-04-16-minutes.pdf",
    topic: "Hangars 0450 and 0540",
    summary:
      "Workshop minutes stating Council directed staff to get bids to demolish the two hangars in need of the most repair.",
    kind: "minutes",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "nampa-airport-hangar-assessment-2025-07",
    title: "Hangar Assessment (updated July 2025)",
    date: "2024-08-28",
    from: "City of Nampa",
    href: "https://www.cityofnampa.us/DocumentCenter/View/19852/Nampa_Airport_Hangar_Assessment_revised_jul_25",
    topic: "Hangars 0450 and 0540",
    summary:
      "The city’s hangar assessment (updated July 2025) includes repair estimates for city-owned hangars, including 0450 and 0540.",
    kind: "report",
    relatedWatchItemIds: ["hangar-sales"],
  },
  {
    id: "faa-pearland-dd-2026-06-22",
    title:
      "FAA Director’s Determination, Docket 16-22-06 (June 22, 2026)",
    date: "2026-06-22",
    from: "FAA Office of Airport Compliance",
    href: "https://www.regulations.gov/document/FAA-2022-1704-0011",
    topic: "Other airports / reference",
    summary:
      "The FAA found the sponsor of Pearland Regional Airport (Texas) in violation of federal grant assurances, including Grant Assurance 21, after airport land was sold for housing. This case is not about KMAN.",
    kind: "decision",
    relatedWatchItemIds: ["other-airports-reference"],
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

export type DocumentProjectGroup = {
  project: DocumentProject;
  documents: OfficialDocument[];
};

function groupedProjects(
  documents: OfficialDocument[],
  projects: readonly DocumentProject[],
): DocumentProjectGroup[] {
  const groups = projects
    .map((project) => ({
      project,
      documents: documentsForWatchItem(project.id, documents),
    }))
    .filter((group) => group.documents.length > 0);

  return groups.sort((a, b) => {
    const aDate = a.documents[0]?.date ?? "";
    const bDate = b.documents[0]?.date ?? "";
    return bDate.localeCompare(aDate) || a.project.title.localeCompare(b.project.title);
  });
}

/** KMAN project groups only, newest project activity first. */
export function documentsGroupedByProject(
  documents: OfficialDocument[] = officialDocuments,
  projects: readonly DocumentProject[] = documentProjects,
): DocumentProjectGroup[] {
  return groupedProjects(
    documents,
    projects.filter((project) => !project.reference),
  );
}

/** Official reference documents about airports other than KMAN. */
export function referenceDocumentGroups(
  documents: OfficialDocument[] = officialDocuments,
  projects: readonly DocumentProject[] = documentProjects,
): DocumentProjectGroup[] {
  return groupedProjects(
    documents,
    projects.filter((project) => project.reference),
  );
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
