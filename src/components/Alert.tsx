import styled from "styled-components"
import Button from "./Button"
import Modal from "./Modal"
import TextBlock from "./TextBlock"
import {useHistory} from "react-router-dom";

const StyledWarningButtonContainer = styled.div`
    display: flex;
    width: 100%;
`

const OKButton = styled(Button)`
    margin-left: auto;
`

export default function Alert(props: any) {
    const history = useHistory();

    return <Modal heading={props.heading} close={props.hide} isShowing={props.isShowing}>
        <TextBlock>
            {props.warning}
        </TextBlock>
        <StyledWarningButtonContainer>
            <OKButton text={props.ok} onClick={() => {
                history.goBack();
                props.hide();
            } }></OKButton>
        </StyledWarningButtonContainer>
    </Modal>
}