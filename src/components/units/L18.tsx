import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Warning from "../Warning";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";

export default function L18(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l18.p1p")}</TextBlock>
        <TextBlock>{tl("l18.p2p")}</TextBlock>
        <TextBlock>{tl("l18.p3p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l18.p4ds1")}>
                <Code language="java" showNumbers="true">{tl("l18.s5cj")}</Code>
            </div>
            <div data-switch={tl("l18.s6ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l18.s7cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l18.p8p")}</TextBlock>
        <TextBlock>{tl("l18.p9p")}</TextBlock>
        <Warning>{tl("l18.p10w")}</Warning>
        <Code language="python" showNumbers="true">{tl("l18.p11pc")}</Code>
        <TextBlock>{tl("l18.p12p")}</TextBlock>
        <TextBlock>{tl("l18.p13p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l18.p14pc")}</Code>
        <TextBlock>{tl("l18.p15p")}</TextBlock>
        <TextBlock>{tl("l18.p16p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l18.p17pc")}</Code>
        <TextBlock>{tl("l18.p18p")}</TextBlock>
        <Console>{tl("l18.p19con")}</Console>
        <TextBlock>{tl("l18.p20p")}</TextBlock>
        <TextBlock>{tl("l18.p21p")}</TextBlock>
        <ResearchQuestion>{tl("l18.p22rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}