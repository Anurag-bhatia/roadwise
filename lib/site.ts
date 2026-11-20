// Site-wide settings. Items marked TODO need sign-off before launch.

export const site = {
  name: "RoadWise India",
  tagline: "Free, practical road-safety guides for every Indian road user.",
  // TODO: confirm the final Challan Times URL.
  challanTimesUrl: "https://challantimes.com",
  // TODO: replace with the RSLA playlist URL from LOTS247.
  rslaPlaylistUrl: "https://www.youtube.com/@LOTS247",
  lots247Url: "https://lots247.com",
  reviewedOn: "20 November 2026",
  contactEmail: "hello@roadwiseindia.in",
};

export const nav = [
  { href: "/safety-guides", label: "Safety Guides", icon: "shield" },
  { href: "/what-to-do", label: "What To Do", icon: "alert" },
  { href: "/videos", label: "Videos", icon: "play" },
  { href: "/checklists", label: "Checklists", icon: "clipboard" },
  { href: "/official-sources", label: "Official Sources", icon: "building" },
] as const;

export type OfficialSource = { name: string; detail: string; href: string };

// TODO: helpline numbers must be confirmed by Legal before launch.
export const officialSources: OfficialSource[] = [
  {
    name: "Ministry of Road Transport & Highways",
    detail: "National rules and notifications",
    href: "https://morth.nic.in",
  },
  {
    name: "Parivahan Sewa",
    detail: "Licence and vehicle services",
    href: "https://parivahan.gov.in",
  },
  {
    name: "e-Challan portal",
    detail: "Check and pay challans",
    href: "https://echallan.parivahan.gov.in",
  },
  {
    name: "State transport departments",
    detail: "Find your state's transport department",
    href: "https://parivahan.gov.in/parivahan/en/content/state-transport-departments",
  },
  {
    name: "National highway helpline",
    detail: "Dial 1033 on national highways",
    href: "tel:1033",
  },
  {
    name: "Emergency services",
    detail: "Dial 112 for police, fire and ambulance",
    href: "tel:112",
  },
];
