export type PilotResource = {
  label: string;
  href: string;
  description: string;
};

export type PilotResourceGroup = {
  id: string;
  title: string;
  links: PilotResource[];
};

/**
 * Useful official and free links for pilots flying into or out of KMAN.
 * Keep descriptions to one line. Verify a URL still loads before adding it.
 * Do not list CTAF, AWOS, or other frequencies here; those change and belong
 * on the official airport data and Chart Supplement pages linked below.
 */
export const pilotResourceGroups: PilotResourceGroup[] = [
  {
    id: "weather",
    title: "Weather and cameras",
    links: [
      {
        label: "KMAN webcams and weather",
        href: "https://kman.aviationwx.org/",
        description:
          "Live airport cameras and local weather for Nampa Municipal.",
      },
      {
        label: "Aviation Weather Center",
        href: "https://aviationweather.gov/",
        description: "Official METARs, TAFs, radar, and other aviation weather.",
      },
      {
        label: "1800wxbrief",
        href: "https://www.1800wxbrief.com/",
        description:
          "Leidos official flight-planning and weather briefing service, including NOTAMs.",
      },
    ],
  },
  {
    id: "airport-data",
    title: "Airport data and charts",
    links: [
      {
        label: "AirNav: KMAN",
        href: "https://www.airnav.com/airport/KMAN",
        description:
          "Airport diagram info, frequencies, runways, and remarks compiled from official sources.",
      },
      {
        label: "FAA Chart Supplement search",
        href: "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/search/",
        description:
          "Official Chart Supplement pages for KMAN, including communications and procedures.",
      },
      {
        label: "FAA airport data (KMAN)",
        href: "https://nfdc.faa.gov/nfdcApps/services/ajv5/airportDisplay.jsp?airportId=MAN",
        description:
          "Official FAA airport record for Nampa Municipal, including frequencies and runway data.",
      },
      {
        label: "SkyVector: Nampa Municipal",
        href: "https://skyvector.com/airport/MAN/Nampa-Municipal-Airport",
        description: "Sectional-chart view and airport information for KMAN.",
      },
    ],
  },
  {
    id: "notices",
    title: "Notices and restrictions",
    links: [
      {
        label: "FAA NOTAM search",
        href: "https://notams.aim.faa.gov/notamSearch/",
        description: "Official search for Notices to Airmen, including KMAN.",
      },
      {
        label: "FAA temporary flight restrictions",
        href: "https://tfr.faa.gov/",
        description: "Current FAA Temporary Flight Restrictions.",
      },
    ],
  },
  {
    id: "local",
    title: "Local and official contacts",
    links: [
      {
        label: "City of Nampa Airport Division",
        href: "https://www.cityofnampa.us/116/Airport-Division",
        description: "Official city page for Nampa Municipal Airport.",
      },
      {
        label: "ITD Division of Aeronautics",
        href: "https://itd.idaho.gov/aero/",
        description:
          "Idaho Transportation Department’s state aeronautics office.",
      },
      {
        label: "AOPA: KMAN",
        href: "https://www.aopa.org/destinations/airports/KMAN/details",
        description: "AOPA airport details and destination information for KMAN.",
      },
    ],
  },
];

export function allPilotResources(
  groups: readonly PilotResourceGroup[] = pilotResourceGroups,
): PilotResource[] {
  return groups.flatMap((group) => group.links);
}
