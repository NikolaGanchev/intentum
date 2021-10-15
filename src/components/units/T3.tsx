import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TestQuestion from "../TestQuestion";
import FullAnswerQuestion from "../FullAnswerQuestion";
import { useState } from "react";
import Code from "../Code";
import Heading from "../Heading";
import TextBlock from "../TextBlock";
import ResearchQuestion from "../ResearchQuestion";

export default function T3(props: any) {
    const [tl] = useTranslation("lessons");
    const [t] = useTranslation("common");
    const [isShowing, setIsShowing] = useState(false);
    const [hasClickedCheck, setHasClickedCheck] = useState(false);

    return <div>
        <TestQuestion answers={[tl("t3.p1a1"), tl("t3.p1a2"), tl("t3.p1a3"), tl("t3.p1a4")]} rightAnswer={1} isShowing={isShowing}>{tl("t3.p1tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t3.p2a1"), tl("t3.p2a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t3.p2tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t3.p3a1"), tl("t3.p3a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t3.p3tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t3.p4a1"), tl("t3.p4a2")]} rightAnswer={1} isShowing={isShowing}>{tl("t3.p4tqc")}</TestQuestion>
        <Code language="python" showNumbers="true">{tl("t3.p5pc")}</Code>
        <TestQuestion answers={[tl("t3.p6a1"), tl("t3.p6a2"), tl("t3.p6a3"), tl("t3.p6a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t3.p6tqc")}</TestQuestion>
        <Code language="python" showNumbers="true">{tl("t3.p7pc")}</Code>
        <TestQuestion answers={[tl("t3.p8a1"), tl("t3.p8a2"), tl("t3.p8a3"), tl("t3.p8a4")]} rightAnswer={1} isShowing={isShowing}>{tl("t3.p8tqc")}</TestQuestion>
        <Code language="python" showNumbers="true">{tl("t3.p9pc")}</Code>
        <TestQuestion answers={[tl("t3.p10a1"), tl("t3.p10a2"), tl("t3.p10a3"), tl("t3.p10a4")]} rightAnswer={3} isShowing={isShowing}>{tl("t3.p10tqc")}</TestQuestion>
        <Heading>{tl("t3.p11h")}</Heading>
        <TextBlock>{tl("t3.p12p")}</TextBlock>
        <ResearchQuestion>{tl("t3.p13rq")}</ResearchQuestion>
        <ResearchQuestion>{tl("t3.p14rq")}</ResearchQuestion>
        <FullAnswerQuestion isShowing={isShowing} noButton={true}>{tl("t3.p15fqc")}</FullAnswerQuestion>
        <EndButton text={hasClickedCheck ? t("app.end") : t("app.check")} onClick={() => { if (hasClickedCheck) { props.endUnit() } else { setIsShowing(true); setHasClickedCheck(true); } }} />
    </div>;
}
