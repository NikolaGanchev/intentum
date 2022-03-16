import styled from "styled-components"
import { ColorType, determineColorBasedOnLuminosity } from "../utils/Theme";
import Circle from "./Circle"

const Container = styled.div`
    border: 1px solid ${props => props.theme.warning};
    display: block;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const StyledCircle = styled(Circle)`
    background-color: ${props => props.theme.warning};
    color: ${props => {
        const colorType: ColorType = determineColorBasedOnLuminosity(props.theme.warning);
        return colorType === ColorType.Dark ? props.theme.textOnDarkBackground: props.theme.textOnLightBackground;
    }};
`

const Text = styled.div`
    line-height: 1.6rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-flex;
`

interface WarningProps {
    children: any;
}

export default function Warning(props: WarningProps) {
    return <Container>
        <StyledCircle symbol="!"></StyledCircle>
        <Text>{props.children}</Text>
    </Container>
}