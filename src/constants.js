export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  tabletMin: 37.5,
  laptopMin: 59.375,
  desktopMin: 81.25,
};

export const QUERIES = {
  phone: `(max-width: ${BREAKPOINTS.tabletMin}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.laptopMin}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.desktopMin}rem)`,
};
