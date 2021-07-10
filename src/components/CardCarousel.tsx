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
    readonly transX: number;
    readonly transition: boolean;
};


const CardContainer = styled.div<CardContainerProps>`
    display: flex;
    opacity: ${props => `${props.opacity}%`};
    transition: ${props => props.transition ? `all ${animationLength}s ease-in-out` : ''};
    transform: ${props => `translateX(${props.transX}%)`};
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
    background-color: rgba(0, 0, 0, 0);;
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
    background-color: rgba(0, 0, 0, 0);
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

    const [opacity, setOpacity] = useState(100);
    const [transX, setTransX] = useState(0);
    const [isTransition, setIsTransition] = useState(true);

    const changeToNext = () => {
        setTransX(-300);
        setOpacity(0);
        setTimeout(() => {
            requestAnimationFrame(() => {
                setIsTransition(false);
                setTransX(300);
                props.setActiveIndex(props.activeIndex + 1);
                requestAnimationFrame(() => {
                    setIsTransition(true);
                    setOpacity(100);
                    setTransX(0);
                })
            })
        }, animationLength * 1000);
    }

    const changeToPrevious = () => {
        setTransX(300);
        setOpacity(0);
        setTimeout(() => {
            requestAnimationFrame(() => {
                setIsTransition(false);
                setTransX(-300);
                props.setActiveIndex(props.activeIndex - 1);
                requestAnimationFrame(() => {
                    setIsTransition(true);
                    setOpacity(100);
                    setTransX(0);
                })
            })
        }, animationLength * 1000);
    }

    const onClick = () => {
        props.setStudyUnit(props.cards[props.activeIndex]);
    }

    return <Container className={props.className}>
        {(props.cards) ? (
            <div>
                <LeftArrowButton onClick={changeToPrevious} disabled={props.activeIndex === 0}><LeftArrow /></LeftArrowButton>
                <RightArrowButton onClick={changeToNext} disabled={props.activeIndex === props.cards.length - 1}><RightArrow /></RightArrowButton></div>
        ) : (null)}

        {(props.cards) ? (

            <CardContainer transX={transX} transition={isTransition} opacity={opacity}><Card title={props.cards[props.activeIndex].title} text={props.cards[props.activeIndex].text} onClick={onClick} /></CardContainer>
        ) : null}
    </Container>
}