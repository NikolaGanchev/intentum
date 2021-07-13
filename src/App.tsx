import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import CardCarousel from './components/CardCarousel';
import Loader from './components/Loader';
import Unit from './components/Unit';
import StudyUnit from './utils/StudyUnit';
import { changeStudyUnit, generateStudyUnits, generateStudyUnitsIfNeeded, getAllStudyUnitsArray, getIdFromStudyUnit } from './utils/StudyUnitUtils';
import { ThemeProvider } from 'styled-components';
import Settings from './resources/Settings';
import { theme, darkTheme, themes } from './utils/Theme';
import SettingsDisplay from './components/SettingsDisplay';
import { get, set } from 'idb-keyval';

const StyledCarousel = styled(CardCarousel)`
  position: relative;
  width: 100%;
  height: 85vh;
  transition: all 1s ease;
`
const Top = styled.div`
  width: 100%;
  height: 5vh;
  position: relative;
  transition: all 1s ease;
`

const animation = keyframes`
  0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const StyledSettings = styled(Settings)`
  width: 3vw;
  height: 3vw;
  fill: ${props => props.theme.secondary};
  position: absolute;
  right: 1rem;
  top: 1rem;
  transition: all 3s ease;
  cursor: pointer;
  transition: all 1s ease;
`

const StyledButton = styled.button`
    width: 5vw;
    height: 5vw;
    border: none;
    background-color: ${props => props.theme.main};
    & svg:hover {
    box-sizing: content-box;
    transform-origin: center;
    transform-box: fill-box;
    animation: ${animation} 5s infinite forwards linear;
    transition: all 1s ease;
  }
`

const Footer = styled.div`
  width: 100%;
  height: 10vh;
  text-align: center;
  margin: 0;
  padding: 0;
  transition: all 1s ease;
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${(props: any) => props.theme.text};
    background-color: ${(props: any) => props.theme.main};;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    transition: all 1s ease;
  }
`;
const animationLength = 0.25;

function App() {
  const [currentTheme, setTheme] = useState(theme);
  const [t] = useTranslation("common");
  const [showLoader, setShowLoader] = useState(true);
  const [showUnitLoader, setShowUnitLoader] = useState(true);
  const [showUnit, setShowUnit] = useState(false);
  const [cards, setCards] = useState<StudyUnit[] | null>(null);
  const [currentStudyUnit, setCurrentStudyUnit] = useState<StudyUnit | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const hide = () => {
    setShowLoader(false);
  }
  const endUnit = () => {
    setCurrentStudyUnit(null);
    setTimeout(() => {
      changeToNext(true);
    }, 500);
  }

  get("theme").then((val: string) => {
    if (val === "dark") {
      setTheme(darkTheme);
    }
    else {
      setTheme(theme);
    }
  });

  const changeTheme = (isDark: boolean) => {
    if (isDark) {
      setTheme(darkTheme);
      set("theme", themes.darkTheme);
    }
    else {
      setTheme(theme);
      set("theme", themes.theme);
    }
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
            setCards(units);
          }
        };
        await getAllStudyUnitsArray(callback);


      }
      else {
        await generateStudyUnits(func);
      }
    }

    await generateStudyUnits(func);
  }

  // Carousel controller
  const [opacity, setOpacity] = useState(100);
  const [transX, setTransX] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeToNext = (unlockNext = false) => {
    setTransX(-300);
    setOpacity(0);
    setTimeout(() => {
      requestAnimationFrame(() => {
        setIsTransition(false);
        setTransX(300);
        setActiveIndex(activeIndex + 1);
        requestAnimationFrame(() => {
          setIsTransition(true);
          setOpacity(100);
          setTransX(0);
          if (unlockNext && cards !== null) {
            let copy: any = {};
            Object.assign(copy, cards);
            copy[activeIndex + 1].unlocked = true;
            setCards(copy);
            changeStudyUnit(cards[activeIndex + 1], () => { });
          }
        })
      })
    }, animationLength * 1000);
  }

  const changeToPrevious = () => {
    setTransX(300);
    setOpacity(0);
    setTimeout(() => {
      requestAnimationFrame(() => {
        setIsTransition(false);
        setTransX(-300);
        setActiveIndex(activeIndex - 1);
        requestAnimationFrame(() => {
          setIsTransition(true);
          setOpacity(100);
          setTransX(0);
        })
      })
    }, animationLength * 1000);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <div>
        {(settingsOpen) ?
          <SettingsDisplay theme={currentTheme === darkTheme ? themes.darkTheme : themes.theme} changeTheme={changeTheme} close={() => { setSettingsOpen(false) }}></SettingsDisplay> : (null)
        }
        {
          (showLoader) ?
            (<Loader title={t("app.name")} motto={t("app.motto")} hide={hide} job={job} />) : null
        }
        {(currentStudyUnit) ?
          (<div>
            {(showUnitLoader) ?
              (<Loader
                title={tl(`${getIdFromStudyUnit(currentStudyUnit)}.title`)}
                motto={tl(`${getIdFromStudyUnit(currentStudyUnit)}.text`)}
                hide={() => { setShowUnitLoader(false) }}
                fadeIn={true} fadeEnd={() => setShowUnit(true)}></Loader>) :
              (null)}
            {
              (showUnit) ?
                (<Unit unit={currentStudyUnit} back={() => { setCurrentStudyUnit(null) }} endUnit={endUnit} />) :
                (null)
            } </div>) :
          (<div>
            <Top>
              <StyledButton onClick={() => { setSettingsOpen(true) }}>
                <StyledSettings>
                </StyledSettings>
              </StyledButton>
            </Top>
            <StyledCarousel
              cards={cards}
              setStudyUnit={setCurrentStudyUnit}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              changeToPrevious={changeToPrevious}
              changeToNext={changeToNext}
              transX={transX}
              isTransition={isTransition}
              opacity={opacity}></StyledCarousel>
            <Footer>{t("app.motto")}</Footer>
          </div>)
        }
      </div>
    </ThemeProvider>
  );
}

//Card title={"Урок 1,"} text={"където ще научите, че цифрите не са само 10"} />

export default App;
