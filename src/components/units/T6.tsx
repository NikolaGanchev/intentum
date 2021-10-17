import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";
import ResearchQuestion from "../ResearchQuestion";
import Console from "../Console";

export default function T6(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("t6.p1p")}</TextBlock>
        <Heading>{tl("t6.p2h")}</Heading>
        <ResearchQuestion>{tl("t6.p3rq")}</ResearchQuestion>
        <TextBlock>{tl("t6.p4p")}</TextBlock>
        <TextBlock>{tl("t6.p5p")}</TextBlock>
        <TextBlock>{tl("t6.p6p")}</TextBlock>
        <TextBlock>{tl("t6.p7p")}</TextBlock>
        <TextBlock>{tl("t6.p8p")}</TextBlock>
        <TextBlock>{tl("t6.p9p")}</TextBlock>
        <TextBlock>{tl("t6.p10p")}</TextBlock>
        <TextBlock>{tl("t6.p11p")}</TextBlock>
        <Heading>{tl("t6.p12h")}</Heading>
        <ResearchQuestion>{tl("t6.p13rq")}</ResearchQuestion>
        <Heading>{tl("t6.p14h")}</Heading>
        <ResearchQuestion>{tl("t6.p15rq")}</ResearchQuestion>
        <TextBlock>{tl("t6.p16p")}</TextBlock>
        <TextBlock>{tl("t6.p17p")}</TextBlock>
        <TextBlock>{tl("t6.p18p")}</TextBlock>
        <TextBlock>{tl("t6.p19p")}</TextBlock>
        <Console>{tl("t6.p20con")}</Console>
        <Heading>{tl("t6.p21h")}</Heading>
        <ResearchQuestion>{tl("t6.p22rq")}</ResearchQuestion>
        <TextBlock>{tl("t6.p23p")}</TextBlock>
        <TextBlock>{tl("t6.p24p")}</TextBlock>
        <TextBlock>{tl("t6.p25p")}</TextBlock>
        <TextBlock>{tl("t6.p26p")}</TextBlock>
        <TextBlock>{tl("t6.p27p")}</TextBlock>
        <TextBlock>{tl("t6.p28p")}</TextBlock>
        <TextBlock>{tl("t6.p29p")}</TextBlock>
        <TextBlock>{tl("t6.p30p")}</TextBlock>
        <TextBlock>{tl("t6.p31p")}</TextBlock>
        <TextBlock>{tl("t6.p32p")}</TextBlock>
        <TextBlock>{tl("t6.p33p")}</TextBlock>
        <Heading>{tl("t6.p34h")}</Heading>
        <ResearchQuestion>{tl("t6.p35rq")}</ResearchQuestion>
        <TextBlock>{tl("t6.p36p")}</TextBlock>
        <TextBlock>{tl("t6.p37p")}</TextBlock>
        <TextBlock>{tl("t6.p38p")}</TextBlock>
        <TextBlock>{tl("t6.p39p")}</TextBlock>
        <TextBlock>{tl("t6.p40p")}</TextBlock>
        <TextBlock>{tl("t6.p41p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}