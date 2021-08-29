import styled from "styled-components"

const StyledHeading = styled.h3`
    width: 100%;
    line-height: 1.6rem;
    font-size: 1.5rem;
    margin-top: 1rem;
    text-indent: 1rem;
`

export default function Heading(props: any) {
    return <StyledHeading className={props.className}>{props.children}</StyledHeading>
}