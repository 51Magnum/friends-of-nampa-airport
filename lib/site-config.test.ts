import { describe, expect, it } from "vitest";
import {
  SITE_DOMAIN,
  SITE_ORIGIN,
  asapWorkshopNews,
  isUnresolvedPlaceholder,
  officialLinks,
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
    expect(asapWorkshopNews.signupCallout.href).toBe("#signup");
    expect(asapWorkshopNews.signupCallout.linkLabel).toBe("Sign up for updates");
  });
});
