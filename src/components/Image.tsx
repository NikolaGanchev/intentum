import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    place-content: center;
    cursor: pointer;
    align-items: flex-start;
`

interface StyledImgProps {
    readonly isAuto: boolean | undefined;
    readonly width: number;
}

const StyledImg = styled.img<StyledImgProps>`
    width: ${props => props.isAuto ? "auto" : `${props.width}%`};
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
    align-items: flex-start;
`

const StyledBigImg = styled.img`
    margin: auto;
    height: 90%;
`

interface ImageProps {
    src: any;
    className?: string;
    alt?: string;
    auto?: boolean;
    width?: number;
}

export default function Image(props: ImageProps) {
    const [showFullSize, setShowFullSize] = useState(false);
    const onClick = () => {
        setShowFullSize(!showFullSize);
    }

    return <Container className={props.className} onClick={onClick}>
        {showFullSize &&
            <FullSizeContainer>
                <StyledBigImg src={props.src} alt={props.alt}></StyledBigImg>
            </FullSizeContainer>}
        <StyledImg src={props.src} alt={props.alt} isAuto={props.auto} width={props.width ? props.width : 100}></StyledImg>
    </Container>
}