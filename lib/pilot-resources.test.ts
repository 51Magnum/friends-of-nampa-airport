import { describe, expect, it } from "vitest";
import { allPilotResources, pilotResourceGroups } from "./pilot-resources";

describe("pilotResourceGroups", () => {
  it("lists a focused set of https links with unique hrefs and one-line descriptions", () => {
    const links = allPilotResources();
    const hrefs = links.map((link) => link.href);

    expect(links.length).toBeGreaterThanOrEqual(8);
    expect(links.length).toBeLessThanOrEqual(14);
    expect(new Set(hrefs).size).toBe(hrefs.length);

    for (const link of links) {
      expect(link.href.startsWith("https://")).toBe(true);
      expect(link.label.length).toBeGreaterThan(0);
      expect(link.description.length).toBeGreaterThan(0);
      expect(link.description.length).toBeLessThan(160);
    }

    expect(hrefs).toContain("https://kman.aviationwx.org/");
    expect(hrefs).toContain("https://www.airnav.com/airport/KMAN");
    expect(hrefs).toContain(
      "https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/search/",
    );
    expect(hrefs).toContain("https://notams.aim.faa.gov/notamSearch/");
    expect(hrefs).toContain("https://tfr.faa.gov/");
    expect(hrefs).toContain("https://www.1800wxbrief.com/");
    expect(hrefs).toContain("https://aviationweather.gov/");
    expect(hrefs).toContain(
      "https://skyvector.com/airport/MAN/Nampa-Municipal-Airport",
    );
    expect(hrefs).toContain("https://itd.idaho.gov/aero/");
    expect(hrefs).toContain("https://www.cityofnampa.us/116/Airport-Division");
    expect(hrefs).toContain(
      "https://www.aopa.org/destinations/airports/KMAN/details",
    );
  });

  it("does not invent frequencies or name private individuals", () => {
    const text = JSON.stringify(pilotResourceGroups).toLowerCase();
    expect(text).not.toMatch(/shane/);
    expect(text).not.toMatch(/\bctaf\b/);
    expect(text).not.toMatch(/\bawos\b/);
    expect(text).not.toMatch(/122\./);
  });
});
