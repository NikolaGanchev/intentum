import { useState } from "react";
import styled from "styled-components";

interface ButtonProps {
    readonly isHover: boolean;
};

const Container = styled.button<ButtonProps>`
    width: 10vw;
    height: 2.5vw;
    border: 1px solid ${props => props.theme.secondary};
    z-index: 1;
    color: ${props => (props.isHover) ? props.theme.text : props.theme.textSecondary};
    background-color: ${props => props.theme.secondary};
    position: relative;
    transition: color 1s ease;
    cursor: pointer;
    &:after {
        position: absolute;
        content: "";
        width: ${props => (props.isHover) ? '100%' : '0px'};;
        height: 100%;
        left: ${props => (props.isHover) ? '0px' : 'auto'};
        top: 0px;
        right: ${props => (props.isHover) ? 'auto' : '0px'};
        direction: rtl;
        background: ${props => props.theme.pure};
        z-index: -1;
        transition: all 1s ease;
    }
`

const Text = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  font-size: 1.5em;
`

export default function Button(props: any) {
    const [isHover, setIsHover] = useState(false);

    return <Container className={props.className} isHover={isHover} onMouseEnter={() => { setIsHover(true) }} onMouseLeave={() => { setIsHover(false) }} onClick={props.onClick}>
        <Text>{props.text}</Text>
    </Container>
}