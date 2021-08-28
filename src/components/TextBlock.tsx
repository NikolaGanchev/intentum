import styled from "styled-components"

const StyledParagraph = styled.p`
    width: 100%;
    line-height: 1.5rem;
    font-size: 1.1rem;
    margin-top: 0.5rem;
    text-indent: 1rem;
`


export default function TextBlock(props: any) {
    return <StyledParagraph>{props.children}</StyledParagraph>
}