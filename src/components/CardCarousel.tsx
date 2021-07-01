import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import ArrowLeft from "../resources/ArrowLeft";
import ArrowRight from "../resources/ArrowRight";

const animationLength = 0.25;

const Container = styled.div`
    width: 100%;
    display: flex;
    place-content: center;
    position: relative;
`

interface CardContainerProps {
    readonly opacity: number;
};


const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    opacity: ${props => `${props.opacity}%`};
    transition: opacity ${animationLength}s ease-in-out;
    place-items: center;
`

const LeftArrowButton = styled.button`
    position: absolute;
    fill: ${props => props.theme.secondary};
    left: 5%;
    top: 50%;
    transform: translate(-95%, -50%);
    width: 5rem;
    height: 5rem;
    z-index: 2;
    background-color: ${props => props.theme.main};
    border: none;
    cursor: pointer;
    opacity: ${props => props.disabled ? '50%' : '100%'};
    transition: opacity ${animationLength}s ease;
`

const RightArrowButton = styled.button`
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(95%, -50%);
    width: 5rem;
    height: 5rem;
    z-index: 2;
    background-color: ${props => props.theme.main};
    border: none;
    cursor: pointer;
    opacity: ${props => props.disabled ? '50%' : '100%'};
    transition: opacity ${animationLength}s ease;
`

const LeftArrow = styled(ArrowLeft)`
    fill: ${props => props.theme.secondary};
    width: 4rem;
    height: 4rem;
    z-index: 2;
`

const RightArrow = styled(ArrowRight)`
    fill: ${props => props.theme.secondary};
    width: 4rem;
    height: 4rem;
    z-index: 2;
`


export default function CardCarousel(props: any) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [opacity, setOpacity] = useState(100);

    const changeToNext = () => {
        setOpacity(0);
        setTimeout(() => {
            setActiveIndex(activeIndex + 1);
            setOpacity(100);
        }, animationLength * 1000);

    }

    const changeToPrevious = () => {
        setOpacity(0);
        setTimeout(() => {
            setActiveIndex(activeIndex - 1);
            setOpacity(100);
        }, animationLength * 1000);
    }

    return <Container className={props.className}>
        {(props.cards) ? (
            <div>
                <LeftArrowButton onClick={changeToPrevious} disabled={activeIndex === 0}><LeftArrow /></LeftArrowButton>
                <RightArrowButton onClick={changeToNext} disabled={activeIndex === props.cards.length - 1}><RightArrow /></RightArrowButton></div>
        ) : (null)}

        {(props.cards) ? (

            <CardContainer opacity={opacity}><Card title={props.cards[activeIndex].title} text={props.cards[activeIndex].text} /></CardContainer>
        ) : null}
    </Container>
}