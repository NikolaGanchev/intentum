import styled, { useTheme } from "styled-components"
import Button from "./Button"
import Modal from "./Modal"
import TextBlock from "./TextBlock"

const StyledWarningButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

const YesButton = styled(Button)`
    margin-left: 1rem;
`

const NoButton = styled(Button)`
    margin-left: auto;
`

interface WarningModalProps {
    isShowing: boolean;
    yes: string;
    no: string;
    warning: string;
    heading: string;
    answer: any;
}

export default function WarningModal(props: WarningModalProps) {
    const theme: any = useTheme();

    return <Modal heading={props.heading} close={() => { props.answer(false) }} isShowing={props.isShowing}>
        <TextBlock>
            {props.warning}
        </TextBlock>
        <StyledWarningButtonContainer>
            <NoButton text={props.no} onClick={() => {
                props.answer(false);
            }}></NoButton>
            <YesButton text={props.yes} onClick={() => {
                props.answer(true);
            }} customBackgroundColor={theme.error}></YesButton>
        </StyledWarningButtonContainer>
    </Modal>
}