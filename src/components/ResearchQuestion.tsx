import styled from "styled-components"

const Container = styled.div`
    display: block;
    padding: 1rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-width: 1px;
    border-style: solid;
    border-image: ${props => props.theme.secondary};
    position: relative;
`

const Text = styled.div`
    line-height: 1.6rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    display: inline-flex;
`

const StyledQuestionMark = styled.div`
    display: inline-block;
    margin-right: 1rem;
    color: ${props => props.theme.secondary};
    font-style: 'Times New Roman', Verdana;
    font-size: 3rem;
    user-select: none;
`

export default function ResearchQuestion(props: any) {
    return <Container>
        <StyledQuestionMark>?</StyledQuestionMark>
        <Text>{props.children}</Text>
    </Container>
}