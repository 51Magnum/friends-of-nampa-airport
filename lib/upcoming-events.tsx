"use client";

import { useEffect, useState } from "react";
import {
  formatEventDate,
  officialCalendarLinks,
  regularScheduleNote,
  upcomingEvents,
  visibleUpcomingEvents,
  type UpcomingEvent,
} from "@/lib/events";

function EventSourceLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <a
      href={href}
      className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
    >
      {children}
    </a>
  );
}

function EventList({ events }: { events: UpcomingEvent[] }) {
  if (events.length === 0) {
    return (
      <p className="leading-7 text-muted">
        No dated items are listed right now. See the schedules and calendars
        below for the next meetings.
      </p>
    );
  }

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {events.map((event) => (
        <li
          id={event.id}
          key={event.id}
          className="scroll-mt-28 rounded-xl border border-line bg-paper px-4 py-3"
        >
          <p className="text-sm font-medium text-navy">
            {formatEventDate(event)}
          </p>
          <p className="font-semibold text-navy">
            <EventSourceLink href={event.href}>{event.title}</EventSourceLink>
          </p>
          <p className="text-sm leading-6 text-muted">
            {event.time}
            <span aria-hidden="true"> · </span>
            {event.location}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function UpcomingEventsSection() {
  const [events, setEvents] = useState(() =>
    visibleUpcomingEvents(upcomingEvents),
  );

  useEffect(() => {
    setEvents(visibleUpcomingEvents(upcomingEvents));
  }, []);

  return (
    <>
      <p className="leading-7 text-muted">
        Meetings and events at Nampa Municipal Airport (KMAN). Dates can
        change, so please confirm on the official calendar before you go.
      </p>
      <EventList events={events} />
      <p className="text-sm leading-6 text-muted">{regularScheduleNote}</p>
      <p className="text-sm leading-6 text-muted">
        {officialCalendarLinks.map((link, index) => (
          <span key={link.href}>
            {index > 0 ? "; " : null}
            <EventSourceLink href={link.href}>{link.label}</EventSourceLink>
          </span>
        ))}
        .
      </p>
    </>
  );
}
