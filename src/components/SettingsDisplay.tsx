import { set, clear } from "idb-keyval/dist/esm-compat";
import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next"
import styled from "styled-components";
import { languages } from "../utils/Languages";
import { Themes } from "../utils/Theme";
import Modal from "./Modal";
import Button from "./Button";
import WarningModal from "./WarningModal";
import { TagsContext } from "./TagsContext";
import { TagSet } from "../utils/TagLoader";
import {UNITS} from "../utils/UnitImports";
import StorageKeys from "../utils/StorageKeys";

const Setting = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    overflow: visible;
`

const SettingName = styled.h4`
    line-height: 1.6rem;
    font-size: 1.3rem;
    display: inline-block;
    width: auto;
`

const SettingActionContainer = styled.div`
    display: inline-flex;
    width: auto;
    place-items: center;
    margin-left: auto;
`

const StyledSelect = styled.select`
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.text};
    line-height: 1.6rem;
    font-size: 1.5rem;
    padding: 0.5rem;
    overflow: visible;
`

const Toggle = styled.label`
    position: relative;
    display: inline-block;
    width: 4rem;
    height: 2.2rem;
    & input {
        opacity: 0;
        width: 0;
        height: 0;
    }
`

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.secondary};
    transition: .4s;

    &::before {
        position: absolute;
        content: "";
        height: 1.8rem;
        width: 1.8rem;
        left: 0.2rem;
        bottom: 0.2rem;
        background-color: ${props => props.theme.pure};
        transition: .4s;
    }
`

const StyledInput = styled.input`
    &:checked + ${Slider} {
        background-color: ${props => props.theme.secondary};
    }

    &:focus + ${Slider} {
        box-shadow: 0 0 1px ${props => props.theme.secondary};
    }

    &:checked + ${Slider}:before {
        transform: translateX(1.8rem);
    }
`

interface SettingsDisplayProps {
    theme: string;
    changeTheme: any;
    close: any;
    isShowing: boolean;
}

export default function SettingsDisplay(props: SettingsDisplayProps) {
    const [t, i18n] = useTranslation("common");
    const [, i18nl] = useTranslation("lessons");
    const [tt, i18nt] = useTranslation("tags");
    const [value, setValue] = useState(t(`app.${i18n.language}`).toString());
    const [themeValue, setThemeValue] = useState(props.theme === Themes.darkTheme);
    const [clearWarningIsShown, setClearWarningIsShown] = useState(false);
    const tags = useContext(TagsContext);
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallDisabled, setIsInstallDisabled] = useState(false);

    useEffect(() => {
        setThemeValue(props.theme === Themes.darkTheme);
    }, [props.theme])

    const onLanguageChange = (e: any) => {
        const lang = languages[e.target.selectedIndex];
        i18n.changeLanguage(lang);
        i18nl.changeLanguage(lang);
        i18nt.changeLanguage(lang);
        setValue(t(`app.${lang}`));
        set(StorageKeys.LANGUAGE, lang);
        tags.current.clear();
        tags.current.load(getTagSets(Array.from(UNITS.keys())));
    }

    const getTagSets = (unitIds: string[]) => {
        const tags: TagSet[] = [];
        for (let unitId of unitIds) {
            tags.push(new TagSet(unitId, tt(`tags.${unitId}`, { returnObjects: true })))
        }

        return tags;
    }

    const clearAnswer = (answer: boolean) => {

        setClearWarningIsShown(() => {

            if (answer) {
                clear().then(_ => {
                    window.location.reload();
                });
            }

            return false
        });
    };

    useEffect(() => {
        const isPWAStartingInstalled = () => {
            const isStartingInstalled = window.matchMedia('(display-mode: standalone)').matches;
            if (document.referrer.startsWith('android-app://')) {
                return true;
            } //@ts-ignore
            else if (navigator.standalone || isStartingInstalled) {
                // .standalone doesn't exist in the navigator type definition
                return true;
            }
            return false;
        }

        window.addEventListener('beforeinstallprompt', (event) => {
            event.preventDefault();
            if (isPWAStartingInstalled()) {
                return;
            }
            setIsInstallDisabled(false);
            setDeferredPrompt(event);
        });

        window.addEventListener('appinstalled', () => {
            setDeferredPrompt(null);
        });
    }, [])

    const install = async () => {
        deferredPrompt.prompt();

        setIsInstallDisabled(true);

        const {outcome} = await deferredPrompt.userChoice;
    }

    return <Modal heading={t("app.settings")} close={() => { props.close() }} isShowing={props.isShowing}>
        <Setting>
            <SettingName>
                {t("app.languageSetting")}
            </SettingName>
            <SettingActionContainer>
                <StyledSelect
                    onChange={onLanguageChange}
                    value={value}>
                    {languages.map((lang: string, i: number) => {
                        return <option key={i}>{t(`app.${lang}`)}</option>
                    })}
                </StyledSelect>
            </SettingActionContainer>
        </Setting>
        <Setting>
            <SettingName>
                {t("app.themeSetting")}
            </SettingName>
            <SettingActionContainer>
                <Toggle>
                    <StyledInput type="checkbox" checked={themeValue}
                        onChange={(e: any) => {
                            props.changeTheme(e.target.checked);
                            setThemeValue(e.target.checked);
                        }} />
                    <Slider></Slider>
                </Toggle>
            </SettingActionContainer>
        </Setting>
        {deferredPrompt &&
            <Setting>
                <SettingName>
                    {t("app.installation")}
                </SettingName>
                <SettingActionContainer>
                    <Button text={t("app.install")} isDisabled={isInstallDisabled} onClick={() => {install()}}></Button>
                </SettingActionContainer>
            </Setting>
        }
        <Setting>
            <WarningModal
                heading={t("app.warning")}
                warning={t("app.clearWarning")}
                yes={t("app.yes")}
                no={t("app.no")}
                answer={clearAnswer} isShowing={clearWarningIsShown} />
            <SettingName>
                {t("app.clearSetting")}
            </SettingName>
            <SettingActionContainer>
                <Button text={t("app.clear")} onClick={() => { setClearWarningIsShown(true) }}></Button>
            </SettingActionContainer>
        </Setting>
    </Modal>
}