import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L35(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l35.p1p")}</TextBlock>
        <TextBlock>{tl("l35.p2p")}</TextBlock>
        <TextBlock>{tl("l35.p3p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l35.p4ds1")}>
                <Code language="java" showNumbers="true">{tl("l35.s5cj")}</Code>
            </div>
            <div data-switch={tl("l35.s6ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l35.s7cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l35.p8p")}</TextBlock>
        <TextBlock>{tl("l35.p9p")}</TextBlock>
        <TextBlock>{tl("l35.p10p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l35.p11ds1")}>
                <Code language="java" showNumbers="true">{tl("l35.s12cj")}</Code>
            </div>
            <div data-switch={tl("l35.s13ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l35.s14cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l35.p15p")}</TextBlock>
        <TextBlock>{tl("l35.p16p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l35.p17ds1")}>
                <Code language="java" showNumbers="true">{tl("l35.s18cj")}</Code>
            </div>
            <div data-switch={tl("l35.s19ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l35.s20cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l35.p21p")}</TextBlock>
        <TextBlock>{tl("l35.p22p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l35.p23ds1")}>
                <Code language="java" showNumbers="true">{tl("l35.s24cj")}</Code>
            </div>
            <div data-switch={tl("l35.s25ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l35.s26cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l35.p27p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l35.p28ds1")}>
                <Code language="java" showNumbers="true">{tl("l35.s29cj")}</Code>
            </div>
            <div data-switch={tl("l35.s30ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l35.s31cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l35.p32p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l35.p33ds1")}>
                <Code language="java" showNumbers="true">{tl("l35.s34cj")}</Code>
            </div>
            <div data-switch={tl("l35.s35ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l35.s36cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l35.p37p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l35.p38ds1")}>
                <Code language="java" showNumbers="true">{tl("l35.s39cj")}</Code>
            </div>
            <div data-switch={tl("l35.s40ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l35.s41cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l35.p42p")}</TextBlock>
        <TextBlock>{tl("l35.p43p")}</TextBlock>
        <ResearchQuestion>{tl("l35.p44rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}