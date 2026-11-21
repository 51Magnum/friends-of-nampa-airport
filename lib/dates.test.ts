import { describe, expect, it } from "vitest";
import { addCalendarDays, denverDateString } from "./dates";

function atDenver(isoLocal: string): Date {
  return new Date(`${isoLocal}-07:00`);
}

describe("addCalendarDays", () => {
  it("adds and subtracts whole calendar days, including month boundaries", () => {
    expect(addCalendarDays("2026-11-24", 1)).toBe("2026-11-25");
    expect(addCalendarDays("2026-11-03", 60)).toBe("2027-01-02");
    expect(addCalendarDays("2026-01-31", 1)).toBe("2026-02-01");
    expect(addCalendarDays("2026-11-24", 0)).toBe("2026-11-24");
    expect(addCalendarDays("2026-11-24", -1)).toBe("2026-11-23");
  });
});

describe("denverDateString", () => {
  it("is re-exported for announcements and events to share", () => {
    expect(denverDateString(atDenver("2026-11-24T23:59:00"))).toBe("2026-11-24");
    expect(denverDateString(atDenver("2026-11-25T00:00:00"))).toBe("2026-11-25");
  });
});
