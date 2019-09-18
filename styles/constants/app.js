import { MQBreakpoints, MQConstants } from '../screenSize';

const helvetica = "'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif";

const Constants = {
  half: '8px',
  full: '16px',
  more: '24px',
  double: '32px',
};

export default {
  ...Constants,
  ...MQConstants,
  ...MQBreakpoints,
  fonts: {
    helvetica,
    // lato: `Lato, ${helvetica}`,
    // montserrat: `Montserrat, ${helvetica}`,
    // oswald: `Oswald, ${helvetica}`,
    playfair: `'Playfair Display', ${helvetica}`,
    sourceSansPro: `'Source Sans Pro', ${helvetica}`,
  },
  fontSizes: {
    normal: 400,
    // medium: 500,
    // semiBold: 600,
    // bold: 700,
  },
  gutters: {
    mobile: Constants.full,
    tablet: Constants.more,
    desktop: '120px',
  },
  headerHeight: '60px',
  maxWidth: '1200px',
};
