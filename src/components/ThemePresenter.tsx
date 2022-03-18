import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Delete from "../resources/Delete";
import { HiddenColors, Theme } from "../utils/Theme";
import Button from "./Button";
import ColorSquare from "./ColorSquare";
import Heading from "./Heading";

interface ThemePresenterProps {
    theme: Theme;
    onSelect: (theme: Theme) => any;
    isDisabled: boolean;
    deleteTheme: (theme: Theme) => any;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    place-content: center;
    margin-top: 0.5rem;
`

export default function ThemePresenter(props: ThemePresenterProps) {
    const [t, _] = useTranslation("common");
    const [theme, setTheme] = useState(props.theme);

    return <div>
                <Heading>
                { /* If the name is not undefined it is shown. Otherwise, the code checks it the id is undefined. If it isn't, 
                the proper translation is shown */
                    theme.name ? theme.name: theme.id && t(`app.${theme.id}`)
                }
                </Heading>
                <Container>
                    {Object.entries(theme).map((value: [string, string], index: number) => {
                        return <ColorSquare key={index} color={value[1]}></ColorSquare>
                    })}
                </Container>
                <ButtonsContainer>
                    <Button isDisabled={props.isDisabled}
                        onClick={() => {props.onSelect(theme)}} 
                        text={props.isDisabled ? t("app.themeSelected"): t("app.choose")}>                            
                        </Button>
                    <Button text={t("app.delete")} onClick={() => {
                        props.deleteTheme(theme);
                    }} 
                    customBackgroundColor={theme.error}
                    isDisabled={!!theme.id}
                    ></Button>
                </ButtonsContainer>
        </div>
}