import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import common_en from './translations/en/common.json';
import common_bg from './translations/bg/common.json';
import lessons_en from './translations/en/lessons.json';
import lessons_bg from './translations/bg/lessons.json';
import { get } from 'idb-keyval';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "bg",
  supportedLngs: ["en", "bg"],
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


get("lang").then((val: string) => {
  i18next.changeLanguage(val);
})


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
