import styled from "styled-components"

const StyledCircle = styled.div`
    display: inline-flex;
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.pure};
    border-radius: 100%;
    width: 5.5rem;
    height: 5.5rem;
    place-content: center;
    place-items: center;
    text-align: center;
    font-size: 4rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
`

export default function Circle(props: any) {
    return <StyledCircle className={props.className}>
        {props.symbol}
    </StyledCircle>
}