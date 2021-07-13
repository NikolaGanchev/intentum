import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ArrowBack from "../resources/ArrowBack";
import { getIdFromStudyUnit } from "../utils/StudyUnitUtils";

const Container = styled.div`
    position: fixed;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10% 90%;
    background-color: ${props => props.theme.main};
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
    width: 2vw;
    height: 2vw;
    fill: ${props => props.theme.secondary};
`

const StyledButton = styled.button`
    width: 4vw;
    height: 4vw;
    border: none;
    background-color: ${props => props.theme.main};
    cursor: pointer;
`

export default function Unit(props: any) {
    const [t] = useTranslation("lessons");

    const Unit = React.lazy(() => {
        return Promise.all([
            import(`./units/${getIdFromStudyUnit(props.unit)}`),
            new Promise(resolvePromise => setTimeout(resolvePromise, 0))
        ])
            .then(([moduleExports]) => moduleExports);
    });

    return <div>
        <StyledSuspense fallback={<div>Loading...</div>}>
            <Container>
                <TextContainer>
                    <StyledButton onClick={() => { props.back() }}><Back></Back></StyledButton>
                    <Title>{
                        t(`${getIdFromStudyUnit(props.unit)}.title`) +
                        " " +
                        t(`${getIdFromStudyUnit(props.unit)}.text`)
                    }</Title>
                </TextContainer>
                <UnitContainer>
                    <Unit endUnit={() => { props.endUnit() }}></Unit>
                </UnitContainer>
            </Container>
        </StyledSuspense>
    </div>
}