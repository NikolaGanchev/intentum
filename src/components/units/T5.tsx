import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";
import ResearchQuestion from "../ResearchQuestion";
import Console from "../Console";

export default function T5(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("t5.p1p")}</TextBlock>
        <Heading>{tl("t5.p2h")}</Heading>
        <ResearchQuestion>{tl("t5.p3rq")}</ResearchQuestion>
        <TextBlock>{tl("t5.p4p")}</TextBlock>
        <TextBlock>{tl("t5.p5p")}</TextBlock>
        <Console>{tl("t5.p6con")}</Console>
        <TextBlock>{tl("t5.p7p")}</TextBlock>
        <Console>{tl("t5.p8con")}</Console>
        <Heading>{tl("t5.p9h")}</Heading>
        <ResearchQuestion>{tl("t5.p10rq")}</ResearchQuestion>
        <Heading>{tl("t5.p11h")}</Heading>
        <ResearchQuestion>{tl("t5.p12rq")}</ResearchQuestion>
        <TextBlock>{tl("t5.p13p")}</TextBlock>
        <TextBlock>{tl("t5.p14p")}</TextBlock>
        <Console>{tl("t5.p15con")}</Console>
        <TextBlock>{tl("t5.p16p")}</TextBlock>
        <Console>{tl("t5.p17con")}</Console>
        <Heading>{tl("t5.p18h")}</Heading>
        <ResearchQuestion>{tl("t5.p19rq")}</ResearchQuestion>
        <Heading>{tl("t5.p20h")}</Heading>
        <ResearchQuestion>{tl("t5.p21rq")}</ResearchQuestion>
        <TextBlock>{tl("t5.p22p")}</TextBlock>
        <TextBlock>{tl("t5.p23p")}</TextBlock>
        <TextBlock>{tl("t5.p24p")}</TextBlock>
        <TextBlock>{tl("t5.p25p")}</TextBlock>
        <TextBlock>{tl("t5.p26p")}</TextBlock>
        <TextBlock>{tl("t5.p27p")}</TextBlock>
        <Console>{tl("t5.p28con")}</Console>
        <TextBlock>{tl("t5.p29p")}</TextBlock>
        <Console>{tl("t5.p30con")}</Console>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}