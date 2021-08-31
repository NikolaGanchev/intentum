import { useState } from "react";
import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Tip from "../Tip";

export default function L6(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);

    return <div>
        <TextBlock>{tl("l6.p1p")}</TextBlock>
        <TextBlock>{tl("l6.p2p")}</TextBlock>
        <TextBlock>{tl("l6.p3p")}</TextBlock>
        <TextBlock>{tl("l6.p4p")}</TextBlock>
        <TextBlock>{tl("l6.p5p")}</TextBlock>
        <TextBlock>{tl("l6.p6p")}</TextBlock>
        <TextBlock>{tl("l6.p7p")}</TextBlock>
        <TextBlock>{tl("l6.p8p")}</TextBlock>
        <TextBlock>{tl("l6.p9p")}</TextBlock>
        <TestQuestion answers={[tl("l6.p10a1"), tl("l6.p10a2"), tl("l6.p10a3"), tl("l6.p10a4")]} rightAnswer={2} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l6.p10tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l6.p11p")}</TextBlock>
            <TextBlock>{tl("l6.p12p")}</TextBlock>
            <TextBlock>{tl("l6.p13p")}</TextBlock>
            <TextBlock>{tl("l6.p14p")}</TextBlock>
            <TextBlock>{tl("l6.p15p")}</TextBlock>
            <TextBlock>{tl("l6.p16p")}</TextBlock>
            <TestQuestion answers={[tl("l6.p17a1"), tl("l6.p17a2"), tl("l6.p17a3"), tl("l6.p17a4")]} rightAnswer={1} tries={3} onAnswer={() => { setIsLocked2(false) }}>{tl("l6.p17tq")}</TestQuestion>
            <Lock isLocked={isLocked2}>
                <TextBlock>{tl("l6.p18p")}</TextBlock>
                <Tip>{tl("l6.p19t")}</Tip>
                <EndButton onClick={() => { props.endUnit() }} />
            </Lock>
        </Lock>
    </div>;
}