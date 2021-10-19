import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Console from "../Console";
import Error from "../Error";

export default function L39(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l39.p1p")}</TextBlock>
        <TextBlock>{tl("l39.p2p")}</TextBlock>
        <TextBlock>{tl("l39.p3p")}</TextBlock>
        <TextBlock>{tl("l39.p4p")}</TextBlock>
        <TextBlock>{tl("l39.p5p")}</TextBlock>
        <TextBlock>{tl("l39.p6p")}</TextBlock>
        <Console>{tl("l39.p7con")}</Console>
        <TextBlock>{tl("l39.p8p")}</TextBlock>
        <TextBlock>{tl("l39.p9p")}</TextBlock>
        <TextBlock>{tl("l39.p10p")}</TextBlock>
        <Console>{tl("l39.p11con")}</Console>
        <TextBlock>{tl("l39.p12p")}</TextBlock>
        <TextBlock>{tl("l39.p13p")}</TextBlock>
        <Console>{tl("l39.p14con")}</Console>
        <TextBlock>{tl("l39.p15p")}</TextBlock>
        <TextBlock>{tl("l39.p16p")}</TextBlock>
        <TextBlock>{tl("l39.p17p")}</TextBlock>
        <TextBlock>{tl("l39.p18p")}</TextBlock>
        <TextBlock>{tl("l39.p19p")}</TextBlock>
        <Console>{tl("l39.p20con")}</Console>
        <TextBlock>{tl("l39.p21p")}</TextBlock>
        <TextBlock>{tl("l39.p22p")}</TextBlock>
        <Console>{tl("l39.p23con")}</Console>
        <TextBlock>{tl("l39.p24p")}</TextBlock>
        <Console>{tl("l39.p25con")}</Console>
        <TextBlock>{tl("l39.p26p")}</TextBlock>
        <TextBlock>{tl("l39.p27p")}</TextBlock>
        <TextBlock>{tl("l39.p28p")}</TextBlock>
        <TextBlock>{tl("l39.p29p")}</TextBlock>
        <TextBlock>{tl("l39.p30p")}</TextBlock>
        <TextBlock>{tl("l39.p31p")}</TextBlock>
        <TextBlock>{tl("l39.p32p")}</TextBlock>
        <TextBlock>{tl("l39.p33p")}</TextBlock>
        <Console>{tl("l39.p34con")}</Console>
        <TextBlock>{tl("l39.p35p")}</TextBlock>
        <TextBlock>{tl("l39.p36p")}</TextBlock>
        <Console>{tl("l39.p37con")}</Console>
        <TextBlock>{tl("l39.p38p")}</TextBlock>
        <Console>{tl("l39.p39con")}</Console>
        <TextBlock>{tl("l39.p40p")}</TextBlock>
        <Error>{tl("l39.p41e")}</Error>
        <TextBlock>{tl("l39.p42p")}</TextBlock>
        <Console>{tl("l39.p43con")}</Console>
        <TextBlock>{tl("l39.p44p")}</TextBlock>
        <TextBlock>{tl("l39.p45p")}</TextBlock>
        <TextBlock>{tl("l39.p46p")}</TextBlock>
        <TextBlock>{tl("l39.p47p")}</TextBlock>
        <TextBlock>{tl("l39.p48p")}</TextBlock>
        <TextBlock>{tl("l39.p49p")}</TextBlock>
        <TextBlock>{tl("l39.p50p")}</TextBlock>
        <TextBlock>{tl("l39.p51p")}</TextBlock>
        <TextBlock>{tl("l39.p52p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}