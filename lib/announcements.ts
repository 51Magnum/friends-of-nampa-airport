import {
  asapWorkshopNews,
  kmanUpdates,
  pzCrosscreekNews,
  type CitationLink,
} from "./site-config";
import { addCalendarDays, denverDateString } from "./dates";

/** Undated general announcements move to the archive this many days after postedDate. */
export const ANNOUNCEMENT_ARCHIVE_DAYS = 30;

/** Maximum current announcements shown on the homepage. */
export const HOMEPAGE_ANNOUNCEMENT_LIMIT = 5;

export type SignupCallout = {
  text: string;
  linkLabel: string;
  href: string;
};

export type SiteAnnouncement = {
  id: string;
  title: string;
  /** Date the item was posted, YYYY-MM-DD. */
  postedDate: string;
  /** For meeting items: the event date; stays on the homepage through this day. */
  eventDate?: string;
  /** Inclusive end date for a multi-day meeting, YYYY-MM-DD. */
  eventEndDate?: string;
  paragraphs?: readonly string[];
  /** Optional position statement, shown after the main paragraphs. */
  stand?: {
    label: string;
    text: string;
  };
  /** Closing copy after a stand statement, such as how to comment. */
  closingParagraphs?: readonly string[];
  text?: string;
  sources: readonly CitationLink[];
  signupCallout?: SignupCallout;
  /**
   * Inclusive last America/Denver date the item should stay on the homepage.
   * Overrides the default event-date or 30-day rules.
   */
  expires?: string;
  /** If true, the item stays in the current list (and still counts toward the cap). */
  pinned?: boolean;
};

/**
 * Dated announcements and short KMAN updates. Add new items here (or to
 * site-config for long-form articles) with a postedDate. Use eventDate for
 * meetings, expires or pinned to override the default archive rules.
 */
export const siteAnnouncements: SiteAnnouncement[] = [
  {
    id: pzCrosscreekNews.id,
    title: pzCrosscreekNews.title,
    postedDate: "2026-11-21",
    eventDate: "2026-11-24",
    paragraphs: pzCrosscreekNews.paragraphs,
    stand: pzCrosscreekNews.stand,
    closingParagraphs: pzCrosscreekNews.closingParagraphs,
    sources: pzCrosscreekNews.sources,
    signupCallout: pzCrosscreekNews.signupCallout,
  },
  {
    id: "aaron-bear-thanks",
    title: "Thank you, Aaron Bear",
    postedDate: "2026-11-21",
    text: "Friends of Nampa Airport thanks Aaron Bear for his service on the Nampa Airport Commission. The commission advises the City Council on the operation and maintenance of Nampa Municipal Airport, and we are grateful for his work on behalf of the airport and the community.",
    sources: [
      {
        label: "Nampa Airport Commission",
        href: "https://www.cityofnampa.us/97/Airport-Commission",
      },
    ],
  },
  {
    id: asapWorkshopNews.id,
    title: asapWorkshopNews.title,
    postedDate: "2026-11-17",
    eventDate: "2026-11-19",
    paragraphs: asapWorkshopNews.paragraphs,
    sources: asapWorkshopNews.sources,
    signupCallout: asapWorkshopNews.signupCallout,
  },
  {
    id: "new-airport-superintendent",
    title: "New airport superintendent",
    postedDate: "2026-10-08",
    text: kmanUpdates[0].text,
    sources: kmanUpdates[0].sources,
  },
  {
    id: "airport-annexation-rezone",
    title: "Annexation and rezone for future hangars",
    postedDate: "2026-09-08",
    text: kmanUpdates[1].text,
    sources: kmanUpdates[1].sources,
  },
  {
    id: "faa-grants",
    title: "Recent FAA grants",
    postedDate: "2026-03-17",
    text: kmanUpdates[2].text,
    sources: kmanUpdates[2].sources,
  },
  {
    id: "epa-settlement-comment",
    title: "EPA settlement public comment",
    postedDate: "2026-11-03",
    text: kmanUpdates[3].text,
    sources: kmanUpdates[3].sources,
  },
  {
    id: "city-hangar-waitlist",
    title: "City T-hangar wait list",
    postedDate: "2026-11-13",
    text: kmanUpdates[4].text,
    sources: kmanUpdates[4].sources,
    pinned: true,
  },
  {
    id: "amazon-drone-deliveries",
    title: "Amazon drone deliveries and noise inquiries",
    postedDate: "2026-11-11",
    text: kmanUpdates[5].text,
    sources: kmanUpdates[5].sources,
  },
];

/** First calendar date the item belongs in the archive (America/Denver). */
export function announcementArchiveOn(item: SiteAnnouncement): string {
  if (item.expires) {
    return addCalendarDays(item.expires, 1);
  }
  if (item.eventDate) {
    const lastDay = item.eventEndDate ?? item.eventDate;
    return addCalendarDays(lastDay, 1);
  }
  return addCalendarDays(item.postedDate, ANNOUNCEMENT_ARCHIVE_DAYS);
}

export function isCurrentAnnouncement(
  item: SiteAnnouncement,
  now: Date = new Date(),
): boolean {
  if (item.pinned) {
    return true;
  }
  return denverDateString(now) < announcementArchiveOn(item);
}

function announcementSortDate(item: SiteAnnouncement): string {
  return item.eventDate ?? item.postedDate;
}

export function compareAnnouncementsNewestFirst(
  a: SiteAnnouncement,
  b: SiteAnnouncement,
): number {
  return (
    announcementSortDate(b).localeCompare(announcementSortDate(a)) ||
    b.postedDate.localeCompare(a.postedDate) ||
    a.id.localeCompare(b.id)
  );
}

function sortCurrentAnnouncements(
  items: SiteAnnouncement[],
): SiteAnnouncement[] {
  return items.slice().sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) {
      return a.pinned ? -1 : 1;
    }
    return compareAnnouncementsNewestFirst(a, b);
  });
}

export function currentAnnouncements(
  items: readonly SiteAnnouncement[] = siteAnnouncements,
  now: Date = new Date(),
  limit: number = HOMEPAGE_ANNOUNCEMENT_LIMIT,
): SiteAnnouncement[] {
  return sortCurrentAnnouncements(
    items.filter((item) => isCurrentAnnouncement(item, now)),
  ).slice(0, limit);
}

/** Current items that do not fit in the homepage cap. They are not archived. */
export function overflowCurrentAnnouncements(
  items: readonly SiteAnnouncement[] = siteAnnouncements,
  now: Date = new Date(),
  limit: number = HOMEPAGE_ANNOUNCEMENT_LIMIT,
): SiteAnnouncement[] {
  return sortCurrentAnnouncements(
    items.filter((item) => isCurrentAnnouncement(item, now)),
  ).slice(limit);
}

export function archivedAnnouncements(
  items: readonly SiteAnnouncement[] = siteAnnouncements,
  now: Date = new Date(),
): SiteAnnouncement[] {
  return items
    .filter((item) => !isCurrentAnnouncement(item, now))
    .sort(compareAnnouncementsNewestFirst);
}

export function archivedAnnouncementIds(
  items: readonly SiteAnnouncement[] = siteAnnouncements,
  now: Date = new Date(),
): string[] {
  return archivedAnnouncements(items, now).map((item) => item.id);
}
