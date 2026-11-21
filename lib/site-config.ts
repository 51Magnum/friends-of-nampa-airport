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
  /**
   * Live MailerLite embedded form. The universal script plus the form slug
   * render the signup form; do not treat this as a placeholder.
   */
  mailerLiteSignup: {
    accountId: "2793534",
    formId: "204042873156404617",
    formSlug: "7X2Z1t",
    scriptSrc: "https://assets.mailerlite.com/js/universal.js",
  },
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

export const announcementSignupCallout = {
  text: "If you found this useful, please help spread the word and encourage others to sign up for Friends of Nampa Airport updates on our website.",
  linkLabel: "Sign up for updates",
  href: "#signup",
} as const;

export const pzCrosscreekNews = {
  id: "pz-crosscreek",
  title: "Planning & Zoning hearing on Crosscreek, Tuesday, Nov. 24",
  postedDate: "2026-11-21",
  eventDate: "2026-11-24",
  paragraphs: [
    "The Nampa Planning & Zoning Commission will hold a regular meeting on Tuesday, November 24, 2026, at 6:00 p.m. MST at City Hall, 411 Third Street South, Nampa, in the Council Chambers. The meeting will also be livestreamed on the City’s YouTube channel. Advertised public hearings begin at 6:00 p.m., or as soon after as each matter may be heard.",
    "The airport-relevant public hearing is item 3-3: annexation and zoning to RS-4 (Single-Family Residential), with a development agreement, for Crosscreek at 0 E Victory Road (ANN-00373-2026). The published concept is 169 single-family detached homes on about 52 acres, with a proposed 1,000-foot aviation-compatible buffer from the Nampa Municipal Airport runway. The applicant is Idaho Holdings LLC, representing Nokota Holdings LLC. The Commission’s action is a recommendation to City Council, not a final decision. A preliminary plat is not part of this hearing; the staff report says a future preliminary plat would be required.",
    "The parcel is next to the airport. The FAA Helena Airports District Office’s November 13, 2026 letter, included in the meeting packet, says the property is about 490 feet from the Runway 11/29 pavement edge at its closest point. The letter states that land-use compatibility is not determined solely by noise contours or the runway protection zone, and that an FAA Form 7460-1 “No Hazard” determination addresses structure height only, not noise or land-use compatibility. A noise study submitted with the application reported a 24-hour DNL of 59 dBA and frequent flyovers of 65–70+ dBA Lmax. Because Nampa is a federally obligated airport sponsor, Grant Assurance 21 asks the city to restrict land near the airport to uses compatible with normal airport operations.",
    "The City’s Airport Division told the Commission the project lies in the AHRA-2 transition/influence buffer of the draft Airport Specific Area Plan and is “recommended not compatible” for medium- or high-density residential under that still-unadopted plan, which prefers commercial or industrial uses. The Airport Commission wrote that it considers the proposal incompatible with the draft ASAP and recommends light-industrial uses within a one-mile radius of the airport. On November 20, 2026, the Idaho Transportation Department Division of Aeronautics wrote that the proposed project is in the airport traffic-pattern area, that low-density development is recommended over high-density development, and that if the project is approved, avigation easements and fair disclosure statements are required to comply with state land-use guidelines. The applicant has proposed development-agreement terms that include no homes within 1,000 feet of the runway, airport-compatible open space in that buffer, recorded noise disclosures, an avigation easement, Part 77 height and notice compliance, lighting and glare limits, and no wildlife-attractant ponds in the open-space area. The staff report presents findings and sample motions for either recommending approval with a development agreement and conditions, or recommending denial. It does not state a single staff recommendation. The staff report is in the City’s official agenda and packet, linked below.",
  ],
  stand: {
    label: "Where FoNA stands",
    text: "Friends of Nampa Airport supports growth that works with the airport, and we oppose land development that is not compatible with the Airport Specific Area Plan (ASAP).",
  },
  closingParagraphs: [
    "You may attend in person or watch the livestream. To speak, sign up with the microphone button on the Public Meetings portal, or sign up at the meeting using a phone or the kiosk at City Hall. Speakers are typically limited to three minutes; the chair may set a different limit. The deadline to have written comments included in the staff report (12:00 noon on Wednesday, November 18) has passed. Comments submitted after that are still forwarded to the Commission and posted for the public record. The portal accepts written comments until 12:00 noon MST on Tuesday, November 24. You may also email pzall@cityofnampa.us or deliver comments to the Planning & Zoning Department at 500 12th Ave South. Please include the case number, ANN-00373-2026. Physical evidence to accompany testimony should be emailed to that address by noon on the meeting day; printed copies may be provided during testimony. Virtual presentations are not allowed.",
  ],
  sources: [
    {
      label: "City agenda, packet, and staff report",
      href: "https://nampa.primegov.com/Portal/Meeting?meetingTemplateId=10512",
    },
    {
      label: "Upcoming public hearings",
      href: "https://www.cityofnampa.us/1433/Upcoming-Public-Hearings",
    },
    {
      label: "Public comment",
      href: "https://www.cityofnampa.us/1616/Public-Comment",
    },
    {
      label: "Hearing basics",
      href: "https://www.cityofnampa.us/1722/Public-Hearings---the-Basics",
    },
    {
      label: "Livestream",
      href: "https://www.youtube.com/@cityofnampapublicmeetings",
    },
    {
      label: "FAA letter (Nov. 13, 2026)",
      href: "/docs/faa-helena-crosscreek-2026-11-13.pdf",
    },
    {
      label: "ITD Aeronautics letter (Nov. 20, 2026)",
      href: "/docs/itd-aeronautics-crosscreek-2026-11-20.pdf",
    },
  ],
  signupCallout: announcementSignupCallout,
} as const;

export const asapWorkshopNews = {
  id: "asap-workshop",
  title: "Draft Airport Specific Area Plan workshop, Thursday, Nov. 19",
  postedDate: "2026-11-17",
  eventDate: "2026-11-19",
  paragraphs: [
    "The City of Nampa City Council and Planning & Zoning Commission will hold a joint special meeting (workshop) on Thursday, November 19, 2026, at 8:00 a.m. MST at City Hall, 411 Third Street South, Nampa. The meeting will also be livestreamed on the City’s YouTube channel. The only item on the agenda is a discussion of the draft Airport Specific Area Plan (ASAP). This is a workshop: the public may observe, but the agenda does not include a public-comment item.",
    "The ASAP is a draft plan. It proposes a long-range framework for land use, transportation, and airspace protection around Nampa Municipal Airport. The draft boundary covers the airport and surrounding land in the airport’s influence area, including property already in the city and property in the Nampa Impact Area under Canyon County jurisdiction. The packet’s maps and text describe that boundary. Figures given for its size are not consistent in the draft, so please rely on the City’s official maps.",
    "The draft organizes compatibility guidance into three Airport Hazard Reference Areas (AHRAs), based on FAA Part 77 surfaces, the runway protection zones for Runway 11/29, and Idaho Transportation Department guidance. AHRA-1 covers the runway protection zones and immediate approach and departure surfaces and carries the most restrictive standards (the draft treats new residential and most other uses in the runway protection zone as not compatible). AHRA-2 is a transition buffer around that core. AHRA-3 is an outer influence area; only a small portion of AHRA-3 is inside the ASAP boundary.",
    "The draft also recommends land-use compatibility rules, height limits and FAA Form 7460-1 review for structures that could affect airspace, and transportation steps such as reserving right-of-way for future roads and addressing incompatible roadway conditions in the western runway protection zone at Garrity Boulevard and Kings Road.",
    "The draft has not been adopted. The plan describes later public hearings before any adoption, comprehensive-plan map update, airport overlay district, or new airport zoning would take effect. For the official agenda, draft plan, and staff presentation, use the City’s meeting page linked below.",
  ],
  sources: [
    {
      label: "City agenda and packet",
      href: "https://nampa.primegov.com/Portal/Meeting?meetingTemplateId=10318",
    },
    {
      label: "Livestream",
      href: "https://www.youtube.com/@cityofnampapublicmeetings",
    },
  ],
  signupCallout: announcementSignupCallout,
} as const;


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
    text: "A stormwater infiltration project at the airport was completed in March 2026. On November 2, 2026, City Council approved a settlement with the U.S. EPA related to earlier stormwater allegations. The EPA is taking public comments on the proposed settlement through December 10, 2026.",
    sources: [
      {
        label: "BoiseDev, November 3, 2026",
        href: "https://boisedev.com/news/2026/11/03/nampa-fined-thousands-of-dollars-for-pollution-from-its-airport-a-solution-is-already-built/",
      },
      {
        label: "EPA public notice (comments due December 10, 2026)",
        href: "https://www.epa.gov/publicnotices/proposed-settlement-nampa-municipal-airport-clean-water-act-violations-idaho",
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
    text: "Amazon Prime Air drone deliveries, which began October 30, 2026, operate from a fulfillment center on Franklin Road, not from Nampa Municipal Airport. During the city's May 2026 permit review, the Airport Commission raised concerns about airspace coordination and safety, and Amazon said the flights cannot conflict with the airport's airspace. After the service started, Nampa received about 20 to 25 inquiries from residents about drone noise; the city is reviewing whether operations comply with the conditional-use permit, and Amazon has said it is evaluating possible flight-path changes.",
    sources: [
      {
        label: "KTVB, October 30, 2026",
        href: "https://www.ktvb.com/article/news/local/amazon-starts-drone-deliveries-nampa-part-boise-idaho/277-e865a55f-94cf-4d9f-892d-2c5ee128a52f",
      },
      {
        label: "BoiseDev, May 27, 2026",
        href: "https://boisedev.com/news/2026/05/27/nampa-greenlights-drone-shipments-final-approval-delivery-areas-still-pending/",
      },
      {
        label: "Idaho Statesman, May 29, 2026",
        href: "https://www.idahostatesman.com/news/local/community/canyon-county/article315914793.html",
      },
      {
        label: "BoiseDev, November 11, 2026",
        href: "https://boisedev.com/news/2026/11/11/amazon-recently-began-drone-delivery-from-nampa-complaints-are-prompting-city-inquiries/",
      },
      {
        label: "KTVB, November 11, 2026",
        href: "https://www.ktvb.com/article/news/local/idaho/amazon-adjust-drone-delivery-flight-paths-nearby-residents-complain-constant-buzz/277-18b1d67c-722f-4723-a237-6be86824680c",
      },
      {
        label: "City of Nampa, Drone Delivery",
        href: "https://www.cityofnampa.us/1793/Drone-Delivery",
      },
    ],
  },
];

export const meetingAgenda = [
  "Airport update",
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
