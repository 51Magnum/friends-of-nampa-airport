export type WatchingSource = {
  label: string;
  href: string;
};

export type WatchingItem = {
  id: string;
  title: string;
  status: string;
  whyItMatters: string;
  /** Calendar date of the next known hearing or deadline, YYYY-MM-DD. */
  nextDate?: string;
  nextDateLabel?: string;
  howToWeighIn?: string;
  note?: string;
  /** Optional official-letter summary. Do not link a hosted PDF until approved. */
  letter?: {
    title: string;
    summary: string;
    bullets?: string[];
  };
  sources: WatchingSource[];
  /** When false, the card is shown as a clearly marked placeholder. */
  verified: boolean;
};

/**
 * Items Friends of Nampa Airport is following, researched November 14, 2026.
 * Keep the tone factual. Do not invent dates, and do not name private
 * individuals. Add new items here as official sources become available.
 */
export const watchingItems: WatchingItem[] = [
  {
    id: "braeburn-creek",
    title: "Braeburn Creek",
    status:
      "City Council public hearing continued to January 4, 2027, at the applicant’s request",
    whyItMatters:
      "A proposal to annex land at Amity Avenue and Happy Valley Road for about 487 homes on about 138 acres near the airport (ANN-00371-2026, SPP-00184-2026). The Planning & Zoning Commission recommended approval on September 29, 2026. Nearby residential development raises compatible land-use questions under FAA Grant Assurance 21, which asks airport sponsors to help prevent incompatible uses around the airport.",
    nextDate: "2027-01-04",
    nextDateLabel:
      "Next: Monday, Jan. 4, 2027, 6:00 p.m. MST, Council Chambers, City Hall",
    note: "The FAA, Idaho Transportation Department Division of Aeronautics, AOPA, and the Idaho Aviation Association have submitted letters on airport compatibility.",
    sources: [
      {
        label: "City public hearings",
        href: "https://www.cityofnampa.us/1433/Upcoming-Public-Hearings",
      },
      {
        label: "FAA grant assurances",
        href: "https://www.faa.gov/airports/aip/grant_assurances",
      },
    ],
    verified: true,
  },
  {
    id: "crosscreek",
    title: "Crosscreek annexation",
    status: "Planning & Zoning public hearing Tuesday, Nov. 24; recommendation to City Council",
    whyItMatters:
      "Annexation and zoning of about 52 acres to RS-4 at Victory Road (ANN-00373-2026), filed September 3, 2026. The city’s hearing notice describes up to 169 single-family homes with a proposed 1,000-foot aviation-compatible buffer from the Nampa airport runway. The city’s Future Land Use Map designates the site as Industrial; the staff report describes a provision to stretch Medium Density Residential from the south. This is the same November 24 Planning & Zoning item listed under What’s next.",
    nextDate: "2026-11-24",
    nextDateLabel:
      "Next: Tuesday, Nov. 24, 2026, 6:00 p.m. MST, Council Chambers, 411 3rd Street South",
    howToWeighIn:
      "The Wednesday, Nov. 18, noon MST deadline to have written comments included in the staff report has passed. Comments sent after that are still forwarded to the Commission and posted for the public record. Portal comments are accepted until Tuesday, Nov. 24, noon MST. You can also email PZall@cityofnampa.us, or sign up to speak at the hearing (typically 3 minutes).",
    letter: {
      title: "FAA letter (Nov. 13, 2026)",
      summary:
        "The FAA Helena Airports District Office wrote that it does not issue advance clearances for zoning, and that zoning authority rests with the city. Because Nampa is a federally obligated airport sponsor, Grant Assurance 21 requires the city to restrict land near the airport to compatible uses.",
      bullets: [
        "The parcel is about 490 feet from the Runway 11/29 pavement edge.",
        "A noise study measured 59 dBA DNL, with frequent flyovers of 65–70+ dBA Lmax.",
        "The FAA encourages the city to consider non-residential or lower-density uses for parcels bordering KMAN, along with buffers, lighting controls, and buyer disclosures, and asks to be kept informed of hearings.",
      ],
    },
    note: "The FAA Helena Airports District Office (Nov. 13, 2026) and the Idaho Transportation Department Division of Aeronautics (Nov. 20, 2026) have submitted letters on airport compatibility.",
    sources: [
      {
        label: "Announcement",
        href: "#pz-crosscreek",
      },
      {
        label: "What’s next listing",
        href: "#pz-2026-11-24",
      },
      {
        label: "City agenda and packet",
        href: "https://nampa.primegov.com/Portal/Meeting?meetingTemplateId=10512",
      },
      {
        label: "City public hearings",
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
        label: "Meeting portal",
        href: "https://nampa.primegov.com/public/portal",
      },
    ],
    verified: true,
  },
  {
    id: "hangar-sales",
    title: "Hangars 0450 and 0540",
    status: "Airport Commission action item; no published decision yet",
    whyItMatters:
      "These two city-owned hangars at Nampa Municipal Airport have the highest repair estimates in the city’s hangar assessment (about $500,000 for 0450 and $605,000 for 0540). Council and the Airport Commission have been discussing what to do with them, including possible sale or demolition, but no published Commission decision or public notice of sale was found after the November 9, 2026 meeting.",
    note: "April 16, 2026 City Council workshop minutes say Council directed staff to get bids to demolish the two hangars in need of the most repair. May 11 Airport Commission minutes report that staff said Council wanted to move forward with a sale. The Commission tabled the item on July 13, 2026, and it returned as an action item on November 9. Official records use hangar numbers 0450 and 0540. Minutes and a recording of the November meeting have not been posted.",
    sources: [
      {
        label: "Nov. 9 Commission agenda",
        href: "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=10476",
      },
      {
        label: "May 11 Commission minutes",
        href: "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=9575",
      },
      {
        label: "July 13 Commission minutes",
        href: "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=9941",
      },
      {
        label: "April 16 Council workshop minutes",
        href: "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=9367",
      },
      {
        label: "Hangar assessment",
        href: "https://www.cityofnampa.us/DocumentCenter/View/19852/Nampa_Airport_Hangar_Assessment_revised_jul_25",
      },
      {
        label: "Meeting portal",
        href: "https://nampa.primegov.com/public/portal",
      },
    ],
    verified: true,
  },
];
