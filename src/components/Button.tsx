import { useState } from "react";
import styled from "styled-components";

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
                // convert hex to rgb
                const hexWithoutFirstSymbol = props.customBackgroundColor.replace("#", "");
                const int = parseInt(hexWithoutFirstSymbol, 16);
                const red = (int >> 16) & 255;
                const green = (int >> 8) & 255;
                const blue = int & 255;
                // calculate luminocity
                const luminosity = 0.2126*red + 0.7152*green + 0.0722*blue;
                // return color based on luminosity
                return luminosity > 128 ? props.theme.textBlack: props.theme.textWhite;
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

interface ButtonProps {
    onClick: any;
    text: string;
    className?: string;
    isInverted?: boolean;
    isHover?: boolean;
    isDisabled?: boolean;
    customBackgroundColor?: string;
    children?: any;
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
        <Text>{props.text}</Text>
    </Container>
}