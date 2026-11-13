export type OfficialLink = {
  label: string;
  href: string;
  note?: string;
};

export type CitationLink = {
  label: string;
  href: string;
};

export type AnnouncementItem = {
  text: string;
  sources: CitationLink[];
};

/**
 * Unresolved public details stay as bracketed TODO placeholders until they
 * are confirmed. Do not invent replacements in the UI.
 *
 * Change SITE_DOMAIN if the hostname changes; siteOrigin, metadata, and
 * the suggested contact placeholder are derived from it.
 */
export const SITE_DOMAIN = "friendsofnampaairport.org";
export const SITE_ORIGIN = `https://www.${SITE_DOMAIN}`;

export const siteConfig = {
  name: "Friends of Nampa Airport",
  shortDescription:
    "An independent volunteer group for Nampa Municipal Airport (KMAN).",
  domain: SITE_DOMAIN,
  siteOrigin: SITE_ORIGIN,
  /** TODO: confirm the exact group mailbox before publishing. */
  contactEmail: `info@${SITE_DOMAIN}`,
  firstMeeting: {
    /** TODO: set when a date is booked. */
    date: "[FIRST MEETING DATE]",
    /** TODO: set when a venue is booked. */
    venue: "[VENUE]",
    /** TODO: set when a time is booked. */
    time: "[TIME]",
  },
  /** TODO: paste the MailerLite embed only after the group list is created. */
  mailerLiteSignupEmbed: "[MAILERLITE SIGNUP FORM EMBED]",
  mission:
    "Friends of Nampa Airport is an independent volunteer group of pilots, hangar tenants, airport users, and community members that keeps people informed about Nampa Municipal Airport (KMAN), holds regular public meetings, and helps identify and support what the airport needs — in cooperation with airport management, the Airport Commission, and AOPA’s Airport Support Network, but not as a city or AOPA body.",
  welcome:
    "Nampa Municipal is our community airport. You do not need to be a pilot to take part. If you fly here, keep an airplane here, work on the field, or simply care about this part of Nampa, you are welcome.",
  footerDisclaimer:
    "Friends of Nampa Airport is an independent volunteer group. It is not affiliated with the City of Nampa or with AOPA.",
} as const;

const PLACEHOLDER_PATTERN = /^\[[A-Za-z0-9 @._-]+\]$/;

export function isUnresolvedPlaceholder(value: string): boolean {
  return PLACEHOLDER_PATTERN.test(value);
}

export const officialLinks: OfficialLink[] = [
  {
    label: "City of Nampa Airport Division",
    href: "https://www.cityofnampa.us/116/Airport-Division",
  },
  {
    label: "Nampa Airport Commission",
    href: "https://www.cityofnampa.us/97/Airport-Commission",
    note: "agendas and minutes",
  },
  {
    label: "City hangar wait list",
    href: "https://www.cityofnampa.us/383/City-Wait-List",
  },
  {
    label: "Federal Aviation Administration — airports",
    href: "https://www.faa.gov/airports",
  },
  {
    label: "AOPA Airport Support Network volunteer search",
    href: "https://www.aopa.org/advocacy/airports-and-airspace/airport-advocacy/asn/asnairportsearch",
  },
];

export const gettingStarted = {
  title: "We’re getting started",
  paragraphs: [
    "Friends of Nampa Airport is just getting organized. Our aim is simple: share clear information about the airport, meet a few times a year, and find practical ways to help.",
    "This group is independent. It is not a City of Nampa board or committee, and it is not an AOPA chapter. We hope to work in a friendly way with airport management, the Airport Commission, and others already active at KMAN.",
    "Watch this page and join the email list for the first meeting date, and for updates as we get going.",
  ],
};

export const kmanUpdateIntro =
  "A short look at recent, publicly documented items (as of November 2026):";

export const kmanUpdates: AnnouncementItem[] = [
  {
    text: "The city welcomed a new airport superintendent on October 5, 2026.",
    sources: [
      {
        label: "Idaho Press, October 8, 2026",
        href: "https://www.idahopress.com/news/local/nampa-municipal-airport-welcomes-jenna-whalen-as-new-leader/article_c2b04866-5e18-4624-9870-d6a358121dd7.html",
      },
    ],
  },
  {
    text: "On September 8, 2026, City Council approved annexing about seven acres and rezoning nearby city-owned land for future hangar and airport-facility expansion.",
    sources: [
      {
        label: "Boise Builds, rezone",
        href: "https://boisebuilds.com/nampa/nampa-airport-il-zone-zma-00211-2026",
      },
      {
        label: "annexation",
        href: "https://boisebuilds.com/nampa/nampa-airport-il-zone-ann-00362-2026",
      },
    ],
  },
  {
    text: "The FAA has awarded recent grants to construct a taxilane and to install weather-reporting equipment at the airport.",
    sources: [
      {
        label: "FY2025 AIP, August 20, 2025",
        href: "https://www.faa.gov/airports/aip/2025/AIP_FY25_4.pdf",
      },
      {
        label: "FY2025 Airport Infrastructure Grant",
        href: "https://www.faa.gov/iija/aig/AIG_FY25_A4.pdf",
      },
      {
        label: "FY2026 AIP, March 17, 2026",
        href: "https://www.faa.gov/airports/aip/2026_aip_grants/AIP_FY26_1.pdf",
      },
      {
        label: "FY2026 Airport Infrastructure Grant",
        href: "https://www.faa.gov/iija/iija-airport-infrastructure-grant-funding-amounts/AIG-FY26-A4.pdf",
      },
    ],
  },
  {
    text: "A stormwater infiltration project at the airport was completed in March 2026. On November 2, 2026, City Council approved a settlement with the U.S. EPA related to earlier stormwater allegations.",
    sources: [
      {
        label: "BoiseDev, November 3, 2026",
        href: "https://boisedev.com/news/2026/11/03/nampa-fined-thousands-of-dollars-for-pollution-from-its-airport-a-solution-is-already-built/",
      },
    ],
  },
  {
    text: "The waitlist for city T-hangars is currently closed.",
    sources: [
      {
        label: "City of Nampa hangar wait list",
        href: "https://www.cityofnampa.us/383/City-Wait-List",
      },
    ],
  },
  {
    text: "Amazon Prime Air drone deliveries, which began October 30, 2026, operate from a fulfillment center on Franklin Road — not from Nampa Municipal Airport.",
    sources: [
      {
        label: "KTVB, October 30, 2026",
        href: "https://www.ktvb.com/article/news/local/amazon-starts-drone-deliveries-nampa-part-boise-idaho/277-e865a55f-94cf-4d9f-892d-2c5ee128a52f",
      },
      {
        label: "City of Nampa information sheet",
        href: "https://www.cityofnampa.us/DocumentCenter/View/20951/Amazon-Prime-Air-Delivery-Information-page",
      },
    ],
  },
];

export const meetingAgenda = [
  "Airport manager update",
  "City and FAA news",
  "Projects and needs",
  "Volunteer asks",
  "Open floor",
] as const;

export const volunteerRoles = [
  {
    title: "Co-lead",
    description:
      "Help plan meetings and keep the group running so it does not depend on any one person.",
  },
  {
    title: "Newsletter editor",
    description:
      "Gather short updates and send a periodic email to people who sign up.",
  },
  {
    title: "Commission watcher",
    description:
      "Follow Airport Commission agendas and share what matters for airport users and neighbors.",
  },
  {
    title: "Website helper",
    description:
      "Keep this page current with meeting dates and announcements.",
  },
] as const;
