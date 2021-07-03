import React, { Suspense } from "react";
import styled from "styled-components";
import { getIdFromStudyUnit } from "../utils/StudyUnitUtils";

const Container = styled.div`
    position: fixed;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10% 90%;
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
    margin-bottom: 1rem;
    height: 100%;
    overflow: auto;
`

const StyledSuspense = styled(Suspense)`
    position: fixed;
    height: 100vh;
    width: 100vw;
`

export default function Unit(props: any) {
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
                    <Title>{props.unit.title + " " + props.unit.text}</Title>
                </TextContainer>
                <UnitContainer>
                    <Unit></Unit>
                </UnitContainer>
            </Container>
        </StyledSuspense>
    </div>
}