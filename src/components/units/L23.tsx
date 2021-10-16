import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";

export default function L23(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l23.p1p")}</TextBlock>
        <TextBlock>{tl("l23.p2p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l23.p3ds1")}>
                <Code language="java" showNumbers="true">{tl("l23.s4cj")}</Code>
            </div>
            <div data-switch={tl("l23.s5ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l23.s6cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l23.p7p")}</TextBlock>
        <TextBlock>{tl("l23.p8p")}</TextBlock>
        <TextBlock>{tl("l23.p9p")}</TextBlock>
        <TextBlock>{tl("l23.p10p")}</TextBlock>
        <TextBlock>{tl("l23.p11p")}</TextBlock>
        <TextBlock>{tl("l23.p12p")}</TextBlock>
        <Console>{tl("l23.p13con")}</Console>
        <TextBlock>{tl("l23.p14p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l23.p15ds1")}>
                <Code language="java" showNumbers="true">{tl("l23.s16cj")}</Code>
            </div>
            <div data-switch={tl("l23.s17ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l23.s18cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l23.p19p")}</TextBlock>
        <TextBlock>{tl("l23.p20p")}</TextBlock>
        <TextBlock>{tl("l23.p21p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l23.p22ds1")}>
                <Code language="java" showNumbers="true">{tl("l23.s23cj")}</Code>
            </div>
            <div data-switch={tl("l23.s24ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l23.s25cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l23.p26p")}</TextBlock>
        <Console>{tl("l23.p27con")}</Console>
        <TextBlock>{tl("l23.p28p")}</TextBlock>
        <TextBlock>{tl("l23.p29p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l23.p30ds1")}>
                <Code language="java" showNumbers="true">{tl("l23.s31cj")}</Code>
            </div>
            <div data-switch={tl("l23.s32ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l23.s33cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l23.p34p")}</TextBlock>
        <ResearchQuestion>{tl("l23.p35rq")}</ResearchQuestion>
        <ResearchQuestion>{tl("l23.p36rq")}</ResearchQuestion>
        <TextBlock>{tl("l23.p37p")}</TextBlock>
        <TextBlock>{tl("l23.p38p")}</TextBlock>
        <Console>{tl("l23.p39con")}</Console>
        <TextBlock>{tl("l23.p40p")}</TextBlock>
        <Console>{tl("l23.p41con")}</Console>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}