import styled, { keyframes } from "styled-components";

const StyledSVG = styled.svg`
    overflow: visible;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 17rem;
    height: 17rem;
    opacity: 100%;
    transition: 1s linear;
    width: 300;
    height: 300;
`

const spin = keyframes`
        0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const StyledG = styled.g`
    overflow: visible;
    fill: #000000;
    stroke: white;
    animation: ${spin} 5s infinite forwards linear;
    box-sizing: content-box;
    transform-origin: center;
    transform-box: fill-box;
`


export default function SpinningLogo(props: any) {
    return (
        <StyledSVG width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <StyledG>
                <path id="top-right" d="M150 0L300 150H150V0Z" />
                <path id="top-left" d="M0 150L150 0V150H0Z" />
                <path id="bottom-left" d="M150 300L0 150L150 150L150 300Z" />
                <path id="bottom-right" d="M300 150L150 300L150 150L300 150Z" />
            </StyledG>
        </StyledSVG>
    );
}