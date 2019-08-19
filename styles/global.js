import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';

export default css`
  ${emotionReset}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
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
  }
`;

/*
  body {
	font-family: 'Saira Extra Condensed', sans-serif;
	letter-spacing: 1px;
	-webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
} */
