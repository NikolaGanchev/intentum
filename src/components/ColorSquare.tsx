import styled from "styled-components";

interface ColorSquareProps {
    color: string;
    isHover: boolean;
}

const Square = styled.div<ColorSquareProps>`
    border: 2px solid;
    border-color: ${props => props.isHover? props.theme.pure: props.theme.secondary};
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.color};
    margin: 0.5rem;
    transition: all 1s ease;
`

export default function ColorSquare(props: ColorSquareProps) {
    return <Square isHover={props.isHover} color={props.color}></Square>
}