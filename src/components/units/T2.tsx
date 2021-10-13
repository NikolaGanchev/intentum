import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TestQuestion from "../TestQuestion";
import FullAnswerQuestion from "../FullAnswerQuestion";
import { useState } from "react";
import Code from "../Code";

export default function T2(props: any) {
    const [tl] = useTranslation("lessons");
    const [t] = useTranslation("common");
    const [isShowing, setIsShowing] = useState(false);
    const [hasClickedCheck, setHasClickedCheck] = useState(false);

    return <div>
        <TestQuestion answers={[tl("t2.p1a"), tl("t2.p1a2")]} rightAnswer={1} isShowing={isShowing}>{tl("t2.p1tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p2a"), tl("t2.p2a2")]} rightAnswer={1} isShowing={isShowing}>{tl("t2.p2tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p3a1"), tl("t2.p3a2"), tl("t2.p3a3"), tl("t2.p3a4")]} rightAnswer={3} isShowing={isShowing}>{tl("t2.p3tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p4a1"), tl("t2.p4a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p4tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p5a1"), tl("t2.p5a2"), tl("t2.p5a3"), tl("t2.p5a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p5tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p6a1"), tl("t2.p6a2"), tl("t2.p6a3"), tl("t2.p6a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p6tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p7a1"), tl("t2.p7a2"), tl("t2.p7a3"), tl("t2.p7a4")]} rightAnswer={1} isShowing={isShowing}>{tl("t2.p7tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p8a1"), tl("t2.p8a2"), tl("t2.p8a3"), tl("t2.p8a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p8tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p9a1"), tl("t2.p9a2"), tl("t2.p9a3"), tl("t2.p9a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p9tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p10a1"), tl("t2.p10a2"), tl("t2.p10a3"), tl("t2.p10a4")]} rightAnswer={2} isShowing={isShowing}>{tl("t2.p10tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p11a1"), tl("t2.p11a2"), tl("t2.p11a3"), tl("t2.p11a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p11tqc")}</TestQuestion>
        <Code language="python" showNumbers="true">{tl("t2.p12pc")}</Code>
        <TestQuestion answers={[tl("t2.p13a1"), tl("t2.p13a2"), tl("t2.p13a3"), tl("t2.p13a4")]} rightAnswer={1} isShowing={isShowing}>{tl("t2.p13tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p14a1"), tl("t2.p14a2"), tl("t2.p14a3"), tl("t2.p14a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p14tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p15a1"), tl("t2.p15a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p15tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p16a1"), tl("t2.p16a2"), tl("t2.p16a3"), tl("t2.p16a4")]} rightAnswer={2} isShowing={isShowing}>{tl("t2.p16tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p17a1"), tl("t2.p17a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p17tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p18a1"), tl("t2.p18a2"), tl("t2.p18a3"), tl("t2.p18a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p18tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t2.p19a1"), tl("t2.p19a2"), tl("t2.p19a3"), tl("t2.p19a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t2.p19tqc")}</TestQuestion>
        <FullAnswerQuestion isShowing={isShowing} noButton={true}>{tl("t2.p20fqc")}</FullAnswerQuestion>
        <EndButton text={hasClickedCheck ? t("app.end") : t("app.check")} onClick={() => { if (hasClickedCheck) { props.endUnit() } else { setIsShowing(true); setHasClickedCheck(true); } }} />
    </div>;
}