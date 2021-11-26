import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
// These above are polyfills to at least try to support Internet Explorer
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import common_en from './translations/en/common.json';
import common_bg from './translations/bg/common.json';
import lessons_en from './translations/en/lessons.json';
import lessons_bg from './translations/bg/lessons.json';
import tags_en from './translations/en/tags.json';
import tags_bg from './translations/bg/tags.json';
import { get } from 'idb-keyval/dist/esm-compat';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ModalStackProvider } from "./components/ModalStackContext";
import { TagsProvider } from './components/TagsContext';

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

// Register service-worker
serviceWorkerRegistration.register();

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ModalStackProvider>
        <TagsProvider>
          <Router>
            <Switch>
              <Route path="/units/:unitId?" children={<App />} />
              <Route path="/" exact children={<App />} />
              <Route path="/:unitId?" children={<App />} />
            </Switch>
          </Router>
        </TagsProvider>
      </ModalStackProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);