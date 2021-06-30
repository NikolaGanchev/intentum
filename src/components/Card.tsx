import { useTranslation } from "react-i18next"
import styled from "styled-components"
import Button from "./Buttons"

const Container = styled.div`
    position: relative;
    width: 24vw;
    height: 32vw;
    background-color: ${props => props.theme.pure};
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: -10px -10px 50px 5px ${props => props.theme.shadow}, 10px 10px 50px 5px ${props => props.theme.shadow};
`

const Title = styled.h1`
        color: ${props => props.theme.text};
        font-size: 1.4em;
        font-weight: normal;
        padding: 15px;
        margin: 0px;
        margin-top: 1vw;
`

const Text = styled.h2`
        color: ${props => props.theme.text};
        font-size: 1.5em;
        font-weight: normal;
        padding: 15px;
        padding-top: 0px;
        padding-left: 5px;
        text-indent: 10px;
        margin: 0px;
`

const StyledButton = styled(Button)`
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform : translate(-50%, 50%);
`

export default function Card(props: any) {
    const [t] = useTranslation("common");

    return <Container>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <StyledButton text={t("app.begin")} />
    </Container>
}