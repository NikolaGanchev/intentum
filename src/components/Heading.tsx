import styled from "styled-components"

const StyledHeading = styled.h3`
    width: 100%;
    line-height: 1.6rem;
    font-size: 1.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-indent: 1rem;
`

interface HeadingProps {
    className?: string;
    children?: any;
}

export default function Heading(props: HeadingProps) {
    return <StyledHeading className={props.className}>{props.children}</StyledHeading>
}