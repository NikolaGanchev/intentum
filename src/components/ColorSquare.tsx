import styled from "styled-components";
import { ColorType, determineColorBasedOnLuminosity } from "../utils/Theme";

interface ColorSquareProps {
    color: string;
}

const Square = styled.div<ColorSquareProps>`
    border: 2px solid;
    border-color: ${props => {
        const colorType: ColorType = determineColorBasedOnLuminosity(props.theme.main);
        return colorType === ColorType.Dark ? props.theme.textOnDarkBackground: props.theme.textOnLightBackground;
    }};
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.color};
    margin: 0.5rem;
    transition: all 1s ease;
`

export default function ColorSquare(props: ColorSquareProps) {
    return <Square color={props.color}></Square>
}