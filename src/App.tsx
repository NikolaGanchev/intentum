import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CardCarousel from './components/CardCarousel';
import Loader from './components/Loader';
import Unit from './components/Unit';
import StudyUnit from './utils/StudyUnit';
import { generateStudyUnits, generateStudyUnitsIfNeeded, getAllStudyUnitsArray, getIdFromStudyUnit } from './utils/StudyUnitUtils';
import StudyUnitWithTranslations from './utils/StudyUnitWithTranslations';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '.';

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

function App() {
  const [currentTheme, setTheme] = useState(theme);
  const [t] = useTranslation("common");
  const [showLoader, setShowLoader] = useState(true);
  const [showUnitLoader, setShowUnitLoader] = useState(true);
  const [showUnit, setShowUnit] = useState(false);
  const [cards, setCards] = useState<StudyUnitWithTranslations[] | null>(null);
  const [currentStudyUnit, setCurrentStudyUnit] = useState<StudyUnitWithTranslations | null>(null);
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
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <div>
        {
          (showLoader) ?
            (<Loader title={t("app.name")} motto={t("app.motto")} hide={hide} job={job} />) : null
        }
        {(currentStudyUnit) ?
          (<div>
            {(showUnitLoader) ?
              (<Loader title={currentStudyUnit.title} motto={currentStudyUnit.text} hide={() => { setShowUnitLoader(false) }} fadeIn={true} fadeEnd={() => setShowUnit(true)}></Loader>) :
              (null)}
            {
              (showUnit) ?
                (<Unit unit={currentStudyUnit} />) :
                (null)
            } </div>) :
          (<div>
            <Top></Top>
            <StyledCarousel cards={cards} setStudyUnit={setCurrentStudyUnit}></StyledCarousel>
            <Footer>{t("app.motto")}</Footer>
          </div>)
        }
      </div>
    </ThemeProvider>
  );
}

//Card title={"Урок 1,"} text={"където ще научите, че цифрите не са само 10"} />

export default App;
