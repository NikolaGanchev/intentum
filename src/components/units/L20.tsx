import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L20(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l20.p1p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l20.p2pc")}</Code>
        <TextBlock>{tl("l20.p3p")}</TextBlock>
        <TextBlock>{tl("l20.p4p")}</TextBlock>
        <TextBlock>{tl("l20.p5p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l20.p6pc")}</Code>
        <TextBlock>{tl("l20.p7p")}</TextBlock>
        <TextBlock>{tl("l20.p8p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l20.p9ds1")}>
                <Code language="java" showNumbers="true">{tl("l20.s10cj")}</Code>
            </div>
            <div data-switch={tl("l20.s11ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l20.s12cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l20.p13p")}</TextBlock>
        <TextBlock>{tl("l20.p14p")}</TextBlock>
        <TextBlock>{tl("l20.p15p")}</TextBlock>
        <TextBlock>{tl("l20.p16p")}</TextBlock>
        <TextBlock>{tl("l20.p17p")}</TextBlock>
        <TextBlock>{tl("l20.p18p")}</TextBlock>
        <TextBlock>{tl("l20.p19p")}</TextBlock>
        <TextBlock>{tl("l20.p20p")}</TextBlock>
        <TextBlock>{tl("l20.p21p")}</TextBlock>
        <TextBlock>{tl("l20.p22p")}</TextBlock>
        <TextBlock>{tl("l20.p23p")}</TextBlock>
        <TextBlock>{tl("l20.p24p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l20.p25ds1")}>
                <Code language="java" showNumbers="true">{tl("l20.s26cj")}</Code>
            </div>
            <div data-switch={tl("l20.s27ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l20.s28cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l20.p29p")}</TextBlock>
        <TextBlock>{tl("l20.p30p")}</TextBlock>
        <TextBlock>{tl("l20.p31p")}</TextBlock>
        <TextBlock>{tl("l20.p32p")}</TextBlock>
        <TextBlock>{tl("l20.p33p")}</TextBlock>
        <TextBlock>{tl("l20.p34p")}</TextBlock>
        <TextBlock>{tl("l20.p35p")}</TextBlock>
        <TextBlock>{tl("l20.p36p")}</TextBlock>
        <TextBlock>{tl("l20.p37p")}</TextBlock>
        <TextBlock>{tl("l20.p38p")}</TextBlock>
        <TextBlock>{tl("l20.p39p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l20.p40ds1")}>
                <Code language="java" showNumbers="true">{tl("l20.s41cj")}</Code>
            </div>
            <div data-switch={tl("l20.s42ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l20.s43cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l20.p44p")}</TextBlock>
        <ResearchQuestion>{tl("l20.p45rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}