import { useTranslation } from "react-i18next";
import styled from "styled-components";
import StudyUnit from "../utils/StudyUnit";
import { StyledListButton, StyledListElement } from "./GlobalComponents";
import Modal from "./Modal"

const StyledModal = styled(Modal)`
    --result-height: 6rem;
`

export const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0px;
    max-height:auto;
    overflow-y:auto;
    height: 80vh;
`

interface ContentsProps {
    close: any;
    isShowing: boolean;
    units: StudyUnit[] | null;
    onSelect: (id: string) => any;
}

export default function Contents(props: ContentsProps) {
    const [t, _] = useTranslation("common");
    const [tl, __] = useTranslation("lessons");

    const onSelect = (value: string) => {
        props.close();
        props.onSelect(value);
    }

    return <StyledModal heading={t("app.contents")} close={() => { props.close() }} isShowing={props.isShowing}>
            <StyledList>
                {props.units &&
                    props.units.map((unit: StudyUnit, index: number) => {
                        return <StyledListElement key={index}>
                                    <StyledListButton
                                        isInverted={true}
                                        text={tl(`${unit.id}.title`)}
                                        onClick={() => { onSelect(unit.id) }}
                                        secondaryText={tl(`${unit.id}.text`)}>
                                    </StyledListButton>
                                </StyledListElement>
                    })
                }
            </StyledList>
    </StyledModal>
} 