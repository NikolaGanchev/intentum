import { useContext, useEffect, useRef } from "react";
import styled from "styled-components"
import Heading from "./Heading";
import Close from "../resources/Close";
import { useHistory } from "react-router-dom";
import ModalHelper from "./ModalHelper";
import { ModalStackContext } from "./ModalStackContext";
import { nanoid } from "nanoid";
import { getModalPath } from "../utils/ModalStack";

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

interface StyledContainerProps {
    customWidth?: number;
}

const StyledContainer = styled.div<StyledContainerProps>`
    display: grid;
    width: ${props => props.customWidth? props.customWidth: "33"}%;
    height: auto;
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

interface ContentContainerProps {
    allowScroll?: boolean;
}

const ContentContainer = styled.div<ContentContainerProps>`
    display: block;
    width: 100%;
    height: 100%;
    grid-row: 2;
    overflow-y: auto;
    max-height: ${props => props.allowScroll ? "87vh": "auto"};
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

interface ModalProps {
    children: any;
    className?: string;
    heading: string;
    isShowing: boolean;
    close: any;
    allowScroll?: boolean;
    customWidth?: number;
}

export default function Modal(props: ModalProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const history = useHistory();
    const modalStack = useContext(ModalStackContext);
    const id = useRef(nanoid());

    const onClick = (e: any) => {
        const container = containerRef.current;

        if (!container) return;

        if (!container.contains(e.target) && modalStack.current.peek() === id.current) {
            // Don't close on outside of modal click on mobile
            if (document) {
                if ('ontouchstart' in document.documentElement) {
                    return;
                }
            }
            props.close();
        }
    }

    const keyPressListener = (event: KeyboardEvent) => {
        if (event.key === "Escape" && modalStack.current.peek() === id.current) {
            props.close();
        }
    };

    useEffect(() => {
        return history.listen(listener => {
            if (history.action === "POP") {
                if (props.isShowing && modalStack.current.peek() === id.current) {
                    history.push(getModalPath());
                    props.close();
                }
            }
        })
    }, [props.isShowing])



    useEffect(() => {
        window.addEventListener("keydown", keyPressListener);

        // Cleanup
        return () => {
            window.removeEventListener("keydown", keyPressListener);
        }
    }, [])

    return <div>
        {props.isShowing &&
            <div>
                <ModalHelper id={id.current} />
                <StyledBackground onClick={onClick} aria-hidden={false}>
                    <StyledContainer ref={containerRef} customWidth={props.customWidth}>
                        <UpperContainer>
                            <StyledHeading>{props.heading}</StyledHeading>
                            <StyledButton onClick={() => {
                                props.close();
                            }}>
                                <StyledClose>
                                </StyledClose>
                            </StyledButton>
                        </UpperContainer>
                        <ContentContainer allowScroll={props.allowScroll} className={props.className}>
                            {props.children}
                        </ContentContainer>
                    </StyledContainer>
                </StyledBackground>
            </div>
        }
    </div>;
}