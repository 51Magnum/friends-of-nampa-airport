import type { SiteAnnouncement } from "./announcements";
import { SourceLinks } from "./source-links";

export function AnnouncementCard({
  announcement,
  signupHref,
}: {
  announcement: SiteAnnouncement;
  signupHref?: string;
}) {
  const calloutHref =
    signupHref ?? announcement.signupCallout?.href ?? "/#signup";

  return (
    <article
      id={announcement.id}
      className="flex scroll-mt-28 flex-col gap-4 rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8"
    >
      <h3 className="text-2xl font-semibold tracking-tight text-navy">
        {announcement.title}
      </h3>
      {announcement.paragraphs
        ? announcement.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-muted">
              {paragraph}
            </p>
          ))
        : null}
      {announcement.stand ? (
        <aside className="rounded-xl border border-line bg-sky-pale px-4 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky">
            {announcement.stand.label}
          </p>
          <p className="mt-2 leading-7 text-navy">{announcement.stand.text}</p>
        </aside>
      ) : null}
      {announcement.closingParagraphs
        ? announcement.closingParagraphs.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-muted">
              {paragraph}
            </p>
          ))
        : null}
      {announcement.text ? (
        <p className="leading-7 text-muted">
          {announcement.text}
          <SourceLinks sources={[...announcement.sources]} />
        </p>
      ) : announcement.paragraphs ? (
        <p className="leading-7 text-muted">
          Official sources:
          <SourceLinks sources={[...announcement.sources]} />
        </p>
      ) : null}
      {announcement.signupCallout ? (
        <p className="rounded-xl border border-amber bg-amber-soft px-4 py-4 text-base font-bold leading-7 text-navy">
          {announcement.signupCallout.text}{" "}
          <a
            href={calloutHref}
            className="font-bold text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
          >
            {announcement.signupCallout.linkLabel}
          </a>
        </p>
      ) : null}
    </article>
  );
}
