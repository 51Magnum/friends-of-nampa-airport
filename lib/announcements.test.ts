import { describe, expect, it } from "vitest";
import {
  ANNOUNCEMENT_ARCHIVE_DAYS,
  HOMEPAGE_ANNOUNCEMENT_LIMIT,
  announcementArchiveOn,
  archivedAnnouncementIds,
  archivedAnnouncements,
  currentAnnouncements,
  isCurrentAnnouncement,
  overflowCurrentAnnouncements,
  siteAnnouncements,
  type SiteAnnouncement,
} from "./announcements";

function atDenver(isoLocal: string): Date {
  return new Date(`${isoLocal}-07:00`);
}

function idsOn(isoLocal: string): string[] {
  return currentAnnouncements(siteAnnouncements, atDenver(isoLocal)).map(
    (item) => item.id,
  );
}

const sample: SiteAnnouncement[] = [
  {
    id: "meeting",
    title: "Meeting",
    postedDate: "2026-11-10",
    eventDate: "2026-11-24",
    text: "A meeting.",
    sources: [{ label: "Source", href: "https://example.com/meeting" }],
  },
  {
    id: "general",
    title: "General",
    postedDate: "2026-11-03",
    text: "A general update.",
    sources: [{ label: "Source", href: "https://example.com/general" }],
  },
  {
    id: "expired-override",
    title: "Expires early",
    postedDate: "2026-11-20",
    expires: "2026-11-21",
    text: "Forced expiry.",
    sources: [{ label: "Source", href: "https://example.com/expires" }],
  },
  {
    id: "pinned",
    title: "Pinned",
    postedDate: "2026-01-01",
    pinned: true,
    text: "Stays current.",
    sources: [{ label: "Source", href: "https://example.com/pinned" }],
  },
];

describe("announcement archive rules", () => {
  it("uses a 60-day default and a homepage cap of 5", () => {
    expect(ANNOUNCEMENT_ARCHIVE_DAYS).toBe(60);
    expect(HOMEPAGE_ANNOUNCEMENT_LIMIT).toBe(5);
  });

  it("keeps a meeting item through its event date and archives it the next day", () => {
    const item = sample[0];
    expect(announcementArchiveOn(item)).toBe("2026-11-25");
    expect(isCurrentAnnouncement(item, atDenver("2026-11-24T23:59:00"))).toBe(
      true,
    );
    expect(isCurrentAnnouncement(item, atDenver("2026-11-25T00:00:00"))).toBe(
      false,
    );
  });

  it("archives a general announcement 60 days after it was posted", () => {
    const item = sample[1];
    expect(announcementArchiveOn(item)).toBe("2027-01-02");
    expect(isCurrentAnnouncement(item, atDenver("2027-01-01T23:59:00"))).toBe(
      true,
    );
    expect(isCurrentAnnouncement(item, atDenver("2027-01-02T00:00:00"))).toBe(
      false,
    );
  });

  it("honors expires as the last homepage day and pinned as always current", () => {
    const expires = sample[2];
    const pinned = sample[3];
    expect(announcementArchiveOn(expires)).toBe("2026-11-22");
    expect(isCurrentAnnouncement(expires, atDenver("2026-11-21T12:00:00"))).toBe(
      true,
    );
    expect(isCurrentAnnouncement(expires, atDenver("2026-11-22T00:00:00"))).toBe(
      false,
    );
    expect(isCurrentAnnouncement(pinned, atDenver("2027-06-01T12:00:00"))).toBe(
      true,
    );
  });

  it("sorts current items pinned first, then newest first, and caps the homepage list", () => {
    const extras: SiteAnnouncement[] = [
      ...sample,
      {
        id: "newer-general",
        title: "Newer",
        postedDate: "2026-11-20",
        text: "Newer general.",
        sources: [{ label: "Source", href: "https://example.com/newer" }],
      },
      {
        id: "older-general",
        title: "Older",
        postedDate: "2026-10-01",
        text: "Older general.",
        sources: [{ label: "Source", href: "https://example.com/older" }],
      },
    ];
    const now = atDenver("2026-11-21T08:00:00");
    expect(
      currentAnnouncements(extras, now, 5).map((item) => item.id),
    ).toEqual([
      "pinned",
      "meeting",
      "expired-override",
      "newer-general",
      "general",
    ]);
    expect(
      overflowCurrentAnnouncements(extras, now, 5).map((item) => item.id),
    ).toEqual(["older-general"]);
    expect(archivedAnnouncements(extras, now).map((item) => item.id)).toEqual(
      [],
    );
  });
});

describe("site announcements on November 21, 2026", () => {
  const now = atDenver("2026-11-21T08:00:00");

  it("keeps the Crosscreek hearing on the homepage until the day after Nov. 24", () => {
    const pz = siteAnnouncements.find((item) => item.id === "pz-crosscreek");
    expect(pz?.eventDate).toBe("2026-11-24");
    expect(pz?.postedDate).toBe("2026-11-21");
    expect(idsOn("2026-11-21T08:00:00")).toContain("pz-crosscreek");
    expect(idsOn("2026-11-24T23:59:00")).toContain("pz-crosscreek");
    expect(idsOn("2026-11-25T00:00:00")).not.toContain("pz-crosscreek");
    expect(
      archivedAnnouncementIds(siteAnnouncements, atDenver("2026-11-25T00:00:00")),
    ).toContain("pz-crosscreek");
  });

  it("has already archived the Nov. 19 ASAP workshop and keeps #asap-workshop in the archive list", () => {
    const asap = siteAnnouncements.find((item) => item.id === "asap-workshop");
    expect(asap?.eventDate).toBe("2026-11-19");
    expect(idsOn("2026-11-19T23:59:00")).toContain("asap-workshop");
    expect(idsOn("2026-11-21T08:00:00")).not.toContain("asap-workshop");
    expect(archivedAnnouncementIds(siteAnnouncements, now)).toContain(
      "asap-workshop",
    );
  });

  it("shows at most five current items, pinned first, then newest first", () => {
    expect(currentAnnouncements(siteAnnouncements, now).map((item) => item.id)).toEqual(
      [
        "city-hangar-waitlist",
        "pz-crosscreek",
        "amazon-drone-deliveries",
        "epa-settlement-comment",
        "new-airport-superintendent",
      ],
    );
    expect(overflowCurrentAnnouncements(siteAnnouncements, now)).toEqual([]);
    expect(archivedAnnouncements(siteAnnouncements, now).map((item) => item.id)).toEqual(
      ["asap-workshop", "airport-annexation-rezone", "faa-grants"],
    );
  });

  it("does not name private individuals in announcement copy", () => {
    const text = JSON.stringify(siteAnnouncements).toLowerCase();
    expect(text).not.toMatch(/shane/);
    expect(text).not.toMatch(/mueller/);
    expect(text).not.toMatch(/watkins/);
  });
});
