import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Search from "../resources/Search";
import TagLoader from "../utils/TagLoader";
import Button from "./Button";

const StyledSearch = styled(Search)`
  width: 3rem;
  height: 3rem;
  fill: ${props => props.theme.secondary};

  cursor: pointer;
  transition: all 1s ease;
`

const StyledButton = styled.button`
    width: 5rem;
    height: 3rem;
    border: 1px solid ${props => props.theme.main};
    background-color: ${props => props.theme.main};
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

const StyledInput = styled.input<StyledInputProps>`
    width: ${props => props.isShown ? `100%` : `0%`};
    display: ${props => props.isShown ? `flex` : `none`};
    animation: all 1s ease;
    height: 3rem;
    font-size: 1rem;
    width: 15rem;
`

const StyledQuestionContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`

const StyledAnswerContainer = styled.div`
    display: block;
    position: relative;
    width: 15rem;
    margin-left: 6rem;
    background-color: ${props => props.theme.pure};
    padding: 1px 2px;
`

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0px;
`

const StyledListElement = styled.li`
    display: block;
    height: 3rem;
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

    const onChange = (e: any) => {
        let value: string = e.currentTarget.value;
        setValue(value);

        TagLoader.getTagsObject().search(value)
            .then((results: string[]) => {
                console.log(results);
                setResults(results);
            })
    }

    const onClick = () => {
        setIsClick(!isClick);
    }

    const onHover = () => {
        if (isClick) {
            return;
        }

        setIsHover(!isHover);
    }

    const onClickResult = (value: string) => {

    }

    return <Container onMouseEnter={onHover} onMouseLeave={onHover}>
        <StyledQuestionContainer>
            <StyledButton onClick={onClick}><StyledSearch /></StyledButton>
            <StyledInput isShown={isHover || isClick} type="text" value={value} onChange={onChange} placeholder={t("app.search")}></StyledInput>
        </StyledQuestionContainer>
        {(isHover || isClick) ?
            (<StyledAnswerContainer>
                <StyledList>
                    {results.map((value: string, index: number) => {
                        if (index < 5) {
                            return <StyledListElement key={index}>
                                <StyledListButton isInverted={true}
                                    text={tl(`${value}.title`).replace(",", "")}
                                    onClick={() => { onClickResult(value) }}>
                                </StyledListButton>
                            </StyledListElement>;
                        }
                        else {
                            return null;
                        }
                    })}
                </StyledList>
            </StyledAnswerContainer>) : null
        }
    </Container>
}