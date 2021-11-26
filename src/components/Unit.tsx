import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import ArrowBack from "../resources/ArrowBack";
import { registry } from "../utils/UnitRegistry";
import Loader from './Loader';
import WarningModal from "./WarningModal";
import { useHistory } from "react-router-dom";
import StudyUnit from "../utils/StudyUnit";

const Container = styled.div`
    position: fixed;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 25% 50% 25%;
    grid-template-rows: 10% 90%;
    background-color: ${props => props.theme.main};

    @media (max-width: 1240px) {
        grid-template-columns: 0% 100%;
    }

    @supports not (display: grid) {
        display: flex;
        flex-direction: column;
    }
`

const TextContainer = styled.div`
    grid-row: 1;
    grid-column-start: 1;
    grid-column-end: 4;
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
    grid-column-end: 3;
    border: 1px solid ${props => props.theme.secondary};
    border-top: 0px;
    padding: 1rem;
    padding-bottom: 0rem;
    margin-bottom: 1rem;
    height: 100%;
    overflow: scroll;

    @media (max-width: 1240px) {
      border: none;
    }
`

const Back = styled(ArrowBack)`
    width: auto;
    height: 50%;
    fill: ${props => props.theme.secondary};
`

const StyledButton = styled.button`
    width: auto;
    height: 100%;
    border: none;
    background-color: ${props => props.theme.main};
    cursor: pointer;
`

enum AnswerState {
    right,
    wrong,
    unset
}

interface UnitProps {
    unit: StudyUnit;
    back: any;
    endUnit: any;
}

export default function Unit(props: UnitProps) {
    const [t] = useTranslation("common");
    const [showUnitLoader, setShowUnitLoader] = useState(true);
    const [tl] = useTranslation("lessons");
    const [warningIsShown, setWarningIsShown] = useState(false);
    const [answer, setAnswer] = useState<AnswerState>(AnswerState.unset);
    const history = useHistory();

    const evalAnswer = (answer: boolean) => {
        setAnswer(answer ? AnswerState.right : AnswerState.wrong);

        if (answer) {
            history.goBack();
            props.back();
        }

        setWarningIsShown(false);
    }

    const hide = () => {
        setShowUnitLoader(false);
    }

    useEffect(() => {
        return history.listen(listener => {
            if (history.action === "POP") {
                // This comparison is more complex than I'd like it to be
                // But it does the job and I currently cannot figure out a better way to do it
                if (!warningIsShown && answer === AnswerState.unset) {
                    history.push(`/${props.unit.id}`);
                    setWarningIsShown(true);
                }
                else if (!warningIsShown && answer === AnswerState.wrong) {
                    setAnswer(AnswerState.unset);
                }
            }
        })
    }, [warningIsShown, answer]);

    const endUnit = () => {
        history.goBack();
        props.endUnit();
    }

    useEffect(() => {
        history.push(`/${props.unit.id}`);

        return () => {
            history.goBack();
        }
    }, [])

    const Unit = registry.get(props.unit.id);

    return <div>
        <Loader
            title={tl(`${props.unit.id}.title`)}
            motto={tl(`${props.unit.id}.text`)}
            hide={hide}
            isShowing={showUnitLoader} />
        <Container>
            <WarningModal
                heading={t("app.warning")}
                warning={t("app.backWarning")}
                yes={t("app.yes")}
                no={t("app.no")}
                answer={evalAnswer} isShowing={warningIsShown} />
            <TextContainer>
                <StyledButton onClick={() => { setWarningIsShown(true) }} aria-label={t("app.back")}>
                    <Back></Back>
                </StyledButton>
                <Title>
                    {tl(`${props.unit.id}.text`)}
                </Title>
            </TextContainer>
            <UnitContainer>
                <Unit endUnit={endUnit}></Unit>
            </UnitContainer>
        </Container>
    </div>;
}