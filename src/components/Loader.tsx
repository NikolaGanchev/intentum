import styled from 'styled-components'
import SpinningLogo from '../resources/LogoSvg'
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

const Container = styled.div`
    position: fixed;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    place-items: center;
`

const Title = styled.h1`
    color: ${props => props.theme.text};
    font-size: 5em;
    letter-spacing: 0.10em;
    font-weight: normal;
    margin: 1rem;
    text-align: center;
`

const StyledSpinner = styled(SpinningLogo)`
    position: relative;
`

const Motto = styled.h3`
        position: fixed;
        left: 50%;
        top: 90%;
        transform: translate(-50%, -10%);
        color: ${props => props.theme.text};
        font-weight: normal;
`

interface LoaderProps {
    motto: string;
    title: string;
    isShowing: boolean;
    job?: any;
    fadeIn?: boolean;
    hide: any;
}


export default function Loader(props: LoaderProps) {
    const [isVisible, setIsVisible] = useState(!props.fadeIn);

    const run = () => {
        if (props.job !== null && props.job !== undefined) {
            props.job().then(() => {
                end();
            }).catch((err: any) => {
                console.error(err);
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

    useEffect(() => {
        run();
    }, []);


    return <div>
        {props.isShowing &&
            <Background visible={isVisible}>
                <Container>
                    <Title>{props.title}</Title>
                    <StyledSpinner/>
                </Container>
                <Motto>{props.motto}</Motto>
            </Background>
        }
    </div>;
}