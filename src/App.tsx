import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CardCarousel from './components/CardCarousel';
import Loader from './components/Loader';
import StudyUnit from './utils/StudyUnit';
import { generateStudyUnitsIfNeeded, getAllStudyUnitsArray, getIdFromStudyUnit } from './utils/StudyUnitUtils';
import StudyUnitWithTranslations from './utils/StudyUnitWithTranslations';

const StyledCarousel = styled(CardCarousel)`
  width: 100%;
  height: 85vh;
  
`
const Top = styled.div`
  width: 100%;
  height: 5vh;
`

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  text-align: center;
  margin: 0;
  padding: 0;
`

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
      <div>
        <Top></Top>
        <StyledCarousel cards={cards}></StyledCarousel>
        <Footer>{t("app.motto")}</Footer> </div>
    </div>

  );
}

//Card title={"Урок 1,"} text={"където ще научите, че цифрите не са само 10"} />

export default App;
