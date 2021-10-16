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
        <TextBlock>{tl("t4.p20p")}</TextBlock>
        <TextBlock>{tl("t4.p21p")}</TextBlock>
        <TextBlock>{tl("t4.p22p")}</TextBlock>
        <TextBlock>{tl("t4.p23p")}</TextBlock>
        <Console>{tl("t4.p24con")}</Console>
        <TextBlock>{tl("t4.p25p")}</TextBlock>
        <Console>{tl("t4.p26con")}</Console>
        <TextBlock>{tl("t4.p27p")}</TextBlock>
        <Console>{tl("t4.p28con")}</Console>
        <TextBlock>{tl("t4.p29p")}</TextBlock>
        <TextBlock>{tl("t4.p30p")}</TextBlock>
        <TextBlock>{tl("t4.p31p")}</TextBlock>
        <Console>{tl("t4.p32con")}</Console>
        <TextBlock>{tl("t4.p33p")}</TextBlock>
        <TextBlock>{tl("t4.p34p")}</TextBlock>
        <Console>{tl("t4.p35con")}</Console>
        <TextBlock>{tl("t4.p36p")}</TextBlock>
        <Console>{tl("t4.p37con")}</Console>
        <Heading>{tl("t4.p38h")}</Heading>
        <ResearchQuestion>{tl("t4.p39rq")}</ResearchQuestion>
        <TextBlock>{tl("t4.p40p")}</TextBlock>
        <TextBlock>{tl("t4.p41p")}</TextBlock>
        <Console>{tl("t4.p42con")}</Console>
        <TextBlock>{tl("t4.p43p")}</TextBlock>
        <Console>{tl("t4.p44con")}</Console>
        <TextBlock>{tl("t4.p45p")}</TextBlock>
        <Heading>{tl("t4.p46h")}</Heading>
        <ResearchQuestion>{tl("t4.p47rq")}</ResearchQuestion>
        <TextBlock>{tl("t4.p48p")}</TextBlock>
        <TextBlock>{tl("t4.p49p")}</TextBlock>
        <TextBlock>{tl("t4.p50p")}</TextBlock>
        <TextBlock>{tl("t4.p51p")}</TextBlock>
        <TextBlock>{tl("t4.p52p")}</TextBlock>
        <TextBlock>{tl("t4.p53p")}</TextBlock>
        <TextBlock>{tl("t4.p54p")}</TextBlock>
        <TextBlock>{tl("t4.p55p")}</TextBlock>
        <TextBlock>{tl("t4.p56p")}</TextBlock>
        <Console>{tl("t4.p57con")}</Console>
        <TextBlock>{tl("t4.p58p")}</TextBlock>
        <TextBlock>{tl("t4.p59p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}