import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import common_en from './translations/en/common.json';
import common_bg from './translations/bg/common.json';
import lessons_en from './translations/en/lessons.json';
import lessons_bg from './translations/bg/lessons.json';
import { createGlobalStyle } from 'styled-components';

const theme = {
  main: "#efefef",
  secondary: "#000000",
  text: "#000000",
  textSecondary: "#FFFFFF",
  gradient: "linear-gradient(90deg, rgba(23,26,203,1) 0%, rgba(135,33,203,1) 50%, rgba(203,33,142,1) 100%)",
  borderGradient: "linear-gradient( rgba(23,26,203,1),  rgba(135,33,203,1) , rgba(203,33,142,1)) 27",
  shadow: "rgba(0, 0, 0, 0.25)",
  pure: "#FFFFFF",
  tip: "#171ACB",
  warning: "#FFE600",
  error: "#FF000F",
  correct: "rgba(31, 196, 48, 0.75)",
  wrong: "rgba(255, 0, 15, 0.75)",
  correctFull: "rgb(31, 196, 48)",
  wrongFull: "rgb(255, 0, 15)"
};

const themeDark = {
  main: "#000000",
  secondary: "#000000",
  text: "#000000",
  textSecondary: "#FFFFFF",
  gradient: "linear-gradient(90deg, rgba(23,26,203,1) 0%, rgba(135,33,203,1) 50%, rgba(203,33,142,1) 100%)",
  borderGradient: "linear-gradient( rgba(23,26,203,1),  rgba(135,33,203,1) , rgba(203,33,142,1)) 27",
  shadow: "rgba(0, 0, 0, 0.25)",
  pure: "#FFFFFF",
  tip: "#171ACB",
  warning: "#FFE600",
  error: "#FF000F",
  correct: "rgba(31, 196, 48, 0.75)",
  wrong: "rgba(255, 0, 15, 0.75)",
  correctFull: "rgb(31, 196, 48)",
  wrongFull: "rgb(255, 0, 15)"
}

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'bg',
  fallbackLng: ["en", "dev"],
  resources: {
    en: {
      common: common_en,
      lessons: lessons_en
    },
    bg: {
      common: common_bg,
      lessons: lessons_bg
    },
  },
});



const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${(props: any) => props.theme.text};
    background-color: ${(props: any) => props.theme.main};;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
