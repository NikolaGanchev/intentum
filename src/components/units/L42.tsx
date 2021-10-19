import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";

export default function L42(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l42.p1p")}</TextBlock>
        <TextBlock>{tl("l42.p2p")}</TextBlock>
        <TextBlock>{tl("l42.p3p")}</TextBlock>
        <TextBlock>{tl("l42.p4p")}</TextBlock>
        <TextBlock>{tl("l42.p5p")}</TextBlock>
        <TextBlock>{tl("l42.p6p")}</TextBlock>
        <TextBlock>{tl("l42.p7p")}</TextBlock>
        <TextBlock>{tl("l42.p8p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}