import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ColorType, determineColorBasedOnLuminosity } from "../utils/Theme";
import TextBlock from "./TextBlock";

interface SquareProps {
    color: string;
}

interface ColorSquareProps {
    color: string;
    id: string;
}

const Container = styled.div`
    display: inline-flex;
    width: 5.4rem;
    margin: 0.5rem;
    text-align: center;
    place-items: center;
    flex-direction: column;
`

const Square = styled.div<SquareProps>`
    border: 2px solid;
    border-color: ${props => {
        const colorType: ColorType = determineColorBasedOnLuminosity(props.theme.main);
        return colorType === ColorType.Dark ? props.theme.textOnDarkBackground: props.theme.textOnLightBackground;
    }};
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.color};
    transition: all 1s ease;
`

const StyledTextBlock = styled(TextBlock)`
    height: auto;
    word-wrap: break-word;
    text-indent: 0rem;
    font-size: 1rem;
    width: 5.4rem;
`

export default function ColorSquare(props: ColorSquareProps) {
    const [t, _] = useTranslation("common");

    return <Container>
        <Square color={props.color}></Square>
        <StyledTextBlock>
            {t(`app.colors.${props.id}`)}
        </StyledTextBlock>
    </Container>
}