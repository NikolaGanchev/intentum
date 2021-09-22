import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Tip from "../Tip";
import Warning from "../Warning";

export default function L8(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l8.p1p")}</TextBlock>
        <TextBlock>{tl("l8.p2p")}</TextBlock>
        <TextBlock>{tl("l8.p3p")}</TextBlock>
        <TextBlock>{tl("l8.p4p")}</TextBlock>
        <TextBlock>{tl("l8.p5p")}</TextBlock>
        <TextBlock>{tl("l8.p6p")}</TextBlock>
        <TextBlock>{tl("l8.p7p")}</TextBlock>
        <TextBlock>{tl("l8.p8p")}</TextBlock>
        <TextBlock>{tl("l8.p9p")}</TextBlock>
        <TextBlock>{tl("l8.p10p")}</TextBlock>
        <TextBlock>{tl("l8.p11p")}</TextBlock>
        <TextBlock>{tl("l8.p12p")}</TextBlock>
        <TextBlock>{tl("l8.p13p")}</TextBlock>
        <TextBlock>{tl("l8.p14p")}</TextBlock>
        <TextBlock>{tl("l8.p15p")}</TextBlock>
        <TextBlock>{tl("l8.p16p")}</TextBlock>
        <TextBlock>{tl("l8.p17p")}</TextBlock>
        <TextBlock>{tl("l8.p18p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l8.p19ds1")}>
                <TextBlock>{tl("l8.s19p")}</TextBlock>
                <TextBlock>{tl("l8.s20p")}</TextBlock>
                <TextBlock>{tl("l8.s21p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l8.s22cj")}</Code>
                <TextBlock>{tl("l8.s23p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l8.s24cj")}</Code>
                <TextBlock>{tl("l8.s25p")}</TextBlock>
            </div>
            <div data-switch={tl("l8.s19ds2")}>
                <TextBlock>{tl("l8.s26p")}</TextBlock>
                <TextBlock>{tl("l8.s27p")}</TextBlock>
                <TextBlock>{tl("l8.s28p")}</TextBlock>
                <TextBlock>{tl("l8.s29p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l8.s30cj")}</Code>
                <TextBlock>{tl("l8.s31p")}</TextBlock>
                <Code language="java" showNumbers="true">{tl("l8.s32cj")}</Code>
                <TextBlock>{tl("l8.s33p")}</TextBlock>
                <TextBlock>{tl("l8.s34p")}</TextBlock>
                <Tip>{tl("l8.s35t")}</Tip>
            </div>
            <div data-switch={tl("l8.s19ds3")}>
                <Warning>{tl("l8.s36w")}</Warning>
                <TextBlock>{tl("l8.s37p")}</TextBlock>
                <TextBlock>{tl("l8.s38p")}</TextBlock>
                <Code language="csharp" showNumbers="true">{tl("l8.s39cc")}</Code>
                <TextBlock>{tl("l8.s40p")}</TextBlock>
                <Code language="csharp" showNumbers="true">{tl("l8.s41cc")}</Code>
                <TextBlock>{tl("l8.s42p")}</TextBlock>
            </div>
        </Switch>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}