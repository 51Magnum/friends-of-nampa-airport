import { describe, expect, it } from "vitest";
import {
  documentsForWatchItem,
  documentsNewestFirst,
  formatDocumentDate,
  officialDocuments,
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
      "faa-helena-crosscreek-2026-11-13",
    ]);
  });

  it("hosts the Braeburn compatibility letters newest first", () => {
    expect(documentsForWatchItem("braeburn-creek").map((doc) => doc.id)).toEqual([
      "faa-helena-braeburn-2026-10-16",
      "itd-aeronautics-braeburn-2026-10-15",
      "aopa-braeburn-2026-10-01",
    ]);
    expect(documentsNewestFirst().map((doc) => doc.id)).toEqual([
      "faa-helena-crosscreek-2026-11-13",
      "faa-helena-braeburn-2026-10-16",
      "itd-aeronautics-braeburn-2026-10-15",
      "aopa-braeburn-2026-10-01",
    ]);
    const aopa = officialDocuments.find(
      (document) => document.id === "aopa-braeburn-2026-10-01",
    );
    expect(aopa?.href).toBe("/docs/aopa-braeburn-2026-10-01.pdf");
    expect(aopa?.date).toBe("2026-10-01");
    expect(aopa?.from).toBe("Aircraft Owners and Pilots Association");
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
        relatedWatchItemIds: ["example"],
      },
      {
        id: "newer",
        title: "Newer",
        date: "2026-11-13",
        from: "Example",
        href: "/docs/newer.pdf",
        topic: "Example",
        relatedWatchItemIds: ["example"],
      },
    ]);
    expect(sorted.map((document) => document.id)).toEqual(["newer", "older"]);
    expect(formatDocumentDate("2026-11-13")).toBe("Nov. 13, 2026");
  });
});
