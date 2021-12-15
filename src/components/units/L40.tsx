import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Heading from "../Heading";

export default function L40(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l40.p1p")}</TextBlock>
        <TextBlock>{tl("l40.p2p")}</TextBlock>
        <TextBlock>{tl("l40.p3p")}</TextBlock>
        <Heading>{tl("l40.p4h")}</Heading>
        <TextBlock>{tl("l40.p5p")}</TextBlock>
        <Heading>{tl("l40.p6h")}</Heading>
        <TextBlock>{tl("l40.p7p")}</TextBlock>
        <TextBlock>{tl("l40.p8p")}</TextBlock>
        <TextBlock>{tl("l40.p9p")}</TextBlock>
        <Heading>{tl("l40.p10h")}</Heading>
        <TextBlock>{tl("l40.p11p")}</TextBlock>
        <Heading>{tl("l40.p12h")}</Heading>
        <TextBlock>{tl("l40.p13p")}</TextBlock>
        <TextBlock>{tl("l40.p14p")}</TextBlock>
        <TextBlock>{tl("l40.p15p")}</TextBlock>
        <TextBlock>{tl("l40.p16p")}</TextBlock>
        <TextBlock>{tl("l40.p17p")}</TextBlock>
        <TextBlock>{tl("l40.p18p")}</TextBlock>
        <TextBlock>{tl("l40.p19p")}</TextBlock>
        <TextBlock>{tl("l40.p20p")}</TextBlock>
        <Heading>{tl("l40.p21h")}</Heading>
        <TextBlock>{tl("l40.p22p")}</TextBlock>
        <TextBlock>{tl("l40.p23p")}</TextBlock>
        <TextBlock>{tl("l40.p24p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}