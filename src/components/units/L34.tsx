import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";
import Error from "../Error";

export default function L34(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l34.p1p")}</TextBlock>
        <TextBlock>{tl("l34.p2p")}</TextBlock>
        <TextBlock>{tl("l34.p3p")}</TextBlock>
        <TextBlock>{tl("l34.p4p")}</TextBlock>
        <TextBlock>{tl("l34.p5p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l34.p6ds1")}>
                <Code language="java" showNumbers="true">{tl("l34.s7cj")}</Code>
            </div>
            <div data-switch={tl("l34.s8ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l34.s9cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l34.p10p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l34.p11ds1")}>
                <Code language="java" showNumbers="true">{tl("l34.s12cj")}</Code>
            </div>
            <div data-switch={tl("l34.s13ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l34.s14cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l34.p15p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l34.p16ds1")}>
                <Code language="java" showNumbers="true">{tl("l34.s17cj")}</Code>
            </div>
            <div data-switch={tl("l34.s18ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l34.s19cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l34.p20p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l34.p21ds1")}>
                <Code language="java" showNumbers="true">{tl("l34.s22cj")}</Code>
            </div>
            <div data-switch={tl("l34.s23ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l34.s24cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l34.p25p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l34.p26ds1")}>
                <Code language="java" showNumbers="true">{tl("l34.s27cj")}</Code>
            </div>
            <div data-switch={tl("l34.s28ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l34.s29cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l34.p30p")}</TextBlock>
        <Console>{tl("l34.p31con")}</Console>
        <TextBlock>{tl("l34.p32p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l34.p33ds1")}>
                <Code language="java" showNumbers="true">{tl("l34.s34cj")}</Code>
            </div>
            <div data-switch={tl("l34.s35ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l34.s36cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l34.p37p")}</TextBlock>
        <TextBlock>{tl("l34.p38p")}</TextBlock>
        <Error>{tl("l34.p39e")}</Error>
        <TextBlock>{tl("l34.p40p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}