import type { Service, Differentiator, Brand } from "./content";

export { PHONE, PHONE_LINK, EMAIL, BRANDS } from "./content";

export const SERVICES_FR: Service[] = [
  {
    id: "diagnostics",
    title: "Diagnostic et reparation",
    description:
      "Diagnostic rapide de pannes, resolution de codes d'alarme et reparation CNC. Nous identifions les causes profondes — pas seulement les symptomes.",
    scenarios:
      "Alarmes machine, erreurs d'axes, pannes inattendues, diagnostic post-collision",
    icon: "wrench",
  },
  {
    id: "geometry",
    title: "Geometrie et alignement CNC",
    description:
      "Verification de geometrie de precision, alignement d'axes, test ballbar et compensation geometrique.",
    scenarios:
      "Derive d'axe, problemes de tolerance recurrents, calibration annuelle, realignement post-collision",
    icon: "crosshair",
  },
  {
    id: "electrical",
    title: "Depannage electrique",
    description:
      "Pannes intermittentes, defaillances de variateurs, problemes de servo, diagnostic de commandes sur toutes les plateformes CNC majeures.",
    scenarios:
      "Arrets intermittents, alarmes de variateurs, pannes de broche, erreurs de communication",
    icon: "zap",
  },
  {
    id: "mechanical",
    title: "Mecanique, pneumatique et hydraulique",
    description:
      "Service complet des systemes mecaniques — des vis a billes et roulements aux unites hydrauliques et actionneurs pneumatiques.",
    scenarios:
      "Fuites hydrauliques, perte de pression pneumatique, bruit de roulement, jeu de vis a billes",
    icon: "cog",
  },
  {
    id: "preventive",
    title: "Maintenance preventive",
    description:
      "Programmes de maintenance planifiee qui previennent les pannes avant qu'elles n'arretent la production.",
    scenarios:
      "Contrats de service annuels, inspections pre-arret, surveillance de l'usure",
    icon: "calendar",
  },
  {
    id: "inspection",
    title: "Inspection pre-achat",
    description:
      "Evaluation independante de la machine avant l'achat. Geometrie, electrique, mecanique — rapport complet.",
    scenarios:
      "Evaluation de machines usagees, achats aux encheres, evaluations de relocalisation",
    icon: "search",
  },
  {
    id: "installation",
    title: "Installation et mise en service",
    description:
      "Reception de machine, mise a niveau, alignement, mise sous tension et mise en service pour equipement neuf ou relocalise.",
    scenarios:
      "Installation de nouvelle machine, relocalisation d'usine, deplacements de machines entre usines",
    icon: "package",
  },
  {
    id: "safety",
    title: "Audit de securite et modification CSA",
    description:
      "Audits de conformite de securite et modifications CSA pour respecter les normes canadiennes en vigueur.",
    scenarios:
      "Conformite CSA, mises a niveau de securite, modifications de protecteurs, systemes de verrouillage/etiquetage",
    icon: "shield",
  },
];

export const INDUSTRIES_FR = [
  "Aerospatiale",
  "Automobile",
  "Biens de consommation",
  "Plastiques",
  "Defense et militaire",
];

export const COMMON_ISSUES_FR = [
  "Alarmes et pannes machine",
  "Erreurs de positionnement d'axes",
  "Derive geometrique et perte de tolerance",
  "Problemes de changeur d'outils et de palettes",
  "Pannes electriques et problemes intermittents",
  "Defaillances hydrauliques et pneumatiques",
  "Collisions machine et realignement",
];

export const DIFFERENTIATORS_FR: Differentiator[] = [
  {
    title: "20 ans",
    subtitle: "Experience",
    description:
      "Deux decennies a diagnostiquer et reparer des machines CNC dans l'aerospatiale, l'automobile et la defense.",
  },
  {
    title: "Independant",
    subtitle: "Aucun biais de marque",
    description:
      "Pas lie a aucun fabricant. Nous recommandons ce qui est juste, pas ce que nous vendons.",
  },
  {
    title: "Meme jour",
    subtitle: "Reponse",
    description:
      "Machine en panne? Nous comprenons l'urgence. Reponse le meme jour dans le Grand Montreal.",
  },
  {
    title: "Honnete",
    subtitle: "Diagnostic",
    description:
      "Communication claire, prix equitables, aucun travail inutile. Nous vous disons exactement ce qui ne va pas.",
  },
];

// UI strings
export const UI_FR = {
  hero: {
    headline1: "Votre CNC est en panne.",
    headline2: "On la remet en marche.",
    subtitle: "Diagnostic et reparation electromecaniques independants. 20 ans. 9 marques. Montreal.",
    callBtn: "Appeler",
    quoteBtn: "Demander un devis",
    years: "Ans",
    brands: "Marques",
    industries: "Industries",
    trustedBrands: "Expertise sur 9 marques majeures",
  },
  services: {
    label: "Services",
    heading: "Service CNC complet",
    viewAll: "Voir les 8 services",
    learnMore: "En savoir plus",
    pageSubtitle: "Diagnostic et reparation CNC complets. Des pannes d'urgence a la maintenance planifiee — nous gardons vos machines en marche.",
    commonIssues: "Problemes que nous resolvons chaque semaine",
    trustedAcross: "Expertise reconnue",
    majorBrands: "9 marques CNC majeures",
    commonScenarios: "Scenarios courants",
    brandsLabel: "Marques",
  },
  industries: {
    heading: "Secteurs de confiance",
    quote: "Peu importe la machine, peu importe le secteur — si c'est du CNC, on l'a deja fait.",
  },
  whyAvi: {
    heading: "Pourquoi AVI",
  },
  cta: {
    headline: "Machine en panne? On la repare.",
    callBtn: "Appeler",
    quoteBtn: "Demander un devis",
  },
  about: {
    pageTitle: "A propos d'AVI Industriel",
    storyLabel: "Notre histoire",
    storyQuote: "Plus de 20 ans a diagnostiquer et reparer des machines CNC dans l'aerospatiale, l'automobile et la defense. J'ai commence sur le plancher d'usine et je n'en suis jamais parti — parce que c'est la que sont les vrais problemes.",
    storyName: "Alexandre Vachon",
    storyTitle: "Electromecanicien certifie — 20 ans d'experience",
    philosophyLabel: "Notre philosophie",
    philosophyItems: [
      { title: "Honnetete", desc: "Nous vous disons exactement ce qui ne va pas, combien ca coute, et combien de temps ca prendra. Si vous n'avez pas besoin de la reparation, nous vous le dirons." },
      { title: "Communication claire", desc: "Pas de jargon. Pas de rapports de 40 pages quand une phrase suffit. Nous expliquons ce qui s'est passe, pourquoi, et quoi faire ensuite." },
      { title: "Prix equitables", desc: "Un prix honnete pour un travail honnete. Pas de frais caches, pas de pieces inutiles, pas de vente incitative." },
      { title: "Reponse rapide", desc: "Reponse le meme jour dans le Grand Montreal. Nous comprenons que chaque heure d'arret coute de l'argent." },
    ],
    certLabel: "Certifications",
    certTitle: "Electromecanicien certifie",
    certDesc: "Certification professionnelle en electromecanique avec plus de 20 ans d'experience pratique sur 9 plateformes CNC majeures.",
    areaLabel: "Zone de service",
    areaTitle: "Base dans le Grand Montreal. Pret a voyager.",
    areaDesc: "Service principal dans la region du Grand Montreal, avec disponibilite pour voyager partout au Quebec et au-dela pour des projets speciaux.",
  },
  contact: {
    phoneHero: "Besoin d'aide maintenant?",
    phoneResponse: "Nous repondons dans les 2 heures pendant les heures d'affaires.",
    formTitle: "Demander un devis",
    formName: "Nom",
    formCompany: "Entreprise",
    formEmail: "Courriel",
    formPhone: "Telephone",
    formBrand: "Marque de la machine",
    formBrandPlaceholder: "Selectionnez une marque",
    formUrgency: "Urgence",
    formUrgencyOptions: [
      { value: "emergency", label: "Urgence — machine arretee maintenant" },
      { value: "urgent", label: "Urgent — dans les 48 heures" },
      { value: "scheduled", label: "Planifie — flexible" },
    ],
    formIssue: "Decrivez le probleme",
    formIssuePlaceholder: "Que se passe-t-il avec votre machine?",
    formSubmit: "Envoyer la demande",
    formSuccess: "Nous avons recu votre demande. Nous vous contacterons bientot.",
    altContact: "Pas urgent? Ecrivez-nous a",
    areaTitle: "Zone de service",
    areaDesc: "Grand Montreal et partout au Quebec. Pret a voyager.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    about: "A propos",
    contact: "Contact",
  },
  footer: {
    tagline: "Diagnostic. Reparation. En marche.",
    based: "Base dans le Grand Montreal. Pret a voyager.",
    copyright: "2026 AVI Industriel Inc. Tous droits reserves.",
  },
};
