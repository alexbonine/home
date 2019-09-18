import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import Colors from './colors';
import { mqMobile } from './grid';
import App from './constants/app';

export default css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    background: ${Colors.green};
  }

  @font-face {
    font-family: 'Playfair Display';
    font-display: swap;
    src: url('/static/fonts/PlayfairDisplay-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  /* @font-face {
    font-family: 'Lato';
    font-display: swap;
    src: url('/static/fonts/Lato-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  } */

  @font-face {
    font-family: 'Source Sans Pro';
    font-display: swap;
    src: url('/static/fonts/SourceSansPro-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  /* 
  @font-face {
    font-family: 'Montserrat';
    font-display: swap;
    src: url('/static/fonts/Montserrat-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  } */

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-flex;
  }

  a {
    text-decoration: none;
    display: inline-block;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: ${App.fonts.playfair};
    letter-spacing: 0.5px;
  }

  div,
  p,
  a {
    font-family: ${App.fonts.sourceSansPro};
  }

  .screen-width,
  img.screen-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw !important;
    margin-right: -50vw !important;
    max-width: initial;
  }

  ${mqMobile} {
    .screen-width-mobile,
    img.screen-width-mobile {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw !important;
      margin-right: -50vw !important;
      max-width: initial;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;
