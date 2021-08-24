import styled from "styled-components"
import Button from "./Button"
import Modal from "./Modal"
import TextBlock from "./TextBlock"

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

export default function WarningModal(props: any) {
    return <Modal heading={props.heading} close={() => { props.answer(false) }}>
        <TextBlock>
            {props.warning}
        </TextBlock>
        <StyledWarningButtonContainer>
            <NoButton text={props.no} onClick={() => { props.answer(false) }}></NoButton>
            <YesButton text={props.yes} onClick={() => {
                props.answer(true);
            }}></YesButton>
        </StyledWarningButtonContainer>
    </Modal>
}