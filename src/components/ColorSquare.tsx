import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ColorType, determineColorBasedOnLuminosity } from "../utils/Theme";
import TextBlock from "./TextBlock";
import { ChromePicker, ColorChangeHandler } from "react-color";
import { useState } from "react";
import Modal from "./Modal";

interface SquareProps {
    color: string;
}

interface ColorSquareProps {
    color: string;
    id: string;
    changeColor: ColorChangeHandler;
    isDisabled: boolean;
}

interface ContainerProps {
    isDisabled: boolean;
}

const Container = styled.div<ContainerProps>`
    display: inline-flex;
    width: 5.4rem;
    margin: 0.5rem;
    text-align: center;
    place-items: center;
    flex-direction: column;
    cursor: ${props => props.isDisabled? "": "pointer"};
`

const Square = styled.div<SquareProps>`
    border: 2px solid;
    border-color: ${props => {
        const colorType: ColorType = determineColorBasedOnLuminosity(props.theme.main);
        return colorType === ColorType.Dark ? props.theme.textOnDarkBackground: props.theme.textOnLightBackground;
    }};
    width: 3rem;
    height: 3rem;
    background-color: ${props => props.color};
    transition: all 1s ease;
`

const StyledTextBlock = styled(TextBlock)`
    height: auto;
    word-wrap: break-word;
    text-indent: 0rem;
    font-size: 1rem;
    width: 5.4rem;
`

/*const ColorPickerContainer = styled.div`
    position: absolute;
    top: -15rem;
    z-index: 9999;
    overflow: visible;
    float: right;
`*/

{/*isColorPickerHover &&
                <ColorPickerContainer>
                    <ChromePicker />
                </ColorPickerContainer>
            */}

const ColorPickerContainer = styled.div`
    position: relative;
    display: flex;
    place-content: center;
`

export default function ColorSquare(props: ColorSquareProps) {
    const [t, _] = useTranslation("common");
    //const [isColorPickerHover, setIsColorPickerHover] = useState(false);
    const [isColorPickerShowing, setIsColorPickerShowing] = useState(false);

    return <div>
            <Modal isShowing={isColorPickerShowing} 
            close={() => { setIsColorPickerShowing(false)} } 
            heading={t("app.chooseColor")}>
                <ColorPickerContainer>
                    <ChromePicker
                        color={ props.color }
                        onChangeComplete={ props.changeColor }>
                    </ChromePicker>
                </ColorPickerContainer>
            </Modal>
            <Container 
                    onClick={() => {
                        if (!props.isDisabled) {
                            setIsColorPickerShowing(true);
                        }
                     }}
                    isDisabled={props.isDisabled}>
                <Square color={props.color}></Square>
                <StyledTextBlock>
                    {t(`app.colors.${props.id}`)}
                </StyledTextBlock>
             </Container>
            </div>
}