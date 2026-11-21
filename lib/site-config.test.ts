import { describe, expect, it } from "vitest";
import {
  SITE_DOMAIN,
  SITE_ORIGIN,
  announcementSignupCallout,
  asapWorkshopNews,
  isUnresolvedPlaceholder,
  officialLinks,
  pzCrosscreekNews,
  siteConfig,
} from "./site-config";

describe("siteConfig domain", () => {
  it("uses the registered group domain and www origin", () => {
    expect(siteConfig.domain).toBe("friendsofnampaairport.org");
    expect(siteConfig.domain).toBe(SITE_DOMAIN);
    expect(siteConfig.siteOrigin).toBe("https://www.friendsofnampaairport.org");
    expect(siteConfig.siteOrigin).toBe(SITE_ORIGIN);
    expect(isUnresolvedPlaceholder(siteConfig.domain)).toBe(false);
  });
});

describe("siteConfig placeholders", () => {
  it("uses the live group contact email", () => {
    expect(isUnresolvedPlaceholder(siteConfig.contactEmail)).toBe(false);
    expect(siteConfig.contactEmail).toBe(`info@${SITE_DOMAIN}`);
  });

  it("keeps first meeting details as unresolved placeholders", () => {
    expect(isUnresolvedPlaceholder(siteConfig.firstMeeting.date)).toBe(true);
    expect(isUnresolvedPlaceholder(siteConfig.firstMeeting.venue)).toBe(true);
    expect(isUnresolvedPlaceholder(siteConfig.firstMeeting.time)).toBe(true);
  });

  it("uses the live MailerLite embedded signup form", () => {
    expect(siteConfig.mailerLiteSignup.accountId).toBe("2793534");
    expect(siteConfig.mailerLiteSignup.formId).toBe("204042873156404617");
    expect(siteConfig.mailerLiteSignup.formSlug).toBe("7X2Z1t");
    expect(siteConfig.mailerLiteSignup.scriptSrc).toBe(
      "https://assets.mailerlite.com/js/universal.js",
    );
    expect(
      isUnresolvedPlaceholder(siteConfig.mailerLiteSignup.formSlug),
    ).toBe(false);
  });

  it("uses a group contact address pattern, not a personal name", () => {
    expect(siteConfig.contactEmail.toLowerCase()).not.toMatch(/shane/);
  });
});

describe("officialLinks", () => {
  it("lists only https official sources with expected hosts", () => {
    const hrefs = officialLinks.map((link) => link.href);

    expect(hrefs).toEqual([
      "https://www.cityofnampa.us/116/Airport-Division",
      "https://www.cityofnampa.us/97/Airport-Commission",
      "https://www.cityofnampa.us/383/City-Wait-List",
      "https://www.faa.gov/airports",
      "https://www.aopa.org/advocacy/airports-and-airspace/airport-advocacy/asn/asnairportsearch",
    ]);

    for (const href of hrefs) {
      expect(href.startsWith("https://")).toBe(true);
    }
  });
});

describe("asapWorkshopNews", () => {
  it("points to the official City agenda and livestream", () => {
    expect(asapWorkshopNews.title).toMatch(/draft Airport Specific Area Plan/i);
    expect(asapWorkshopNews.paragraphs.join(" ")).toMatch(/8:00 a\.m\. MST/);
    expect(asapWorkshopNews.paragraphs.join(" ")).toMatch(/does not include a public-comment item/);
    expect(asapWorkshopNews.paragraphs.join(" ").toLowerCase()).not.toMatch(/shane/);
    expect(asapWorkshopNews.sources.map((source) => source.href)).toEqual([
      "https://nampa.primegov.com/Portal/Meeting?meetingTemplateId=10318",
      "https://www.youtube.com/@cityofnampapublicmeetings",
    ]);
    expect(asapWorkshopNews.signupCallout.text).toMatch(
      /help spread the word and encourage others to sign up/,
    );
    expect(asapWorkshopNews.signupCallout).toEqual(announcementSignupCallout);
    expect(asapWorkshopNews.signupCallout.href).toBe("#signup");
    expect(asapWorkshopNews.signupCallout.linkLabel).toBe("Sign up for updates");
    expect(asapWorkshopNews.postedDate).toBe("2026-11-17");
    expect(asapWorkshopNews.eventDate).toBe("2026-11-19");
  });
});


describe("pzCrosscreekNews", () => {
  it("states the Nov. 24 hearing facts and official participation links", () => {
    const body = [
      ...pzCrosscreekNews.paragraphs,
      ...pzCrosscreekNews.closingParagraphs,
    ].join(" ");

    expect(pzCrosscreekNews.id).toBe("pz-crosscreek");
    expect(pzCrosscreekNews.title).toMatch(/Crosscreek/);
    expect(pzCrosscreekNews.title).toMatch(/Nov\. 24/);
    expect(body).toMatch(/6:00 p\.m\. MST/);
    expect(body).toMatch(/411 Third Street South/);
    expect(body).toMatch(/ANN-00373-2026/);
    expect(body).toMatch(/recommendation to City Council/);
    expect(body).toMatch(/12:00 noon MST on Tuesday, November 24/);
    expect(body).toMatch(/pzall@cityofnampa\.us/);
    expect(body.toLowerCase()).not.toMatch(/shane/);
    expect(body.toLowerCase()).not.toMatch(/mueller/);
    expect(body.toLowerCase()).not.toMatch(/watkins/);
    expect(pzCrosscreekNews.sources.map((source) => source.href)).toEqual([
      "https://nampa.primegov.com/Portal/Meeting?meetingTemplateId=10512",
      "https://www.cityofnampa.us/1433/Upcoming-Public-Hearings",
      "https://www.cityofnampa.us/1616/Public-Comment",
      "https://www.cityofnampa.us/1722/Public-Hearings---the-Basics",
      "https://www.youtube.com/@cityofnampapublicmeetings",
      "/docs/faa-helena-crosscreek-2026-11-13.pdf",
      "/docs/itd-aeronautics-crosscreek-2026-11-20.pdf",
    ]);
    expect(body).toMatch(/November 20, 2026/);
    expect(body).toMatch(/staff report is in the City’s official agenda and packet/);
    expect(pzCrosscreekNews.stand.label).toBe("Where FoNA stands");
    expect(pzCrosscreekNews.stand.text).toBe(
      "Friends of Nampa Airport supports growth that works with the airport, and we oppose land development that is not compatible with the Airport Specific Area Plan (ASAP).",
    );
    expect(pzCrosscreekNews.signupCallout).toEqual(announcementSignupCallout);
    expect(pzCrosscreekNews.postedDate).toBe("2026-11-21");
    expect(pzCrosscreekNews.eventDate).toBe("2026-11-24");
  });
});
