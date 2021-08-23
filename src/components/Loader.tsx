import styled from 'styled-components'
import Logo from '../resources/LogoSvg'
import '../Loader.css'
import { useEffect, useState } from 'react';

const disappearLength = 1.5;

interface BackgroundProps {
    readonly visible: boolean;
};

const Background = styled.div<BackgroundProps>`
        z-index: 9999;
        background-color: ${props => props.theme.main};
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: ${props => props.visible ? '100%' : '0'};
        transition: ${disappearLength}s; 
        pointer-events: ${props => props.visible ? 'all' : 'none'};
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
    const [isVisible, setIsVisible] = useState(!props.fadeIn);

    const run = () => {
        if (props.job !== null && props.job !== undefined) {
            props.job().then(() => {
                end();
            }).catch((err: any) => {
                console.error(err);
                run();
            });
        }
        else {
            end();
        }
    }

    const end = () => {
        setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
                props.hide();
            }, disappearLength * 1000);
        }, 1000)
    }

    return (
        <Background visible={isVisible}>
            <Title>{props.title}</Title>
            <Logo />
            <Motto>{props.motto}</Motto>
        </Background>
    )
}