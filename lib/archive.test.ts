import { describe, expect, it } from "vitest";
import {
  archivedAnchorIds,
  archivedAnnouncementEntries,
  archivedEventEntries,
  overflowAnnouncementEntries,
} from "./archive";

function atDenver(isoLocal: string): Date {
  return new Date(`${isoLocal}-07:00`);
}

describe("archive entries", () => {
  it("lists past announcements newest first, including the ASAP workshop on Nov. 21", () => {
    const now = atDenver("2026-11-21T08:00:00");
    expect(archivedAnnouncementEntries(now).map((entry) => entry.id)).toEqual([
      "asap-workshop",
      "airport-annexation-rezone",
      "faa-grants",
    ]);
    expect(overflowAnnouncementEntries(now)).toEqual([]);
    expect(archivedAnchorIds(now)).toEqual(
      expect.arrayContaining([
        "asap-workshop",
        "warhawk-veterans-free-week-2026",
      ]),
    );
  });

  it("lists past events newest first and keeps the Crosscreek hearing until Nov. 25", () => {
    const nov21 = atDenver("2026-11-21T08:00:00");
    expect(archivedEventEntries(nov21).map((entry) => entry.id)).toEqual([
      "asap-workshop-2026-11-19",
      "warhawk-veterans-free-week-2026",
    ]);
    expect(archivedAnchorIds(nov21)).not.toContain("pz-crosscreek");
    expect(archivedAnchorIds(nov21)).not.toContain("pz-2026-11-24");

    const nov25 = atDenver("2026-11-25T00:00:00");
    expect(archivedAnnouncementEntries(nov25).map((entry) => entry.id)[0]).toBe(
      "pz-crosscreek",
    );
    expect(archivedEventEntries(nov25).map((entry) => entry.id)[0]).toBe(
      "pz-2026-11-24",
    );
    expect(archivedAnchorIds(nov25)).toEqual(
      expect.arrayContaining(["pz-crosscreek", "pz-2026-11-24", "asap-workshop"]),
    );
  });
});
