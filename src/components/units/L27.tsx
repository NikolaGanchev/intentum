import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Code from "../Code";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";
import Console from "../Console";

export default function L27(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l27.p1p")}</TextBlock>
        <TextBlock>{tl("l27.p2p")}</TextBlock>
        <TextBlock>{tl("l27.p3p")}</TextBlock>
        <TextBlock>{tl("l27.p4p")}</TextBlock>
        <TestQuestion answers={[tl("l27.p5a1"), tl("l27.p5a2")]} rightAnswer={1} tries={1} onAnswer={() => { setIsLocked1(false) }}>{tl("l27.p5tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l27.p6p")}</TextBlock>
            <Switch>
                <div data-switch={tl("l27.p7ds1")}>
                    <Code language="java" showNumbers="true">{tl("l27.s8cj")}</Code>
                </div>
                <div data-switch={tl("l27.s9ds2")}>
                    <Code language="csharp" showNumbers="true">{tl("l27.s10cc")}</Code>
                </div>
            </Switch>
            <TextBlock>{tl("l27.p11p")}</TextBlock>
            <TextBlock>{tl("l27.p12p")}</TextBlock>
            <Switch>
                <div data-switch={tl("l27.p13ds1")}>
                    <Code language="java" showNumbers="true">{tl("l27.s14cj")}</Code>
                </div>
                <div data-switch={tl("l27.s15ds2")}>
                    <Code language="csharp" showNumbers="true">{tl("l27.s16cc")}</Code>
                </div>
            </Switch>
            <TextBlock>{tl("l27.p17p")}</TextBlock>
            <TextBlock>{tl("l27.p18p")}</TextBlock>
            <TextBlock>{tl("l27.p19p")}</TextBlock>
            <TextBlock>{tl("l27.p20p")}</TextBlock>
            <TextBlock>{tl("l27.p21p")}</TextBlock>
            <TextBlock>{tl("l27.p22p")}</TextBlock>
            <TextBlock>{tl("l27.p23p")}</TextBlock>
            <TextBlock>{tl("l27.p24p")}</TextBlock>
            <TextBlock>{tl("l27.p25p")}</TextBlock>
            <TextBlock>{tl("l27.p26p")}</TextBlock>
            <TextBlock>{tl("l27.p27p")}</TextBlock>
            <TextBlock>{tl("l27.p28p")}</TextBlock>
            <TextBlock>{tl("l27.p29p")}</TextBlock>
            <TextBlock>{tl("l27.p30p")}</TextBlock>
            <TextBlock>{tl("l27.p31p")}</TextBlock>
            <TextBlock>{tl("l27.p32p")}</TextBlock>
            <TextBlock>{tl("l27.p33p")}</TextBlock>
            <TextBlock>{tl("l27.p34p")}</TextBlock>
            <ResearchQuestion>{tl("l27.p35rq")}</ResearchQuestion>
            <TextBlock>{tl("l27.p36p")}</TextBlock>
            <TextBlock>{tl("l27.p37p")}</TextBlock>
            <Console>{tl("l27.p38con")}</Console>
            <TextBlock>{tl("l27.p39p")}</TextBlock>
            <Console>{tl("l27.p40con")}</Console>
            <TextBlock>{tl("l27.p41p")}</TextBlock>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}