
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { css, keyframes } from "styled-components"
import Padlock from "../resources/Padlock"
import TextBlock from "./TextBlock";

const unlockDuration = 0.85;

const unlockAnimation = keyframes`
    100% {
        transform: translateY(-30%);
    }
`

interface PadlockProps {
    readonly isUnlocking: boolean;
}

const Container = styled.div<PadlockProps>`
    width: 100%;
    position: relative;
    height: ${props => props.isUnlocking ? "auto" : "12rem"};
    margin-top: -0.5rem;
    overflow: hidden;
`

const LockContainer = styled.div<PadlockProps>`
    z-index: 3;
    width: 100%;
    position: absolute;
    bottom: ${props => props.isUnlocking ? "auto" : "0px"};
    top: ${props => props.isUnlocking ? "0px" : "auto"};
    height: 10rem;
    display: flex;
    place-content: center;
    background: ${props => props.theme.main};
    box-shadow: 0px -50px 80px ${props => props.theme.main};
    transition: all ${unlockDuration}s ease;
    opacity: ${props => props.isUnlocking ? '0%' : '100%'};
    flex-direction: column;
    text-align: center;
`

const animation = () =>
    // TODO linear forwards
    css` ${unlockAnimation} ${unlockDuration}s`

const StyledPadlock = styled(Padlock) <PadlockProps>`
    overflow: visible;
    width: 5rem;
    height: 5rem;
    margin: auto;

    & #padlock-shackle {
        transform-origin: 80% left;
        transform-box: fill-box;
        animation: ${props => props.isUnlocking ? animation : 'none'};
        animation-fill-mode: forwards;
    }
`

interface LockProps {
    children: any;
    isLocked: boolean;
}

export default function Lock(props: LockProps) {
    const [isViewLocked, setIsViewLocked] = useState(true);
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [t] = useTranslation("common");

    // Handle unlocking
    useEffect(() => {
        if (props.isLocked) {
            setIsViewLocked(true);
        }
        else {
            setIsUnlocking(true);
            setTimeout(() => {
                setIsViewLocked(false);
            }, unlockDuration * 1000)
        }
    }, [props.isLocked]);

    return <div>
        {(isViewLocked && props.children) ?
            (
                <Container isUnlocking={isUnlocking}>
                    <LockContainer isUnlocking={isUnlocking}>
                        <StyledPadlock isUnlocking={isUnlocking}>
                        </StyledPadlock>
                        <TextBlock>{t("app.continueNotice")}</TextBlock>
                    </LockContainer>
                    {props.children}
                </Container>) :
            (props.children)
        }
    </div>
}