import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Error from "../Error";
import Heading from "../Heading";
import Code from "../Code";
import Console from "../Console";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L28(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l28.p1p")}</TextBlock>
        <TextBlock>{tl("l28.p2p")}</TextBlock>
        <Error>{tl("l28.p3e")}</Error>
        <TextBlock>{tl("l28.p4p")}</TextBlock>
        <Heading>{tl("l28.p5h")}</Heading>
        <TextBlock>{tl("l28.p6p")}</TextBlock>
        <TextBlock>{tl("l28.p7p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l28.p8ds1")}>
                <Code language="java" showNumbers="true">{tl("l28.s9cj")}</Code>
                <TextBlock>{tl("l28.s10p")}</TextBlock>
                <Console>{tl("l28.s11con")}</Console>
            </div>
            <div data-switch={tl("l28.s12ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l28.s13cc")}</Code>
                <TextBlock>{tl("l28.s14p")}</TextBlock>
                <Console>{tl("l28.s15con")}</Console>
            </div>
        </Switch>
        <Heading>{tl("l28.p16h")}</Heading>
        <TextBlock>{tl("l28.p17p")}</TextBlock>
        <Heading>{tl("l28.p18h")}</Heading>
        <TextBlock>{tl("l28.p19p")}</TextBlock>
        <Heading>{tl("l28.p20h")}</Heading>
        <TextBlock>{tl("l28.p21p")}</TextBlock>
        <Heading>{tl("l28.p22h")}</Heading>
        <TextBlock>{tl("l28.p23p")}</TextBlock>
        <Heading>{tl("l28.p24h")}</Heading>
        <TextBlock>{tl("l28.p25p")}</TextBlock>
        <ResearchQuestion>{tl("l28.p26rq")}</ResearchQuestion>
        <TextBlock>{tl("l28.p27p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}