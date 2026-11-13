import { describe, expect, it } from "vitest";
import {
  SITE_DOMAIN,
  SITE_ORIGIN,
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
  it("keeps email, first meeting, and signup embed as unresolved placeholders", () => {
    expect(isUnresolvedPlaceholder(siteConfig.contactEmail)).toBe(true);
    expect(siteConfig.contactEmail).toBe(`[info@${SITE_DOMAIN}]`);
    expect(isUnresolvedPlaceholder(siteConfig.firstMeeting.date)).toBe(true);
    expect(isUnresolvedPlaceholder(siteConfig.firstMeeting.venue)).toBe(true);
    expect(isUnresolvedPlaceholder(siteConfig.firstMeeting.time)).toBe(true);
    expect(isUnresolvedPlaceholder(siteConfig.mailerLiteSignupEmbed)).toBe(
      true,
    );
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
