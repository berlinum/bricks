import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'SF Pro Display Regular';
          src: url('/fonts/SF-Pro-Display-Regular.otf');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Display Medium';
          src: url('/fonts/SF-Pro-Display-Medium.otf');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Display Semibold';
          src: url('/fonts/SF-Pro-Display-Semibold.otf');
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Display Bold';
          src: url('/fonts/SF-Pro-Display-Bold.otf');
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Rounded Regular';
          src: url('/fonts/SF-Pro-Rounded-Regular.otf');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Rounded Medium';
          src: url('/fonts/SF-Pro-Rounded-Medium.otf');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Rounded Semibold';
          src: url('/fonts/SF-Pro-Rounded-Semibold.otf');
          font-weight: 600;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Text Regular';
          src: url('/fonts/SF-Pro-Text-Regular.otf');
          font-weight: 400;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Text Medium';
          src: url('/fonts/SF-Pro-Text-Medium.otf');
          font-weight: 500;
          font-style: normal;
        }
        @font-face {
          font-family: 'SF Pro Text Bold';
          src: url('/fonts/SF-Pro-Text-Bold.otf');
          font-weight: 700;
          font-style: normal;
        }

        body {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          margin: 0;
          height: 100vh;
          justify-content: center;
          align-items: center;
        }
      `}
    />
  );
}

export default GlobalStyles;
