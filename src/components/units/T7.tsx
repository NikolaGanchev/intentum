import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";
import ResearchQuestion from "../ResearchQuestion";
import Tip from "../Tip";
import Console from "../Console";

export default function T7(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("t7.p1p")}</TextBlock>
        <Heading>{tl("t7.p2h")}</Heading>
        <ResearchQuestion>{tl("t7.p3rq")}</ResearchQuestion>
        <Heading>{tl("t7.p4h")}</Heading>
        <ResearchQuestion>{tl("t7.p5rq")}</ResearchQuestion>
        <Tip>{tl("t7.p6t")}</Tip>
        <Heading>{tl("t7.p7h")}</Heading>
        <ResearchQuestion>{tl("t7.p8rq")}</ResearchQuestion>
        <TextBlock>{tl("t7.p9p")}</TextBlock>
        <TextBlock>{tl("t7.p10p")}</TextBlock>
        <Console>{tl("t7.p11con")}</Console>
        <TextBlock>{tl("t7.p12p")}</TextBlock>
        <Heading>{tl("t7.p13h")}</Heading>
        <ResearchQuestion>{tl("t7.p14rq")}</ResearchQuestion>
        <TextBlock>{tl("t7.p15p")}</TextBlock>
        <TextBlock>{tl("t7.p16p")}</TextBlock>
        <TextBlock>{tl("t7.p17p")}</TextBlock>
        <Heading>{tl("t7.p18h")}</Heading>
        <ResearchQuestion>{tl("t7.p19rq")}</ResearchQuestion>
        <Tip>{tl("t7.p20t")}</Tip>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}