import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";

export default function L22(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l22.p1p")}</TextBlock>
        <TextBlock>{tl("l22.p2p")}</TextBlock>
        <TextBlock>{tl("l22.p3p")}</TextBlock>
        <TextBlock>{tl("l22.p4p")}</TextBlock>
        <TextBlock>{tl("l22.p5p")}</TextBlock>
        <TextBlock>{tl("l22.p6p")}</TextBlock>
        <TextBlock>{tl("l22.p7p")}</TextBlock>
        <TextBlock>{tl("l22.p8p")}</TextBlock>
        <TextBlock>{tl("l22.p9p")}</TextBlock>
        <TextBlock>{tl("l22.p10p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l22.p11ds1")}>
                <Code language="java" showNumbers="true">{tl("l22.s12cj")}</Code>
            </div>
            <div data-switch={tl("l22.s13ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l22.s14cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l22.p15p")}</TextBlock>
        <Console>{tl("l22.p16con")}</Console>
        <Console>{tl("l22.p17con")}</Console>
        <TextBlock>{tl("l22.p18p")}</TextBlock>
        <TextBlock>{tl("l22.p19p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l22.p20ds1")}>
                <Code language="java" showNumbers="true">{tl("l22.s21cj")}</Code>
            </div>
            <div data-switch={tl("l22.s22ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l22.s23cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l22.p24p")}</TextBlock>
        <Console>{tl("l22.p25con")}</Console>
        <Console>{tl("l22.p26con")}</Console>
        <TextBlock>{tl("l22.p27p")}</TextBlock>
        <ResearchQuestion>{tl("l22.p28rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}