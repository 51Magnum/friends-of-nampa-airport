/**
 * Photographs used on the site, all from Wikimedia Commons under licenses
 * that allow reuse (CC0, CC BY, or CC BY-SA). Keep captions accurate:
 * do not describe a non-KMAN photo as Nampa Municipal Airport.
 */
export type SitePhoto = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  author: string;
  license: string;
  licenseUrl: string;
  filePage: string;
};

export const heroPhoto: SitePhoto = {
  id: "hero",
  src: "/images/cessna-r182-n9106c-in-flight.webp",
  width: 1920,
  height: 1080,
  alt: "A white 1978 Cessna R182 Skylane, registration N9106C, in flight against a cloudy sky.",
  caption:
    "A 1978 Cessna R182 Skylane in flight over central New Hampshire.",
  author: "Doodybutch",
  license: "CC0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  filePage: "https://commons.wikimedia.org/wiki/File:N9106CAboveClouds.jpg",
};

export const kmanPhoto: SitePhoto = {
  id: "kman-2007",
  src: "/images/nampa-municipal-airport-2007.webp",
  width: 2400,
  height: 1800,
  alt: "Aerial view of Nampa Municipal Airport in 2007, with the runway, hangars, and surrounding farmland and neighborhoods.",
  caption:
    "Nampa Municipal Airport (KMAN) in 2007, photographed from the air.",
  author: "T0ny",
  license: "CC BY 3.0",
  licenseUrl: "https://creativecommons.org/licenses/by/3.0/",
  filePage: "https://commons.wikimedia.org/wiki/File:S67_Airport_2007.jpg",
};

export const landingPhoto: SitePhoto = {
  id: "182-landing",
  src: "/images/cessna-182p-d-eend-landing.webp",
  width: 2400,
  height: 1802,
  alt: "A blue-and-white Cessna 182P Skylane, registration D-EEND, on short final with landing gear down.",
  caption:
    "A Cessna 182P Skylane on short final at Hilversum Airport.",
  author: "Alf van Beem",
  license: "CC0",
  licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
  filePage:
    "https://commons.wikimedia.org/wiki/File:D-EEND_Cessna_182P_landing_at_Hilversum_Airport_(ICAO_EHHV),_photo4.JPG",
};

export const runwayPhoto: SitePhoto = {
  id: "runway-approach",
  src: "/images/philip-billard-runway-approach.webp",
  width: 1280,
  height: 853,
  alt: "View from a small airplane approaching a runway surrounded by fields, hangars, and a clear evening sky.",
  caption:
    "On approach to Runway 36 at Philip Billard Municipal Airport in Topeka, Kansas.",
  author: "Andyring",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  filePage:
    "https://commons.wikimedia.org/wiki/File:Topeka_Philip_Billard_airport.jpg",
};

export const sitePhotos: SitePhoto[] = [
  heroPhoto,
  kmanPhoto,
  landingPhoto,
  runwayPhoto,
];
