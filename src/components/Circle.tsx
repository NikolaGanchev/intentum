import styled from "styled-components"

const StyledCircle = styled.div`
    display: inline-flex;
    border-radius: 100%;
    width: 5.5rem;
    height: 5.5rem;
    place-content: center;
    place-items: center;
    text-align: center;
    margin: auto;
    font-size: 4rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    user-select: none;
`

const Symbol = styled.div`
    margin: auto;
`

interface CircleProps {
    className?: string;
    symbol: string;
}

export default function Circle(props: CircleProps) {
    return <StyledCircle className={props.className}>
        <Symbol>{props.symbol}</Symbol>
    </StyledCircle>
}