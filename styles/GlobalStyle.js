import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
    @font-face {
    font-family: "Kcc";
    font-style: normal;
    src: local(KCC-은영체), url("/fonts/KCC-eunyoung.woff2") format("woff2");
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-touch-callout: none;
  }
  html,
  body {
    /* background-color: white; */
    margin: 0;
    padding: 0;
    overflow: hidden !important;
  }

  body {
    /* font-family: "Spoqa Han Sans Neo", "sans-serif"; */
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue",
      "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    margin: 0;
    font-size: 16px;
    letter-spacing: -0.4px;
    line-height: 1.65;
    word-break: break-word;
    font-kerning: auto;
    font-variant: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    hyphens: auto;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-use-select: none;
    user-select: none;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  :root {
    --theme: #268e47;
    --umokmin-theme: #79928e;
  }
`;

export default GlobalStyle;
