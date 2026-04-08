import type { Service, Differentiator } from "./content";

export { PHONE, PHONE_LINK, EMAIL, BRANDS } from "./content";

export const SERVICES_FR: Service[] = [
  {
    id: "diagnostics",
    title: "Diagnostic et réparation",
    description:
      "Diagnostic rapide des pannes, résolution des codes d'alarme et réparation CNC. On trouve la vraie cause, pas juste le symptôme.",
    scenarios:
      "Alarmes machine, erreurs d'axe, pannes soudaines, diagnostic après collision",
    icon: "wrench",
  },
  {
    id: "geometry",
    title: "Géométrie et alignement CNC",
    description:
      "Vérification de géométrie de précision, alignement d'axes, test ballbar et compensation géométrique.",
    scenarios:
      "Dérive d'axe, problèmes de tolérance récurrents, calibration annuelle, réalignement après collision",
    icon: "crosshair",
  },
  {
    id: "electrical",
    title: "Dépannage électrique",
    description:
      "Pannes intermittentes, défaillances de drives, problèmes de servo, diagnostic de contrôleurs sur toutes les plateformes CNC.",
    scenarios:
      "Arrêts intermittents, alarmes de drive, pannes de broche, erreurs de communication",
    icon: "zap",
  },
  {
    id: "mechanical",
    title: "Mécanique, pneumatique et hydraulique",
    description:
      "Service complet des systèmes mécaniques : vis à billes, roulements, unités hydrauliques et actionneurs pneumatiques.",
    scenarios:
      "Fuites hydrauliques, perte de pression pneumatique, bruit de roulement, jeu dans les vis à billes",
    icon: "cog",
  },
  {
    id: "preventive",
    title: "Maintenance préventive",
    description:
      "Programmes de maintenance planifiée pour prévenir les pannes avant qu'elles arrêtent votre production.",
    scenarios:
      "Contrats de service annuels, inspections pré-arrêt, suivi de l'usure",
    icon: "calendar",
  },
  {
    id: "inspection",
    title: "Inspection pré-achat",
    description:
      "Évaluation indépendante avant l'achat. Géométrie, électrique, mécanique. Rapport complet.",
    scenarios:
      "Évaluation de machines usagées, achats aux enchères, évaluations avant déménagement",
    icon: "search",
  },
  {
    id: "installation",
    title: "Installation et mise en service",
    description:
      "Réception de machine, mise à niveau, alignement, mise sous tension et commissioning pour équipement neuf ou déménagé.",
    scenarios:
      "Installation de nouvelle machine, déménagement d'usine, transfert de machines entre usines",
    icon: "package",
  },
  {
    id: "safety",
    title: "Audit de sécurité et modification CSA",
    description:
      "Audits de conformité et modifications CSA pour respecter les normes canadiennes en vigueur.",
    scenarios:
      "Conformité CSA, mises à niveau de sécurité, modifications de gardes, systèmes de cadenassage",
    icon: "shield",
  },
];

export const INDUSTRIES_FR = [
  "Aérospatiale",
  "Automobile",
  "Biens de consommation",
  "Plastiques",
  "Défense et militaire",
];

export const COMMON_ISSUES_FR = [
  "Alarmes et pannes machine",
  "Erreurs de positionnement d'axe",
  "Dérive géométrique et perte de tolérance",
  "Problèmes de changeur d'outils et de palettes",
  "Pannes électriques et problèmes intermittents",
  "Défaillances hydrauliques et pneumatiques",
  "Collisions et réalignement de machine",
];

export const DIFFERENTIATORS_FR: Differentiator[] = [
  {
    title: "20 ans",
    subtitle: "D'expérience",
    description:
      "Deux décennies à diagnostiquer et réparer des machines CNC en aérospatiale, automobile et défense.",
  },
  {
    title: "Indépendant",
    subtitle: "Aucun biais",
    description:
      "Pas affilié à aucun fabricant. On recommande ce qui est bon pour la machine, pas ce qu'on vend.",
  },
  {
    title: "Même jour",
    subtitle: "Réponse rapide",
    description:
      "Machine en panne? On comprend l'urgence. Réponse le même jour dans le Grand Montréal.",
  },
  {
    title: "Honnête",
    subtitle: "Diagnostic clair",
    description:
      "Communication franche, prix justes, pas de travail inutile. On vous dit exactement ce qui se passe.",
  },
];

export const UI_FR = {
  hero: {
    headline1: "Votre CNC est en panne.",
    headline2: "On la remet en marche.",
    subtitle: "Diagnostic et réparation électromécanique indépendant. 20 ans. 15 marques. Montréal.",
    callBtn: "Appeler",
    quoteBtn: "Demander une soumission",
    years: "Ans",
    brands: "Marques",
    industries: "Industries",
    trustedBrands: "Expertise sur 15 marques majeures",
  },
  services: {
    label: "Services",
    heading: "Service CNC complet",
    viewAll: "Voir les 8 services",
    learnMore: "En savoir plus",
    pageSubtitle: "Diagnostic et réparation CNC de A à Z. Des urgences à la maintenance planifiée, on garde vos machines en marche.",
    commonIssues: "Problèmes qu'on résout chaque semaine",
    trustedAcross: "Expertise reconnue",
    majorBrands: "15 marques CNC majeures",
    commonScenarios: "Cas fréquents",
    brandsLabel: "Marques",
  },
  industries: {
    heading: "Reconnu dans les secteurs critiques",
    quote: "Peu importe la machine, peu importe le secteur : si c'est du CNC, on connaît ça.",
  },
  whyAvi: {
    heading: "Pourquoi AVI",
  },
  cta: {
    headline: "Machine en panne? On s'en occupe.",
    callBtn: "Appeler",
    quoteBtn: "Demander une soumission",
  },
  about: {
    pageTitle: "À propos d'AVI Industriel",
    storyLabel: "Notre histoire",
    storyQuote: "Plus de 20 ans à diagnostiquer et réparer des machines CNC en aérospatiale, automobile et défense. J'ai commencé sur le plancher d'usine et j'y suis resté, parce que c'est là que sont les vrais problèmes.",
    storyName: "Alexandre Vachon",
    storyTitle: "Électromécanicien certifié, 20 ans d'expérience",
    philosophyLabel: "Notre philosophie",
    philosophyItems: [
      { title: "Honnêteté", desc: "On vous dit exactement ce qui ne va pas, combien ça coûte, et combien de temps ça prend. Si la réparation est pas nécessaire, on vous le dit." },
      { title: "Communication claire", desc: "Pas de jargon. Pas de rapports de 40 pages quand une phrase suffit. On explique ce qui s'est passé, pourquoi, et quoi faire ensuite." },
      { title: "Prix justes", desc: "Un prix honnête pour un travail honnête. Pas de frais cachés, pas de pièces inutiles, pas de vente de pression." },
      { title: "Réponse rapide", desc: "Réponse le même jour dans le Grand Montréal. On comprend que chaque heure d'arrêt coûte de l'argent." },
    ],
    certLabel: "Certifications",
    certTitle: "Électromécanicien certifié",
    certDesc: "Certification professionnelle en électromécanique avec plus de 20 ans d'expérience terrain sur 15 plateformes CNC majeures.",
    areaLabel: "Zone de service",
    areaTitle: "Basé dans le Grand Montréal. Prêt à se déplacer.",
    areaDesc: "Service principal dans la région du Grand Montréal, disponible partout au Québec et au-delà pour des projets spéciaux.",
  },
  contact: {
    phoneHero: "Besoin d'aide maintenant?",
    phoneResponse: "On répond en moins de 2 heures pendant les heures d'affaires.",
    formTitle: "Demander une soumission",
    formName: "Nom",
    formCompany: "Entreprise",
    formEmail: "Courriel",
    formPhone: "Téléphone",
    formBrand: "Marque de la machine",
    formBrandPlaceholder: "Choisir une marque",
    formUrgency: "Urgence",
    formUrgencyOptions: [
      { value: "emergency", label: "Urgence : machine arrêtée maintenant" },
      { value: "urgent", label: "Urgent : dans les 48 prochaines heures" },
      { value: "scheduled", label: "Planifié : pas pressé" },
    ],
    formIssue: "Décrivez le problème",
    formIssuePlaceholder: "Qu'est-ce qui se passe avec votre machine?",
    formSubmit: "Envoyer la demande",
    formSuccess: "C'est reçu. On vous revient bientôt.",
    altContact: "Pas urgent? Écrivez-nous à",
    areaTitle: "Zone de service",
    areaDesc: "Grand Montréal et partout au Québec. Prêt à se déplacer.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    about: "À propos",
    contact: "Contact",
  },
  footer: {
    tagline: "Diagnostic. Réparation. En marche.",
    based: "Basé dans le Grand Montréal. Prêt à se déplacer.",
    copyright: "2026 AVI Industriel Inc. Tous droits réservés.",
  },
};
