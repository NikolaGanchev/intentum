import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import styled, { css, keyframes } from "styled-components"
import Padlock from "../resources/Padlock"
import { changeStudyUnit } from "../utils/StudyUnitUtils"
import Button from "./Button"
import Modal from "./Modal"
import TextBlock from "./TextBlock"

const Container = styled.div`
    position: relative;
    width: 24rem;
    height: 32rem;
    background-color: ${props => props.theme.pure};
    border: 1px solid ${props => props.theme.secondary};
    box-sizing: border-box;
    box-shadow: -10px -10px 50px 5px ${props => props.theme.shadow}, 10px 10px 50px 5px ${props => props.theme.shadow};
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

    & #padlock-shackle {
        transform-origin: 80% left;
        transform-box: fill-box;
        animation: ${props => props.isUnlocking ? animation : 'none'};
        animation-fill-mode: forwards;
    }
`

const StyledWarningButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

const YesButton = styled(Button)`
    margin-left: 1rem;
    background-color: ${props => props.theme.error};
    border-color: ${props => props.theme.error};
`

const NoButton = styled(Button)`
    margin-left: auto;
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
            changeStudyUnit(props.unit, () => {
                setIsUnlocked(true);
                setIsUnlocking(false);
            });
        }, unlockDuration * 1000)
    }

    useEffect(() => {
        setIsUnlocked(props.unit.unlocked);
    }, [props.unit.unlocked])

    useEffect(() => {
        setWarningIsShown(false);
    }, [props.unit])

    return <Container>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        {(warningIsShown) ?
            <Modal heading={t("app.warning")} close={() => { setWarningIsShown(false) }}>
                <TextBlock>
                    {t("app.unlockWarning")}
                </TextBlock>
                <StyledWarningButtonContainer>
                    <NoButton text={t("app.no")} onClick={() => { setWarningIsShown(false) }}></NoButton>
                    <YesButton text={t("app.yes")} onClick={() => {
                        setWarningIsShown(false);
                        unlock();
                    }}></YesButton>
                </StyledWarningButtonContainer>
            </Modal> :
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