import { useRef, useState } from "react";
import { ColorChangeHandler, ColorResult } from "react-color";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { getColorString, Theme } from "../utils/Theme";
import Button from "./Button";
import ColorSquare from "./ColorSquare";
import Heading from "./Heading";

interface ThemePresenterProps {
    theme: Theme;
    onSelect: (theme: Theme) => any;
    isDisabled: boolean;
    deleteTheme: (theme: Theme) => any;
    colorChangeHandler: (newTheme: Theme) => void
}

const Container = styled.div`
    display: flex;
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    place-content: center;
    margin-top: 0.5rem;
`

const OuterContainer = styled.div`
    overflow-y: visible;
    overflow-x: visible;
    position: relative;
`

export default function ThemePresenter(props: ThemePresenterProps) {
    const [t, _] = useTranslation("common");
    const containerRef = useRef<any>();

    const onWheel = (e: any) => {
        const containerScrollPosition = containerRef.current.scrollLeft;
        containerRef.current.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
            behaviour: "smooth"
        });
    }

    return <div>
                <Heading>
                { /* If the name is not undefined it is shown. Otherwise, the code checks it the id is undefined. If it isn't, 
                the proper translation is shown */
                    props.theme.name ? props.theme.name: props.theme.id && t(`app.${props.theme.id}`)
                }
                </Heading>
                <OuterContainer>
                    <Container onWheel={onWheel} ref={containerRef}>
                        {Object.entries(props.theme).map((value: [string, string], index: number) => {
                            if (value[0] === "id" || value[0] === "name") return;
                            return <ColorSquare 
                                        key={index} 
                                        color={value[1]} 
                                        id={value[0]}
                                        isDisabled={!!props.theme.id}
                                        changeColor={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                                            let copy: any = {};
                                            Object.assign(copy, props.theme);
                                            copy[value[0]] = getColorString(color);
                                            props.colorChangeHandler(copy);
                                        }}/>
                        })}
                    </Container>
                </OuterContainer>
                <ButtonsContainer>
                    <Button isDisabled={props.isDisabled}
                        onClick={() => {props.onSelect(props.theme)}} 
                        text={props.isDisabled ? t("app.themeSelected"): t("app.choose")}>                            
                        </Button>
                    <Button text={t("app.delete")} onClick={() => {
                        props.deleteTheme(props.theme);
                    }} 
                    customBackgroundColor={props.theme.error}
                    isDisabled={!!props.theme.id}
                    ></Button>
                </ButtonsContainer>
        </div>
}