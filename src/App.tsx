import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import CardCarousel, { animationLength } from './components/CardCarousel';
import Loader from './components/Loader';
import Unit from './components/Unit';
import StudyUnit from './utils/StudyUnit';
import {changeStudyUnit, generateAndGetStudyUnitsIfNeeded, generateStudyUnits} from './utils/StudyUnitUtils';
import { ThemeProvider } from 'styled-components';
import Settings from './resources/Settings';
import {theme, darkTheme, Themes} from './utils/Theme';
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
    background-color: ${props => props.theme.transparent};
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
    const tags = useContext(TagsContext);
    const history = useHistory();

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

    get(StorageKeys.THEME).then((val: string) => {
        if (val === Themes.darkTheme) {
            setTheme(darkTheme);
        }
        else {
            setTheme(theme);
        }
    });

    const changeTheme = (isDark: boolean) => {
        if (isDark) {
            setTheme(darkTheme);
            set(StorageKeys.THEME, Themes.darkTheme);
        }
        else {
            setTheme(theme);
            set(StorageKeys.THEME, Themes.theme);
        }
    }

    const switchToUrlUnitIfPossible = (unitId: string, cards: StudyUnit[]) => {
        if (!unitId || unitId.trim() === "") {
            return;
        }

        const normalized = unitId.trim().toLowerCase();

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id.toLowerCase() === normalized) {
                setActiveIndex(i);
                set(StorageKeys.SELECTED_CARD, i);
                break;
            }
        }
    }

    // Carousel controller
    const [opacity, setOpacity] = useState(100);
    const [transX, setTransX] = useState(0);
    const [isTransition, setIsTransition] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const loadActiveIndexFromStorage = async () => {
        let val: number | undefined = await get(StorageKeys.SELECTED_CARD);
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
                history.replace(cards[newActiveIndex].id);

                requestAnimationFrame(() => {

                    setIsTransition(true);
                    setOpacity(100);
                    setTransX(0);

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
                setShowIndexedDBNotSupportedWarning(true);
                if (result.result != null) {
                    onLoad(result.result);
                }
                else {
                    generateStudyUnits(Array.from(UNITS.keys()))
                        .then((units: StudyUnit[]) => {
                            onLoad(units);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            }

            const onLoad = async (units: StudyUnit[]) => {
                tags.current.load(getTagSets(Array.from(UNITS.keys())));
                setCards(units);
                await loadActiveIndexFromStorage();
                switchToUrlUnitIfPossible(unitId, units);
                registry.registerAll(UNITS);
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
                    hide={() => { setShowIndexedDBNotSupportedWarning(false) }}
                    isShowing={showIndexedDBNotSupportedWarning} />
                <SettingsDisplay theme={currentTheme === darkTheme ? Themes.darkTheme : Themes.theme}
                    changeTheme={changeTheme} close={() => { setSettingsOpen(false) }} isShowing={settingsOpen} />
                <Loader title={t("app.name")} motto={t("app.motto")} hide={hide} job={job} isShowing={showLoader} />
                {(currentStudyUnit) ?
                    (<Unit unit={currentStudyUnit} back={() => { setCurrentStudyUnit(null) }} endUnit={endUnit} />) :
                    (<div>
                        <Top>
                            <SearchBar
                                cards={cards}
                                changeToArbitrary={changeToArbitrary}
                                onSelect={onSelect} />
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
