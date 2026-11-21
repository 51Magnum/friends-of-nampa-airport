import type { Metadata } from "next";
import { PilotResourcesSection } from "@/lib/pilot-resources-section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pilot resources",
  description: `Useful links for pilots flying into or out of Nampa Municipal Airport (KMAN), compiled by ${siteConfig.name}.`,
};

export default function ResourcesPage() {
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-16"
    >
      <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky">
        <span
          className="h-1.5 w-8 shrink-0 rounded-full bg-amber-bright"
          aria-hidden="true"
        />
        Pilot resources
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-navy">
        Pilot resources for KMAN
      </h1>
      <PilotResourcesSection />
    </main>
  );
}
