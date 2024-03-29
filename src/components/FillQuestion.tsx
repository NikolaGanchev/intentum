import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import TextBlock from "./TextBlock"
import FillIn from "./FillIn";
import Button from "./Button";
import { ColorType, determineColorBasedOnLuminosity } from "../utils/Theme";

const Container = styled.div`
    display: block;
    padding: 1rem;
    border: 1px solid ${props => props.theme.secondary};
    margin-top: 1rem;
    font-size: 1.2rem;
`

interface ExplanationProps {
    readonly isShown: any;
}

const Explanation = styled.div<ExplanationProps>`
    background-color: ${props => props.theme.tip};
    color: ${props => {
        const colorType: ColorType = determineColorBasedOnLuminosity(props.theme.tip);
        return colorType === ColorType.Dark ? props.theme.textOnDarkBackground: props.theme.textOnLightBackground;
    }};
    transition: all 1s ease-in;
    visibility: ${props => props.isShown ? 'visible' : 'hidden'};
    display: ${props => props.isShown ? 'block' : 'none'};
    font-size: 1.2rem;
    padding: 1rem;
    margin-top: 1rem;
`
const StyledButton = styled(Button)`
    margin-top: 1rem;
`

interface FillInType {
    rightAnswer: string;
}

interface FillQuestionProps {
    rightAnswers?: string[];
    rightAnswer?: string;
    explanation?: string;
    isShowing?: boolean;
    noButton?: boolean;
    text: string;
    button: string;
    onAnswer?: any;
}

export default function FillQuestion(props: FillQuestionProps) {
    const [t] = useTranslation("common");
    const [isShowing, setIsShowing] = useState(false);
    const fillInRegex = /__[^\s]*__/g;
    const outputRef = useRef<any[]>([]);
    const [output, setOutput] = useState<any[]>([]);
    let localText: string[] = props.text.split(" ");
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        for (let value of localText) {
            const result = value.match(fillInRegex);
            if (result !== null) {
                let wordStripped = result[0].replace(/_/g, "");
                let obj: FillInType = { rightAnswer: wordStripped };
                outputRef.current.push(obj);
            }
            else {
                outputRef.current.push(value);
            }
        }
        setOutput(outputRef.current);
    }, [])

    const check = () => {
        if (props.onAnswer) {
            props.onAnswer();
        }
        setIsShowing(true);
        setIsDisabled(true);
    }

    return <Container>
        <TextBlock>
            {t("app.fillin")}:
        </TextBlock>
        <Container>
            <TextBlock>{output.map((value: any, index: number) => {
                if (value.rightAnswer) {
                    return <FillIn key={index} isShowing={isShowing} rightAnswer={value.rightAnswer} isDisabled={isDisabled} />
                }
                else {
                    return value;
                }
            })}</TextBlock>
        </Container>
        {!props.noButton &&
            <StyledButton text={props.button} onClick={check} isDisabled={isDisabled}/>
        }
        <Explanation isShown={(isShowing || props.isShowing) && (props.explanation || props.rightAnswer || props.rightAnswers)}>
            <TextBlock>
                {(props.rightAnswer) &&
                    `${t("app.rightAnswer")}: ${props.rightAnswer}`}
                {(props.rightAnswers) &&
                    `${t("app.rightAnswers")}: ${props.rightAnswers.join(", ")}`}
            </TextBlock>
            {props.explanation &&
                <TextBlock>
                    {`${t("app.rightAnswer")}: ${props.text.replace(/_/g, "")}`}
                    <br />
                    {props.explanation}
                </TextBlock>
            }
        </Explanation>

    </Container>
}