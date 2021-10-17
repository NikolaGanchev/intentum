import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L26(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l26.p1p")}</TextBlock>
        <TextBlock>{tl("l26.p2p")}</TextBlock>
        <TextBlock>{tl("l26.p3p")}</TextBlock>
        <TextBlock>{tl("l26.p4p")}</TextBlock>
        <TextBlock>{tl("l26.p5p")}</TextBlock>
        <TextBlock>{tl("l26.p6p")}</TextBlock>
        <TextBlock>{tl("l26.p7p")}</TextBlock>
        <TextBlock>{tl("l26.p8p")}</TextBlock>
        <TextBlock>{tl("l26.p9p")}</TextBlock>
        <TextBlock>{tl("l26.p10p")}</TextBlock>
        <TextBlock>{tl("l26.p11p")}</TextBlock>
        <TextBlock>{tl("l26.p12p")}</TextBlock>
        <TextBlock>{tl("l26.p13p")}</TextBlock>
        <TextBlock>{tl("l26.p14p")}</TextBlock>
        <TextBlock>{tl("l26.p15p")}</TextBlock>
        <TextBlock>{tl("l26.p16p")}</TextBlock>
        <TextBlock>{tl("l26.p17p")}</TextBlock>
        <TextBlock>{tl("l26.p18p")}</TextBlock>
        <TextBlock>{tl("l26.p19p")}</TextBlock>
        <TextBlock>{tl("l26.p20p")}</TextBlock>
        <TextBlock>{tl("l26.p21p")}</TextBlock>
        <TextBlock>{tl("l26.p22p")}</TextBlock>
        <TextBlock>{tl("l26.p23p")}</TextBlock>
        <TextBlock>{tl("l26.p24p")}</TextBlock>
        <TextBlock>{tl("l26.p25p")}</TextBlock>
        <TextBlock>{tl("l26.p26p")}</TextBlock>
        <TextBlock>{tl("l26.p27p")}</TextBlock>
        <TextBlock>{tl("l26.p28p")}</TextBlock>
        <TextBlock>{tl("l26.p29p")}</TextBlock>
        <TextBlock>{tl("l26.p30p")}</TextBlock>
        <TextBlock>{tl("l26.p31p")}</TextBlock>
        <TextBlock>{tl("l26.p32p")}</TextBlock>
        <TextBlock>{tl("l26.p33p")}</TextBlock>
        <TextBlock>{tl("l26.p34p")}</TextBlock>
        <TextBlock>{tl("l26.p35p")}</TextBlock>
        <TextBlock>{tl("l26.p36p")}</TextBlock>
        <TextBlock>{tl("l26.p37p")}</TextBlock>
        <TextBlock>{tl("l26.p38p")}</TextBlock>
        <TextBlock>{tl("l26.p39p")}</TextBlock>
        <TextBlock>{tl("l26.p40p")}</TextBlock>
        <TextBlock>{tl("l26.p41p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l26.p42ds1")}>
                <Code language="java" showNumbers="true">{tl("l26.s43cj")}</Code>
            </div>
            <div data-switch={tl("l26.s44ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l26.s45cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l26.p46p")}</TextBlock>
        <TextBlock>{tl("l26.p47p")}</TextBlock>
        <TextBlock>{tl("l26.p48p")}</TextBlock>
        <TextBlock>{tl("l26.p49p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l26.p50ds1")}>
                <Code language="java" showNumbers="true">{tl("l26.s51cj")}</Code>
            </div>
            <div data-switch={tl("l26.s52ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l26.s53cc")}</Code>
            </div>
        </Switch>
        <ResearchQuestion>{tl("l26.p54rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}

