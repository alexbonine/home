import App from './constants/app';

export const mqTablet = `@media (min-width: ${App.breakpoints.tabletMin})`;
export const mqDesktop = `@media (min-width: ${App.breakpoints.desktopMin})`;

export const mqTabletOnly = `@media (min-width: ${App.breakpoints.tabletMin} and max-width: ${App.breakpoints.tabletMax})`;

export const mqMobile = `@media (max-width: ${App.breakpoints.mobileMax})`;
// export const mqNotMobile = `@media (min-width: ${App.breakpoints.tabletMin})`;
export const mqNotDesktop = `@media (max-width: ${App.breakpoints.tabletMax})`;

export const mq = {
  desktop: mqDesktop,
  mobile: mqMobile,
  notDesktop: mqNotDesktop,
  // notMobile: mqNotMobile,
  tablet: mqTablet,
  tabletOnly: mqTabletOnly,
};
