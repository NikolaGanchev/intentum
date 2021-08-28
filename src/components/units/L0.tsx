import { useTranslation } from "react-i18next"
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";

export default function L0(props: any) {
    const [tl] = useTranslation("lessons");

    // At some point I will probably change this, if i want to shave off these few bytes,
    // however right now i would rather take a more...
    // declarative approach
    return <div>
        <TextBlock>{tl("l0.p1p")}</TextBlock>
        <TextBlock>{tl("l0.p2p")}</TextBlock>
        <TextBlock>{tl("l0.p3p")}</TextBlock>
        <TextBlock>{tl("l0.p4p")}</TextBlock>
        <TextBlock>{tl("l0.p5p")}</TextBlock>
        <TextBlock>{tl("l0.p6p")}</TextBlock>
        <TextBlock>{tl("l0.p7p")}</TextBlock>
        <TextBlock>{tl("l0.p8p")}</TextBlock>
        <TextBlock>{tl("l0.p9p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }}></EndButton>
    </div>
}