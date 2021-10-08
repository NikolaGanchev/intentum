import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Code from "../Code";
import Console from "../Console";
import Switch from "../Switch";

export default function L13(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l13.p1p")}</TextBlock>
        <TextBlock>{tl("l13.p2p")}</TextBlock>
        <TextBlock>{tl("l13.p3p")}</TextBlock>
        <TextBlock>{tl("l13.p4p")}</TextBlock>
        <TextBlock>{tl("l13.p5p")}</TextBlock>
        <TextBlock>{tl("l13.p6p")}</TextBlock>
        <TextBlock>{tl("l13.p7p")}</TextBlock>
        <TextBlock>{tl("l13.p8p")}</TextBlock>
        <TestQuestion answers={[tl("l13.p9a1"), tl("l13.p9a2"), tl("l13.p9a3"), tl("l13.p9a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked1(false) }} explanation={tl("l13.p10exp")}>{tl("l13.p9tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l13.p11p")}</TextBlock>
            <Switch>
                <div data-switch={tl("l13.p12ds1")}>
                    <TextBlock>{tl("l13.s13p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s14cj")}</Code>
                    <TextBlock>{tl("l13.s15p")}</TextBlock>
                    <TextBlock>{tl("l13.s16p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s17cj")}</Code>
                    <TextBlock>{tl("l13.s18p")}</TextBlock>
                    <Console>{tl("l13.s19con")}</Console>
                    <TextBlock>{tl("l13.s20p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s21cj")}</Code>
                    <TextBlock>{tl("l13.s22p")}</TextBlock>
                    <Console>{tl("l13.s23con")}</Console>
                    <TextBlock>{tl("l13.s24p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s25cj")}</Code>
                    <TextBlock>{tl("l13.s26p")}</TextBlock>
                    <Console>{tl("l13.s27con")}</Console>
                    <TextBlock>{tl("l13.s28p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s29cj")}</Code>
                    <TextBlock>{tl("l13.s30p")}</TextBlock>
                    <Console>{tl("l13.s31con")}</Console>
                    <TextBlock>{tl("l13.s32p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s33cj")}</Code>
                    <TextBlock>{tl("l13.s34p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s35cj")}</Code>
                    <TextBlock>{tl("l13.s36p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s37cj")}</Code>
                    <TextBlock>{tl("l13.s38p")}</TextBlock>
                    <Console>{tl("l13.s39con")}</Console>
                    <TextBlock>{tl("l13.s40p")}</TextBlock>
                    <TextBlock>{tl("l13.s41p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s42cj")}</Code>
                    <TextBlock>{tl("l13.s43p")}</TextBlock>
                    <Console>{tl("l13.s44con")}</Console>
                    <Console>{tl("l13.s45con")}</Console>
                    <TextBlock>{tl("l13.s46p")}</TextBlock>
                    <Code language="java" showNumbers="true">{tl("l13.s47cj")}</Code>
                    <TextBlock>{tl("l13.s48p")}</TextBlock>
                    <Console>{tl("l13.s49con")}</Console>
                    <Console>{tl("l13.s50con")}</Console>
                </div>
                <div data-switch={tl("l13.s51ds2")}>
                    <TextBlock>{tl("l13.s52p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s53cc")}</Code>
                    <TextBlock>{tl("l13.s54p")}</TextBlock>
                    <TextBlock>{tl("l13.s55p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s56cc")}</Code>
                    <TextBlock>{tl("l13.s57p")}</TextBlock>
                    <Console>{tl("l13.s58con")}</Console>
                    <TextBlock>{tl("l13.s59p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s60cc")}</Code>
                    <TextBlock>{tl("l13.s61p")}</TextBlock>
                    <Console>{tl("l13.s62con")}</Console>
                    <TextBlock>{tl("l13.s63p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s64cc")}</Code>
                    <TextBlock>{tl("l13.s65p")}</TextBlock>
                    <Console>{tl("l13.s66con")}</Console>
                    <TextBlock>{tl("l13.s67p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s68cc")}</Code>
                    <TextBlock>{tl("l13.s69p")}</TextBlock>
                    <Console>{tl("l13.s70con")}</Console>
                    <TextBlock>{tl("l13.s71p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s72cc")}</Code>
                    <TextBlock>{tl("l13.s73p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s74cc")}</Code>
                    <TextBlock>{tl("l13.s75p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s76cc")}</Code>
                    <TextBlock>{tl("l13.s77p")}</TextBlock>
                    <Console>{tl("l13.s78con")}</Console>
                    <TextBlock>{tl("l13.s79p")}</TextBlock>
                    <TextBlock>{tl("l13.s80p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s81cc")}</Code>
                    <TextBlock>{tl("l13.s82p")}</TextBlock>
                    <Console>{tl("l13.s83con")}</Console>
                    <Console>{tl("l13.s84con")}</Console>
                    <TextBlock>{tl("l13.s85p")}</TextBlock>
                    <Code language="csharp" showNumbers="true">{tl("l13.s86cc")}</Code>
                    <TextBlock>{tl("l13.s87p")}</TextBlock>
                    <Console>{tl("l13.s88con")}</Console>
                    <Console>{tl("l13.s89con")}</Console>
                </div>
            </Switch>
            <TextBlock>{tl("l13.p90p")}</TextBlock>
            <pre>
                <TextBlock>{tl("l13.p91pre")}</TextBlock>
            </pre>
            <TextBlock>{tl("l13.p92p")}</TextBlock>
            <TextBlock>{tl("l13.p93p")}</TextBlock>
            <pre>
                <TextBlock>{tl("l13.p94pre")}</TextBlock>
            </pre>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}