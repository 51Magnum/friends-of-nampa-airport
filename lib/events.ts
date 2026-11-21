import { denverDateString } from "./dates";

export { TIME_ZONE, denverDateString } from "./dates";

export type UpcomingEvent = {
  id: string;
  title: string;
  kind: string;
  /** Calendar date in America/Denver, YYYY-MM-DD. */
  date: string;
  /** Inclusive end date for multi-day events, YYYY-MM-DD. */
  endDate?: string;
  time: string;
  location: string;
  href: string;
  sourceLabel: string;
  /** Optional context for maintainers; the compact list does not display it. */
  note?: string;
};

export type CalendarLink = {
  label: string;
  href: string;
};

/** How many dated items the What’s next section shows at once. */
export const UPCOMING_EVENT_LIMIT = 4;

/**
 * Dated, airport-related items from official sources (researched
 * November 14, 2026). Include City Council or Planning & Zoning only
 * when a published agenda or hearing actually touches the airport.
 * Add new items here; the page shows the next four that have not yet
 * passed. Do not invent dates.
 */
export const upcomingEvents: UpcomingEvent[] = [
  {
    id: "warhawk-veterans-free-week-2026",
    title: "Veterans Free Week",
    kind: "Warhawk Air Museum",
    date: "2026-11-10",
    endDate: "2026-11-15",
    time: "During museum hours",
    location: "Warhawk Air Museum",
    href: "https://warhawkairmuseum.org/event/veterans-free-week/",
    sourceLabel: "Warhawk Air Museum",
  },
  {
    id: "asap-workshop-2026-11-19",
    title: "Workshop: draft Airport Specific Area Plan",
    kind: "City Council / Planning & Zoning",
    date: "2026-11-19",
    time: "8:00 a.m. MST",
    location: "City Hall, 411 Third Street South",
    href: "https://nampa.primegov.com/Portal/Meeting?meetingTemplateId=10318",
    sourceLabel: "City agenda",
    note: "Joint special meeting (workshop) of City Council and the Planning & Zoning Commission. The only agenda item is a discussion of the draft Airport Specific Area Plan. The public may observe; the agenda does not include a public-comment item. Livestream: https://www.youtube.com/@cityofnampapublicmeetings",
  },
  {
    id: "warhawk-m1a1-workshop-2026-11-21",
    title: "M1A1 Abrams model building workshop",
    kind: "Warhawk Air Museum",
    date: "2026-11-21",
    time: "10:00 a.m.–4:00 p.m. MST",
    location: "Warhawk Air Museum",
    href: "https://warhawkairmuseum.org/event/m1-abrams-model-building-workshop/",
    sourceLabel: "Warhawk Air Museum",
  },
  {
    id: "pz-2026-11-24",
    title: "P&Z: Crosscreek annexation (Victory Rd)",
    kind: "Planning & Zoning",
    date: "2026-11-24",
    time: "6:00 p.m. MST",
    location: "Council Chambers, City Hall, 411 Third Street South",
    href: "https://nampa.primegov.com/Portal/Meeting?meetingTemplateId=10512",
    sourceLabel: "City agenda",
    note: "Public hearing on ANN-00373-2026, Crosscreek annexation and RS-4 zoning with a development agreement at 0 E Victory Road. The Commission will make a recommendation to City Council. Livestream: https://www.youtube.com/@cityofnampapublicmeetings",
  },
  {
    id: "warhawk-winterfest-2026-11-28",
    title: "Warhawk Winterfest",
    kind: "Warhawk Air Museum",
    date: "2026-11-28",
    time: "10:00 a.m.–5:00 p.m. MST",
    location: "Warhawk Air Museum",
    href: "https://warhawkairmuseum.org/event/warhawk-winterfest-weekend/",
    sourceLabel: "Warhawk Air Museum",
  },
  {
    id: "warhawk-kilroy-2026-12-01",
    title: "Kilroy Coffee Klatch",
    kind: "Warhawk Air Museum",
    date: "2026-12-01",
    time: "10:00 a.m.–noon MST",
    location: "Warhawk Air Museum",
    href: "https://warhawkairmuseum.org/event/kilroy-coffee-klatch-december/",
    sourceLabel: "Warhawk Air Museum",
  },
  {
    id: "airport-commission-2026-12-14",
    title: "Airport Commission meeting",
    kind: "Airport Commission",
    date: "2026-12-14",
    time: "5:30–7:00 p.m. MST",
    location: "MAF, 107 Pilatus Lane",
    href: "https://www.cityofnampa.us/97/Airport-Commission",
    sourceLabel: "Airport Commission",
  },
  {
    id: "airport-commission-2027-01-11",
    title: "Airport Commission meeting",
    kind: "Airport Commission",
    date: "2027-01-11",
    time: "5:30–7:00 p.m. MST",
    location: "MAF, 107 Pilatus Lane",
    href: "https://www.cityofnampa.us/97/Airport-Commission",
    sourceLabel: "Airport Commission",
  },
  {
    id: "airport-commission-2027-02-08",
    title: "Airport Commission meeting",
    kind: "Airport Commission",
    date: "2027-02-08",
    time: "5:30–7:00 p.m. MST",
    location: "MAF, 107 Pilatus Lane",
    href: "https://www.cityofnampa.us/97/Airport-Commission",
    sourceLabel: "Airport Commission",
  },
  {
    id: "warhawk-homeschool-2027-02-10",
    title: "Homeschool Family Days",
    kind: "Warhawk Air Museum",
    date: "2027-02-10",
    time: "10:00 a.m.–1:00 p.m. MST",
    location: "Warhawk Air Museum",
    href: "https://warhawkairmuseum.org/event/homeschool-family-days-february/",
    sourceLabel: "Warhawk Air Museum",
  },
];

export const regularScheduleNote =
  "Airport Commission meets the 2nd Monday at 5:30 p.m. at MAF; EAA Chapter 103 meets the 2nd Thursday at 7:00 p.m. (no meetings in July and August).";

export const officialCalendarLinks: CalendarLink[] = [
  {
    label: "Council agendas & hearings",
    href: "https://www.cityofnampa.us/1612/Public-Meetings",
  },
  {
    label: "City calendar",
    href: "https://www.cityofnampa.us/calendar.aspx",
  },
  {
    label: "Airport Commission",
    href: "https://www.cityofnampa.us/97/Airport-Commission",
  },
  {
    label: "Warhawk events",
    href: "https://warhawkairmuseum.org/events/",
  },
  {
    label: "EAA 103",
    href: "https://chapters.eaa.org/eaa103/event-calendar",
  },
];

export function isUpcomingEvent(
  event: UpcomingEvent,
  now: Date = new Date(),
): boolean {
  const lastDay = event.endDate ?? event.date;
  return denverDateString(now) <= lastDay;
}

function byDateThenId(a: UpcomingEvent, b: UpcomingEvent): number {
  return a.date.localeCompare(b.date) || a.id.localeCompare(b.id);
}

/** Upcoming dated items in date order, not yet limited for display. */
export function upcomingDatedEvents(
  events: UpcomingEvent[] = upcomingEvents,
  now: Date = new Date(),
): UpcomingEvent[] {
  return events.filter((event) => isUpcomingEvent(event, now)).sort(byDateThenId);
}

/** The next few upcoming dated items shown in What’s next. */
export function visibleUpcomingEvents(
  events: UpcomingEvent[] = upcomingEvents,
  now: Date = new Date(),
  limit: number = UPCOMING_EVENT_LIMIT,
): UpcomingEvent[] {
  return upcomingDatedEvents(events, now).slice(0, limit);
}

function eventSortDate(event: UpcomingEvent): string {
  return event.endDate ?? event.date;
}

/** Past dated items, newest event date first. */
export function archivedEvents(
  events: UpcomingEvent[] = upcomingEvents,
  now: Date = new Date(),
): UpcomingEvent[] {
  return events
    .filter((event) => !isUpcomingEvent(event, now))
    .sort(
      (a, b) =>
        eventSortDate(b).localeCompare(eventSortDate(a)) ||
        a.id.localeCompare(b.id),
    );
}

function utcNoon(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
}

const COMPACT_MONTHS = [
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

export function formatEventDate(event: UpcomingEvent): string {
  const start = utcNoon(event.date);
  const startMonth = COMPACT_MONTHS[start.getUTCMonth()];
  const startYear = start.getUTCFullYear();

  if (!event.endDate || event.endDate === event.date) {
    const weekday = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      timeZone: "UTC",
    }).format(start);
    return `${weekday}, ${startMonth} ${start.getUTCDate()}, ${startYear}`;
  }

  const end = utcNoon(event.endDate);
  const endMonth = COMPACT_MONTHS[end.getUTCMonth()];
  const endYear = end.getUTCFullYear();
  if (start.getUTCMonth() === end.getUTCMonth() && startYear === endYear) {
    return `${startMonth} ${start.getUTCDate()}–${end.getUTCDate()}, ${startYear}`;
  }

  if (startYear === endYear) {
    return `${startMonth} ${start.getUTCDate()}–${endMonth} ${end.getUTCDate()}, ${startYear}`;
  }

  return `${startMonth} ${start.getUTCDate()}, ${startYear}–${endMonth} ${end.getUTCDate()}, ${endYear}`;
}
