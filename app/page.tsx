import type { ReactNode } from "react";
import {
  gettingStarted,
  isUnresolvedPlaceholder,
  kmanUpdateIntro,
  kmanUpdates,
  meetingAgenda,
  officialLinks,
  siteConfig,
  volunteerRoles,
} from "@/lib/site-config";
import Image from "next/image";
import { MailerLiteSignupForm } from "@/lib/mailerlite-signup-form";
import { PhotoFigure } from "@/lib/photo-figure";
import { heroPhoto, kmanPhoto, landingPhoto, runwayPhoto } from "@/lib/photos";

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
            className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
          >
            {source.label}
          </a>
        </span>
      ))}
      )
    </>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky">
      <span
        className="h-1.5 w-8 shrink-0 rounded-full bg-amber-bright"
        aria-hidden="true"
      />
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-sky-pale font-sans">
      <section id="home" className="relative isolate overflow-hidden bg-navy">
        <div className="relative h-64 sm:absolute sm:inset-0 sm:h-auto">
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%] sm:object-[35%_center]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy to-transparent sm:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden sm:block bg-navy/10"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden sm:block bg-gradient-to-t from-navy/40 via-transparent to-navy/10"
            aria-hidden="true"
          />
        </div>
        <div className="relative mx-auto flex w-full max-w-5xl flex-col px-6 pb-12 pt-6 sm:min-h-[34rem] sm:items-end sm:justify-center sm:py-12 lg:min-h-[38rem]">
          <div className="flex flex-col gap-5 sm:max-w-md sm:rounded-2xl sm:bg-navy/90 sm:p-8 sm:shadow-xl sm:backdrop-blur-md">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-amber-bright">
            {siteConfig.name}
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            A community group for Nampa Municipal Airport.
          </h1>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#signup"
              className="inline-flex items-center rounded-full bg-amber-bright px-5 py-2.5 text-sm font-medium text-navy shadow-sm hover:bg-amber-soft"
            >
              Sign up for updates
            </a>
            <a
              href="#meetings"
              className="inline-flex items-center rounded-full border border-white/70 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm hover:bg-white hover:text-navy"
            >
              Upcoming meeting
            </a>
          </div>
          <p className="max-w-xl text-xs leading-5 text-white/85">
            Photo: {heroPhoto.author},{" "}
            <a
              href={heroPhoto.licenseUrl}
              className="underline decoration-white/50 underline-offset-2 hover:decoration-amber-bright"
            >
              {heroPhoto.license}
            </a>
            ,{" "}
            <a
              href={heroPhoto.filePage}
              className="underline decoration-white/50 underline-offset-2 hover:decoration-amber-bright"
            >
              Wikimedia Commons
            </a>
            . {heroPhoto.caption}
          </p>
          </div>
        </div>
      </section>

      <div className="bg-sky-pale">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12 sm:py-16">
          <p className="max-w-3xl text-lg leading-8 text-muted">
            {siteConfig.mission}
          </p>
          <p className="max-w-3xl text-lg leading-8 text-muted">
            {siteConfig.welcome}
          </p>
        </div>
      </div>

      <main
        id="main"
        className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 sm:gap-20 sm:py-20"
      >
        <section id="announcements" className="flex flex-col gap-8 scroll-mt-28">
          <SectionHeading>Announcements</SectionHeading>

          <article className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-navy">
              {gettingStarted.title}
            </h3>
            {gettingStarted.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-muted">
                {paragraph}
              </p>
            ))}
          </article>

          <article className="flex flex-col gap-4 rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-navy">
              What’s happening at KMAN
            </h3>
            <p className="leading-7 text-muted">{kmanUpdateIntro}</p>
            <ul className="flex flex-col gap-4">
              {kmanUpdates.map((item) => (
                <li
                  key={item.text}
                  className="relative pl-5 leading-7 text-muted before:absolute before:left-0 before:top-2.5 before:h-2 before:w-2 before:rounded-full before:bg-amber-bright"
                >
                  {item.text}
                  <SourceLinks sources={item.sources} />
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section aria-label="Photographs" className="flex flex-col gap-8">
          <PhotoFigure
            photo={kmanPhoto}
            sizes="(max-width: 1024px) 100vw, 1024px"
            aspectClassName="aspect-[16/9] sm:aspect-[2/1]"
          />
          <div className="grid gap-8 sm:grid-cols-2">
            <PhotoFigure
              photo={landingPhoto}
              sizes="(max-width: 640px) 100vw, 512px"
            />
            <PhotoFigure
              photo={runwayPhoto}
              sizes="(max-width: 640px) 100vw, 512px"
            />
          </div>
        </section>

        <section id="meetings" className="flex flex-col gap-6 scroll-mt-28">
          <SectionHeading>Meetings</SectionHeading>
          <p className="leading-7 text-muted">
            We plan to meet quarterly, with a special meeting if something
            important comes up in between.
          </p>
          <div className="rounded-2xl border border-amber-bright/40 bg-amber-soft p-6 shadow-sm sm:p-8">
            <p className="leading-7 text-ink">
              <strong className="font-semibold text-navy">First meeting:</strong>{" "}
              {[
                siteConfig.firstMeeting.date,
                siteConfig.firstMeeting.venue,
                siteConfig.firstMeeting.time,
              ].some(isUnresolvedPlaceholder) ? (
                <>
                  Date, time, and place to be announced.{" "}
                  <a
                    href="#signup"
                    className="font-medium text-sky underline underline-offset-2 hover:text-navy"
                  >
                    Sign up for updates
                  </a>{" "}
                  and we&apos;ll email you as soon as it&apos;s set.
                </>
              ) : (
                <>
                  {siteConfig.firstMeeting.date}, {siteConfig.firstMeeting.venue},{" "}
                  {siteConfig.firstMeeting.time}
                </>
              )}
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
            <p className="mb-5 font-semibold text-navy">Typical agenda</p>
            <ol className="flex flex-col gap-3">
              {meetingAgenda.map((item, index) => (
                <li key={item} className="flex items-center gap-4 leading-7">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="leading-7 text-muted">
            Meetings are open to the public. Come with questions, ideas, or
            just to listen. The city’s Airport Commission is a separate,
            official advisory body that meets monthly; we are not that
            commission, and we schedule around its meetings when we can.
          </p>
        </section>

        <section id="airport-info" className="flex flex-col gap-6 scroll-mt-28">
          <SectionHeading>Airport info</SectionHeading>
          <p className="leading-7 text-muted">
            For official information, please use these sources:
          </p>
          <ul className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
            {officialLinks.map((link) => (
              <li
                key={link.href}
                className="border-b border-line last:border-b-0"
              >
                <a
                  href={link.href}
                  className="flex items-baseline justify-between gap-4 px-5 py-4 hover:bg-sky-pale"
                >
                  <span className="font-medium text-navy">{link.label}</span>
                  <span className="shrink-0 text-sm text-sky">
                    {link.note ?? "Official source →"}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="get-involved" className="flex flex-col gap-6 scroll-mt-28">
          <SectionHeading>Get involved</SectionHeading>
          <p className="leading-7 text-muted">
            This group only works if a few people share the load. If you can
            help — even a little — we would be glad to hear from you.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {volunteerRoles.map((role) => (
              <li
                key={role.title}
                className="rounded-2xl border border-line bg-paper p-5 shadow-sm before:mb-3 before:block before:h-1 before:w-8 before:rounded-full before:bg-amber-bright"
              >
                <p className="mb-2 font-semibold text-navy">{role.title}</p>
                <p className="leading-7 text-muted">{role.description}</p>
              </li>
            ))}
          </ul>
          <p className="leading-7 text-muted">
            To volunteer, use the sign-up form below or email us.
          </p>
        </section>

        <section id="signup" className="flex flex-col gap-6 scroll-mt-28">
          <SectionHeading>Email sign-up</SectionHeading>
          <p className="leading-7 text-muted">
            Get meeting notices and occasional airport updates. We will keep
            messages infrequent and useful.
          </p>
          <div className="mx-auto w-full max-w-xl rounded-2xl border-2 border-sky/20 bg-paper p-4 shadow-md ring-4 ring-amber-soft sm:p-6">
            <MailerLiteSignupForm />
          </div>
          <p className="text-sm leading-6 text-muted">
            After you sign up, we&apos;ll email you a link to confirm. If you
            don&apos;t see it in a few minutes, check your spam or junk folder
            and mark it &ldquo;not spam.&rdquo;
          </p>
        </section>

        <section id="contact" className="flex flex-col gap-6 scroll-mt-28">
          <SectionHeading>Contact</SectionHeading>
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
            <p className="leading-7 text-muted">
              Email:{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
            <p className="mt-4 leading-7 text-muted">
              Please use this group address only. It is not a city office and
              cannot handle hangar rentals, badging, or official airport business
              — for those, contact the{" "}
              <a
                href="https://www.cityofnampa.us/116/Airport-Division"
                className="font-medium text-sky underline decoration-sky-soft underline-offset-4 hover:text-navy"
              >
                Airport Division
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
