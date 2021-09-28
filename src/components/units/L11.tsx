import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";
import Code from "../Code";
import Console from "../Console";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";

export default function L11(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);
    const [isLocked3, setIsLocked3] = useState(true);
    const [isLocked4, setIsLocked4] = useState(true);
    const [isLocked5, setIsLocked5] = useState(true);

    return <div>
        <TextBlock>{tl("l11.p1p")}</TextBlock>
        <Heading>{tl("l11.p2h")}</Heading>
        <TextBlock>{tl("l11.p3p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l11.p4pc")}</Code>
        <TextBlock>{tl("l11.p5p")}</TextBlock>
        <Console>{tl("l11.p6con")}</Console>
        <TextBlock>{tl("l11.p7p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l11.p8pc")}</Code>
        <TextBlock>{tl("l11.p9p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l11.p10pc")}</Code>
        <TextBlock>{tl("l11.p11p")}</TextBlock>
        <Console>{tl("l11.p12con")}</Console>
        <TextBlock>{tl("l11.p13p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l11.p14pc")}</Code>
        <TextBlock>{tl("l11.p15p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l11.p16pc")}</Code>
        <TextBlock>{tl("l11.p17p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l11.p18pc")}</Code>
        <TextBlock>{tl("l11.p19p")}</TextBlock>
        <Console>{tl("l11.p20con")}</Console>
        <TestQuestion answers={[tl("l11.p21a1"), tl("l11.p21a2"), tl("l11.p21a3"), tl("l11.p21a4")]} rightAnswer={3} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l11.p21tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l11.p21p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l11.p23pc")}</Code>
            <TextBlock>{tl("l11.p24p")}</TextBlock>
            <Console>{tl("l11.p25con")}</Console>
            <Heading>{tl("l11.p26h")}</Heading>
            <Code language="python" showNumbers="true">{tl("l11.p27pc")}</Code>
            <TextBlock>{tl("l11.p28p")}</TextBlock>
            <Console>{tl("l11.p29con")}</Console>
            <TextBlock>{tl("l11.p30p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l11.p31pc")}</Code>
            <TextBlock>{tl("l11.p32p")}</TextBlock>
            <Console>{tl("l11.p33con")}</Console>
            <TextBlock>{tl("l11.p34p")}</TextBlock>
            <Heading>{tl("l11.p35h")}</Heading>
            <TextBlock>{tl("l11.p36p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l11.p37pc")}</Code>
            <TextBlock>{tl("l11.p38p")}</TextBlock>
            <Console>{tl("l11.p39con")}</Console>
            <TextBlock>{tl("l11.p40p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l11.p41pc")}</Code>
            <TextBlock>{tl("l11.p42p")}</TextBlock>
            <Console>{tl("l11.p43con")}</Console>
            <TextBlock>{tl("l11.p44p")}</TextBlock>
            <Code language="python" showNumbers="true">{tl("l11.p45pc")}</Code>
            <TextBlock>{tl("l11.p46p")}</TextBlock>
            <Console>{tl("l11.p47con")}</Console>
            <TextBlock>{tl("l11.p48p")}</TextBlock>
            <TextBlock>{tl("l11.p49p")}</TextBlock>
            <TestQuestion answers={[tl("l11.p50a1"), tl("l11.p50a2"), tl("l11.p50a3"), tl("l11.p50a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked2(false) }}>{tl("l11.p50tq")}</TestQuestion>
            <Lock isLocked={isLocked2}>
                <Heading>{tl("l11.p50h")}</Heading>
                <TextBlock>{tl("l11.p52p")}</TextBlock>
                <Code language="python" showNumbers="true">{tl("l11.p53pc")}</Code>
                <TextBlock>{tl("l11.p54p")}</TextBlock>
                <Console>{tl("l11.p55con")}</Console>
                <TextBlock>{tl("l11.p56p")}</TextBlock>
                <TextBlock>{tl("l11.p57p")}</TextBlock>
                <Code language="python" showNumbers="true">{tl("l11.p58pc")}</Code>
                <TextBlock>{tl("l11.p59p")}</TextBlock>
                <Console>{tl("l11.p60con")}</Console>
                <Code language="python" showNumbers="true">{tl("l11.p61pc")}</Code>
                <TextBlock>{tl("l11.p62p")}</TextBlock>
                <Console>{tl("l11.p63con")}</Console>
                <TextBlock>{tl("l11.p64p")}</TextBlock>
                <Code language="python" showNumbers="true">{tl("l11.p65pc")}</Code>
                <TextBlock>{tl("l11.p66p")}</TextBlock>
                <Console>{tl("l11.p67con")}</Console>
                <TextBlock>{tl("l11.p68p")}</TextBlock>
                <TextBlock>{tl("l11.p69p")}</TextBlock>
                <TextBlock>{tl("l11.p70p")}</TextBlock>
                <TestQuestion answers={[tl("l11.p71a1"), tl("l11.p71a2"), tl("l11.p71a3"), tl("l11.p71a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked3(false) }}>{tl("l11.p71tq")}</TestQuestion>
                <Lock isLocked={isLocked3}>
                    <Heading>{tl("l11.p71h")}</Heading>
                    <TextBlock>{tl("l11.p73p")}</TextBlock>
                    <Code language="python" showNumbers="true">{tl("l11.p74pc")}</Code>
                    <TextBlock>{tl("l11.p75p")}</TextBlock>
                    <Console>{tl("l11.p76con")}</Console>
                    <TextBlock>{tl("l11.p77p")}</TextBlock>
                    <TextBlock>{tl("l11.p78p")}</TextBlock>
                    <TestQuestion answers={[tl("l11.p79a1"), tl("l11.p79a2"), tl("l11.p79a3"), tl("l11.p79a4")]} rightAnswer={2} tries={3} onAnswer={() => { setIsLocked4(false) }}>{tl("l11.p79tq")}</TestQuestion>
                    <Lock isLocked={isLocked4}>
                        <Heading>{tl("l11.p79h")}</Heading>
                        <TextBlock>{tl("l11.p81p")}</TextBlock>
                        <Code language="python" showNumbers="true">{tl("l11.p82pc")}</Code>
                        <TextBlock>{tl("l11.p83p")}</TextBlock>
                        <Console>{tl("l11.p84con")}</Console>
                        <TextBlock>{tl("l11.p85p")}</TextBlock>
                        <Code language="python" showNumbers="true">{tl("l11.p86pc")}</Code>
                        <TextBlock>{tl("l11.p87p")}</TextBlock>
                        <Console>{tl("l11.p88con")}</Console>
                        <TextBlock>{tl("l11.p89p")}</TextBlock>
                        <Code language="python" showNumbers="true">{tl("l11.p90pc")}</Code>
                        <TextBlock>{tl("l11.p91p")}</TextBlock>
                        <Console>{tl("l11.p92con")}</Console>
                        <TextBlock>{tl("l11.p93p")}</TextBlock>
                        <Code language="python" showNumbers="true">{tl("l11.p94pc")}</Code>
                        <TextBlock>{tl("l11.p95p")}</TextBlock>
                        <Console>{tl("l11.p96con")}</Console>
                        <TextBlock>{tl("l11.p97p")}</TextBlock>
                        <Code language="python" showNumbers="true">{tl("l11.p98pc")}</Code>
                        <TextBlock>{tl("l11.p99p")}</TextBlock>
                        <Console>{tl("l11.p100con")}</Console>
                        <Console>{tl("l11.p101con")}</Console>
                        <Code language="python" showNumbers="true">{tl("l11.p102pc")}</Code>
                        <TextBlock>{tl("l11.p103p")}</TextBlock>
                        <Console>{tl("l11.p104con")}</Console>
                        <Console>{tl("l11.p105con")}</Console>
                        <TextBlock>{tl("l11.p106p")}</TextBlock>
                        <Code language="python" showNumbers="true">{tl("l11.p107pc")}</Code>
                        <TestQuestion answers={[tl("l11.p108a1"), tl("l11.p108a2"), tl("l11.p108a3"), tl("l11.p108a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked5(false) }} explanation={tl("l11.p108exp")}>{tl("l11.p108tq")}</TestQuestion>
                        <Lock isLocked={isLocked5}>
                            <Heading>{tl("l11.p110h")}</Heading>
                            <TextBlock>{tl("l11.p111p")}</TextBlock>
                            <TextBlock>{tl("l11.p112p")}</TextBlock>
                            <TextBlock>{tl("l11.p113p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l11.p114pre")}</TextBlock>
                            </pre>
                            <pre>
                                <TextBlock>{tl("l11.p115pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l11.p116p")}</TextBlock>
                            <Heading>{tl("l11.p117h")}</Heading>
                            <TextBlock>{tl("l11.p118p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l11.p119pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l11.p120p")}</TextBlock>
                            <Heading>{tl("l11.p121h")}</Heading>
                            <TextBlock>{tl("l11.p122p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l11.p123pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l11.p124p")}</TextBlock>
                            <Heading>{tl("l11.p125h")}</Heading>
                            <TextBlock>{tl("l11.p126p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l11.p127pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l11.p128p")}</TextBlock>
                            <Heading>{tl("l11.p129h")}</Heading>
                            <TextBlock>{tl("l11.p130p")}</TextBlock>
                            <EndButton onClick={() => { props.endUnit() }} />
                        </Lock>
                    </Lock>
                </Lock>
            </Lock>
        </Lock>
    </div>;
}