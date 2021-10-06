import styled from "styled-components"
import Button from "./Button"
import Modal from "./Modal"
import TextBlock from "./TextBlock"
import {theme} from "../utils/Theme";
import {useHistory} from "react-router-dom";

const StyledWarningButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

const YesButton = styled(Button)`
    margin-left: 1rem;
    border-color: ${props => props.theme.error};
`

const NoButton = styled(Button)`
    margin-left: auto;
`

export default function WarningModal(props: any) {
    const history = useHistory();

    return <Modal heading={props.heading} close={() => { props.answer(false, true) }} isShowing={props.isShowing}>
        <TextBlock>
            {props.warning}
        </TextBlock>
        <StyledWarningButtonContainer>
            <NoButton text={props.no} onClick={() => {
                history.goBack();
                props.answer(false);
            }}></NoButton>
            <YesButton text={props.yes} onClick={() => {
                history.goBack();
                props.answer(true);
            }} customBackgroundColor={theme.error}></YesButton>
        </StyledWarningButtonContainer>
    </Modal>
}