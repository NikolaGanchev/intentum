import styled from "styled-components";
import Search from "../resources/Search";

const StyledSearch = styled(Search)`
  width: 3rem;
  height: 3rem;
  fill: ${props => props.theme.secondary};
  position: absolute;
  left: 1rem;
  top: 1rem;
  transition: all 3s ease;
  cursor: pointer;
  transition: all 1s ease;
  z-index: 400;
`

const StyledButton = styled.button`
    width: 5rem;
    height: 5rem;
    border: none;
    background-color: ${props => props.theme.main};
    z-index: 500;
    & svg:hover {
    box-sizing: content-box;
    transform-origin: center;
    transform-box: fill-box;
    transition: all 1s ease;
  }
`

export default function SearchBar(props: any) {

    return <div><StyledButton><StyledSearch /></StyledButton></div>
}