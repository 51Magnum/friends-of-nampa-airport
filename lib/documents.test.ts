import { describe, expect, it } from "vitest";
import {
  documentProjects,
  documentsForWatchItem,
  documentsGroupedByProject,
  documentsNewestFirst,
  formatDocumentDate,
  oeaaaSearch,
  officialDocuments,
  referenceDocumentGroups,
} from "./documents";

describe("officialDocuments", () => {
  it("uses unique ids and hosted or https links", () => {
    const ids = officialDocuments.map((document) => document.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const document of officialDocuments) {
      expect(document.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(
        document.href.startsWith("/docs/") ||
          document.href.startsWith("https://"),
      ).toBe(true);
      expect(document.relatedWatchItemIds.length).toBeGreaterThan(0);
    }
  });

  it("does not name private individuals", () => {
    const text = JSON.stringify(officialDocuments).toLowerCase();
    expect(text).not.toMatch(/mueller/);
    expect(text).not.toMatch(/shane/);
  });

  it("hosts the November 13 FAA Crosscreek letter and ties it to that watch item", () => {
    const letter = officialDocuments.find(
      (document) => document.id === "faa-helena-crosscreek-2026-11-13",
    );
    expect(letter).toBeDefined();
    expect(letter?.title).toBe("FAA letter (Nov. 13, 2026)");
    expect(letter?.date).toBe("2026-11-13");
    expect(letter?.from).toBe("FAA Helena Airports District Office");
    expect(letter?.href).toBe(
      "/docs/faa-helena-crosscreek-2026-11-13.pdf",
    );
    expect(letter?.topic).toBe("Crosscreek");
    expect(letter?.relatedWatchItemIds).toEqual(["crosscreek"]);
    expect(documentsForWatchItem("crosscreek").map((doc) => doc.id)).toEqual([
      "itd-aeronautics-crosscreek-2026-11-20",
      "faa-helena-crosscreek-2026-11-13",
    ]);
  });

  it("hosts the Braeburn compatibility letters newest first", () => {
    expect(documentsForWatchItem("braeburn-creek").map((doc) => doc.id)).toEqual([
      "iaa-braeburn-2026-11-02",
      "faa-helena-braeburn-2026-10-16",
      "itd-aeronautics-braeburn-2026-10-15",
      "aopa-braeburn-2026-10-01",
    ]);
    expect(documentsNewestFirst().map((doc) => doc.id)).toEqual([
      "itd-aeronautics-crosscreek-2026-11-20",
      "faa-helena-crosscreek-2026-11-13",
      "airport-commission-2026-11-09-agenda",
      "iaa-braeburn-2026-11-02",
      "faa-helena-braeburn-2026-10-16",
      "itd-aeronautics-braeburn-2026-10-15",
      "aopa-braeburn-2026-10-01",
      "airport-commission-2026-07-13-minutes",
      "faa-pearland-dd-2026-06-22",
      "airport-commission-2026-05-11-minutes",
      "city-council-workshop-2026-04-16-minutes",
      "nampa-airport-hangar-assessment-2025-07",
    ]);
    const aopa = officialDocuments.find(
      (document) => document.id === "aopa-braeburn-2026-10-01",
    );
    expect(aopa?.href).toBe("/docs/aopa-braeburn-2026-10-01.pdf");
    expect(aopa?.date).toBe("2026-10-01");
    expect(aopa?.from).toBe("Aircraft Owners and Pilots Association");
  });

  it("hosts Airport Commission and Council records for hangars 0450 and 0540", () => {
    expect(documentsForWatchItem("hangar-sales").map((doc) => doc.id)).toEqual([
      "airport-commission-2026-11-09-agenda",
      "airport-commission-2026-07-13-minutes",
      "airport-commission-2026-05-11-minutes",
      "city-council-workshop-2026-04-16-minutes",
      "nampa-airport-hangar-assessment-2025-07",
    ]);
    const agenda = officialDocuments.find(
      (document) => document.id === "airport-commission-2026-11-09-agenda",
    );
    expect(agenda?.title).toBe("Airport Commission agenda (Nov. 9, 2026)");
    expect(agenda?.href).toBe("/docs/airport-commission-2026-11-09-agenda.pdf");
    expect(agenda?.topic).toBe("Hangars 0450 and 0540");
    const assessment = officialDocuments.find(
      (document) => document.id === "nampa-airport-hangar-assessment-2025-07",
    );
    expect(assessment?.title).toBe("Hangar Assessment (updated July 2025)");
    expect(assessment?.date).toBe("2024-08-28");
    expect(assessment?.href).toBe(
      "https://www.cityofnampa.us/DocumentCenter/View/19852/Nampa_Airport_Hangar_Assessment_revised_jul_25",
    );
  });

  it("sorts documents newest first", () => {
    const sorted = documentsNewestFirst([
      {
        id: "older",
        title: "Older",
        date: "2026-10-01",
        from: "Example",
        href: "/docs/older.pdf",
        topic: "Example",
        summary: "An older example document.",
        kind: "letter",
        relatedWatchItemIds: ["example"],
      },
      {
        id: "newer",
        title: "Newer",
        date: "2026-11-13",
        from: "Example",
        href: "/docs/newer.pdf",
        topic: "Example",
        summary: "A newer example document.",
        kind: "letter",
        relatedWatchItemIds: ["example"],
      },
    ]);
    expect(sorted.map((document) => document.id)).toEqual(["newer", "older"]);
    expect(formatDocumentDate("2026-11-13")).toBe("Nov. 13, 2026");
  });
});

describe("document summaries and grouping", () => {
  it("gives every document a summary and a kind, without naming private individuals", () => {
    const text = JSON.stringify(officialDocuments).toLowerCase();
    expect(text).not.toMatch(/mueller/);
    expect(text).not.toMatch(/shane/);

    for (const document of officialDocuments) {
      expect(document.summary.length).toBeGreaterThan(20);
      expect(["letter", "agenda", "minutes", "report", "decision"]).toContain(
        document.kind,
      );
    }
  });

  it("groups documents by project, newest activity first, starting with Crosscreek", () => {
    const groups = documentsGroupedByProject();
    expect(groups.map((group) => group.project.id)).toEqual([
      "crosscreek",
      "hangar-sales",
      "braeburn-creek",
    ]);
    expect(groups[0]?.documents.map((document) => document.id)).toEqual([
      "itd-aeronautics-crosscreek-2026-11-20",
      "faa-helena-crosscreek-2026-11-13",
    ]);
    expect(documentProjects.map((project) => project.id)).toEqual([
      "crosscreek",
      "braeburn-creek",
      "hangar-sales",
      "other-airports-reference",
    ]);
  });

  it("lists the Pearland Director’s Determination in a separate official-link reference group", () => {
    const decision = officialDocuments.find(
      (document) => document.id === "faa-pearland-dd-2026-06-22",
    );
    expect(decision).toBeDefined();
    expect(decision?.title).toBe(
      "FAA Director’s Determination, Docket 16-22-06 (June 22, 2026)",
    );
    expect(decision?.date).toBe("2026-06-22");
    expect(decision?.from).toBe("FAA Office of Airport Compliance");
    expect(decision?.href).toBe(
      "https://www.regulations.gov/document/FAA-2022-1704-0011",
    );
    expect(decision?.kind).toBe("decision");
    expect(decision?.summary).toBe(
      "The FAA found the sponsor of Pearland Regional Airport (Texas) in violation of federal grant assurances, including Grant Assurance 21, after airport land was sold for housing. This case is not about KMAN.",
    );
    expect(decision?.relatedWatchItemIds).toEqual([
      "other-airports-reference",
    ]);
    expect(
      documentsGroupedByProject().map((group) => group.project.id),
    ).not.toContain("other-airports-reference");
    const reference = referenceDocumentGroups();
    expect(reference.map((group) => group.project.id)).toEqual([
      "other-airports-reference",
    ]);
    expect(reference[0]?.project.title).toBe("Other airports / reference");
    expect(reference[0]?.project.reference).toBe(true);
    expect(reference[0]?.documents.map((document) => document.id)).toEqual([
      "faa-pearland-dd-2026-06-22",
    ]);
  });

  it("links the FAA OE/AAA search so people can look up 7460-1 cases", () => {
    expect(oeaaaSearch.href).toBe("https://oeaaa.faa.gov");
    expect(oeaaaSearch.label).toMatch(/OE\/AAA/);
  });

});
