import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import ResearchQuestion from "../ResearchQuestion";

export default function L10(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l10.p1p")}</TextBlock>
        <TextBlock>{tl("l10.p2p")}</TextBlock>
        <TextBlock>{tl("l10.p3p")}</TextBlock>
        <TextBlock>{tl("l10.p4p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l10.p5pc")}</Code>
        <Code language="python" showNumbers="true">{tl("l10.p6pc")}</Code>
        <TextBlock>{tl("l10.p7p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l10.p8ds1")}>
                <Code language="java" showNumbers="true">{tl("l10.s9cj")}</Code>
            </div>
            <div data-switch={tl("l10.s8ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l10.s10cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l10.p11p")}</TextBlock>
        <Console>{tl("l10.p12con")}</Console>
        <TestQuestion answers={[tl("l10.p13a1"), tl("l10.p13a2")]} rightAnswer={0} tries={1} onAnswer={() => { setIsLocked1(false) }}>{tl("l10.p13tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <ResearchQuestion>{tl("l10.p14rq")}</ResearchQuestion>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}