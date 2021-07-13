import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import ArrowLeft from "../resources/ArrowLeft";
import ArrowRight from "../resources/ArrowRight";
import { useTranslation } from "react-i18next";
import { getIdFromStudyUnit } from "../utils/StudyUnitUtils";

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
    transform: ${props => (props.transX === 0) ? `none` : `translateX(${props.transX}%)`};
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


    const [t] = useTranslation("lessons");

    const onClick = () => {
        props.setStudyUnit(props.cards[props.activeIndex]);
    }

    return <Container className={props.className}>
        {(props.cards) ? (
            <div>
                <LeftArrowButton onClick={() => { props.changeToPrevious() }} disabled={props.activeIndex === 0}><LeftArrow /></LeftArrowButton>
                <RightArrowButton onClick={() => { props.changeToNext() }} disabled={props.activeIndex === props.cards.length - 1}><RightArrow /></RightArrowButton></div>
        ) : (null)}

        {(props.cards) ? (

            <CardContainer transX={props.transX} transition={props.isTransition} opacity={props.opacity}>
                <Card title={t(`${getIdFromStudyUnit(props.cards[props.activeIndex])}.title`)}
                    text={t(`${getIdFromStudyUnit(props.cards[props.activeIndex])}.text`)} unit={props.cards[props.activeIndex]} onClick={onClick} /></CardContainer>
        ) : null}
    </Container>
}