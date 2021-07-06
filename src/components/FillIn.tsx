import { useState } from "react";
import styled from "styled-components"

interface StyledInputProps {
    readonly isCorrect: boolean;
    readonly isShowing: boolean;
}

const StyledInput = styled.input<StyledInputProps>`
    width: 4vw;
    border-bottom: 1px solid ${props => props.theme.secondary};
    display: inline-block;
    border-top: none;
    border-right: none;
    border-left: none;
    border-color: ${props => {
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
    background-color: ${props => props.theme.main};
    font-size: 1rem;
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
    transition: all 1s ease-in;
`

export default function FillIn(props: any) {

    const [value, setValue] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const handleChange = (e: any) => {
        let value: string = e.currentTarget.value;
        setIsCorrect(normalise(value) === normalise(props.rightAnswer));
        setValue(value);
    }

    const normalise = (value: string) => {
        return value.toLowerCase().trim().replaceAll(" ", "");
    }

    return <StyledInput type="text" value={value} onChange={handleChange} isCorrect={isCorrect} isShowing={props.isShowing} disabled={props.isDisabled}></StyledInput>
}