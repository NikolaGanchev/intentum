import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";

export default function L32(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l32.p1p")}</TextBlock>
        <TextBlock>{tl("l32.p2p")}</TextBlock>
        <TextBlock>{tl("l32.p3p")}</TextBlock>
        <TextBlock>{tl("l32.p4p")}</TextBlock>
        <TextBlock>{tl("l32.p5p")}</TextBlock>
        <TextBlock>{tl("l32.p6p")}</TextBlock>
        <TextBlock>{tl("l32.p7p")}</TextBlock>
        <TextBlock>{tl("l32.p8p")}</TextBlock>
        <TextBlock>{tl("l32.p9p")}</TextBlock>
        <TextBlock>{tl("l32.p10p")}</TextBlock>
        <TextBlock>{tl("l32.p11p")}</TextBlock>
        <TextBlock>{tl("l32.p12p")}</TextBlock>
        <TextBlock>{tl("l32.p13p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l32.p14ds1")}>
                <Code language="java" showNumbers="true">{tl("l32.s15cj")}</Code>
            </div>
            <div data-switch={tl("l32.s16ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l32.s17cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l32.p18p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l32.p19ds1")}>
                <Code language="java" showNumbers="true">{tl("l32.s20cj")}</Code>
            </div>
            <div data-switch={tl("l32.s21ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l32.s22cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l32.p23p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l32.p24ds1")}>
                <Code language="java" showNumbers="true">{tl("l32.s25cj")}</Code>
            </div>
            <div data-switch={tl("l32.s26ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l32.s27cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l32.p28p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l32.p29ds1")}>
                <Code language="java" showNumbers="true">{tl("l32.s30cj")}</Code>
            </div>
            <div data-switch={tl("l32.s31ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l32.s32cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l32.p33p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l32.p34ds1")}>
                <Code language="java" showNumbers="true">{tl("l32.s35cj")}</Code>
            </div>
            <div data-switch={tl("l32.s36ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l32.s37cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l32.p38p")}</TextBlock>
        <Console>{tl("l32.p39con")}</Console>
        <TextBlock>{tl("l32.p40p")}</TextBlock>
        <TextBlock>{tl("l32.p41p")}</TextBlock>
        <TextBlock>{tl("l32.p42p")}</TextBlock>
        <ResearchQuestion>{tl("l32.p43rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}