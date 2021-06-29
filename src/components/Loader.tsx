import styled from 'styled-components'
import Logo from '../resources/LogoSvg'
import '../Loader.css'
import { useEffect, useRef, useState } from 'react';
import { changeStudyUnit, generateStudyUnits, generateStudyUnitsIfNeeded, getAllStudyUnitsArray, getStudyUnit } from '../utils/StudyUnitUtils';
import StudyUnit from '../utils/StudyUnit';

const disappearLength = 3;

interface BackgroundProps {
    readonly visible: boolean;
};

const Background = styled.div<BackgroundProps>`
        background-color: ${props => props.theme.main};
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: ${props => props.visible ? '100%' : '0'};
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
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const func = (success: boolean) => {
            if (success) {
                setIsVisible(false);

                const callback = (units: StudyUnit[] | null) => {
                    if (units == null) {
                        getAllStudyUnitsArray(callback);
                    }
                    setTimeout(() => {
                        props.hide();
                    }, disappearLength * 1000);
                };

                getAllStudyUnitsArray(callback);


            }
            else {
                generateStudyUnitsIfNeeded(func);
            }
        }


        generateStudyUnitsIfNeeded(func);
    }, [])

    return (
        <Background visible={isVisible}>
            <Title>{props.title}</Title>
            <Logo />
            <Motto>{props.motto}</Motto>
        </Background>
    )
}