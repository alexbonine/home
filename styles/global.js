import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import Colors from './colors';

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

  img {
    max-width: 100%;
    height: auto;
  }
`;

/*
  body {
	font-family: 'Saira Extra Condensed', sans-serif;
	letter-spacing: 1px;
	-webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
} */
