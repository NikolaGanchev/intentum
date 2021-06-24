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

const theme = {
  main: "#efefef",
  secondary: "#000000",
  text: "#000000",
  textSecondary: "#FFFFFF",
  gradient: ""
};

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'bg',
  fallbackLng: ["en", "dev"],
  resources: {
    en: {
      common: common_en
    },
    bg: {
      common: common_bg
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
