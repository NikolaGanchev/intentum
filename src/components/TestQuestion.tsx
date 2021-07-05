import { useState } from "react"
import styled from "styled-components"
import { nanoid } from 'nanoid'
import TextBlock from "./TextBlock"
import Image from './Image';

const Container = styled.div`
    display: block;
    padding: 1rem;
    border: 1px solid ${props => props.theme.secondary};
    margin-top: 1rem;
`

interface QuestionContainerProps {
    readonly hasImage: boolean;
}

const QuestionContainer = styled.div<QuestionContainerProps>`
    width: 100%;
    padding-right: ${props => props.hasImage ? '1rem' : '0px'};
    display: flex;
    font-size: 1.2rem;
`

const AnswerContainer = styled.div`
    display: block;
    width: 100%;
`

interface StyledRadioContainerProps {
    readonly isCorrect: boolean;
    readonly isShowing: boolean;
}

const RadioContainer = styled.div<StyledRadioContainerProps>`
    width: 100%;
    display: block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: ${props => {
        if (props.isShowing && props.isCorrect) {
            return props.theme.correct;
        }
        else if (props.isShowing && !props.isCorrect) {
            return props.theme.wrong;
        }
        else {
            return props.theme.main;
        }
    }};
    transition: all 1s ease-in;
`

const StyledRadioButton = styled.input`
    width: 1.1rem;
    height: 1.1rem;
    margin-right: 0.5rem;
    transition: all 1s ease-in;
    &[type="radio"] {
        vertical-align: text-bottom;
    }
`

const StyledLabel = styled.label`
    font-size: 1.1rem;
    vertical-align: middle;
`

interface ExplanationProps {
    readonly isShown: boolean
}

const Explanation = styled.div<ExplanationProps>`
    display: block;
    background-color: ${props => props.theme.tip};
    color: ${props => props.theme.pure};
    transition: all 1s ease-in;
    visibility: ${props => props.isShown ? 'visible' : 'hidden'};
    display: ${props => props.isShown ? 'block' : 'none'};
    font-size: 1.2rem;
    padding: 1rem;
    margin-top: 1rem;
`

export default function TestQuestion(props: any) {
    const id = nanoid()
    const [tries, setTries] = useState(0);
    const [checked, setChecked] = useState(null);
    const [isShowing, setIsShowing] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const rightAnswer = props.answers[props.rightAnswer];
    const handleCheck = (e: any) => {
        let value = e.currentTarget.value;
        setChecked(value);
        if (props.check) {
            props.check(props.answers, rightAnswer, value, tries, onShow);
            return;
        }

        if (value !== rightAnswer) {
            setTries(tries + 1);
        }
        else {
            onShow(true);
            return;
        }
        if (tries > props.tries) {
            onShow(false);
        }

    }

    const onShow = (right: boolean) => {
        setIsShowing(true);
        setIsDisabled(true);
        if (props.onAnswer) {
            props.onAnswer(right);
        }
    }

    return <Container>
        <QuestionContainer hasImage={props.image}>
            {props.children}
            {(props.image) ?
                <Image src={props.image} alt={props.alt} /> :
                (null)
            }
        </QuestionContainer>
        <AnswerContainer>
            {props.answers.map((value: string, i: number) => {

                return <RadioContainer isCorrect={value === rightAnswer} isShowing={(isShowing || props.isShowing) && value === rightAnswer} key={i}>
                    <StyledLabel>
                        <StyledRadioButton type="radio" name={id} value={value} checked={checked === value} onChange={handleCheck} disabled={isDisabled || props.isDisabled} />
                        {value}
                    </StyledLabel>
                </RadioContainer>
            })}
        </AnswerContainer>
        <Explanation isShown={isShowing || props.isShowing}>
            <TextBlock>
                {props.explanation}
            </TextBlock>
        </Explanation>
    </Container>
}