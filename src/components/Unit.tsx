import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ArrowBack from "../resources/ArrowBack";
import { registry } from "../utils/UnitRegistry";
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
    border: 1px solid ${props => props.theme.secondary};
    align-items: center;
    user-select: text;
    margin-right: 1rem;
`

const Title = styled.h4`
    font-weight: normal;
    margin-right: 1rem;
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

    const Unit = registry.get(props.unit.id);

    return <div>
        {(showUnitLoader) ?
            (<Loader
                title={tl(`${props.unit.id}.title`) + t("app.separator")}
                motto={tl(`${props.unit.id}.text`)}
                hide={hide}>
            </Loader>) : (null)}
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
                <StyledButton onClick={() => { setWarningIsShown(true) }} aria-label={t("app.back")}><Back></Back></StyledButton>
                <Title>{
                    tl(`${props.unit.id}.title`) +
                    t("app.separator") +
                    " " +
                    tl(`${props.unit.id}.text`)
                }</Title>
            </TextContainer>
            <UnitContainer>
                <Unit endUnit={() => { props.endUnit() }}></Unit>
            </UnitContainer>
        </Container>
    </div>
}