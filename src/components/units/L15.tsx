import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Console from "../Console";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Error from "../Error";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L15(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l15.p1p")}</TextBlock>
        <TextBlock>{tl("l15.p2p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l15.p3pc")}</Code>
        <TextBlock>{tl("l15.p4p")}</TextBlock>
        <Console>{tl("l15.p5con")}</Console>
        <TextBlock>{tl("l15.p6p")}</TextBlock>
        <Console>{tl("l15.p7con")}</Console>
        <TextBlock>{tl("l15.p8p")}</TextBlock>
        <TestQuestion answers={[tl("l15.p9a1"), tl("l15.p9a2"), tl("l15.p9a3"), tl("l15.p9a4")]} rightAnswer={2} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l15.p9tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l15.p10p")}</TextBlock>
            <Switch>
                <div data-switch={tl("l15.p11ds1")}>
                    <TextBlock>{tl("l15.s12p")}</TextBlock>
                    <TextBlock>{tl("l15.s13p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l15.s14cj")}</Code>
                    <TextBlock>{tl("l15.s15p")}</TextBlock>
                    <TextBlock>{tl("l15.s16p")}</TextBlock>
                    <TextBlock>{tl("l15.s17p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l15.s18cj")}</Code>
                    <TextBlock>{tl("l15.s19p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l15.s20cj")}</Code>
                    <TextBlock>{tl("l15.s21p")}</TextBlock>
                    <TextBlock>{tl("l15.s22p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l15.s23cj")}</Code>
                    <TextBlock>{tl("l15.s24p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l15.s25cj")}</Code>
                    <TextBlock>{tl("l15.s26p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l15.s27cj")}</Code>
                    <TextBlock>{tl("l15.s28p")}</TextBlock>
                    <Console>{tl("l15.s29con")}</Console>
                    <TextBlock>{tl("l15.s30p")}</TextBlock>
                    <Console>{tl("l15.s31con")}</Console>
                    <TextBlock>{tl("l15.s32p")}</TextBlock>
                    <TextBlock>{tl("l15.s33p")}</TextBlock>
                    <Error>{tl("l15.s34e")}</Error>
                    <Code language="java" showNumbers="true">{tl("l15.s35cj")}</Code>
                    <TextBlock>{tl("l15.s36p")}</TextBlock>
                    <Console>{tl("l15.s37con")}</Console>
                    <Console>{tl("l15.s38con")}</Console>
                    <TextBlock>{tl("l15.s39p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l15.s40cj")}</Code>
                    <TextBlock>{tl("l15.s41p")}</TextBlock>
                    <Console>{tl("l15.s42con")}</Console>
                    <Console>{tl("l15.s43con")}</Console>
                    <TextBlock>{tl("l15.s44p")}</TextBlock>
                </div>
                <div data-switch={tl("l15.s45ds2")}>
                    <TextBlock>{tl("l15.s46p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l15.s47cc")}</Code>
                    <TextBlock>{tl("l15.s48p")}</TextBlock>
                    <TextBlock>{tl("l15.s49p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l15.s50cc")}</Code>
                    <TextBlock>{tl("l15.s51p")}</TextBlock>
                </div>
            </Switch>
            <TextBlock>{tl("l15.p52p")}</TextBlock>
            <ResearchQuestion>{tl("l15.p53rq")}</ResearchQuestion>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}