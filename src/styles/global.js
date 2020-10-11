import { css } from '@emotion/core';

export const GlobalStyles = css`
  html,
  body {
    width: 100%;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  body{
      margin: 0;
      font-size: 14px;
  }
`;