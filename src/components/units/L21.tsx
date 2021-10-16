import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";
import Switch from "../Switch";

export default function L21(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l21.p1p")}</TextBlock>
        <TextBlock>{tl("l21.p2p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l21.p3pc")}</Code>
        <TextBlock>{tl("l21.p4p")}</TextBlock>
        <Console>{tl("l21.p5con")}</Console>
        <TextBlock>{tl("l21.p6p")}</TextBlock>
        <TextBlock>{tl("l21.p7p")}</TextBlock>
        <ResearchQuestion>{tl("l21.p8rq")}</ResearchQuestion>
        <Switch>
            <div data-switch={tl("l21.p9ds1")}>
                <Code language="java" showNumbers="true">{tl("l21.s10cj")}</Code>
            </div>
            <div data-switch={tl("l21.s11ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l21.s12cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l21.p13p")}</TextBlock>
        <TextBlock>{tl("l21.p14p")}</TextBlock>
        <TextBlock>{tl("l21.p15p")}</TextBlock>
        <TextBlock>{tl("l21.p16p")}</TextBlock>
        <TextBlock>{tl("l21.p17p")}</TextBlock>
        <TextBlock>{tl("l21.p18p")}</TextBlock>
        <TextBlock>{tl("l21.p19p")}</TextBlock>
        <TextBlock>{tl("l21.p20p")}</TextBlock>
        <TextBlock>{tl("l21.p21p")}</TextBlock>
        <TextBlock>{tl("l21.p22p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l21.p23ds1")}>
                <Code language="java" showNumbers="true">{tl("l21.s24cj")}</Code>
            </div>
            <div data-switch={tl("l21.s25ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l21.s26cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l21.p27p")}</TextBlock>
        <ResearchQuestion>{tl("l21.p28rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}