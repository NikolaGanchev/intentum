import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Console from "../Console";

export default function L30(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l30.p1p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p2ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s3cj")}</Code>
            </div>
            <div data-switch={tl("l30.s4ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s5cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p6p")}</TextBlock>
        <TextBlock>{tl("l30.p7p")}</TextBlock>
        <TextBlock>{tl("l30.p8p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p9ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s10cj")}</Code>
            </div>
            <div data-switch={tl("l30.s11ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s12cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p13p")}</TextBlock>
        <Console>{tl("l30.p14con")}</Console>
        <TextBlock>{tl("l30.p15p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p16ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s17cj")}</Code>
            </div>
            <div data-switch={tl("l30.s18ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s19cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p20p")}</TextBlock>
        <TextBlock>{tl("l30.p21p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p22ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s23cj")}</Code>
            </div>
            <div data-switch={tl("l30.s24ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s25cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p26p")}</TextBlock>
        <Console>{tl("l30.p27con")}</Console>
        <TextBlock>{tl("l30.p28p")}</TextBlock>
        <TextBlock>{tl("l30.p29p")}</TextBlock>
        <TextBlock>{tl("l30.p30p")}</TextBlock>
        <TextBlock>{tl("l30.p31p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p32ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s33cj")}</Code>
            </div>
            <div data-switch={tl("l30.s34ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s35cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p36p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p37ds1")}>
                <TextBlock>{tl("l30.s38p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l30.s39cj")}</Code>
                <TextBlock>{tl("l30.s40p")}</TextBlock>
                <Console>{tl("l30.s41con")}</Console>
                <TextBlock>{tl("l30.s42p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l30.s43cj")}</Code>
                <TextBlock>{tl("l30.s44p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l30.s45cj")}</Code>
                <TextBlock>{tl("l30.s46p")}</TextBlock>
            </div>
            <div data-switch={tl("l30.s47ds2")}>
                <TextBlock>{tl("l30.s48p")}</TextBlock>
                <Code language="csharp" showNumbers="true">{tl("l30.s49cc")}</Code>
                <TextBlock>{tl("l30.s50p")}</TextBlock>
                <Console>{tl("l30.s51con")}</Console>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p52p")}</TextBlock>
        <TextBlock>{tl("l30.p53p")}</TextBlock>
        <TextBlock>{tl("l30.p54p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p55ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s56cj")}</Code>
            </div>
            <div data-switch={tl("l30.s57ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s58cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p59p")}</TextBlock>
        <TextBlock>{tl("l30.p60p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p61ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s62cj")}</Code>
            </div>
            <div data-switch={tl("l30.s63ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s64cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p65p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p66ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s67cj")}</Code>
            </div>
            <div data-switch={tl("l30.s68ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s69cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p70p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l30.p71ds1")}>
                <Code language="java" showNumbers="true">{tl("l30.s72cj")}</Code>
            </div>
            <div data-switch={tl("l30.s73ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l30.s74cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l30.p75p")}</TextBlock>
        <Console>{tl("l30.p76con")}</Console>
        <TextBlock>{tl("l30.p77p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}