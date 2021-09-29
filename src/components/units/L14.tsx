import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Code from "../Code";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L14(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l14.p1p")}</TextBlock>
        <TextBlock>{tl("l14.p2p")}</TextBlock>
        <TestQuestion answers={[tl("l14.p3a1"), tl("l14.p3a2"), tl("l14.p3a3"), tl("l14.p3a4")]} rightAnswer={1} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l14.p3tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l14.p4p")}</TextBlock>
            <Switch>
                <div data-switch={tl("l14.p5ds1")}>
                    <TextBlock>{tl("l14.s6p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l14.s7cj")}</Code>
                    <TextBlock>{tl("l14.s8p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l14.s9cj")}</Code>
                    <TextBlock>{tl("l14.s10p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l14.s11cj")}</Code>
                    <TextBlock>{tl("l14.s12p")}</TextBlock>
                    <TextBlock>{tl("l14.s13p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l14.s14cj")}</Code>
                    <TextBlock>{tl("l14.s15p")}</TextBlock>
                </div>
                <div data-switch={tl("l14.s16ds2")}>
                    <TextBlock>{tl("l14.s17p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l14.s18cc")}</Code>
                    <TextBlock>{tl("l14.s19p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l14.s20cc")}</Code>
                    <TextBlock>{tl("l14.s21p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l14.s22cc")}</Code>
                    <TextBlock>{tl("l14.s23p")}</TextBlock>
                    <TextBlock>{tl("l14.s24p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l14.s25cc")}</Code>
                    <TextBlock>{tl("l14.s26p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l14.s27cc")}</Code>
                    <TextBlock>{tl("l14.s28p")}</TextBlock>
                </div>
            </Switch>
            <ResearchQuestion>{tl("l14.p29rq")}</ResearchQuestion>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}