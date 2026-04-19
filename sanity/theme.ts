import { buildLegacyTheme } from "sanity";

/**
 * Custom theme for AVI Industriel Studio.
 * Matches the website: Signal Green accent, Graphite dark, Workshop light.
 */

const props = {
  "--avi-green": "#2ECC52",
  "--avi-green-dark": "#25A844",
  "--avi-graphite": "#1A1D23",
  "--avi-steel": "#252830",
  "--avi-white": "#F7F7F5",
  "--avi-concrete": "#EDEDEB",
  "--avi-shop-grey": "#5A5D66",
  "--avi-border": "#E0E0DC",
};

export const aviTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--avi-graphite"],
  "--white": props["--avi-white"],

  "--gray": props["--avi-shop-grey"],
  "--gray-base": props["--avi-shop-grey"],

  "--component-bg": props["--avi-white"],
  "--component-text-color": props["--avi-graphite"],

  /* Brand (primary accent) */
  "--brand-primary": props["--avi-green"],

  /* Default button colors */
  "--default-button-color": props["--avi-shop-grey"],
  "--default-button-primary-color": props["--avi-green"],
  "--default-button-success-color": props["--avi-green"],
  "--default-button-warning-color": "#F59E0B",
  "--default-button-danger-color": "#E53E3E",

  /* State colors */
  "--state-info-color": props["--avi-green"],
  "--state-success-color": props["--avi-green"],
  "--state-warning-color": "#F59E0B",
  "--state-danger-color": "#E53E3E",

  /* Main navigation */
  "--main-navigation-color": props["--avi-graphite"],
  "--main-navigation-color--inverted": props["--avi-white"],

  /* Focus */
  "--focus-color": props["--avi-green"],
});
