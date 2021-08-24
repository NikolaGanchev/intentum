import React, { ComponentType, Suspense, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ArrowBack from "../resources/ArrowBack";
import Loader from './Loader';
import WarningModal from "./WarningModal";

const Container = styled.div`
    position: fixed;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10% 90%;
    background-color: ${props => props.theme.main};
    @media (max-width: 1240px) {
        grid-template-columns: 5% 45% 45% 5%;
    }
`

const TextContainer = styled.div`
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 5;
    display: flex;
    width: 100%;
    padding-left: 1rem;
    border: 1px solid ${props => props.theme.secondary};
    align-items: center;
    user-select: text;
`

const Title = styled.h4`
    font-weight: normal;
`
const UnitContainer = styled.div`
    grid-row: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    border: 1px solid ${props => props.theme.secondary};
    border-top: 0px;
    padding: 1rem;
    padding-bottom: 0rem;
    margin-bottom: 1rem;
    height: 100%;
    overflow: scroll;
`

const StyledSuspense = styled(Suspense)`
    position: fixed;
    height: 100vh;
    width: 100vw;
`

const Back = styled(ArrowBack)`
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.secondary};
`

const StyledButton = styled.button`
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: ${props => props.theme.main};
    cursor: pointer;
`

export default function Unit(props: any) {
    const [t] = useTranslation("common");
    const [showUnitLoader, setShowUnitLoader] = useState(true);
    const [tl] = useTranslation("lessons");
    const isLoaded = useRef(false);
    const [warningIsShown, setWarningIsShown] = useState(false);

    const answer = (answer: boolean) => {
        if (answer) {
            props.back();
        }

        setWarningIsShown(false);
    }

    const hide = () => {
        setShowUnitLoader(false);
    }

    const Unit = React.lazy(() => {
        isLoaded.current = false;
        const load = new Promise<{ default: ComponentType<any>; }>(async resolve => {
            const module = await import(`./units/${props.unit.id}`);

            resolve(module);
        });

        load.then(() => {
            isLoaded.current = true;
        })

        return load;
    });

    const job = async () => {
        await new Promise<void>(async resolve => {
            const check = () => {
                if (isLoaded.current) {
                    clearInterval(intervalId);
                    resolve();
                }
            }

            const intervalId = setInterval(check, 500);
        });
    }

    return <div>
        {(showUnitLoader) ?
            (<Loader
                title={tl(`${props.unit.id}.title`)}
                motto={tl(`${props.unit.id}.text`)}
                hide={hide}
                job={job}>
            </Loader>) : (null)}
        <StyledSuspense fallback={<div>{t("app.loading")}</div>}>
            <Container>
                {(warningIsShown) ?
                    <WarningModal
                        heading={t("app.warning")}
                        warning={t("app.backWarning")}
                        yes={t("app.yes")}
                        no={t("app.no")}
                        answer={answer}></WarningModal> :
                    (null)
                }
                <TextContainer>
                    <StyledButton onClick={() => { setWarningIsShown(true) }}><Back></Back></StyledButton>
                    <Title>{
                        tl(`${props.unit.id}.title`) +
                        " " +
                        tl(`${props.unit.id}.text`)
                    }</Title>
                </TextContainer>
                <UnitContainer>
                    <Unit endUnit={() => { props.endUnit() }}></Unit>
                </UnitContainer>
            </Container>
        </StyledSuspense>
    </div>
}