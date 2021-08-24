import styled from "styled-components";
import Card from "./Card";
import ArrowLeft from "../resources/ArrowLeft";
import ArrowRight from "../resources/ArrowRight";
import { useTranslation } from "react-i18next";

const animationLength = 0.25;

const Container = styled.div`
    width: 100%;
    display: flex;
    place-content: center;
    position: relative;
    @media (max-width: 470px) {
        place-items: center
    }
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
    height: auto;
    place-items: center;

`

const LeftArrowButton = styled.button`
    position: absolute;
    left: 0%;
    margin-left: 0.5rem;
    top: 50%;
    transform: translate(0%, -50%);
    width: 5rem;
    height: 5rem;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0);;
    border: none;
    cursor: pointer;
    opacity: ${props => props.disabled ? '50%' : '100%'};
    transition: opacity ${animationLength}s ease;
    @media (max-width: 470px) {
        position: relative;
        margin-right: auto;
        transform: none;
        right: 0;
        top: 0;
        
    }
`

const RightArrowButton = styled.button`
    position: absolute;
    right: 0%;
    margin-right: 0.5rem;
    top: 50%;
    transform: translate(0%, -50%);
    width: 5rem;
    height: 5rem;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
    opacity: ${props => props.disabled ? '50%' : '100%'};
    transition: opacity ${animationLength}s ease;
    @media (max-width: 470px) {
        position: relative;
        margin-left: auto;
        transform: none;
        right: 0;
        top: 0;
    }
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

const ButtonContainer = styled.div`
    @media (max-width: 470px) {
        display: flex;
        height: 5rem;
        position: relative;
        align-self: flex-end;
        margin-top: 1rem;
        width: 100%;
    }
`


export default function CardCarousel(props: any) {
    const [t] = useTranslation("lessons");

    const onClick = () => {
        props.setStudyUnit(props.cards[props.activeIndex]);
    }

    // Gestures code for mobile
    let xLast: number;
    let isInTimeout: boolean = false;

    const activateTimeout = () => {
        isInTimeout = true;
        setTimeout(() => {
            isInTimeout = false;
        }, animationLength * 1000)
    };

    const touchStart = (event: TouchEvent) => {
        xLast = event.touches[0].clientX;
    };

    const touchMove = (event: TouchEvent) => {
        if (!xLast) {
            return;
        }

        let xNew: number = event.touches[0].clientX;

        let xDifference = xLast - xNew;

        if (xDifference > 0) {
            // Right swipe
            if (props.activeIndex === props.cards.length - 1 || isInTimeout) {
                return;
            }

            activateTimeout();

            props.changeToNext();
        }
        else {
            // Left swipe
            if (props.activeIndex === 0 || isInTimeout) {
                return;
            }

            activateTimeout();

            props.changeToPrevious();
        }
    };

    return <Container className={props.className} onTouchStart={touchStart as any} onTouchMove={touchMove as any}>
        {(props.cards) ? (

            <CardContainer transX={props.transX} transition={props.isTransition} opacity={props.opacity}>
                <Card title={t(`${props.cards[props.activeIndex].id}.title`)}
                    text={t(`${props.cards[props.activeIndex].id}.text`)} unit={props.cards[props.activeIndex]} onClick={onClick} /></CardContainer>
        ) : null}
        {(props.cards) ? (
            <ButtonContainer>
                <LeftArrowButton onClick={() => { props.changeToPrevious() }} disabled={props.activeIndex === 0}><LeftArrow /></LeftArrowButton>
                <RightArrowButton onClick={() => { props.changeToNext() }} disabled={props.activeIndex === props.cards.length - 1}><RightArrow /></RightArrowButton></ButtonContainer>
        ) : (null)}
    </Container>
}

export { animationLength }