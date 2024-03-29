import styled from "styled-components";
import Card from "./Card";
import ArrowLeft from "../resources/ArrowLeft";
import ArrowRight from "../resources/ArrowRight";
import { useTranslation } from "react-i18next";
import {useEffect, useRef} from "react";

const animationLength = 0.25;

const Container = styled.div`
    width: 100%;
    display: flex;
    place-content: center;
    position: relative;
    @media (max-width: 470px) {
        place-items: center
    }
    overflow-x: hidden;
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
    margin: auto;
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

interface CardCarouselProps {
    activeIndex: number;
    opacity: number;
    isTransition: boolean;
    transX: number;
    className?: string;
    cards: any;
    changeToPrevious(): void;
    changeToNext(): void;
    setStudyUnit: any;
}

export default function CardCarousel(props: CardCarouselProps) {
    const [t] = useTranslation("common");
    const [tl] = useTranslation("lessons");
    const containerRef = useRef<any>();

    const onClick = () => {
        props.setStudyUnit(props.cards[props.activeIndex]);
    }

    // Gestures code for mobile
    let xLast: number;
    let yLast: number;
    let isInTimeout: boolean = false;

    const activateTimeout = () => {
        isInTimeout = true;
        setTimeout(() => {
            isInTimeout = false;
        }, animationLength * 1000)
    };

    const touchStart = (event: TouchEvent) => {
        xLast = event.touches[0].clientX;
        yLast = event.touches[0].clientY;
    };

    const touchMove = (event: TouchEvent) => {
        if (!xLast || !yLast) {
            return;
        }

        let xNew: number = event.touches[0].clientX;
        let yNew: number = event.touches[0].clientY;

        let xDifference = xLast - xNew;
        let yDifference = yLast - yNew;

        // Ignore down and up swipes
        if (Math.abs(yDifference) > Math.abs(xDifference)) {
            return;
        }

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

    useEffect(() => {
        // Arrow control code
        const onKeyDown = (event: KeyboardEvent) => {
            switch (event.key) {
                case "ArrowRight": {
                    props.changeToNext();
                    break;
                }
                case "ArrowLeft": {
                    props.changeToPrevious();
                }
            }
        };

        window.addEventListener('keydown', onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [props.changeToNext, props.changeToPrevious])



    return <div>
        {(props.cards) &&
            <Container className={props.className} onTouchStart={touchStart as any} onTouchMove={touchMove as any} ref={containerRef}>
                <CardContainer transX={props.transX} transition={props.isTransition} opacity={props.opacity}>
                    <Card title={tl(`${props.cards[props.activeIndex].id}.title`)}
                        text={tl(`${props.cards[props.activeIndex].id}.text`)} unit={props.cards[props.activeIndex]}
                        onClick={onClick} /></CardContainer>
                <ButtonContainer>
                    <LeftArrowButton
                        onClick={() => { props.changeToPrevious() }}
                        disabled={props.activeIndex === 0}
                        aria-label={t("app.previousLesson")}>
                        <LeftArrow />
                    </LeftArrowButton>
                    <RightArrowButton
                        onClick={() => { props.changeToNext() }}
                        disabled={props.activeIndex === props.cards.length - 1}
                        aria-label={t("app.nextLesson")}>
                        <RightArrow />
                    </RightArrowButton>
                </ButtonContainer>
            </Container>
        }
    </div>
}

export { animationLength }