import { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import CardCarousel, { animationLength } from './components/CardCarousel';
import Loader from './components/Loader';
import Unit from './components/Unit';
import StudyUnit from './utils/StudyUnit';
import {changeStudyUnit, generateAndGetStudyUnitsIfNeeded, generateStudyUnits} from './utils/StudyUnitUtils';
import { ThemeProvider } from 'styled-components';
import Settings from './resources/Settings';
import {lightThemeObject, darkThemeObject, HiddenColors, Theme} from './utils/Theme';
import SettingsDisplay from './components/SettingsDisplay';
import { get, set } from 'idb-keyval/dist/esm-compat';
import { GlobalStyle } from './components/GlobalStyles';
import { TagSet } from './utils/TagLoader';
import SearchBar from './components/SearchBar';
import { useHistory, useParams } from 'react-router-dom';
import Alert from './components/Alert';
import { TagsContext } from './components/TagsContext';
import {registry} from "./utils/UnitRegistry";
import {UNITS} from "./utils/UnitImports";
import Result from "./utils/Result";
import StorageKeys from "./utils/StorageKeys";
import List from './resources/List';
import Contents from './components/Contents';

const StyledCarousel = styled(CardCarousel)`
    position: relative;
    width: 100%;
    height: 85vh;
    transition: all 1s ease;
    overflow: visible;
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
    background-color: ${HiddenColors.transparent};
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

const StyledContents = styled(List)`
    width: 3rem;
    height: 3rem;
    fill: ${props => props.theme.secondary};
    cursor: pointer;
    transition: all 1s ease;
    z-index: 400;
`

const StyledContentsButton = styled.button`
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: ${HiddenColors.transparent};
    z-index: 500;
    position: relative;
    margin-left: auto;
    margin-top: 1rem;
    display: inline-flex;
    & svg:hover {
        box-sizing: content-box;
        transform-origin: center;
        transform-box: fill-box;
        height: 4.1rem;
        transition: all 1s ease;
    }
`

const StyledButton = styled.button`
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: ${HiddenColors.transparent};
    z-index: 500;
    position: relative;
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

function App() {
    const [currentTheme, setTheme] = useState(lightThemeObject);
    const [t] = useTranslation("common");
    const [tt] = useTranslation("tags");
    const [showLoader, setShowLoader] = useState(true);
    const [cards, setCards] = useState<StudyUnit[] | null>(null);
    const [currentStudyUnit, setCurrentStudyUnit] = useState<StudyUnit | null>(null);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [contentsOpen, setContentsOpen] = useState(false);
    const { unitId }: any = useParams();
    const [showIndexedDBNotSupportedWarning, setShowIndexedDBNotSupportedWarning] = useState(false);
    const tags = useContext(TagsContext);
    const history = useHistory();
    const [themes, setThemes] = useState<Theme[]>([lightThemeObject]);

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

    const resolveTheme = () => {
        get(StorageKeys.THEME).then((val: any) => {
            // val was undefined
            if (val === undefined) {
                // get browser preferences theme
                const isDarkModeOnByDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;
                // storage keys shouldn't be set if relying on the browser theme, in case the user changes it
                setTheme(isDarkModeOnByDefault? darkThemeObject: lightThemeObject);
                return;
            }

            changeTheme(val);
        });
    }

    const getThemes = async () =>  {
        const values: Theme[] | undefined = await get(StorageKeys.THEMES);
        if (values === undefined) {
            set(StorageKeys.THEMES, []);
            setThemes([lightThemeObject, darkThemeObject]);
            return;
        }

        setThemes([lightThemeObject, darkThemeObject, ...values]);
    }

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
        set(StorageKeys.THEME, theme);
    }

    const getUnitNumberFromId = (unitId: string, cards: StudyUnit[] | null) => {
        if (!cards || !unitId || unitId.trim() === "") {
            return undefined;
        }

        const normalized = unitId.trim().toLowerCase();

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id.toLowerCase() === normalized) {
                return i;
            }
        }

        return undefined;
    }

    // Carousel controller
    const [opacity, setOpacity] = useState(100);
    const [transX, setTransX] = useState(0);
    const [isTransition, setIsTransition] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const loadActiveIndexFromStorage = async () => {
        return await get(StorageKeys.SELECTED_CARD);
    }

    const resolveSelectedUnit = async (urlUnitId: string, cards: StudyUnit[] | null) => {
        const unitFromMemory: number | undefined = await loadActiveIndexFromStorage();
        const unitFromUrl = getUnitNumberFromId(urlUnitId, cards);
        if (unitFromUrl) {
            setActiveIndex(unitFromUrl);
            set(StorageKeys.SELECTED_CARD, unitFromUrl);
            return;
        } else if (unitFromMemory) {
            setActiveIndex(unitFromMemory);
            return;
        }
        else {
            setActiveIndex(0);
            return;
        }
    }

    const changeToNext = (unlockNext = false) => {
        changeToArbitrary(activeIndex + 1, unlockNext);
    }

    const changeToPrevious = () => {
        changeToArbitrary(activeIndex - 1);
    }

    const changeToArbitrary = (newActiveIndex: number, unlockNew = false, callback = () => { }) => {
        if (cards === null) {
            return;
        }
        if (newActiveIndex < 0 || newActiveIndex > cards.length - 1) {
            return;
        }
        const transitionToNew = (newActiveIndex > activeIndex) ? 300 : -300;
        setTransX(-transitionToNew);
        setOpacity(0);
        setTimeout(() => {
            requestAnimationFrame(() => {
                setIsTransition(false);
                setTransX(transitionToNew);
                setActiveIndex(newActiveIndex);
                set(StorageKeys.SELECTED_CARD, newActiveIndex);
                requestAnimationFrame(() => {
                    setIsTransition(true);
                    setOpacity(100);
                    setTransX(0);
                    history.replace(cards[newActiveIndex].id);
                    if (unlockNew && cards !== null) {
                        setTimeout(() => {
                            requestAnimationFrame(() => {
                                let copy: any = [];
                                Object.assign(copy, cards);
                                copy[newActiveIndex].unlocked = true;
                                setCards(copy);
                                changeStudyUnit(cards[newActiveIndex]);
                            })
                        }, animationLength * 1000)
                    }
                    callback();
                })
            })
        }, animationLength * 1000);
    }

    const onSelect = (id: string) => {
        if (cards == null) {
            return;
        }

        for (let i = 0; i < cards.length; i++) {
            if (id === cards[i].id) {
				if (id === cards[activeIndex].id) {
					break;
				}
                changeToArbitrary(i);
                break;
            }
        }
    }

    const job = async () => {

        const func = (result: Result<StudyUnit[]>) => {
            const onError = (result: Result<StudyUnit[]>) => {
                if (result.result != null) {
                    onLoad(result.result);
                    setShowIndexedDBNotSupportedWarning(true);
                }
                else {
                    generateStudyUnits(Array.from(UNITS.keys()))
                        .then((units: StudyUnit[]) => {
                            onLoad(units);
                            setShowIndexedDBNotSupportedWarning(true);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            }

            const onLoad = async (units: StudyUnit[]) => {
                tags.current.load(getTagSets(Array.from(UNITS.keys())));
                setCards(units);
                registry.registerAll(UNITS);
                await resolveSelectedUnit(unitId, units);
                await getThemes();
            }

            const getTagSets = (unitIds: string[]) => {
                const tags: TagSet[] = [];
                for (let unitId of unitIds) {
                    tags.push(new TagSet(unitId, tt(`tags.${unitId}`, { returnObjects: true })))
                }

                return tags;
            }

            if (result.success && result.result != null) {
                onLoad(result.result);
            }
            else {
                onError(result);
            }
        }
        resolveTheme();
        await generateAndGetStudyUnitsIfNeeded(Array.from(UNITS.keys()))
            .then(func);
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <div>
                <Alert
                    heading={t("app.warning")}
                    warning={t("app.indexedDBNotSupportedWarning")}
                    ok={t("app.ok")}
                    hide={() => { setShowIndexedDBNotSupportedWarning(false); }}
                    isShowing={showIndexedDBNotSupportedWarning} />
                <SettingsDisplay 
                    setThemes={setThemes}
                    theme={currentTheme}
                    changeTheme={changeTheme} 
                    close={() => { setSettingsOpen(false) }} 
                    isShowing={settingsOpen} 
                    themes={themes}/>
                <Contents close={() => { setContentsOpen(false) }} isShowing={contentsOpen} units={cards} onSelect={onSelect}></Contents>
                <Loader title={t("app.name")} motto={t("app.motto")} hide={hide} job={job} isShowing={showLoader} />
                {(currentStudyUnit) ?
                    (<Unit unit={currentStudyUnit} back={() => { setCurrentStudyUnit(null) }} endUnit={endUnit} />) :
                    (<div>
                        <Top>
                            <SearchBar
                                cards={cards}
                                changeToArbitrary={changeToArbitrary}
                                onSelect={onSelect} />
                            <StyledContentsButton onClick={() => { setContentsOpen(true) }} aria-label={t("app.contents")}>
                                <StyledContents>
                                </StyledContents>
                            </StyledContentsButton>
                            <StyledButton onClick={() => { setSettingsOpen(true) }} aria-label={t("app.settings")}>
                                <StyledSettings>
                                </StyledSettings>
                            </StyledButton>
                        </Top>
                        <StyledCarousel
                            cards={cards}
                            setStudyUnit={setCurrentStudyUnit}
                            activeIndex={activeIndex}
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