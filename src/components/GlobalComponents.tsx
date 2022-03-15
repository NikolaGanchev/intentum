import styled from "styled-components";
import Button from "./Button";

export const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding-left: 0px;
`

export const StyledListElement = styled.li`
    display: block;
    height: var(--result-height);
    font-size: 1rem;
`

export const StyledListButton = styled(Button)`
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