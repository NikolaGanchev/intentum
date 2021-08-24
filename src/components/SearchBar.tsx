import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { keyframes } from "styled-components";
import Search from "../resources/Search";
import TagLoader from "../utils/TagLoader";
import Button from "./Button";

const MAX_RESULTS = 5;
const REM_RESULT_HEIGHT = 3;

const StyledSearch = styled(Search)`
  width: 3rem;
  height: 3rem;
  fill: ${props => props.theme.secondary};
  cursor: pointer;
  transition: all 1s ease;
`

const StyledButton = styled.button`
    width: 4rem;
    height: 3rem;
    border: none;
    background-color: ${props => props.theme.transparent};
    margin-left: 1rem;
    display: inline-flex;
    position: relative;
    & svg:hover {
    box-sizing: content-box;
    transform-origin: center;
    transform-box: fill-box;
    transition: all 1s ease;
  }
`

const Container = styled.div`
    display: block;
    width: auto;
    z-index: 500;
    margin-top: 1rem;
`

interface StyledInputProps {
    readonly isShown: boolean;
}

interface StyledAnswerProps {
    readonly isShown: boolean;
    readonly results: number;
}


const animationDuration = 0.5;


const StyledInput = styled.input<StyledInputProps>`
    display: flex;
    height: 3rem;
    font-size: 1rem;
    width: ${props => props.isShown ? `15rem` : `0rem`};
    transition: all ${animationDuration}s ease;
    padding: ${props => props.isShown ? `0rem 0.5rem` : `0px`};
    border: ${props => props.isShown ? `1px` : `0px`} solid ${props => props.theme.secondary};
`

const StyledQuestionContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`

const StyledAnswerContainer = styled.div<StyledAnswerProps>`
    display: block;
    position: relative;
    width: 16rem;
    margin-left: 5rem;
    background-color: ${props => props.theme.pure};
    transition: all ${animationDuration}s ease;
    height: ${props => props.isShown ? `${props.results * REM_RESULT_HEIGHT}rem` : `0rem`};
    overflow: hidden;
`

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0px;
`

const StyledListElement = styled.li`
    display: block;
    height: ${REM_RESULT_HEIGHT}rem;
    font-size: 1rem;
`

const StyledListButton = styled(Button)`
    height: 3rem;
    width: 100%;
    font-size: 1rem;
    padding: 0;
    margin: 0;
    border: 1px solid ${props => props.theme.pure};
    background-color: ${props => props.theme.pure};
    &:after {
        background: ${props => props.theme.secondary};
    }
`

export default function SearchBar(props: any) {
    const [value, setValue] = useState("");
    const [t] = useTranslation("common");
    const [tl] = useTranslation("lessons");
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [results, setResults] = useState<string[]>([]);
    // isHiddenExplicitly is a toggle that is used to allow disabling the SearchBar without hovering for mobile use
    // it is only set true by clicking the SearchBar button to disable it
    // upon any future hover or click (click that doesn't disable the SearchBar)
    // it is toggled false to make sure functionality remains
    const [isHiddenExplicitly, setIsHiddenExplicitly] = useState(false);

    const onChange = (e: any) => {
        // if input is hidden, don't accept changes
        if (!(isClick || isHover)) {
            return;
        }

        let value: string = e.currentTarget.value;
        setValue(value);

        TagLoader.getTagsObject().search(value, MAX_RESULTS)
            .then((results: string[]) => {
                setResults(results);
            });
    }

    const onClick = () => {
        setIsHiddenExplicitly(false);

        if (isClick) {
            setIsHiddenExplicitly(true);
        }

        setIsClick(!isClick);
    }

    const onHover = () => {
        setIsHiddenExplicitly(false);

        if (isClick) {
            return;
        }

        setIsHover(!isClick && !isHover);
    }

    const onClickResult = (value: string) => {
        for (let i = 0; i < props.cards.length; i++) {
            if (value === props.cards[i].id) {
                props.changeToArbitrary(i);
            }
        }
    }

    return <Container onMouseEnter={onHover} onMouseLeave={onHover}>
        <StyledQuestionContainer>
            <StyledButton onClick={onClick}><StyledSearch /></StyledButton>
            <StyledInput
                isShown={(isHover || isClick) && !isHiddenExplicitly}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={t("app.search")}>
            </StyledInput>
        </StyledQuestionContainer>
        <StyledAnswerContainer
            isShown={(isHover || isClick) && !isHiddenExplicitly}
            results={results.length}>
            <StyledList>
                {results.map((value: string, index: number) => {
                    return <StyledListElement key={index}>
                        <StyledListButton isInverted={true}
                            text={tl(`${value}.title`)}
                            onClick={() => { onClickResult(value) }}>
                        </StyledListButton>
                    </StyledListElement>;
                })}
            </StyledList>
        </StyledAnswerContainer>
    </Container>
}