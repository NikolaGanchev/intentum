import styled from 'styled-components'
import Logo from '../resources/LogoSvg'
import '../Loader.css'
import { useEffect, useRef } from 'react';

const disappearLength = 3;

const Background = styled.div`
        background-color: ${props => props.theme.main};
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 100%;
        transition: ${disappearLength}s; 
    `

const Title = styled.h1`
        position: fixed;
        left: 50%;
        top: 20%;
        transform: translate(-50%, -80%);
        color: ${props => props.theme.text};
        font-size: 5em;
        letter-spacing: 0.10em;
        font-weight: normal;
    `

const Motto = styled.h3`
        position: fixed;
        left: 50%;
        top: 90%;
        transform: translate(-50%, -10%);
        color: ${props => props.theme.text};
        font-weight: normal;
    `

export default function Loader(props: any) {
    const bgRef = useRef<any>();


    useEffect(() => {
        setTimeout(() => {
            bgRef.current.classList.add("backgroundDisappear");

            setTimeout(() => {
                props.hide();
            }, disappearLength * 1000);
        }, 3000)

    })

    return (
        <Background ref={bgRef}>
            <Title>{props.title}</Title>
            <Logo />
            <Motto>{props.motto}</Motto>
        </Background>
    )
}