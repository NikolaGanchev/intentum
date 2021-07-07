import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import TextBlock from "./TextBlock"
import FillIn from "./FillIn";
import Button from "./Button";

const Container = styled.div`
    display: block;
    padding: 1rem;
    border: 1px solid ${props => props.theme.secondary};
    margin-top: 1rem;
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
const StyledButton = styled(Button)`
    margin-top: 1rem;
`

interface FillIn {
    rightAnswer: string;
}

export default function FillQuestion(props: any) {
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
                let wordStripped = result[0].replaceAll("_", "");
                let obj: FillIn = { rightAnswer: wordStripped };
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
        {(!props.noButton) ?
            <StyledButton text={props.button} onClick={check} isDisabled={isDisabled}></StyledButton> :
            (null)
        }
        <Explanation isShown={isShowing || props.isShowing}>
            <TextBlock>
                {(props.rightAnswer) ?
                    `${t("app.rightAnswer")}: ${props.rightAnswer}` : null}
                {(props.rightAnswers) ?
                    `${t("app.rightAnswers")}: ${props.rightAnswers.join(", ")}` : null}
            </TextBlock>
            <TextBlock>
                {`${t("app.rightAnswer")}: ${props.text.replaceAll("_", "")}`}
                <br />
                {props.explanation}
            </TextBlock>
        </Explanation>

    </Container>
}