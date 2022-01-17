import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";
import ResearchQuestion from "../ResearchQuestion";
import Console from "../Console";

export default function T4(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("t4.p1p")}</TextBlock>
        <Heading>{tl("t4.p2h")}</Heading>
        <ResearchQuestion>{tl("t4.p3rq")}</ResearchQuestion>
        <TextBlock>{tl("t4.p4p")}</TextBlock>
        <TextBlock>{tl("t4.p5p")}</TextBlock>
        <Console>{tl("t4.p6con")}</Console>
        <TextBlock>{tl("t4.p7p")}</TextBlock>
        <Console>{tl("t4.p8con")}</Console>
        <TextBlock>{tl("t4.p9p")}</TextBlock>
        <Console>{tl("t4.p10con")}</Console>
        <TextBlock>{tl("t4.p11p")}</TextBlock>
        <Console>{tl("t4.p12con")}</Console>
        <Heading>{tl("t4.p13h")}</Heading>
        <ResearchQuestion>{tl("t4.p14rq")}</ResearchQuestion>
        <TextBlock>{tl("t4.p15p")}</TextBlock>
        <TextBlock>{tl("t4.p16p")}</TextBlock>
        <Console>{tl("t4.p17con")}</Console>
        <Heading>{tl("t4.p18h")}</Heading>
        <ResearchQuestion>{tl("t4.p19rq")}</ResearchQuestion>
        <Heading>{tl("t4.p22h")}</Heading>
        <ResearchQuestion>{tl("t4.p23rq")}</ResearchQuestion>
        <TextBlock>{tl("t4.p24p")}</TextBlock>
        <TextBlock>{tl("t4.p25p")}</TextBlock>
        <Console>{tl("t4.p26con")}</Console>
        <TextBlock>{tl("t4.p27p")}</TextBlock>
        <Console>{tl("t4.p28con")}</Console>
        <TextBlock>{tl("t4.p29p")}</TextBlock>
        <Heading>{tl("t4.p30h")}</Heading>
        <ResearchQuestion>{tl("t4.p31rq")}</ResearchQuestion>
        <TextBlock>{tl("t4.p32p")}</TextBlock>
        <TextBlock>{tl("t4.p33p")}</TextBlock>
        <TextBlock>{tl("t4.p34p")}</TextBlock>
        <TextBlock>{tl("t4.p35p")}</TextBlock>
        <TextBlock>{tl("t4.p36p")}</TextBlock>
        <TextBlock>{tl("t4.p37p")}</TextBlock>
        <TextBlock>{tl("t4.p38p")}</TextBlock>
        <TextBlock>{tl("t4.p39p")}</TextBlock>
        <TextBlock>{tl("t4.p40p")}</TextBlock>
        <Console>{tl("t4.p41con")}</Console>
        <TextBlock>{tl("t4.p42p")}</TextBlock>
        <TextBlock>{tl("t4.p43p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}