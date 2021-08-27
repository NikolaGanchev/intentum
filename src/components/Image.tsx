import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    place-content: center;
    cursor: pointer;
    align-items: flex-start;
`

const StyledImg = styled.img`
    width: 100%;
`
const FullSizeContainer = styled.div`
    position: fixed;
    display: flex;
    place-content: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.shadow};
    z-index: 9999;
    width: 100%;
    height: 100%;
`

export default function Image(props: any) {
    const [showFullSize, setShowFullSize] = useState(false);
    const onClick = () => {
        setShowFullSize(!showFullSize);
    }

    return <Container className={props.className} onClick={onClick}>
        {showFullSize ?
            (<FullSizeContainer>
                <img src={props.src} alt={props.alt}></img>
            </FullSizeContainer>) : (null)}
        <StyledImg src={props.src} alt={props.alt}></StyledImg>
    </Container>
}