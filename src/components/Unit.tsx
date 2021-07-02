import React, { Suspense } from "react";
import { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";
import { getIdFromStudyUnit } from "../utils/StudyUnitUtils";
import StudyUnitWithTranslations from "../utils/StudyUnitWithTranslations";
import Loader from "./Loader";

const animationLength = 3;

const Container = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 10% 90%;
`

const TextContainer = styled.div`
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 5;
    display: block;
    width: 100%;
    padding-left: 1rem;
    border: 1px solid ${props => props.theme.secondary};
`

const Title = styled.h4`
    font-weight: normal;
`
const UnitContainer = styled.div`
    grid-row: 2;
    grid-column-start: 2;
    grid-column-end: 4;
    box-sizing: border-box;
    border: 1px solid ${props => props.theme.secondary};
    border-top: 0px;
    padding: 1rem;
`

const StyledSuspense = styled(Suspense)`
    position: fixed;
    height: 100vh;
    width: 100vw;
`

export default function Unit(props: any) {
    const [showLoader, setShowLoader] = useState(true);;
    const hide = () => {
        setShowLoader(false);
    }
    const Unit = React.lazy(() => {
        return Promise.all([
            import(`./units/${getIdFromStudyUnit(props.unit)}`),
            new Promise(resolvePromise => setTimeout(resolvePromise, animationLength * 1000))
        ])
            .then(([moduleExports]) => moduleExports);
    });

    return <div>{
        <Container>
            <TextContainer>
                <Title>{props.unit.title + " " + props.unit.text}</Title>
            </TextContainer>
            <UnitContainer>
                <StyledSuspense fallback={<Loader title={props.unit.title} motto={props.unit.text} hide={hide} job={async () => { }}></Loader>}>
                    <Unit></Unit>
                </StyledSuspense>
            </UnitContainer>
        </Container>
    }
    </div>
}