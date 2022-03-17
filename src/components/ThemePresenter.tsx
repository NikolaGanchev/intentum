import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Theme } from "../utils/Theme";
import Button from "./Button";
import ColorSquare from "./ColorSquare";
import Heading from "./Heading";

interface ThemePresenterProps {
    theme: Theme;
    onSelect: (theme: Theme) => any;
    isDisabled: boolean;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

export default function ThemePresenter(props: ThemePresenterProps) {
    const [t, _] = useTranslation("common");
    const [theme, setTheme] = useState(props.theme);
    const [isHover, setIsHover] = useState(false);

    return <Button isDisabled={props.isDisabled}
                isInverted={true} 
                isHover={isHover}
                onClick={() => {props.onSelect(theme)}} text="" HTMLInjection={
                    <div onMouseEnter={() => { setIsHover(true) }}
                        onMouseLeave={() => { setIsHover(false) }}>
                        <Heading>
                        { /* If the name is not undefined it is shown. Otherwise, the code checks it the id is undefined. If it isn't, 
                        the proper translation is shown */
                            theme.name ? theme.name: theme.id && t(`app.${theme.id}`)
                        }
                        </Heading>
                        <Container>
                            {Object.entries(theme).map((value: [string, string]) => {
                                return <ColorSquare isHover={isHover} color={value[1]}></ColorSquare>
                            })}
                        </Container>
                    </div>}>
            </Button>
}