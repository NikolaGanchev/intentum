import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Result from "../utils/Result";
import { areThemesEqual, Theme } from "../utils/Theme";
import Button from "./Button";
import Modal from "./Modal";
import ThemePresenter from "./ThemePresenter";

interface ThemeSelectorProps {
    close: any;
    isShowing: boolean;
    themes: Theme[];
    onSelect: (theme: Theme) => any;
    currentTheme: Theme;
    createTheme: () => any;
    deleteTheme: (theme: Theme) => any;
    modifyTheme: (newTheme: Theme) => void
    changeName: (theme: Theme, newName: string) => Result<null>;
}

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    place-content: center;
    margin-top: 1rem;
`

export default function ThemeSelector(props: ThemeSelectorProps) {
    const [t, _] = useTranslation("common");

    const onSelect = (value: Theme) => {
        props.onSelect(value);
    }

    return <Modal 
                allowScroll={true} 
                heading={t("app.colorTheme")} 
                close={() => { props.close() }} 
                isShowing={props.isShowing}
                customWidth={50}
                >
            <ButtonsContainer>
                <Button text={t("app.createTheme")} onClick={() => {props.createTheme()}}></Button>
            </ButtonsContainer>
            {props.themes.map((theme: Theme) => {
                return <ThemePresenter
                    changeName={props.changeName}
                    modifyTheme={props.modifyTheme}
                    deleteTheme={props.deleteTheme} 
                    isDisabled={areThemesEqual(theme, props.currentTheme)} 
                    onSelect={onSelect} 
                    theme={theme}
                    key={theme.id ? theme.id: theme.name}></ThemePresenter>
            })}
        </Modal>
} 