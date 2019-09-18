export const MQConstants = {
  mobile: 'mobile',
  mobileOnly: 'mobile-only',
  tabletOnly: 'tablet-only',
  tablet: 'tablet',
  desktop: 'desktop',
};

export const MQBreakpoints = {
  mobileMax: 767,
  tabletMin: 768,
  tabletMax: 1279,
  desktopMin: 1280,
};

export const MQBreakpointsPixels = {
  mobileMax: `${MQBreakpoints.mobileMax}px`,
  tabletMin: `${MQBreakpoints.tabletMin}px`,
  tabletMax: `${MQBreakpoints.tabletMax}px`,
  desktopMin: `${MQBreakpoints.desktopMin}px`,
};

export const mqTablet = `@media (min-width: ${MQBreakpointsPixels.tabletMin})`;
export const mqDesktop = `@media (min-width: ${MQBreakpointsPixels.desktopMin})`;

export const mqTabletOnly = `@media (min-width: ${MQBreakpointsPixels.tabletMin} and max-width: ${MQBreakpointsPixels.tabletMax})`;

export const mqMobile = `@media (max-width: ${MQBreakpointsPixels.mobileMax})`;
// export const mqNotMobile = `@media (min-width: ${App.breakpoints.tabletMin})`;
export const mqNotDesktop = `@media (max-width: ${MQBreakpointsPixels.tabletMax})`;

export const mq = {
  breakpoints: MQBreakpoints,
  breakpointsPixels: MQBreakpointsPixels,
  constants: MQConstants,
  desktop: mqDesktop,
  mobile: mqMobile,
  notDesktop: mqNotDesktop,
  // notMobile: mqNotMobile,
  tablet: mqTablet,
  tabletOnly: mqTabletOnly,
};
