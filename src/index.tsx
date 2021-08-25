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
import tags_en from './translations/en/tags.json';
import tags_bg from './translations/bg/tags.json';
import { get } from 'idb-keyval';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "bg",
  supportedLngs: ["en", "bg"],
  fallbackLng: ["en", "dev"],
  resources: {
    en: {
      common: common_en,
      lessons: lessons_en,
      tags: tags_en
    },
    bg: {
      common: common_bg,
      lessons: lessons_bg,
      tags: tags_bg
    },
  },
});


get("lang").then((val: string) => {
  i18next.changeLanguage(val);
})


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <Switch>
          <Route path="/:unitId?" children={<App />} />
        </Switch>
      </Router>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
