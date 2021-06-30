import i18next from 'i18next';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from './components/Card';
import Loader from './components/Loader';
import StudyUnit from './utils/StudyUnit';
import { generateStudyUnitsIfNeeded, getAllStudyUnitsArray, getIdFromStudyUnit } from './utils/StudyUnitUtils';
import StudyUnitWithTranslations from './utils/StudyUnitWithTranslations';

function App() {
  const [t] = useTranslation("common");
  const [showLoader, setShowLoader] = useState(true);
  const [cards, setCards] = useState<StudyUnitWithTranslations[] | null>(null);
  const hide = () => {
    setShowLoader(false);
  }

  const [tl] = useTranslation("lessons");

  const job = async () => {
    const func = async (success: boolean) => {
      if (success) {
        const callback = async (units: StudyUnit[] | null) => {
          if (units == null) {
            await getAllStudyUnitsArray(callback);
          }
          else {
            let extStudyUnits: StudyUnitWithTranslations[] = [];
            for (let unit of units) {
              let key = getIdFromStudyUnit(unit);
              let ext = new StudyUnitWithTranslations(unit, tl(`${key}.title`), tl(`${key}.text`));
              extStudyUnits.push(ext);
            }
            setCards(extStudyUnits);
          }
        };
        await getAllStudyUnitsArray(callback);


      }
      else {
        await generateStudyUnitsIfNeeded(func);
      }
    }

    await generateStudyUnitsIfNeeded(func);
  }

  return (
    <div>
      {
        (showLoader) ?
          (<Loader title={t("app.name")} motto={t("app.motto")} hide={hide} job={job} />) : null
      }
      <div>{(cards) ? <Card title={cards[0].title} text={cards[0].text} /> : null}</div>
    </div>

  );
}

//Card title={"Урок 1,"} text={"където ще научите, че цифрите не са само 10"} />

export default App;
