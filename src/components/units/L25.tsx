import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L25(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l25.p1p")}</TextBlock>
        <TextBlock>{tl("l25.p2p")}</TextBlock>
        <TextBlock>{tl("l25.p3p")}</TextBlock>
        <TextBlock>{tl("l25.p4p")}</TextBlock>
        <TextBlock>{tl("l25.p5p")}</TextBlock>
        <TextBlock>{tl("l25.p6p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l25.p7ds1")}>
                <Code language="java" showNumbers="true">{tl("l25.s8cj")}</Code>
            </div>
            <div data-switch={tl("l25.s9ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l25.s10cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l25.p11p")}</TextBlock>
        <TextBlock>{tl("l25.p12p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l25.p13ds1")}>
                <Code language="java" showNumbers="true">{tl("l25.s14cj")}</Code>
            </div>
            <div data-switch={tl("l25.s15ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l25.s16cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l25.p17p")}</TextBlock>
        <TextBlock>{tl("l25.p19p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l25.p19ds1")}>
                <Code language="java" showNumbers="true">{tl("l25.s20cj")}</Code>
            </div>
            <div data-switch={tl("l25.s21ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l25.s22cc")}</Code>
            </div>
        </Switch>
        <ResearchQuestion>{tl("l25.p23rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}