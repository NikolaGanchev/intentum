import styled from "styled-components"

const StyledHeading = styled.h3`
    width: 100%;
    line-height: 1.6rem;
    font-size: 2rem;
    margin-top: 1rem;
`

export default function Heading(props: any) {
    return <StyledHeading>{props.children}</StyledHeading>
}