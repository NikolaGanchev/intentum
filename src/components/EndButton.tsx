import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
`

const StyledButton = styled(Button)`
    margin-left: auto;
`

export default function EndButton(props: any) {
    const [t] = useTranslation("common");

    return <Container><StyledButton text={t("app.end")} onClick={props.onClick} className={props.className}>
    </StyledButton></Container>
}