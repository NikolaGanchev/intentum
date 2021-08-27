import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styled, { css, keyframes } from "styled-components"
import Padlock from "../resources/Padlock"
import { changeStudyUnit } from "../utils/StudyUnitUtils"
import Button from "./Button"
import WarningModal from "./WarningModal"

const Container = styled.div`
    position: relative;
    width: 24rem;
    height: 32rem;
    background-color: ${props => props.theme.pure};
    border: 1px solid ${props => props.theme.secondary};
    box-sizing: border-box;
    box-shadow: -10px -10px 50px 5px ${props => props.theme.shadow}, 10px 10px 50px 5px ${props => props.theme.shadow};
    @media only screen and (min-height: 768px) and (max-width: 700px) {
        height: 37rem;
    }
    @media only screen and (min-height: 900px) and (max-width: 700px) {
          height: 40rem;
    }
`

const Title = styled.h1`
    color: ${props => props.theme.text};
    font-size: 1.4rem;
    font-weight: normal;
    padding: 15px;
    margin: 0px;
    margin-top: 1vw;
`

const Text = styled.h2`
    color: ${props => props.theme.text};
    font-size: 1.5rem;
    font-weight: normal;
    padding: 15px;
    padding-top: 0px;
    padding-left: 5px;
    text-indent: 10px;
    margin: 0px;
`

const StyledButton = styled(Button)`
    position: absolute;
    left: 50%;
    bottom: 1%;
    transform : translate(-50%, -50%);
`

const unlockDuration = 1.5;

const unlockAnimation = keyframes`
    100% {
        transform: translateY(-30%);
    }
`
interface PadlockProps {
    readonly isUnlocking: boolean;
}

const ContainerLock = styled.div<PadlockProps>`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 8rem;
    margin-top: 3rem;
    cursor: pointer;
    pointer-events: ${props => props.isUnlocking ? `none` : 'all'};
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
    margin: auto;
    
    & #padlock-shackle {
        transform-origin: 80% left;
        transform-box: fill-box;
        animation: ${props => props.isUnlocking ? animation : 'none'};
        animation-fill-mode: forwards;
    }
`

export default function Card(props: any) {
    const [t] = useTranslation("common");
    const [isUnlocked, setIsUnlocked] = useState(props.unit.unlocked);
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [warningIsShown, setWarningIsShown] = useState(false);

    const unlock = () => {
        setIsUnlocking(true);
        setTimeout(() => {
            props.unit.unlocked = true;
            changeStudyUnit(props.unit, () => { });
            setIsUnlocked(true);
            setIsUnlocking(false);
        }, unlockDuration * 1000)
    }

    useEffect(() => {
        setIsUnlocked(props.unit.unlocked);
    }, [props.unit.unlocked])

    useEffect(() => {
        setWarningIsShown(false);
    }, [props.unit])

    const answer = (answer: boolean) => {
        if (answer) {
            unlock();
        }

        setWarningIsShown(false);
    }

    return <Container>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        {(warningIsShown) ?
            <WarningModal
                heading={t("app.warning")}
                warning={t("app.unlockWarning")}
                yes={t("app.yes")}
                no={t("app.no")}
                answer={answer}></WarningModal> :
            (null)
        }
        {(isUnlocked) ?
            <StyledButton text={t("app.begin")} onClick={props.onClick} /> :
            <ContainerLock onClick={() => { setWarningIsShown(true) }} isUnlocking={isUnlocking}>
                <LockContainer isUnlocking={isUnlocking}>
                    <StyledPadlock isUnlocking={isUnlocking}>
                    </StyledPadlock>
                </LockContainer>
                <StyledButton text={t("app.begin")} onClick={props.onClick} /></ContainerLock>
        }

    </Container>
}