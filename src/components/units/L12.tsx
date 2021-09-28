import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Warning from "../Warning";
import Console from "../Console";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";

export default function L12(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l12.p1p")}</TextBlock>
        <TextBlock>{tl("l12.p2p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l12.p3pc")}</Code>
        <Warning>{tl("l12.p4w")}</Warning>
        <TextBlock>{tl("l12.p5p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l12.p6pc")}</Code>
        <TextBlock>{tl("l12.p7p")}</TextBlock>
        <Console>{tl("l12.p8con")}</Console>
        <TextBlock>{tl("l12.p9p")}</TextBlock>
        <TextBlock>{tl("l12.p10p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l12.p11pc")}</Code>
        <TextBlock>{tl("l12.p12p")}</TextBlock>
        <Console>{tl("l12.p13con")}</Console>
        <TextBlock>{tl("l12.p14p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l12.p15pc")}</Code>
        <TextBlock>{tl("l12.p16p")}</TextBlock>
        <Console>{tl("l12.p17con")}</Console>
        <TestQuestion answers={[tl("l12.p18a1"), tl("l12.p18a2"), tl("l12.p18a3"), tl("l12.p18a4")]} rightAnswer={3} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l12.p18tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l12.p19p")}</TextBlock>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}