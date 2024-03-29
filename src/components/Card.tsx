import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styled, { css, keyframes } from "styled-components"
import Padlock from "../resources/Padlock"
import { changeStudyUnit } from "../utils/StudyUnitUtils"
import Button from "./Button"
import WarningModal from "./WarningModal"
import StudyUnit from "../utils/StudyUnit";

const Container = styled.div`
    position: relative;
    width: 24rem;
    height: 32rem;
    background-color: ${props => props.theme.pure};
    border: 1px solid ${props => props.theme.secondary};
    box-sizing: border-box;
    box-shadow: -10px -10px 50px 5px ${props => props.theme.shadow}, 10px 10px 50px 5px ${props => props.theme.shadow};
    transition: all 1s ease;
    @media only screen and (min-height: 768px) and (max-width: 700px) {
        height: 37rem;
    }
    @media only screen and (min-height: 900px) and (max-width: 700px) {
        height: 40rem;
    }
    @media only screen and (max-height: 600px) {
        height: 70vh;
        min-height: 15rem;
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
    padding-left: 15px;
    margin: 0px;
`

const StyledButton = styled(Button)`
    position: absolute;
    left: 50%;
    bottom: 1%;
    transform : translate(-50%, -50%);
`

const unlockDuration = 0.85;

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
    bottom: 0px;
    height: 8rem;
    cursor: pointer;
    pointer-events: ${props => props.isUnlocking ? `none` : 'all'};
    user-select: none;
`

const LockContainer = styled.div<PadlockProps>`
    z-index: 3;
    width: 100%;
    position: absolute;
    bottom: 0px;
    height: 6rem;
    display: flex;
    place-content: center;
    background: ${props => props.theme.pure};
    box-shadow: 0px -50px 80px ${props => props.theme.pure};
    transition: ${props => props.isUnlocking ? `all ${unlockDuration}s ease` : 'none'}; 
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
    }
`

interface CardProps {
    unit: StudyUnit;
    title: string;
    text: string;
    onClick: any;
}

export default function Card(props: CardProps) {
    const [t] = useTranslation("common");
    const [isUnlocked, setIsUnlocked] = useState(props.unit.unlocked);
    const [isUnlocking, setIsUnlocking] = useState(false);
    const [warningIsShown, setWarningIsShown] = useState(false);

    const unlock = () => {
        setIsUnlocking(true);
        setTimeout(() => {
            props.unit.unlocked = true;
            changeStudyUnit(props.unit);
            // It is possible the user switched cards while one was unlocking.
            // In that case, the old unit should still be unlocked in the storage
            // But the view should stay locked
            if (isUnlocking) {
                setIsUnlocked(true);
            }
            setIsUnlocking(false);
        }, unlockDuration * 1000)
    }

    useEffect(() => {
        setIsUnlocked(props.unit.unlocked);
    }, [props.unit.unlocked])

    useEffect(() => {
        setWarningIsShown(false);
        setIsUnlocking(false);
    }, [props.unit])

    const answer = (answer: boolean) => {
        if (answer) {
            unlock();
        }

        setWarningIsShown(false);
    }
    
    /*
    Currently, there is a very strange bug that causes the react-router-dom Link component to trigger a replace
    instead of a push if a replace was used earlier from the history object
    For that reason, I have removed the Link component from the button here and I am imitating its functionality by
    calling push in Unit.tsx
    The protection leave in units also needs a push, so I'm using two pushes in Unit.tsx
    Do not re-add the Link component until you can verify the bug has been fixed
     */
    return <Container>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <WarningModal
            heading={t("app.warning")}
            warning={t("app.unlockWarning")}
            yes={t("app.yes")}
            no={t("app.no")}
            answer={answer} isShowing={warningIsShown} />
        <StyledButton text={t("app.begin")} onClick={props.onClick} />
        {(isUnlocked) ?
            null :
            <ContainerLock onClick={() => { setWarningIsShown(true) }} isUnlocking={isUnlocking}>
                <LockContainer isUnlocking={isUnlocking}>
                    <StyledPadlock isUnlocking={isUnlocking}>
                    </StyledPadlock>
                </LockContainer>
            </ContainerLock>
        }

    </Container>
}