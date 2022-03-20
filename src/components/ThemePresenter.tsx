import { useEffect, useRef, useState } from "react";
import { ColorResult } from "react-color";
import { useTranslation } from "react-i18next";
import styled, { useTheme } from "styled-components";
import Edit from "../resources/Edit";
import Result, { ThemeNameError } from "../utils/Result";
import { getColorString, HiddenColors, Theme } from "../utils/Theme";
import Button from "./Button";
import ColorSquare from "./ColorSquare";
import Heading from "./Heading";
import Modal from "./Modal";

interface ThemePresenterProps {
    theme: Theme;
    onSelect: (theme: Theme) => any;
    isDisabled: boolean;
    deleteTheme: (theme: Theme) => any;
    modifyTheme: (newTheme: Theme) => void;
    changeName: (theme: Theme, newName: string) => Result<null>;
}

const Container = styled.div`
    display: flex;
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;
`

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    place-content: center;
    margin-top: 0.5rem;
`

const OuterContainer = styled.div`
    overflow-y: visible;
    overflow-x: visible;
    position: relative;
`

const StyledEdit = styled(Edit)`
    width: 2rem;
    height: 2rem;
    fill: ${props => props.theme.secondary};
    cursor: pointer;
    transition: all 1s ease;
`

const StyledEditButton = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    background-color: ${HiddenColors.transparent};
    position: relative;
    margin-left: 1rem;
    margin-top: 1rem;
    display: inline-flex;
`

const NameContainer = styled.div`
    width: 100%;
    display: flex;
`

const StyledInput = styled.input`
    width: 12rem;
    display: block;
    border: 1px solid ${props => props.theme.secondary};
    color: ${props => props.theme.text};
    font-size: 1.1rem;
    padding: 0.5rem;
    padding-right: 0rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: all 1s ease-in;
    background-color: ${props => props.theme.main};
`

export const MAX_THEME_NAME_LENGTH = 15;
export const MIN_THEME_NAME_LENGTH = 1;

export default function ThemePresenter(props: ThemePresenterProps) {
    const theme: any = useTheme();
    const [t, _] = useTranslation("common");
    const containerRef = useRef<any>();
    const [currentName, setCurrentName] = useState<string | undefined>("");
    const [isEditingName, setIsEditingName] = useState(false);
    const [editingName, setEditingName] = useState(currentName);
    const [isShowingWarningModal, setIsShowingWarningModal] = useState(false);
    const [warning, setWarning] = useState("");

    const handleChange = (e: any) => {
        let value: string = e.currentTarget.value;

        if (value.length > MAX_THEME_NAME_LENGTH) {
            return;
        }

        setEditingName(value);
    }

    const saveName = () => {
        if (!isEditingName) {
            setEditingName(currentName);
        }

        if (isEditingName && editingName) {
            const result = props.changeName(props.theme, editingName);

            if (!result.success) {
                switch(result.error) {
                    case ThemeNameError.NameAlreadyExists:
                        setWarning(t("app.themeNameAlreadyExists"));
                        setIsShowingWarningModal(true);
                        break;
                    case ThemeNameError.TooLong:
                        setWarning(t("app.themeNameTooLong"));
                        setIsShowingWarningModal(true);
                        break;
                    case ThemeNameError.NotLongEnough:
                        setWarning(t("app.themeNameNotLongEnough"));
                        setIsShowingWarningModal(true);
                        break;
                    case null:
                        break;
                }
            }
        }

        setIsEditingName(!isEditingName)
    }

    useEffect(() => {
        const getName = () => {
            /* If the name is not undefined it is shown. Otherwise, the code checks it the id is undefined. If it isn't, 
                the proper translation is shown */
            return props.theme.name ? props.theme.name: props.theme.id && t(`app.${props.theme.id}`);
        }

        setCurrentName(getName());
    }, [props.theme, t]); 

    const onWheel = (e: any) => {
        e.preventDefault();
            const containerScrollPosition = containerRef.current.scrollLeft;
            containerRef.current.scrollTo({
                top: 0,
                left: containerScrollPosition + e.deltaY,
                behaviour: "smooth"
            });
    }

    useEffect(() => {
        const instance = containerRef.current;
        instance.addEventListener("wheel", onWheel, false);
        
        return () => {
            instance.removeEventListener("wheel", onWheel, false);
        }
      }, [containerRef]);

    return <div>
                <Modal 
                    isShowing={isShowingWarningModal}
                    close={() => {setIsShowingWarningModal(false);}}
                    heading={t("app.themeNameNotSet")}>
                        {warning}
                </Modal>
                <NameContainer>
                    {isEditingName?
                        <StyledInput type="name" 
                            value={editingName} 
                            onChange={handleChange} 
                            placeholder={t("app.writeName")}
                            minLength={MIN_THEME_NAME_LENGTH}
                            maxLength={MAX_THEME_NAME_LENGTH}>
                        </StyledInput>
                        : 
                        <Heading>
                            { currentName }
                        </Heading>
                    }
                    {!props.theme.id &&
                        <StyledEditButton onClick={saveName} aria-label={t("app.editName")} >
                            <StyledEdit></StyledEdit>
                        </StyledEditButton>
                    }
                </NameContainer>
                <OuterContainer>
                    <Container ref={containerRef}>
                        {Object.entries(props.theme).map((value: [string, string], index: number) => {
                            if (value[0] === "id" || value[0] === "name") return;
                            return <ColorSquare 
                                        key={index} 
                                        color={value[1]} 
                                        id={value[0]}
                                        isDisabled={!!props.theme.id}
                                        changeColor={(color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
                                            let copy: any = {};
                                            Object.assign(copy, props.theme);
                                            copy[value[0]] = getColorString(color);
                                            props.modifyTheme(copy);
                                        }}/>
                        })}
                    </Container>
                </OuterContainer>
                <ButtonsContainer>
                    <Button isDisabled={props.isDisabled}
                        onClick={() => {props.onSelect(props.theme)}} 
                        text={props.isDisabled ? t("app.themeSelected"): t("app.choose")}>                            
                        </Button>
                    {!props.theme.id &&
                        <Button text={t("app.delete")} onClick={() => {
                            props.deleteTheme(props.theme);
                        }} 
                        customBackgroundColor={theme.error}></Button>
                    }
                </ButtonsContainer>
        </div>
}