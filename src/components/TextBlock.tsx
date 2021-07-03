import styled from "styled-components"

const StyledParagraph = styled.p`
    width: 100%;
    line-height: 1.6rem;
    font-size: 1rem;
    margin-top: 0.5rem;
`


export default function TextBlock(props: any) {
    return <StyledParagraph>{props.children}</StyledParagraph>
}