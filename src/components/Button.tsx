import { useState } from "react";
import styled from "styled-components";
import { ColorType, determineColorBasedOnLuminosity } from "../utils/Theme";

interface ContainerProps {
    readonly isHover: boolean | undefined;
    readonly isInverted: boolean | undefined;
    readonly customBackgroundColor: any | undefined;
};

const Container = styled.button<ContainerProps>`
    width: auto;
    height: auto;
    border: 1px solid ${props => props.customBackgroundColor? props.customBackgroundColor: props.theme.secondary};
    z-index: 1;
    color: ${props => {
        if (props.isHover) {
            return (props.isInverted ? props.theme.textSecondary : props.theme.text);
        }
        else if (!props.isHover) {
            // Calculate custom text color if there is a custom background color
            if (props.customBackgroundColor) {
                const colorType: ColorType = determineColorBasedOnLuminosity(props.customBackgroundColor);
                return colorType === ColorType.Dark ? props.theme.textOnDarkBackground: props.theme.textOnLightBackground;
            } else {
              return (props.isInverted ? props.theme.text : props.theme.textSecondary);
            }
        }
    }};
    background-color: ${props => {
        if (props.isInverted) {
            return props.theme.pure;
        }
        else {
            return props.customBackgroundColor ? props.customBackgroundColor : props.theme.secondary;
        }
    }};
    position: relative;
    transition: color 1s ease;
    cursor: pointer;
    padding-left: 2.9rem;
    padding-right: 2.9rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    &:after {
        position: absolute;
        content: "";
        width: ${props => (props.isHover) ? '100%' : '0px'};;
        height: 100%;
        left: ${props => (props.isHover) ? '0px' : 'auto'};
        top: 0px;
        right: ${props => (props.isHover) ? 'auto' : '0px'};
        direction: rtl;
        background: ${props => (props.isInverted) ? props.theme.secondary : props.theme.pure};
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

const SecondaryText = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  font-size: 1em;
`

interface ButtonProps {
    onClick: any;
    text: string;
    className?: string;
    isInverted?: boolean;
    isHover?: boolean;
    isDisabled?: boolean;
    customBackgroundColor?: string;
    children?: any;
    secondaryText?: string;
    HTMLInjection?: any;
}

export default function Button(props: ButtonProps) {
    const [isHoverInternal, setIsHoverInternal] = useState(false);

    return <Container className={props.className}
        isInverted={props.isInverted}
        isHover={isHoverInternal || props.isHover}
        onMouseEnter={() => { setIsHoverInternal(true) }}
        onMouseLeave={() => { setIsHoverInternal(false) }}
        onClick={props.onClick} disabled={props.isDisabled}
        customBackgroundColor={props.customBackgroundColor}>
        {props.HTMLInjection ?
            <Text>{props.HTMLInjection}</Text>:
            <Text>{props.text}</Text>
        }
        <SecondaryText>{props.secondaryText}</SecondaryText>
    </Container>
}