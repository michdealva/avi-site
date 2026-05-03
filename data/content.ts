export const PHONE = "(514) 971-1284";
export const PHONE_LINK = "tel:+15149711284";
export const EMAIL = "avitechnoservices@gmail.com";

export const FOUNDED_YEAR = 2004;
export const NEQ = "1178404100";

export const ADDRESS = {
  street: "1624 Rue du Champagne",
  locality: "Saint-Lazare",
  region: "QC",
  postalCode: "J7T 2C1",
  country: "CA",
} as const;

export const ADDRESS_LINE = `${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.region} ${ADDRESS.postalCode}`;

export const SERVICE_AREA = {
  regions: ["Quebec", "Ontario"],
  radiusKm: 700,
  hub: "Saint-Lazare, west of Montreal",
} as const;

export interface Brand {
  name: string;
  logo: string;
}

export const BRANDS: Brand[] = [
  { name: "Makino", logo: "/brands/makino-logo.svg" },
  { name: "Mazak", logo: "/brands/mazak.svg" },
  { name: "Cincinnati", logo: "/brands/cincinnati-logo.svg" },
  { name: "Haas", logo: "/brands/haas-wordmark.svg" },
  { name: "TOS", logo: "/brands/tos-logo.svg" },
  { name: "Emmegi", logo: "/brands/emmegi.png" },
  { name: "Fanuc", logo: "/brands/Fanuc_logo.svg" },
  { name: "Siemens", logo: "/brands/siemens.svg" },
  { name: "Hurco", logo: "/brands/Hurco.webp" },
  { name: "DMG Mori", logo: "/brands/dmg-mori.png" },
  { name: "Okuma", logo: "/brands/okuma-wordmark.svg" },
  { name: "Hankook", logo: "/brands/Hankook-logo-5500x1000.png" },
  { name: "Doosan", logo: "/brands/doosan.png" },
  { name: "Hardinge", logo: "/brands/hardinge.png" },
  { name: "Matsuura", logo: "/brands/matsuura.svg" },
];

export const TOOLING_BRANDS: string[] = [
  "Alberti",
  "Eppinger",
  "WTO",
  "MT Marchetti",
  "Evermore",
  "Hold Well",
];

export type Service = {
  id: string;
  title: string;
  description: string;
  scenarios: string;
  icon: string;
};

export const SERVICES: Service[] = [
  {
    id: "live-tooling-repair",
    title: "Live Tooling Repair",
    description:
      "Specialist repair and rebuild of driven tools and live tooling units. Alberti, Eppinger, WTO, MT Marchetti, Evermore, Hold Well.",
    scenarios:
      "Bearing failure, gear noise, coolant leaks, runout issues, broken drive shafts",
    icon: "cog",
  },
  {
    id: "diagnostics",
    title: "Diagnostics & Repair",
    description:
      "Rapid fault diagnosis, alarm code resolution, and CNC repair. We identify root causes - not just symptoms.",
    scenarios:
      "Machine alarms, axis errors, unexpected faults, post-crash diagnostics",
    icon: "wrench",
  },
  {
    id: "geometry",
    title: "CNC Geometry & Alignment",
    description:
      "Precision geometry checks, axis alignment, ballbar testing, and geometric compensation.",
    scenarios:
      "Axis drift, recurring tolerance issues, annual calibration, post-crash realignment",
    icon: "crosshair",
  },
  {
    id: "electrical",
    title: "Electrical Troubleshooting",
    description:
      "Intermittent faults, drive failures, servo issues, control diagnostics across all major CNC platforms.",
    scenarios:
      "Intermittent shutdowns, drive alarms, spindle faults, communication errors",
    icon: "zap",
  },
  {
    id: "mechanical",
    title: "Mechanical, Pneumatic & Hydraulic",
    description:
      "Complete mechanical systems service - from ballscrews and bearings to hydraulic units and pneumatic actuators.",
    scenarios:
      "Hydraulic leaks, pneumatic pressure loss, bearing noise, ballscrew backlash",
    icon: "cog",
  },
  {
    id: "preventive",
    title: "Preventive Maintenance",
    description:
      "Scheduled maintenance programs that prevent failures before they stop production.",
    scenarios:
      "Annual service contracts, pre-shutdown inspections, wear monitoring",
    icon: "calendar",
  },
  {
    id: "inspection",
    title: "Pre-Purchase Inspection",
    description:
      "Independent machine assessment before you buy. Geometry, electrical, mechanical - full report.",
    scenarios:
      "Used machine evaluation, auction purchases, relocation assessments",
    icon: "search",
  },
  {
    id: "installation",
    title: "Installation & Setup",
    description:
      "Machine receiving, leveling, alignment, power-up, and commissioning for new or relocated equipment.",
    scenarios:
      "New machine installation, factory relocation, machine moves between plants",
    icon: "package",
  },
  {
    id: "safety",
    title: "Safety Audit & CSA Modification",
    description:
      "Safety compliance audits and CSA modifications to meet current Canadian standards.",
    scenarios:
      "CSA compliance, safety upgrades, guard modifications, lockout/tagout systems",
    icon: "shield",
  },
];

export const INDUSTRIES = [
  "Aerospace",
  "Automotive",
  "Consumer Goods",
  "Plastics",
  "Defense & Military",
];

export const COMMON_ISSUES = [
  "Machine alarms & faults",
  "Axis positioning errors",
  "Geometry drift & tolerance loss",
  "Tool changer & pallet changer issues",
  "Electrical faults & intermittent issues",
  "Hydraulic & pneumatic failures",
  "Machine crashes & realignment",
];

export type Differentiator = {
  title: string;
  subtitle: string;
  description: string;
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: "22 Years",
    subtitle: "Field experience",
    description:
      "Hands-on experience since 2004 across aerospace, automotive, defense, and live tooling specialists.",
  },
  {
    title: "Live Tooling",
    subtitle: "Specialist",
    description:
      "Driven tool repair and rebuild on Alberti, Eppinger, WTO, MT Marchetti, Evermore, Hold Well.",
  },
  {
    title: "Quebec + Ontario",
    subtitle: "On-site service",
    description:
      "Mobile workshop based in Saint-Lazare. We travel up to 700km \u2014 same-day for greater Montreal.",
  },
  {
    title: "Independent",
    subtitle: "No brand bias",
    description:
      "Not tied to any manufacturer. We recommend what\u2019s right, not what we sell.",
  },
];
