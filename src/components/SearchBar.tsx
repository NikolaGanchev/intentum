import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Search from "../resources/Search";
import { TagMatch } from "../utils/TagLoader";
import Button from "./Button";
import { TagsContext } from "./TagsContext";

const MAX_RESULTS = 5;

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
    --result-height: 5rem;
    --container-width: 16rem;

    @media only screen and (max-width: 500px) and (min-height: 400px) {
        --result-height: 6rem;
    }
    
    @media only screen and (min-width: 500px) {
        --result-height: 5rem;
        --container-width: 20rem;
    }
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
    width: ${props => props.isShown ? `calc(var(--container-width) - 1rem)` : `0rem`};
    transition: all ${animationDuration}s ease;
    padding: ${props => props.isShown ? `0rem 0.5rem` : `0px`};
    border: ${props => props.isShown ? `1px` : `0px`} solid ${props => props.theme.secondary};
    background-color: ${props => props.theme.pure};
    color: ${props => props.theme.text};
`

const StyledQuestionContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`

const StyledAnswerContainer = styled.div<StyledAnswerProps>`
    display: block;
    position: relative;
    width: var(--container-width);
    margin-left: 5rem;
    background-color: ${props => props.theme.pure};
    transition: all ${animationDuration}s ease;
    height: ${props => props.isShown ? `calc(${props.results} * var(--result-height))` : `0rem`};
    overflow: hidden;
    border: ${props => props.isShown ? `1px` : `0px`} solid ${props => props.theme.secondary};
`

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0px;
`

const StyledListElement = styled.li`
    display: block;
    height: var(--result-height);
    font-size: 1rem;
`

const StyledListButton = styled(Button)`
    height: var(--result-height);
    width: 100%;
    font-size: 0.95rem;
    padding: 0;
    margin: 0;
    border: 1px solid ${props => props.theme.pure};
    background-color: ${props => props.theme.pure};
    &:after {
        background: ${props => props.theme.secondary};
    }
`

const HighlightedCharacters = styled.span`
    background-color: ${props => props.theme.warning};
    font-size: 0.95rem;
    letter-spacing: -1px;
    color: ${props => props.theme.textBlack};
`

const NonHighlightedCharacters = styled.span`
    font-size: 0.95rem;
`

interface SearchBarProps {
    cards: any;
    changeToArbitrary: any;
    onSelect: (id: string) => any;
}


export default function SearchBar(props: SearchBarProps) {
    const [value, setValue] = useState("");
    const [t] = useTranslation("common");
    const [tl] = useTranslation("lessons");
    const [isHover, setIsHover] = useState(false);
    const [isClick, setIsClick] = useState(false);
    const [results, setResults] = useState<TagMatch[]>([]);
    const tags = useContext(TagsContext);
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

        tags.current.search(value, MAX_RESULTS)
            .then((results: TagMatch[]) => {
                results.forEach(tagMatch => {
                    tagMatch.html = <NonHighlightedCharacters> {tagMatch.tag.slice(0, tagMatch.matchIndex)}
                                        <HighlightedCharacters> {tagMatch.tag.slice(tagMatch.matchIndex, tagMatch.matchIndex + tagMatch.matchLength)} </HighlightedCharacters>
                                            {tagMatch.tag.slice(tagMatch.matchIndex + tagMatch.matchLength)} </NonHighlightedCharacters>;
                });
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
        props.onSelect(value);
    }

    return <Container onMouseEnter={onHover} onMouseLeave={onHover}>
        <StyledQuestionContainer>
            <StyledButton onClick={onClick} aria-label={t("app.search")}><StyledSearch /></StyledButton>
            <StyledInput
                isShown={(isHover || isClick) && !isHiddenExplicitly}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={t("app.search")}>
            </StyledInput>
        </StyledQuestionContainer>
        <StyledAnswerContainer
            isShown={(isHover || isClick) && !isHiddenExplicitly && results.length > 0}
            results={results.length}>
            <StyledList>
                {results.map((value: TagMatch, index: number) => {
                    return <StyledListElement key={index}>
                        <StyledListButton isInverted={true} HTMLInjection={<div>{tl(`${value.id}.title`)} ({value.html})</div>}
                            text=""
                            onClick={() => { onClickResult(value.id) }}
                            secondaryText={tl(`${value.id}.text`)}>
                        </StyledListButton>
                    </StyledListElement>;
                })}
            </StyledList>
        </StyledAnswerContainer>
    </Container>
}