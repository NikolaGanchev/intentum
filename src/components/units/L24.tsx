import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";
import { useState } from "react";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";

export default function L24(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);

    return <div>
        <TextBlock>{tl("l24.p1p")}</TextBlock>
        <TextBlock>{tl("l24.p2p")}</TextBlock>
        <Heading>{tl("l24.p3h")}</Heading>
        <TextBlock>{tl("l24.p4p")}</TextBlock>
        <TextBlock>{tl("l24.p5p")}</TextBlock>
        <TextBlock>{tl("l24.p6p")}</TextBlock>
        <TextBlock>{tl("l24.p7p")}</TextBlock>
        <TextBlock>{tl("l24.p8p")}</TextBlock>
        <TextBlock>{tl("l24.p9p")}</TextBlock>
        <TextBlock>{tl("l24.p10p")}</TextBlock>
        <TextBlock>{tl("l24.p11p")}</TextBlock>
        <TextBlock>{tl("l24.p12p")}</TextBlock>
        <TextBlock>{tl("l24.p13p")}</TextBlock>
        <TextBlock>{tl("l24.p14p")}</TextBlock>
        <TextBlock>{tl("l24.p15p")}</TextBlock>
        <TextBlock>{tl("l24.p16p")}</TextBlock>
        <TextBlock>{tl("l24.p17p")}</TextBlock>
        <TextBlock>{tl("l24.p18p")}</TextBlock>
        <Heading>{tl("l24.p19h")}</Heading>
        <TextBlock>{tl("l24.p20p")}</TextBlock>
        <TextBlock>{tl("l24.p21p")}</TextBlock>
        <TextBlock>{tl("l24.p22p")}</TextBlock>
        <TextBlock>{tl("l24.p23p")}</TextBlock>
        <TextBlock>{tl("l24.p24p")}</TextBlock>
        <TextBlock>{tl("l24.p25p")}</TextBlock>
        <TestQuestion answers={[tl("l24.p26a1"), tl("l24.p26a2")]} rightAnswer={0} tries={1} onAnswer={() => { setIsLocked1(false) }}>{tl("l24.p26tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <Heading>{tl("l24.p27h")}</Heading>
            <Switch>
                <div data-switch={tl("l24.p28ds1")}>
                    <Code language="java" showNumbers="true">{tl("l24.s29cj")}</Code>
                </div>
                <div data-switch={tl("l24.s30ds2")}>
                    <Code language="csharp" showNumbers="true">{tl("l24.s31cc")}</Code>
                </div>
            </Switch>
            <TextBlock>{tl("l24.p32p")}</TextBlock>
            <Console>{tl("l24.p33con")}</Console>
            <EndButton onClick={() => { props.endUnit() }} />
        </Lock>
    </div>;
}