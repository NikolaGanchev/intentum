import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    font-size: 100%; /*16px by default*/
  }

  @media only screen and (max-width: 768px) {
    html {
      font-size: 87.5%; /*14px*/
    }
  }

  @media only screen and (max-width: 360px) {
    html {
      font-size: 81.25%; /*13px*/
    }
  }

  @media only screen and (max-width: 320px) {
    html {
      font-size: 75%; /*12px*/
    }
  }

  @media only screen and (max-width: 300px) {
    html {
      font-size: 68.75%; /*11px*/
    }
  }

  @media only screen and (min-width: 3440px) {
    html {
      font-size: 137.5%; /*22px*/
    }
  }

  @media only screen and (min-width: 2560px) {
    html {
      font-size: 131.25%; /*21px*/
    }
  }

  @media only screen and (min-width: 1920px) {
    html {
      font-size: 125%; /*20px*/
    }
  }

  @media only screen and (min-width: 1600px) {
    html {
      font-size: 112.5%; /*18px*/
    }
  }

  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    color: ${(props: any) => props.theme.text};
    background-color: ${(props: any) => props.theme.main};;
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
    transition: all 1s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow: hidden;
  }
`;