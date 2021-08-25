import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    margin-bottom: 1rem;
`

const StyledButton = styled(Button)`
    margin-left: auto;
`

export default function EndButton(props: any) {
    const [t] = useTranslation("common");

    return <Link to="/"><Container><StyledButton text={t("app.end")} onClick={props.onClick} className={props.className}>
    </StyledButton></Container></Link>
}