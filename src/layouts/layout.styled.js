import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 16px;
    font-family: sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,
  body,
  #___gatsby {
    width: 100%;
    height: 100%;
  }
  #___gatsby > div {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    z-index: 2;
  }
  body {
    background-color: #fff;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #6f7380;
    font-size: 1rem;
    font-weight: 500;
    word-wrap: break-word;
    font-kerning: normal;
    word-spacing: 1px;
    line-height: 1.6;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  p {
    font-size: 1.25rem;
    color: #555;
    font-weight: 500;
    line-height: 1.5;
    color: #6f7380;
  }
  a {
    color: #50c290;
    border-bottom: #50c290;
    transition: 0.12s color cubic-bezier(0.565, 1.65, 0.765, 0.88), 0.12s outline cubic-bezier(0.565, 1.65, 0.765, 0.88);
    text-decoration: none;
  }
  a:hover,
  a:active,
  a:focus {
    color: #4f6c86;
    border-color: #4f6c86;
  }
  a:active,
  a:focus {
    outline-color: #4f6c86;
  }
  h1 {
    font-size: 34px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 30px;
  }
  h4 {
    font-size: 26px;
  }
  h5 {
    font-size: 22px;
  }
  h6 {
    font-size: 18px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.2;
    color: inherit;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  b {
    font-weight: 800;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 30px 0;
  }
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    margin: 0;
  }
  img,
  embed,
  iframe,
  object,
  audio,
  video {
    height: auto;
    max-width: 100%;
  }
  iframe {
    border: 0;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
    text-align: left;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  code,
  kbd,
  pre,
  samp {
    font-size: 1em;
  }
  hr {
    display: block;
    width: 100%;
    margin: 1.875rem 0;
    border: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
`

export const Default = styled.div`
  position: relative;
  background-color: #013247;
  z-index: 1;
`

export const Main = styled.main`;
  padding: 0;
  margin: 0 auto;
`
