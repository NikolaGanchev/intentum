import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Warning from "../Warning";
import Console from "../Console";
import Error from "../Error";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";

export default function L9(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l9.p1p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l9.p2ds1")}>
                <Code language="java" showNumbers="true">{tl("l9.s3cj")}</Code>
            </div>
            <div data-switch={tl("l9.s2ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l9.s4cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l9.p5p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p6pc")}</Code>
        <Warning>{tl("l9.p7w")}</Warning>
        <TextBlock>{tl("l9.p8p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l9.p9ds1")}>
                <Code language="java" showNumbers="true">{tl("l9.s9cj")}</Code>
                <TextBlock>{tl("l9.s10p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l9.s11cj")}</Code>
            </div>
            <div data-switch={tl("l9.s9ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l9.s12cc")}</Code>
                <TextBlock>{tl("l9.s13p")}</TextBlock>
                <Code language="csharp" showNumbers="true">{tl("l9.s14cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l9.p15p")}</TextBlock>
        <Console>{tl("l9.p16con")}</Console>
        <TextBlock>{tl("l9.p17p")}</TextBlock>
        <TextBlock>{tl("l9.p18p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p19pc")}</Code>
        <TextBlock>{tl("l9.p20p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p21pc")}</Code>
        <TextBlock>{tl("l9.p22p")}</TextBlock>
        <TextBlock>{tl("l9.p23p")}</TextBlock>
        <TextBlock>{tl("l9.p24p")}</TextBlock>
        <TextBlock>{tl("l9.p25p")}</TextBlock>
        <TextBlock>{tl("l9.p26p")}</TextBlock>
        <TextBlock>{tl("l9.p27p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p28pc")}</Code>
        <TextBlock>{tl("l9.p29p")}</TextBlock>
        <TextBlock>{tl("l9.p30p")}</TextBlock>
        <TextBlock>{tl("l9.p31p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p32pc")}</Code>
        <TextBlock>{tl("l9.p33p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p34pc")}</Code>
        <TextBlock>{tl("l9.p35p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p36pc")}</Code>
        <Error>{tl("l9.p37e")}</Error>
        <TextBlock>{tl("l9.p38p")}</TextBlock>
        <TextBlock>{tl("l9.p39p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p40pc")}</Code>
        <TextBlock>{tl("l9.p41p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l9.p42pc")}</Code>
        <TextBlock>{tl("l9.p43p")}</TextBlock>
        <TextBlock>{tl("l9.p44p")}</TextBlock>
        <TextBlock>{tl("l9.p45p")}</TextBlock>
        <TextBlock>{tl("l9.p46p")}</TextBlock>
        <TextBlock>{tl("l9.p47p")}</TextBlock>
        <TextBlock>{tl("l9.p48p")}</TextBlock>
        <TestQuestion answers={[tl("l9.p49a1"), tl("l9.p49a2"), tl("l9.p49a3"), tl("l9.p49a4")]} rightAnswer={2} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l9.p49tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l9.p50p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l9.p51pc")}</Code>
            <Switch>
                <div data-switch={tl("l9.p52ds1")}>
                    <Code language="java" showNumbers="true">{tl("l9.s53cj")}</Code>
                </div>
                <div data-switch={tl("l9.s52ds2")}>
                    <Code language="csharp" showNumbers="true">{tl("l9.s54cc")}</Code>
                </div>
            </Switch>
            <TextBlock>{tl("l9.p55p")}</TextBlock>
            <Console>{tl("l9.p56con")}</Console>
            <TextBlock>{tl("l9.p57p")}</TextBlock>
            <Error>{tl("l9.p58e")}</Error>
            <TextBlock>{tl("l9.p59p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l9.p60pc")}</Code>
            <TextBlock>{tl("l9.p61p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l9.p62pc")}</Code>
            <TextBlock>{tl("l9.p63p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l9.p64pc")}</Code>
            <TextBlock>{tl("l9.p65p")}</TextBlock>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}