import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";

export default function L33(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l33.p1p")}</TextBlock>
        <TextBlock>{tl("l33.p2p")}</TextBlock>
        <TextBlock>{tl("l33.p3p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l33.p4ds1")}>
                <Code language="java" showNumbers="true">{tl("l33.s5cj")}</Code>
            </div>
            <div data-switch={tl("l33.s6ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l33.s7cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l33.p8p")}</TextBlock>
        <TextBlock>{tl("l33.p9p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l33.p10ds1")}>
                <Code language="java" showNumbers="true">{tl("l33.s11cj")}</Code>
            </div>
            <div data-switch={tl("l33.s12ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l33.s13cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l33.p14p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l33.p15ds1")}>
                <Code language="java" showNumbers="true">{tl("l33.s16cj")}</Code>
            </div>
            <div data-switch={tl("l33.s17ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l33.s18cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l33.p19p")}</TextBlock>
        <Console>{tl("l33.p20con")}</Console>
        <ResearchQuestion>{tl("l33.p22rq")}</ResearchQuestion>
        <ResearchQuestion>{tl("l33.p23rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}