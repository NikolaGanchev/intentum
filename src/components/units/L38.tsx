import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L38(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l38.p1p")}</TextBlock>
        <TextBlock>{tl("l38.p2p")}</TextBlock>
        <TextBlock>{tl("l38.p3p")}</TextBlock>
        <TextBlock>{tl("l38.p4p")}</TextBlock>
        <TextBlock>{tl("l38.p5p")}</TextBlock>
        <TextBlock>{tl("l38.p6p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l38.p7ds1")}>
                <TextBlock>{tl("l38.s8p")}</TextBlock>
                <TextBlock>{tl("l38.s9p")}</TextBlock>
            </div>
            <div data-switch={tl("l38.s10ds2")}>
                <TextBlock>{tl("l38.s11p")}</TextBlock>
                <TextBlock>{tl("l38.s12p")}</TextBlock>
            </div>
        </Switch>
        <TextBlock>{tl("l38.p13p")}</TextBlock>
        <TextBlock>{tl("l38.p14p")}</TextBlock>
        <TextBlock>{tl("l38.p15p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l38.p16ds1")}>
                <TextBlock>{tl("l38.s17p")}</TextBlock>
                <ResearchQuestion>{tl("l38.s18rq")}</ResearchQuestion>
            </div>
            <div data-switch={tl("l38.s19ds2")}>
                <TextBlock>{tl("l38.s20p")}</TextBlock>
                <ResearchQuestion>{tl("l38.s21rq")}</ResearchQuestion>
            </div>
        </Switch>
        <TextBlock>{tl("l38.p22p")}</TextBlock>
        <TextBlock>{tl("l38.p23p")}</TextBlock>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}