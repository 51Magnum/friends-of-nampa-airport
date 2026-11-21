import {
  archivedAnnouncements,
  overflowCurrentAnnouncements,
  type SiteAnnouncement,
} from "./announcements";
import { archivedEvents, type UpcomingEvent } from "./events";

export type ArchiveEntry = {
  id: string;
  date: string;
  kind: "announcement" | "event";
  announcement?: SiteAnnouncement;
  event?: UpcomingEvent;
};

function announcementDate(item: SiteAnnouncement): string {
  return item.eventDate ?? item.postedDate;
}

function eventDate(event: UpcomingEvent): string {
  return event.endDate ?? event.date;
}

function byDateNewestFirst(a: ArchiveEntry, b: ArchiveEntry): number {
  return b.date.localeCompare(a.date) || a.id.localeCompare(b.id);
}

export function archivedAnnouncementEntries(
  now: Date = new Date(),
): ArchiveEntry[] {
  return archivedAnnouncements(undefined, now)
    .map((announcement) => ({
      id: announcement.id,
      date: announcementDate(announcement),
      kind: "announcement" as const,
      announcement,
    }))
    .sort(byDateNewestFirst);
}

export function archivedEventEntries(now: Date = new Date()): ArchiveEntry[] {
  return archivedEvents(undefined, now)
    .map((event) => ({
      id: event.id,
      date: eventDate(event),
      kind: "event" as const,
      event,
    }))
    .sort(byDateNewestFirst);
}

export function overflowAnnouncementEntries(
  now: Date = new Date(),
): ArchiveEntry[] {
  return overflowCurrentAnnouncements(undefined, now).map((announcement) => ({
    id: announcement.id,
    date: announcementDate(announcement),
    kind: "announcement" as const,
    announcement,
  }));
}

export function archivedAnchorIds(now: Date = new Date()): string[] {
  return [
    ...archivedAnnouncementEntries(now).map((entry) => entry.id),
    ...archivedEventEntries(now).map((entry) => entry.id),
  ];
}
