
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components"
import Padlock from "../resources/Padlock"

const unlockDuration = 1.5;
const disappearDuration = 1;

const unlockAnimation = keyframes`
    60% {
        transform: translateY(-30%);
    }
    100% {
        opacity: 0%;
        display: none;
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

const LockContainer = styled.div`
    z-index: 3;
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 6vw;
    display: flex;
    place-content: center;
    background: ${props => props.theme.main};
    box-shadow: 0px -50px 80px ${props => props.theme.main};
    transition: all ${disappearDuration} ease;
    opacity: 100%; 
`

const animation = () =>
    // TODO linear forwards
    css` ${unlockAnimation} ${unlockDuration}s`

const StyledPadlock = styled(Padlock) <PadlockProps>`
    overflow: visible;
    width: 5vw;
    height: 5vw;
    margin-bottom: 1vw;

    & #padlock-shackle {
        transform-origin: 80% left;
        transform-box: fill-box;
        animation: ${props => props.isUnlocking ? animation : 'none'};
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
                <Container><LockContainer>
                    <StyledPadlock isUnlocking={isUnlocking}>
                    </StyledPadlock>
                </LockContainer>
                    {props.children[0]}</Container>) :
            (props.children)
        }
    </div>
}