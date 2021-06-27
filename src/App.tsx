import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Loader from './components/Loader';
import * as electron from 'electron';

function App() {
  const [t] = useTranslation("common");
  const [showLoader, setShowLoader] = useState(true);
  const hide = () => {
    setShowLoader(false);
  }

  return (
    <div>{(showLoader) ?
      (<Loader title={t("app.name")} motto={t("app.motto")} hide={hide} />) :
      (<div></div>)

    }</div>

  );
}

export default App;
