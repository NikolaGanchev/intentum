import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Console from "../Console";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Heading from "../Heading";
import ResearchQuestion from "../ResearchQuestion";

export default function L17(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l17.p1p")}</TextBlock>
        <TextBlock>{tl("l17.p2p")}</TextBlock>
        <pre>
            <TextBlock>{tl("l17.p3pre")}</TextBlock>
        </pre>
        <pre>
            <TextBlock>{tl("l17.p4pre")}</TextBlock>
        </pre>
        <pre>
            <TextBlock>{tl("l17.p5pre")}</TextBlock>
        </pre>
        <pre>
            <TextBlock>{tl("l17.p6pre")}</TextBlock>
        </pre>
        <TextBlock>{tl("l17.p7p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l17.p8pc")}</Code>
        <TextBlock>{tl("l17.p9p")}</TextBlock>
        <Console>{tl("l17.p10con")}</Console>
        <TextBlock>{tl("l17.p11p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l17.p12pc")}</Code>
        <TextBlock>{tl("l17.p13p")}</TextBlock>
        <Console>{tl("l17.p14con")}</Console>
        <TextBlock>{tl("l17.p15p")}</TextBlock>
        <TextBlock>{tl("l17.p16p")}</TextBlock>
        <pre>
            <TextBlock>{tl("l17.p17pre")}</TextBlock>
        </pre>
        <pre>
            <TextBlock>{tl("l17.p18pre")}</TextBlock>
        </pre>
        <pre>
            <TextBlock>{tl("l17.p19pre")}</TextBlock>
        </pre>
        <pre>
            <TextBlock>{tl("l17.p20pre")}</TextBlock>
        </pre>
        <TextBlock>{tl("l17.p21p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l17.p22pc")}</Code>
        <TextBlock>{tl("l17.p23p")}</TextBlock>
        <Console>{tl("l17.p24con")}</Console>
        <TextBlock>{tl("l17.p25p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l17.p26pc")}</Code>
        <TextBlock>{tl("l17.p27p")}</TextBlock>
        <Console>{tl("l17.p28con")}</Console>
        <TextBlock>{tl("l17.p29p")}</TextBlock>
        <TestQuestion answers={[tl("l17.p30a1"), tl("l17.p30a2")]} rightAnswer={1} tries={3} explanation={tl("l17.p30exp")} onAnswer={() => { setIsLocked1(false) }}>{tl("l17.p30tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <Heading>{tl("l17.p32h")}</Heading>
            <TextBlock>{tl("l17.p33p")}</TextBlock>
            <TextBlock>{tl("l17.p34p")}</TextBlock>
            <ResearchQuestion>{tl("l17.p35rq")}</ResearchQuestion>
            <TextBlock>{tl("l17.p36p")}</TextBlock>
            <TextBlock>{tl("l17.p37p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l17.p38pc")}</Code>
            <TextBlock>{tl("l17.p39p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l17.p40pc")}</Code>
            <TextBlock>{tl("l17.p41p")}</TextBlock>
            <TextBlock>{tl("l17.p42p")}</TextBlock>
            <TextBlock>{tl("l17.p43p")}</TextBlock>
            <TextBlock>{tl("l17.p44p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l17.p45pc")}</Code>
            <TextBlock>{tl("l17.p46p")}</TextBlock>
            <TextBlock>{tl("l17.p47p")}</TextBlock>
            <TextBlock>{tl("l17.p48p")}</TextBlock>
            <TextBlock>{tl("l17.p49p")}</TextBlock>
            <TextBlock>{tl("l17.p50p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l17.p51pc")}</Code>
            <TextBlock>{tl("l17.p52p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l17.p53pc")}</Code>
            <TextBlock>{tl("l17.p54p")}</TextBlock>
            <ResearchQuestion>{tl("l17.p55rq")}</ResearchQuestion>
            <TextBlock>{tl("l17.p56p")}</TextBlock>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}