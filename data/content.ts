export const PHONE = "(514) 971-1284";
export const PHONE_LINK = "tel:+15149711284";
export const EMAIL = "avitechnoservices@gmail.com";

export interface Brand {
  name: string;
  logo: string;
}

export const BRANDS: Brand[] = [
  { name: "Makino", logo: "/brands/makino.svg" },
  { name: "Mazak", logo: "/brands/mazak.svg" },
  { name: "Cincinnati", logo: "/brands/cincinnati.svg" },
  { name: "Matsuura", logo: "/brands/matsuura.svg" },
  { name: "Haas", logo: "/brands/haas.svg" },
  { name: "TOS", logo: "/brands/tos.svg" },
  { name: "Emmegi", logo: "/brands/emmegi.svg" },
  { name: "Fanuc", logo: "/brands/fanuc.svg" },
  { name: "Siemens", logo: "/brands/siemens.svg" },
  { name: "Hurco", logo: "/brands/hurco.svg" },
  { name: "DMG Mori", logo: "/brands/dmg-mori.svg" },
  { name: "Okuma", logo: "/brands/okuma.svg" },
  { name: "Hankook", logo: "/brands/hankook.svg" },
  { name: "Doosan", logo: "/brands/doosan.svg" },
  { name: "Hardinge", logo: "/brands/hardinge.svg" },
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
    title: "20 Years",
    subtitle: "Experience",
    description:
      "Two decades diagnosing and repairing CNC machines across aerospace, automotive, and defense.",
  },
  {
    title: "Independent",
    subtitle: "No brand bias",
    description:
      "Not tied to any manufacturer. We recommend what\u2019s right, not what we sell.",
  },
  {
    title: "Same-Day",
    subtitle: "Response",
    description:
      "Machine down? We understand urgency. Same-day response in Greater Montreal.",
  },
  {
    title: "Honest",
    subtitle: "Diagnosis",
    description:
      "Clear communication, fair pricing, no unnecessary work. We tell you exactly what\u2019s wrong.",
  },
];
