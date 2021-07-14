
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components"
import Padlock from "../resources/Padlock"

const unlockDuration = 1.5;

const unlockAnimation = keyframes`
    100% {
        transform: translateY(-30%);
    }
`

interface PadlockProps {
    readonly isUnlocking: boolean;
}

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 8rem;
    margin-top: 3rem;
`

const LockContainer = styled.div<PadlockProps>`
    z-index: 3;
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 6rem;
    display: flex;
    place-content: center;
    background: ${props => props.theme.main};
    box-shadow: 0px -50px 80px ${props => props.theme.main};
    transition: all ${unlockDuration}s ease;
    opacity: ${props => props.isUnlocking ? '0%' : '100%'}; 
`

const animation = () =>
    // TODO linear forwards
    css` ${unlockAnimation} ${unlockDuration}s`

const StyledPadlock = styled(Padlock) <PadlockProps>`
    overflow: visible;
    width: 5rem;
    height: 5rem;
    margin-bottom: 1rem;

    & #padlock-shackle {
        transform-origin: 80% left;
        transform-box: fill-box;
        animation: ${props => props.isUnlocking ? animation : 'none'};
        animation-fill-mode: forwards;
    }
`

export default function Lock(props: any) {
    const [isLocked, setIsLocked] = useState(true);
    const [isUnlocking, setIsUnlocking] = useState(false);

    useEffect(() => {
        if (props.isLocked) {
            setIsLocked(true);
        }
        else {
            setIsUnlocking(true);
            setTimeout(() => {
                setIsLocked(false);
            }, unlockDuration * 1000)
        }
    }, [props.isLocked]);


    return <div>
        {(isLocked && props.children) ?
            (
                <Container><LockContainer isUnlocking={isUnlocking}>
                    <StyledPadlock isUnlocking={isUnlocking}>
                    </StyledPadlock>
                </LockContainer>
                    {props.children[0]}</Container>) :
            (props.children)
        }
    </div>
}