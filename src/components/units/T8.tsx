import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";

export default function T8(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("t8.p1p")}</TextBlock>
        <TextBlock>{tl("t8.p2p")}</TextBlock>
        <TextBlock>{tl("t8.p3p")}</TextBlock>
        <TextBlock>{tl("t8.p4p")}</TextBlock>
        <TextBlock>{tl("t8.p5p")}</TextBlock>
        <TextBlock>{tl("t8.p6p")}</TextBlock>
        <TextBlock>{tl("t8.p7p")}</TextBlock>
        <TextBlock>{tl("t8.p8p")}</TextBlock>
        <TextBlock>{tl("t8.p9p")}</TextBlock>
        <TextBlock>{tl("t8.p10p")}</TextBlock>
        <TextBlock>{tl("t8.p11p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}