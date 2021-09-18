import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components"
import Button from "./Button";
import Image from './Image';
import TextBlock from "./TextBlock";

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
    @media only screen and (max-width: 768px) {
        displaY: block;
    }
`

interface StyledInputProps {
    readonly isCorrect: boolean;
    readonly isShowing: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
    width: 100%;
    display: block;
    border: 1px solid ${props => {
        if (props.isShowing && props.isCorrect) {
            return props.theme.correctFull;
        }
        else if (props.isShowing && !props.isCorrect) {
            return props.theme.wrongFull;
        }
        else {
            return props.theme.secondary;
        }
    }};
    color: ${props => {
        if (props.isShowing && props.isCorrect) {
            return props.theme.correctFull;
        }
        else if (props.isShowing && !props.isCorrect) {
            return props.theme.wrongFull;
        }
        else {
            return props.theme.text;
        }
    }};
    font-size: 1.1rem;
    padding: 0.5rem;
    padding-right: 0rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: all 1s ease-in;
    background-color: ${props => props.theme.main};
`

interface ExplanationProps {
    readonly isShown: boolean
}

const Explanation = styled.div<ExplanationProps>`
    background-color: ${props => props.theme.tip};
    color: ${props => props.theme.textWhite};
    transition: all 1s ease-in;
    visibility: ${props => props.isShown ? 'visible' : 'hidden'};
    display: ${props => props.isShown ? 'block' : 'none'};
    font-size: 1.2rem;
    padding: 1rem;
    margin-top: 1rem;
`

export default function FullAnswerQuestion(props: any) {
    const [value, setValue] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const [t] = useTranslation("common");

    useEffect(() => {
        if (props.isShowing) {
            check();
        }
    }, [props.isShowing]);

    const handleChange = (e: any) => {
        let value: string = e.currentTarget.value;
        setValue(value);
    }

    const check = () => {
        let correct: boolean = false;
        if (props.rightAnswer) {
            correct = normalise(value) === normalise(props.rightAnswer);
        }
        else if (props.rightAnswers) {
            correct = normaliseArray(props.rightAnswers).includes(normalise(value));
        }
        else {
            correct = true;
        }

        if (props.onAnswer) {
            props.onAnswer(correct);
        }

        setIsCorrect(correct);
        setIsDisabled(true);
        setIsShowing(true);
    }

    const normalise = (value: string) => {
        return value.toString().toLowerCase().trim().replace(/ /g, "");
    }

    const normaliseArray = (value: string[]) => {
        return value.map((val: string) => {
            return val.toString().toLowerCase().trim().replace(/ /g, "");
        })
    }

    return <Container>
        <QuestionContainer hasImage={props.image}>
            {props.children}
            {(props.image) ?
                <Image src={props.image} alt={props.alt} /> :
                (null)
            }
        </QuestionContainer>
        <StyledInput type="text" value={value} onChange={handleChange} placeholder={props.placeholder} isShowing={props.isShowing != null && props.isShowing != undefined ? props.isShowing : isShowing} isCorrect={isCorrect} disabled={isDisabled}></StyledInput>
        {(!props.noButton) ?
            <Button text={t("app.check")} onClick={check} isDisabled={isDisabled}></Button> :
            (null)
        }
        <Explanation isShown={props.isShowing != null && props.isShowing != undefined ? props.isShowing : isShowing}>
            <TextBlock>
                {(props.rightAnswer) ?
                    `${t("app.rightAnswer")}: ${props.rightAnswer}` : null}
                {(props.rightAnswers) ?
                    `${t("app.rightAnswers")}: ${props.rightAnswers.join(", ")}` : null}
            </TextBlock>
            {props.explanation ?
                <TextBlock>
                    {props.explanation}
                </TextBlock> : null
            }
        </Explanation>
    </Container>
}