import styled from "styled-components"
import Quotes from "../resources/Quotes"

const Container = styled.div`
    display: block;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    border-width: 1px;
    border-style: solid;
    border-image: ${props => props.theme.secondary};
    position: relative;
`

const Text = styled.blockquote`
    line-height: 1.6rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-flex;
    font-style: italic;
`

const StyledQuotes = styled(Quotes)`
    fill: ${props => props.theme.secondary};
    width: 4rem;
    height: 4rem;
`

const Author = styled.div`
    line-height: 1.6rem;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: inline-flex;
    font-style: italic;
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    margin-right: 1rem;
    &::before {
        content: "-";
    }
`

interface QuoteProps {
    children: any;
}

export default function Quote(props: QuoteProps) {
    return <Container>
        <StyledQuotes></StyledQuotes>
        <Text>{props.children}</Text>
        <Author>Author</Author>
    </Container>
}