import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Warning from "../Warning";
import Console from "../Console";
import ResearchQuestion from "../ResearchQuestion";

export default function L29(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l29.p1p")}</TextBlock>
        <TextBlock>{tl("l29.p2p")}</TextBlock>
        <TextBlock>{tl("l29.p3p")}</TextBlock>
        <TextBlock>{tl("l29.p4p")}</TextBlock>
        <TextBlock>{tl("l29.p5p")}</TextBlock>
        <TextBlock>{tl("l29.p6p")}</TextBlock>
        <TextBlock>{tl("l29.p7p")}</TextBlock>
        <TextBlock>{tl("l29.p8p")}</TextBlock>
        <TextBlock>{tl("l29.p9p")}</TextBlock>
        <TextBlock>{tl("l29.p10p")}</TextBlock>
        <TextBlock>{tl("l29.p11p")}</TextBlock>
        <TextBlock>{tl("l29.p12p")}</TextBlock>
        <TextBlock>{tl("l29.p13p")}</TextBlock>
        <TextBlock>{tl("l29.p14p")}</TextBlock>
        <TextBlock>{tl("l29.p15p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l29.p16ds1")}>
                <Code language="java" showNumbers="true">{tl("l29.s17cj")}</Code>
            </div>
            <div data-switch={tl("l29.s18ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l29.s19cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l29.p20p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l29.p21ds1")}>
                <Code language="java" showNumbers="true">{tl("l29.s22cj")}</Code>
            </div>
            <div data-switch={tl("l29.s23ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l29.s24cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l29.p25p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l29.p26ds1")}>
                <Code language="java" showNumbers="true">{tl("l29.s27cj")}</Code>
            </div>
            <div data-switch={tl("l29.s28ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l29.s29cc")}</Code>
            </div>
        </Switch>
        <Warning>{tl("l29.p30w")}</Warning>
        <TextBlock>{tl("l29.p31p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l29.p32ds1")}>
                <Code language="java" showNumbers="true">{tl("l29.s33cj")}</Code>
            </div>
            <div data-switch={tl("l29.s34ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l29.s35cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l29.p36p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l29.p37ds1")}>
                <Code language="java" showNumbers="true">{tl("l29.s38cj")}</Code>
            </div>
            <div data-switch={tl("l29.s39ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l29.s40cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l29.p41p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l29.p42ds1")}>
                <Code language="java" showNumbers="true">{tl("l29.s43cj")}</Code>
            </div>
            <div data-switch={tl("l29.s44ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l29.s45cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l29.p46p")}</TextBlock>
        <Console>{tl("l29.p47con")}</Console>
        <TextBlock>{tl("l29.p48p")}</TextBlock>
        <ResearchQuestion>{tl("l29.p49rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}