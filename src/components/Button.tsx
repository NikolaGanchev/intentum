import { useState } from "react";
import styled from "styled-components";

interface ButtonProps {
    readonly isHover: boolean;
    readonly isActive: boolean;
    readonly isInverted: boolean;
    readonly customBackgroundColor: any;
};

const Container = styled.button<ButtonProps>`
    width: auto;
    height: auto;
    border: 1px solid ${props => props.theme.secondary};
    z-index: 1;
    color: ${props => {
        if (props.isHover && props.isActive) {
            return (props.isInverted ? props.theme.textSecondary : props.theme.text);
        }
        else if (props.isHover && !props.isActive) {
            return (props.isInverted ? props.theme.text : props.theme.textSecondary);
        }
        else if (!props.isHover && props.isActive) {
            return (props.isInverted ? props.theme.text : props.theme.textSecondary);
        }
        else if (!props.isHover && !props.isActive) {
            return (props.isInverted ? props.theme.textSecondary : props.theme.text);
        }
    }};
    background-color: ${props => {
        if (props.isActive) {
            return props.customBackgroundColor? props.customBackgroundColor: props.theme.secondary;
        }
        else {
            return props.theme.pure;
        }
    }};
    position: relative;
    transition: color 1s ease;
    cursor: pointer;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    &:after {
        position: absolute;
        content: "";
        width: ${props => (props.isHover) ? '100%' : '0px'};;
        height: 100%;
        left: ${props => (props.isHover) ? '0px' : 'auto'};
        top: 0px;
        right: ${props => (props.isHover) ? 'auto' : '0px'};
        direction: rtl;
        background: ${props => (props.isActive) ? props.theme.pure : props.theme.secondary};
        z-index: -1;
        transition: all 1s ease;
    }
    &:disabled {
        transition: all 1s ease;
        opacity: 50%;
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

    return <Container className={props.className}
                      isInverted={props.isInverted}
                      isHover={isHover || props.isHover}
                      isActive={props.isActive !== undefined ? props.isActive : true}
                      onMouseEnter={() => { setIsHover(true) }}
                      onMouseLeave={() => { setIsHover(false) }}
                      onClick={props.onClick} disabled={props.isDisabled}
                      customBackgroundColor={props.customBackgroundColor}>
        <Text>{props.text}</Text>
    </Container>
}