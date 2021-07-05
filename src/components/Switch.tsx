import { useState } from "react"
import styled from "styled-components"
import Button from "./Button"

const Container = styled.div`
    display: block;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

const StyledButton = styled(Button)`
    width: 5vw;
`
const ContentContainer = styled.div`
    padding: 1rem;
    padding-top: 0rem;
    border: 1px solid ${props => props.theme.secondary};
    transition: all 1s ease-in;
`

export default function Switch(props: any) {
    const [activeIndex, setActiveIndex] = useState(0);

    return <Container>
        <ButtonContainer>
            {
                props.children.map((obj: any, i: number) => {
                    return <StyledButton text={obj.props["data-switch"]} isActive={i === activeIndex} key={i} onClick={() => setActiveIndex(i)} />
                })
            }
        </ButtonContainer>
        <ContentContainer>
            {
                props.children[activeIndex].props.children
            }
        </ContentContainer>
    </Container>
}