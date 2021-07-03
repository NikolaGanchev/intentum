import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    place-content: center;
`

const StyledImg = styled.img`
    width: 100%;
`

export default function Image(props: any) {
    return <Container className={props.className}>
        <StyledImg src={props.src} alt={props.alt}></StyledImg>
    </Container>
}