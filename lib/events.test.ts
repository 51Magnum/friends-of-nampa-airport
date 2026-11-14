import { describe, expect, it } from "vitest";
import {
  UPCOMING_EVENT_LIMIT,
  denverDateString,
  formatEventDate,
  officialCalendarLinks,
  regularScheduleNote,
  upcomingDatedEvents,
  upcomingEvents,
  isUpcomingEvent,
  visibleUpcomingEvents,
} from "./events";

function atDenver(isoLocal: string): Date {
  // Interpret a wall-clock America/Denver time. Tests use dates after
  // November 1, 2026, when Mountain Time is UTC-7 (MST).
  return new Date(`${isoLocal}-07:00`);
}

describe("denverDateString", () => {
  it("returns the calendar date in America/Denver, not UTC", () => {
    // 11:30 p.m. MST on November 16 is already November 17 in UTC.
    expect(denverDateString(atDenver("2026-11-16T23:30:00"))).toBe(
      "2026-11-16",
    );
    expect(denverDateString(new Date("2026-11-17T06:30:00Z"))).toBe(
      "2026-11-16",
    );
    expect(denverDateString(new Date("2026-11-17T07:00:00Z"))).toBe(
      "2026-11-17",
    );
  });
});

describe("isUpcomingEvent and visibleUpcomingEvents", () => {
  const veteransWeek = upcomingEvents.find(
    (event) => event.id === "warhawk-veterans-free-week-2026",
  )!;
  const pzNov24 = upcomingEvents.find((event) => event.id === "pz-2026-11-24")!;

  it("keeps a single-day event through the end of that Denver date", () => {
    expect(isUpcomingEvent(pzNov24, atDenver("2026-11-24T23:59:00"))).toBe(
      true,
    );
    expect(isUpcomingEvent(pzNov24, atDenver("2026-11-25T00:00:00"))).toBe(
      false,
    );
  });

  it("keeps a multi-day event through its inclusive end date", () => {
    expect(isUpcomingEvent(veteransWeek, atDenver("2026-11-14T09:00:00"))).toBe(
      true,
    );
    expect(isUpcomingEvent(veteransWeek, atDenver("2026-11-15T23:59:00"))).toBe(
      true,
    );
    expect(isUpcomingEvent(veteransWeek, atDenver("2026-11-16T00:00:00"))).toBe(
      false,
    );
  });

  it("hides past dated items, keeps later ones in date order, and caps the list", () => {
    expect(UPCOMING_EVENT_LIMIT).toBe(4);

    const visible = visibleUpcomingEvents(
      upcomingEvents,
      atDenver("2026-11-16T08:00:00"),
    );
    const ids = visible.map((event) => event.id);

    expect(ids).toEqual([
      "warhawk-m1a1-workshop-2026-11-21",
      "pz-2026-11-24",
      "warhawk-winterfest-2026-11-28",
      "warhawk-kilroy-2026-12-01",
    ]);
    expect(ids).not.toContain("warhawk-veterans-free-week-2026");
    expect(ids).not.toContain("airport-commission-2026-12-14");

    const allUpcoming = upcomingDatedEvents(
      upcomingEvents,
      atDenver("2026-11-16T08:00:00"),
    );
    expect(allUpcoming.length).toBeGreaterThan(UPCOMING_EVENT_LIMIT);
    expect(visible).toEqual(allUpcoming.slice(0, UPCOMING_EVENT_LIMIT));
  });

  it("rolls the next dated item in after one passes", () => {
    const afterWinterfest = visibleUpcomingEvents(
      upcomingEvents,
      atDenver("2026-11-29T00:00:00"),
    ).map((event) => event.id);

    expect(afterWinterfest).toEqual([
      "warhawk-kilroy-2026-12-01",
      "airport-commission-2026-12-14",
      "airport-commission-2027-01-11",
      "airport-commission-2027-02-08",
    ]);
  });

  it("returns an empty list once every dated event has passed", () => {
    expect(
      visibleUpcomingEvents(upcomingEvents, atDenver("2027-02-11T00:00:00")),
    ).toEqual([]);
  });
});

describe("formatEventDate", () => {
  it("formats a single date compactly with a short weekday", () => {
    const event = upcomingEvents.find((item) => item.id === "pz-2026-11-24")!;
    expect(formatEventDate(event)).toBe("Tue, Nov. 24, 2026");
  });

  it("formats a same-month range without inventing a weekday span", () => {
    const event = upcomingEvents.find(
      (item) => item.id === "warhawk-veterans-free-week-2026",
    )!;
    expect(formatEventDate(event)).toBe("Nov. 10–15, 2026");
  });
});

describe("upcoming event data", () => {
  it("uses https source links and unique ids", () => {
    const ids = upcomingEvents.map((event) => event.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const event of upcomingEvents) {
      expect(event.href.startsWith("https://")).toBe(true);
      expect(event.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      if (event.endDate) {
        expect(event.endDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(event.endDate >= event.date).toBe(true);
      }
    }

    for (const item of officialCalendarLinks) {
      expect(item.href.startsWith("https://")).toBe(true);
    }
  });

  it("lists only airport-related dated items", () => {
    const ids = upcomingEvents.map((event) => event.id);

    expect(ids).toEqual([
      "warhawk-veterans-free-week-2026",
      "warhawk-m1a1-workshop-2026-11-21",
      "pz-2026-11-24",
      "warhawk-winterfest-2026-11-28",
      "warhawk-kilroy-2026-12-01",
      "airport-commission-2026-12-14",
      "airport-commission-2027-01-11",
      "airport-commission-2027-02-08",
      "warhawk-homeschool-2027-02-10",
    ]);

    expect(
      upcomingEvents.some((event) => event.kind === "City Council"),
    ).toBe(false);
    expect(
      upcomingEvents.find((event) => event.id === "pz-2026-11-24")?.title,
    ).toBe("P&Z: Crosscreek annexation (Victory Rd)");
  });

  it("describes Commission and EAA 103 by schedule, without invented EAA dates", () => {
    expect(regularScheduleNote).toMatch(/Airport Commission/);
    expect(regularScheduleNote).toMatch(/2nd Monday/);
    expect(regularScheduleNote).toMatch(/EAA Chapter 103/);
    expect(regularScheduleNote).toMatch(/2nd Thursday/);
    expect(
      upcomingEvents.some((event) => event.title.toLowerCase().includes("eaa")),
    ).toBe(false);
    expect(officialCalendarLinks.map((link) => link.label)).toEqual([
      "Council agendas & hearings",
      "City calendar",
      "Airport Commission",
      "Warhawk events",
      "EAA 103",
    ]);
  });
});
