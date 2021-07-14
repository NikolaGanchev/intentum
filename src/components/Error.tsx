import styled from "styled-components"
import Circle from "./Circle"

const Container = styled.div`
    border: 1px solid ${props => props.theme.error};
    display: block;
    padding: 1rem;
    margin-top: 1rem;
`

const StyledCircle = styled(Circle)`
    background-color: ${props => props.theme.error};
    color: ${props => props.theme.color};
`

const Text = styled.div`
    line-height: 1.6rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    display: inline-flex;
`

export default function Error(props: any) {
    return <Container>
        <StyledCircle symbol="!"></StyledCircle>
        <Text>{props.children}</Text>
    </Container>
}