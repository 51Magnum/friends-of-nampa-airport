import { describe, expect, it } from "vitest";
import { upcomingEvents } from "./events";
import { watchingItems } from "./watching";

describe("watchingItems", () => {
  it("uses unique ids and https or in-page source links", () => {
    const ids = watchingItems.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const item of watchingItems) {
      expect(item.sources.length).toBeGreaterThan(0);
      for (const source of item.sources) {
        expect(
          source.href.startsWith("https://") || source.href.startsWith("#"),
        ).toBe(true);
      }
    }
  });

  it("does not name private individuals", () => {
    const text = JSON.stringify(watchingItems).toLowerCase();
    expect(text).not.toMatch(/shane/);
    expect(text).not.toMatch(/whalen/);
    expect(text).not.toMatch(/prewett/);
    expect(text).not.toMatch(/mueller/);
  });

  it("records verified Braeburn Creek facts and the continued hearing date", () => {
    const item = watchingItems.find((entry) => entry.id === "braeburn-creek");
    expect(item).toBeDefined();
    expect(item?.verified).toBe(true);
    expect(item?.title).toBe("Braeburn Creek");
    expect(item?.status).toMatch(/continued to January 4, 2027/i);
    expect(item?.status).toMatch(/applicant/);
    expect(item?.whyItMatters).toMatch(/487/);
    expect(item?.whyItMatters).toMatch(/138 acres/);
    expect(item?.whyItMatters).toMatch(/ANN-00371-2026/);
    expect(item?.whyItMatters).toMatch(/SPP-00184-2026/);
    expect(item?.whyItMatters).toMatch(/September 29, 2026/);
    expect(item?.whyItMatters).toMatch(/Grant Assurance 21/);
    expect(item?.nextDate).toBe("2027-01-04");
    expect(
      item?.sources.some(
        (source) =>
          source.href ===
          "https://www.cityofnampa.us/1433/Upcoming-Public-Hearings",
      ),
    ).toBe(true);
    expect(item?.note).toMatch(
      /The FAA, Idaho Transportation Department Division of Aeronautics, AOPA, and the Idaho Aviation Association have submitted letters on airport compatibility/,
    );
  });

  it("treats Crosscreek as the November 24 Victory Road P&Z item", () => {
    const item = watchingItems.find((entry) => entry.id === "crosscreek");
    const nextItem = upcomingEvents.find(
      (event) => event.id === "pz-2026-11-24",
    );

    expect(item).toBeDefined();
    expect(item?.verified).toBe(true);
    expect(item?.title).toBe("Crosscreek annexation");
    expect(item?.whyItMatters).toMatch(/ANN-00373-2026/);
    expect(item?.whyItMatters).toMatch(/52 acres/);
    expect(item?.whyItMatters).toMatch(/RS-4/);
    expect(item?.whyItMatters).toMatch(/1,000-foot/);
    expect(item?.nextDate).toBe("2026-11-24");
    expect(item?.howToWeighIn).toMatch(/Nov\. 18/);
    expect(item?.howToWeighIn).toMatch(/PZall@cityofnampa\.us/);
    expect(item?.howToWeighIn).toMatch(/Nov\. 24, noon MST/);
    expect(item?.sources.map((source) => source.href)).toEqual(
      expect.arrayContaining([
        "#pz-2026-11-24",
        "https://www.cityofnampa.us/1433/Upcoming-Public-Hearings",
        "https://www.cityofnampa.us/1616/Public-Comment",
        "https://www.cityofnampa.us/1722/Public-Hearings---the-Basics",
        "https://nampa.primegov.com/public/portal",
      ]),
    );

    expect(nextItem?.title).toBe("P&Z: Crosscreek annexation (Victory Rd)");
    expect(nextItem?.date).toBe("2026-11-24");

    expect(item?.letter?.title).toBe("FAA letter (Nov. 13, 2026)");
    expect(item?.letter?.summary).toMatch(/does not issue advance clearances/i);
    expect(item?.letter?.summary).toMatch(/Grant Assurance 21/);
    const letterText = [
      item?.letter?.summary,
      ...(item?.letter?.bullets ?? []),
    ].join(" ");
    expect(letterText).toMatch(/490 feet/);
    expect(letterText).toMatch(/59 dBA DNL/);
    expect(letterText).toMatch(/65–70\+ dBA Lmax/);
    expect(letterText).toMatch(/non-residential or lower-density/);
    expect(letterText.toLowerCase()).not.toMatch(/mueller/);
    expect(JSON.stringify(item?.sources)).not.toMatch(/\.pdf/i);
  });

  it("records verified facts about city-owned hangars 0450 and 0540", () => {
    const item = watchingItems.find((entry) => entry.id === "hangar-sales");
    expect(item).toBeDefined();
    expect(item?.verified).toBe(true);
    expect(item?.title).toBe("Hangars 0450 and 0540");
    expect(item?.status).not.toMatch(/unverified/i);
    expect(item?.status).toMatch(/no published decision/i);
    expect(item?.whyItMatters).toMatch(/0450/);
    expect(item?.whyItMatters).toMatch(/0540/);
    expect(item?.whyItMatters).toMatch(/\$500,000/);
    expect(item?.whyItMatters).toMatch(/\$605,000/);
    expect(item?.whyItMatters).toMatch(/sale or demolition/);
    expect(item?.whyItMatters).toMatch(/November 9, 2026/);
    expect(item?.note).toMatch(/April 16, 2026/);
    expect(item?.note).toMatch(/demolish/);
    expect(item?.note).toMatch(/sale/);
    expect(item?.note).toMatch(/July 13, 2026/);
    expect(item?.note).toMatch(/0450 and 0540/);
    expect(item?.nextDate).toBeUndefined();
    expect(item?.sources.map((source) => source.href)).toEqual(
      expect.arrayContaining([
        "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=10476",
        "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=9575",
        "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=9941",
        "https://nampa.primegov.com/Public/CompiledDocument?compileOutputType=1&meetingTemplateId=9367",
        "https://www.cityofnampa.us/DocumentCenter/View/19852/Nampa_Airport_Hangar_Assessment_revised_jul_25",
        "https://nampa.primegov.com/public/portal",
      ]),
    );
  });
});
