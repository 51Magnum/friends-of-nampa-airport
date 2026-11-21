import type { Metadata } from "next";
import Link from "next/link";
import {
  archivedAnnouncementEntries,
  archivedEventEntries,
  overflowAnnouncementEntries,
} from "@/lib/archive";
import { AnnouncementCard } from "@/lib/announcement-card";
import { formatEventDate } from "@/lib/events";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Archive",
  description: `Past announcements and events from ${siteConfig.name}.`,
};

export default function ArchivePage() {
  const overflow = overflowAnnouncementEntries();
  const announcements = archivedAnnouncementEntries();
  const events = archivedEventEntries();

  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-16"
    >
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky">
        <span
          className="h-1.5 w-8 shrink-0 rounded-full bg-amber-bright"
          aria-hidden="true"
        />
        Archive
      </p>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold tracking-tight text-navy">
          Past announcements and events
        </h1>
        <p className="max-w-3xl leading-7 text-muted">
          Items move here automatically after their meeting date or, for general
          updates, 60 days after they were posted. Current announcements are on
          the{" "}
          <Link
            href="/#announcements"
            className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
          >
            homepage
          </Link>
          .
        </p>
      </div>

      {overflow.length > 0 ? (
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">
            More current announcements
          </h2>
          {overflow.map((entry) =>
            entry.announcement ? (
              <AnnouncementCard
                key={entry.id}
                announcement={entry.announcement}
                signupHref="/#signup"
              />
            ) : null,
          )}
        </section>
      ) : null}

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-navy">
          Past announcements
        </h2>
        {announcements.length === 0 ? (
          <p className="leading-7 text-muted">
            No announcements have been archived yet.
          </p>
        ) : (
          announcements.map((entry) =>
            entry.announcement ? (
              <AnnouncementCard
                key={entry.id}
                announcement={entry.announcement}
                signupHref="/#signup"
              />
            ) : null,
          )
        )}
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight text-navy">
          Past events
        </h2>
        {events.length === 0 ? (
          <p className="leading-7 text-muted">No dated events have passed yet.</p>
        ) : (
          <ul className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
            {events.map((entry) =>
              entry.event ? (
                <li
                  key={entry.id}
                  id={entry.event.id}
                  className="scroll-mt-28 border-b border-line last:border-b-0"
                >
                  <a
                    href={entry.event.href}
                    className="flex flex-col gap-1 px-5 py-4 hover:bg-sky-pale sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span>
                      <span className="font-semibold text-navy">
                        {entry.event.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-muted">
                        {formatEventDate(entry.event)}
                        <span aria-hidden="true"> · </span>
                        {entry.event.time}
                        <span aria-hidden="true"> · </span>
                        {entry.event.location}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm text-sky">
                      Official source →
                    </span>
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        )}
      </section>
    </main>
  );
}
