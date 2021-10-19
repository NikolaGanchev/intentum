import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Tip from "../Tip";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";

export default function L36(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l36.p1p")}</TextBlock>
        <TextBlock>{tl("l36.p2p")}</TextBlock>
        <TextBlock>{tl("l36.p3p")}</TextBlock>
        <TextBlock>{tl("l36.p4p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l36.p5ds1")}>
                <Code language="java" showNumbers="true">{tl("l36.s6cj")}</Code>
            </div>
            <div data-switch={tl("l36.s7ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l36.s8cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l36.p9p")}</TextBlock>
        <TextBlock>{tl("l36.p10p")}</TextBlock>
        <TextBlock>{tl("l36.p11p")}</TextBlock>
        <TextBlock>{tl("l36.p12p")}</TextBlock>
        <TextBlock>{tl("l36.p13p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l36.p14ds1")}>
                <Code language="java" showNumbers="true">{tl("l36.s15cj")}</Code>
                <Tip>{tl("l36.s16t")}</Tip>
            </div>
            <div data-switch={tl("l36.s17ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l36.s18cc")}</Code>
                <Tip>{tl("l36.s19t")}</Tip>
            </div>
        </Switch>
        <TextBlock>{tl("l36.p20p")}</TextBlock>
        <Console>{tl("l36.p21con")}</Console>
        <TextBlock>{tl("l36.p22p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l36.p23ds1")}>
                <Code language="java" showNumbers="true">{tl("l36.s24cj")}</Code>
                <TextBlock>{tl("l36.s25p")}</TextBlock>
                <TextBlock>{tl("l36.s26p")}</TextBlock>
                <Console>{tl("l36.s27con")}</Console>
            </div>
            <div data-switch={tl("l36.s28ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l36.s29cc")}</Code>
                <TextBlock>{tl("l36.s30p")}</TextBlock>
                <Console>{tl("l36.s31con")}</Console>
            </div>
        </Switch>
        <TextBlock>{tl("l36.p32p")}</TextBlock>
        <TextBlock>{tl("l36.p33p")}</TextBlock>
        <TextBlock>{tl("l36.p34p")}</TextBlock>
        <TextBlock>{tl("l36.p35p")}</TextBlock>
        <TextBlock>{tl("l36.p36p")}</TextBlock>
        <TextBlock>{tl("l36.p37p")}</TextBlock>
        <ResearchQuestion>{tl("l36.p38rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}