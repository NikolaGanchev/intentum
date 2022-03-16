import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Theme } from "../utils/Theme";
import ColorSquare from "./ColorSquare";
import Heading from "./Heading";

interface ThemePresenterProps {
    theme: Theme;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

export default function ThemePresenter(props: ThemePresenterProps) {
    const [t, _] = useTranslation("common");

    return <div>
        <Heading>{ /* If the name is not undefined it is shown. Otherwise, the code checks it the id is undefined. If it isn't, 
        the proper translation is shown */
        props.theme.name ? props.theme.name: props.theme.id && t(`app.${props.theme.id}`)}</Heading>
        <Container>{Object.entries(props.theme).map((value: [string, string]) => {
            return <ColorSquare color={value[1]}></ColorSquare>
    })}</Container>
    </div>
}