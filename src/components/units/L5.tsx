import { useState } from "react";
import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Console from "../Console";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import ResearchQuestion from "../ResearchQuestion";

export default function L5(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);
    const [isLocked3, setIsLocked3] = useState(true);

    return <div>
        <TextBlock>{tl("l5.p1p")}</TextBlock>
        <TextBlock>{tl("l5.p2p")}</TextBlock>
        <TextBlock>{tl("l5.p3p")}</TextBlock>
        <Console>{tl("l5.p4con")}</Console>
        <TextBlock>{tl("l5.p5p")}</TextBlock>
        <TestQuestion answers={[tl("l5.p6a1"), tl("l5.p6a2"), tl("l5.p6a3"), tl("l5.p6a4")]} rightAnswer={3} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l5.p6tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l5.p7p")}</TextBlock>
            <Console>{tl("l5.p8con")}</Console>
            <TextBlock>{tl("l5.p9p")}</TextBlock>
            <Console>{tl("l5.p10con")}</Console>
            <TextBlock>{tl("l5.p11p")}</TextBlock>
            <Console>{tl("l5.p12con")}</Console>
            <TextBlock>{tl("l5.p13p")}</TextBlock>
            <Console>{tl("l5.p14con")}</Console>
            <TextBlock>{tl("l5.p15p")}</TextBlock>
            <Console>{tl("l5.p16con")}</Console>
            <TextBlock>{tl("l5.p17p")}</TextBlock>
            <Console>{tl("l5.p18con")}</Console>
            <TextBlock>{tl("l5.p19p")}</TextBlock>
            <Console>{tl("l5.p20con")}</Console>
            <TextBlock>{tl("l5.p21p")}</TextBlock>
            <Console>{tl("l5.p22con")}</Console>
            <TestQuestion answers={[tl("l5.p23a1"), tl("l5.p23a2"), tl("l5.p23a3"), tl("l5.p23a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked2(false) }}>{tl("l5.p23tq")}</TestQuestion>
            <Lock isLocked={isLocked2}>
                <TextBlock>{tl("l5.p24p")}</TextBlock>
                <Console>{tl("l5.p25con")}</Console>
                <TextBlock>{tl("l5.p26p")}</TextBlock>
                <Console>{tl("l5.p27con")}</Console>
                <TextBlock>{tl("l5.p28p")}</TextBlock>
                <TestQuestion answers={[tl("l5.p28a1"), tl("l5.p28a2"), tl("l5.p28a3"), tl("l5.p28a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked3(false) }}>{tl("l5.p28tq")}</TestQuestion>
                <Lock isLocked={isLocked3}>
                    <ResearchQuestion>{tl("l5.p29rq")}</ResearchQuestion>
                    <EndButton onClick={() => { props.endUnit() }} />
                </Lock>
            </Lock>
        </Lock>
    </div>;
}