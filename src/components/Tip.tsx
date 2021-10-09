import styled from "styled-components"
import Circle from "./Circle"

const Container = styled.div`
    border: 1px solid ${props => props.theme.tip};
    display: block;
    padding: 1rem;
    margin-top: 1rem;
`

const StyledCircle = styled(Circle)`
    background-color: ${props => props.theme.tip};
    color: ${props => props.theme.color};
`

const Text = styled.div`
    line-height: 1.6rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    display: inline-flex;
`

interface TipProps {
    children: any;
}

export default function Tip(props: TipProps) {
    return <Container>
        <StyledCircle symbol="i"></StyledCircle>
        <Text>{props.children}</Text>
    </Container>
}