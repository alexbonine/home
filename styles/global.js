import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import Colors from './colors';
import { mqMobile } from './grid';

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
  h4,
  div,
  p,
  a {
    font-family: 'Playfair Display', serif;
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
