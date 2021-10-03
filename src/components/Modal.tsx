import { useEffect, useRef } from "react";
import styled from "styled-components"
import Heading from "./Heading";
import Close from "../resources/Close";

const StyledBackground = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.blur};
    z-index: 1000;
    place-items: center;
    place-content: center;
`

const StyledContainer = styled.div`
    display: grid;
    width: 33%;
    height: auto;
    grid-template-rows: auto 90%;
    background-color: ${props => props.theme.main};
    padding: 1rem;
    margin: auto;
    
    @media (max-width: 1280px) {
        width: 100%;
    }
`

const UpperContainer = styled.div`
    display: flex;
    grid-row: 1;
    position: relative;
    align-items: center;
`

const ContentContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    grid-row: 2;
`

const StyledHeading = styled(Heading)`
    display: inline-block;
    width: auto;
    margin: 0;
`

const StyledClose = styled(Close)`
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.secondary};
`

const StyledButton = styled.button`
    display: inline-block;
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: ${props => props.theme.main};
    cursor: pointer;
    margin-left: auto;
`


export default function Modal(props: any) {
    const containerRef = useRef<HTMLDivElement>(null);

    const onClick = (e: any) => {
        const container = containerRef.current;

        if (!container) return;

        if (!container.contains(e.target)) {
            props.close();
        }
    }

    const keyPressListener = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            props.close();
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keyPressListener);

        // Cleanup
        return () => {
            window.removeEventListener("keydown", keyPressListener);
        }
    }, [])

    return <div>
        {props.isShowing &&
        <StyledBackground onClick={onClick} aria-hidden={false}>
            <StyledContainer ref={containerRef}>
                <UpperContainer>
                    <StyledHeading>{props.heading}</StyledHeading>
                    <StyledButton onClick={() => {
                        props.close()
                    }}>
                        <StyledClose>
                        </StyledClose>
                    </StyledButton>
                </UpperContainer>
                <ContentContainer className={props.className}>
                    {props.children}
                </ContentContainer>
            </StyledContainer>
        </StyledBackground>
        }
    </div>;
}