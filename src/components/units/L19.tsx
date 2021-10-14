import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import ResearchQuestion from "../ResearchQuestion";
import Code from "../Code";
import Switch from "../Switch";

export default function L19(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l19.p1p")}</TextBlock>
        <TextBlock>{tl("l19.p2p")}</TextBlock>
        <ResearchQuestion>{tl("l19.p3rq")}</ResearchQuestion>
        <TextBlock>{tl("l19.p4p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l19.p5ds1")}>
                <Code language="java" showNumbers="true">{tl("l19.s6cj")}</Code>
            </div>
            <div data-switch={tl("l19.s7ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l19.s8cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l19.p9p")}</TextBlock>
        <TextBlock>{tl("l19.p10p")}</TextBlock>
        <ResearchQuestion>{tl("l19.p11rq")}</ResearchQuestion>
        <TextBlock>{tl("l19.p12p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}