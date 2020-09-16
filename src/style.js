// node modules
import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: auto;
    padding: 0;
    background: #fff;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  opacity: 0;
  transition: opacity 0.6s;

  ${props =>
    props.isLoaded &&
    css`
      opacity: 1;
    `}
`;
