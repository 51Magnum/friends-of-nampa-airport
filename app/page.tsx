import {
  gettingStarted,
  kmanUpdateIntro,
  kmanUpdates,
  meetingAgenda,
  officialLinks,
  siteConfig,
  volunteerRoles,
} from "@/lib/site-config";
import { Placeholder } from "@/lib/placeholder";

function SourceLinks({
  sources,
}: {
  sources: { label: string; href: string }[];
}) {
  return (
    <>
      {" "}
      (
      {sources.map((source, index) => (
        <span key={source.href}>
          {index > 0 ? "; " : null}
          <a
            href={source.href}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-black dark:decoration-zinc-600 dark:hover:text-zinc-50"
          >
            {source.label}
          </a>
        </span>
      ))}
      )
    </>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 bg-zinc-50 font-sans dark:bg-black">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-16 px-6 py-16 sm:py-24">
        <section id="home" className="flex flex-col gap-6">
          <p className="font-mono text-sm uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            {siteConfig.name}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl">
            A community group for Nampa Municipal Airport.
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {siteConfig.mission}
          </p>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {siteConfig.welcome}
          </p>
        </section>

        <section id="announcements" className="flex flex-col gap-8 scroll-mt-24">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Announcements
          </h2>

          <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              {gettingStarted.title}
            </h3>
            {gettingStarted.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="leading-7 text-zinc-600 dark:text-zinc-400"
              >
                {paragraph}
              </p>
            ))}
          </article>

          <article className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">
              What’s happening at KMAN
            </h3>
            <p className="leading-7 text-zinc-600 dark:text-zinc-400">
              {kmanUpdateIntro}
            </p>
            <ul className="flex list-disc flex-col gap-3 pl-5 leading-7 text-zinc-600 dark:text-zinc-400">
              {kmanUpdates.map((item) => (
                <li key={item.text}>
                  {item.text}
                  <SourceLinks sources={item.sources} />
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section id="meetings" className="flex flex-col gap-6 scroll-mt-24">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Meetings
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            We plan to meet quarterly, with a special meeting if something
            important comes up in between.
          </p>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            <strong className="font-medium text-black dark:text-zinc-50">
              First meeting:
            </strong>{" "}
            <Placeholder value={siteConfig.firstMeeting.date} />,{" "}
            <Placeholder value={siteConfig.firstMeeting.venue} />,{" "}
            <Placeholder value={siteConfig.firstMeeting.time} />
          </p>
          <div>
            <p className="mb-2 font-medium text-black dark:text-zinc-50">
              Typical agenda
            </p>
            <ol className="list-decimal space-y-1 pl-5 leading-7 text-zinc-600 dark:text-zinc-400">
              {meetingAgenda.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Meetings are open to the public. Come with questions, ideas, or
            just to listen. The city’s Airport Commission is a separate,
            official advisory body that meets monthly; we are not that
            commission, and we schedule around its meetings when we can.
          </p>
        </section>

        <section id="airport-info" className="flex flex-col gap-6 scroll-mt-24">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Airport info
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            For official information, please use these sources:
          </p>
          <ul className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {officialLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-baseline justify-between gap-4 py-4 hover:text-black dark:hover:text-zinc-50"
                >
                  <span className="font-medium text-black dark:text-zinc-50">
                    {link.label}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {link.note ?? "Official source →"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="get-involved" className="flex flex-col gap-6 scroll-mt-24">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Get involved
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            This group only works if a few people share the load. If you can
            help — even a little — we would be glad to hear from you.
          </p>
          <ul className="flex flex-col gap-4">
            {volunteerRoles.map((role) => (
              <li key={role.title} className="leading-7 text-zinc-600 dark:text-zinc-400">
                <strong className="font-medium text-black dark:text-zinc-50">
                  {role.title}.
                </strong>{" "}
                {role.description}
              </li>
            ))}
          </ul>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            To volunteer, use the sign-up form below or email us.
          </p>
        </section>

        <section id="signup" className="flex flex-col gap-6 scroll-mt-24">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Email sign-up
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Get meeting notices and occasional airport updates. We will keep
            messages infrequent and useful.
          </p>
          <div className="rounded-md border border-dashed border-amber-500 bg-amber-50 px-4 py-6 text-sm dark:border-amber-400 dark:bg-amber-950">
            <p className="mb-2 font-medium text-amber-950 dark:text-amber-100">
              Signup form placeholder
            </p>
            <Placeholder value={siteConfig.mailerLiteSignupEmbed} />
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-6 scroll-mt-24">
          <h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Contact
          </h2>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Email:{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="underline decoration-zinc-300 underline-offset-4 hover:text-black dark:decoration-zinc-600 dark:hover:text-zinc-50"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
          <p className="leading-7 text-zinc-600 dark:text-zinc-400">
            Please use this group address only. It is not a city office and
            cannot handle hangar rentals, badging, or official airport business
            — for those, contact the{" "}
            <a
              href="https://www.cityofnampa.us/116/Airport-Division"
              className="underline decoration-zinc-300 underline-offset-4 hover:text-black dark:decoration-zinc-600 dark:hover:text-zinc-50"
            >
              Airport Division
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
