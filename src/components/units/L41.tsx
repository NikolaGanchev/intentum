import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";

export default function L41(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l41.p1p")}</TextBlock>
        <Heading>{tl("l41.p2h")}</Heading>
        <TextBlock>{tl("l41.p3p")}</TextBlock>
        <TextBlock>{tl("l41.p4p")}</TextBlock>
        <Heading>{tl("l41.p5h")}</Heading>
        <TextBlock>{tl("l41.p6p")}</TextBlock>
        <TextBlock>{tl("l41.p7p")}</TextBlock>
        <TextBlock>{tl("l41.p8p")}</TextBlock>
        <Heading>{tl("l41.p9h")}</Heading>
        <TextBlock>{tl("l41.p10p")}</TextBlock>
        <Heading>{tl("l41.p11h")}</Heading>
        <TextBlock>{tl("l41.p12p")}</TextBlock>
        <Heading>{tl("l41.p13h")}</Heading>
        <TextBlock>{tl("l41.p14p")}</TextBlock>
        <Heading>{tl("l41.p15h")}</Heading>
        <TextBlock>{tl("l41.p16p")}</TextBlock>
        <Heading>{tl("l41.p17h")}</Heading>
        <TextBlock>{tl("l41.p18p")}</TextBlock>
        <Heading>{tl("l41.p19h")}</Heading>
        <TextBlock>{tl("l41.p20p")}</TextBlock>
        <Heading>{tl("l41.p21h")}</Heading>
        <TextBlock>{tl("l41.p22p")}</TextBlock>
        <Heading>{tl("l41.p23h")}</Heading>
        <TextBlock>{tl("l41.p24p")}</TextBlock>
        <TextBlock>{tl("l41.p25p")}</TextBlock>
        <TextBlock>{tl("l41.p26p")}</TextBlock>
        <TextBlock>{tl("l41.p27p")}</TextBlock>
        <TextBlock>{tl("l41.p28p")}</TextBlock>
        <TextBlock>{tl("l41.p29p")}</TextBlock>
        <TextBlock>{tl("l41.p30p")}</TextBlock>
        <TextBlock>{tl("l41.p31p")}</TextBlock>
        <TextBlock>{tl("l41.p32p")}</TextBlock>
        <TextBlock>{tl("l41.p33p")}</TextBlock>
        <TextBlock>{tl("l41.p34p")}</TextBlock>
        <TextBlock>{tl("l41.p35p")}</TextBlock>
        <TextBlock>{tl("l41.p36p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}