import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import CardCarousel, { animationLength } from './components/CardCarousel';
import Loader from './components/Loader';
import Unit from './components/Unit';
import StudyUnit from './utils/StudyUnit';
import { changeStudyUnit, generateAndGetStudyUnits, generateStudyUnitsIfNeeded, getAllStudyUnitsArray } from './utils/StudyUnitUtils';
import { ThemeProvider } from 'styled-components';
import Settings from './resources/Settings';
import { theme, darkTheme, themes } from './utils/Theme';
import SettingsDisplay from './components/SettingsDisplay';
import { get, set } from 'idb-keyval/dist/esm-compat';
import { GlobalStyle } from './components/GlobalStyles';
import TagLoader, {Tag} from './utils/TagLoader';
import SearchBar from './components/SearchBar';
import { useParams } from 'react-router-dom';
import Alert from './components/Alert';
import registerAll from './utils/UnitImports';

const StyledCarousel = styled(CardCarousel)`
  position: relative;
  width: 100%;
  height: 85vh;
  transition: all 1s ease;
  @media (max-width: 470px) {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
  }
`
const Top = styled.div`
  width: 100%;
  height: 3rem;
  position: relative;
  transition: all 1s ease;
  display: flex;
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
  width: 3rem;
  height: 3rem;
  fill: ${props => props.theme.secondary};
  cursor: pointer;
  transition: all 1s ease;
  z-index: 400;
`

const StyledButton = styled.button`
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: ${props => props.theme.transparent};
    z-index: 500;
    position: relative;
    margin-left: auto;
    margin-top: 1rem;
    margin-right: 1rem;
    display: inline-flex;
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
  height: 3rem;
  text-align: center;
  margin: 0;
  padding: 0;
  transition: all 1s ease;
  font-size: 1.2rem;
  @media (max-width: 470px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const activeIndexKey = "activeIndex";

function App() {
  const [currentTheme, setTheme] = useState(theme);
  const [t] = useTranslation("common");
  const [tt] = useTranslation("tags");
  const [showLoader, setShowLoader] = useState(true);
  const [cards, setCards] = useState<StudyUnit[] | null>(null);
  const [currentStudyUnit, setCurrentStudyUnit] = useState<StudyUnit | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { unitId }: any = useParams();
  const [showIndexedDBNotSupportedWarning, setShowIndexedDBNotSupportedWarning] = useState(false);

  useEffect(() => {
    document.title = t("app.name");
  }, [t]);

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

  const switchToUrlUnitIfPossible = (unitId: string, cards: StudyUnit[]) => {
    if (!unitId || unitId.trim() === "") {
      return;
    }

    const normalized = unitId.trim().toLowerCase();

    cards.forEach((value: StudyUnit, index: number) => {
      if (value.id.toLowerCase() === normalized) {
        setActiveIndex(index);
        set(activeIndexKey, index);
      }
    });
  }

  // Carousel controller
  const [opacity, setOpacity] = useState(100);
  const [transX, setTransX] = useState(0);
  const [isTransition, setIsTransition] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const loadActiveIndexFromStorage = async () => {
    let val: number | undefined = await get(activeIndexKey);
    if (val) {
      setActiveIndex(val);
    }
  }

  const changeToNext = (unlockNext = false) => {
    changeToArbitrary(activeIndex + 1, unlockNext);
  }

  const changeToPrevious = () => {
    changeToArbitrary(activeIndex - 1);
  }

  const changeToArbitrary = (newActiveIndex: number, unlockNew = false, callback = () => { }) => {
    const transitionToNew = (newActiveIndex > activeIndex) ? 300 : -300;
    setTransX(-transitionToNew);
    setOpacity(0);

    setTimeout(() => {

      requestAnimationFrame(() => {

        setIsTransition(false);
        setTransX(transitionToNew);
        setActiveIndex(newActiveIndex);
        set(activeIndexKey, newActiveIndex);

        requestAnimationFrame(() => {

          setIsTransition(true);
          setOpacity(100);
          setTransX(0);

          if (unlockNew && cards !== null) {

            setTimeout(() => {

              requestAnimationFrame(() => {
                let copy: any = {};
                Object.assign(copy, cards);
                copy[newActiveIndex].unlocked = true;
                setCards(copy);
                changeStudyUnit(cards[newActiveIndex], () => { });
              })
            }, animationLength * 1000)

          }

          callback();
        })
      })
    }, animationLength * 1000);
  }


  const job = async () => {

    const func = async (success: boolean) => {
      const onError = () => {
        setShowIndexedDBNotSupportedWarning(true);
        generateAndGetStudyUnits((units: StudyUnit[]) => {
          onLoad(units);
        });
      }

      const onLoad = async (units: StudyUnit[]) => {
        TagLoader.load(getTags(units));
        setCards(units);
        await loadActiveIndexFromStorage();
        switchToUrlUnitIfPossible(unitId, units);
        registerAll();
      }

      const getTags = (units: StudyUnit[]) => {
        const tags: Tag[] = [];
        for (let unit of units) {
          tags.push(new Tag(unit, tt(`tags.${unit.id}`, { returnObjects: true })))
        }

        return tags;
      }

      if (success) {
        const callback = async (units: StudyUnit[] | null) => {
          if (units == null) {
            await onError();
          }
          else {
            await onLoad(units);
          }
        };
        await getAllStudyUnitsArray(callback);
      }
      else {
        onError();
      }
    }

    await generateStudyUnitsIfNeeded(func);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <div>
          <Alert
            heading={t("app.warning")}
            warning={t("app.indexedDBNotSupportedWarning")}
            ok={t("app.ok")}
            hide={() => { setShowIndexedDBNotSupportedWarning(false) }}
            isShowing={ showIndexedDBNotSupportedWarning } />
          <SettingsDisplay theme={currentTheme === darkTheme ? themes.darkTheme : themes.theme}
          changeTheme={changeTheme} close={() => {setSettingsOpen(false)}} isShowing={settingsOpen}/>
        <Loader title={t("app.name")} motto={t("app.motto")} hide={hide} job={job} isShowing={showLoader}/>
        {(currentStudyUnit) ?
          (<Unit unit={currentStudyUnit} back={() => { setCurrentStudyUnit(null) }} endUnit={endUnit} />) :
          (<div>
            <Top>
              <SearchBar
                cards={cards}
                changeToArbitrary={changeToArbitrary} />
              <StyledButton onClick={() => { setSettingsOpen(true) }} aria-label={t("app.settings")}>
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
              opacity={opacity} />
            <Footer>{t("app.motto")}</Footer>
          </div>)
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
