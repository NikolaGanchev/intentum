import { set } from "idb-keyval";
import { useState } from "react";
import { useTranslation } from "react-i18next"
import styled from "styled-components";
import { languages } from "../utils/Languages";
import { themes } from "../utils/Theme";
import Modal from "./Modal"

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
    font-size: 1.5vw;
    padding: 0.5rem;
    overflow: visible;
`

const Toggle = styled.label`
    position: relative;
    display: inline-block;
    width: 4vw;
    height: 2.2vw;
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
        height: 1.8vw;
        width: 1.8vw;
        left: 0.2vw;
        bottom: 0.2vw;
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
        transform: translateX(1.8vw);
    }
`


export default function SettingsDisplay(props: any) {
    const [t, i18n] = useTranslation("common");
    const [, i18nl] = useTranslation("lessons");
    const [value, setValue] = useState(t(`app.${i18n.language}`).toString());
    const [themeValue, setThemeValue] = useState(props.theme === themes.darkTheme);
    const onLanguageChange = (e: any) => {
        const lang = languages[e.target.selectedIndex];
        i18n.changeLanguage(lang);
        i18nl.changeLanguage(lang);
        setValue(t(`app.${lang}`));
        set("lang", lang);
    }


    return <Modal heading={t("app.settings")} close={() => { props.close() }}>
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

    </Modal>
}