import { useState } from "react";
import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import FullAnswerQuestion from "../FullAnswerQuestion";
import TestQuestion from "../TestQuestion";

export default function T1(props: any) {
    const [t] = useTranslation("common");
    const [tl] = useTranslation("lessons");
    const [isShowing, setIsShowing] = useState(false);
    const [hasClickedCheck, setHasClickedCheck] = useState(false);

    return <div>
        <FullAnswerQuestion rightAnswer={tl("t1.p1a")} isShowing={isShowing} noButton={true}>{tl("t1.p1fqc")}</FullAnswerQuestion>
        <FullAnswerQuestion rightAnswer={tl("t1.p2a")} isShowing={isShowing} noButton={true}>{tl("t1.p2fqc")}</FullAnswerQuestion>
        <FullAnswerQuestion rightAnswer={tl("t1.p3a")} isShowing={isShowing} noButton={true}>{tl("t1.p3fqc")}</FullAnswerQuestion>
        <FullAnswerQuestion rightAnswer={tl("t1.p4a")} isShowing={isShowing} noButton={true}>{tl("t1.p4fqc")}</FullAnswerQuestion>
        <TestQuestion answers={[tl("t1.p5a1"), tl("t1.p5a2"), tl("t1.p5a3"), tl("t1.p5a4")]} rightAnswer={1} isShowing={isShowing}>{tl("t1.p5tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p6a1"), tl("t1.p6a2")]} rightAnswer={1} isShowing={isShowing}>{tl("t1.p6tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p7a1"), tl("t1.p7a2"), tl("t1.p7a3"), tl("t1.p7a4")]} rightAnswer={1} isShowing={isShowing}>{tl("t1.p7tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p8a1"), tl("t1.p8a2"), tl("t1.p8a3"), tl("t1.p8a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t1.p8tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p9a1"), tl("t1.p9a2"), tl("t1.p9a3"), tl("t1.p9a4")]} rightAnswer={3} isShowing={isShowing}>{tl("t1.p9tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p10a1"), tl("t1.p10a2"), tl("t1.p10a3")]} rightAnswer={2} isShowing={isShowing}>{tl("t1.p10tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p11a1"), tl("t1.p11a2"), tl("t1.p11a3"), tl("t1.p11a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t1.p11tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p12a1"), tl("t1.p12a2"), tl("t1.p12a3"), tl("t1.p12a4")]} rightAnswer={0} isShowing={isShowing}>{tl("t1.p12tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p13a1"), tl("t1.p13a2"), tl("t1.p13a3"), tl("t1.p13a4")]} rightAnswer={1} isShowing={isShowing}>{tl("t1.p13tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p14a1"), tl("t1.p14a2")]} rightAnswer={1} isShowing={isShowing}>{tl("t1.p14tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p15a1"), tl("t1.p15a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t1.p15tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p16a1"), tl("t1.p16a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t1.p16tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p17a1"), tl("t1.p17a2")]} rightAnswer={0} isShowing={isShowing}>{tl("t1.p17tqc")}</TestQuestion>
        <TestQuestion answers={[tl("t1.p18a1"), tl("t1.p18a2")]} rightAnswer={1} isShowing={isShowing}>{tl("t1.p18tqc")}</TestQuestion>
        <FullAnswerQuestion rightAnswers={[tl("t1.p19a1"), tl("t1.p19a2")]} isShowing={isShowing} noButton={true}>{tl("t1.p19fqc")}</FullAnswerQuestion>
        <FullAnswerQuestion isShowing={isShowing} noButton={true}>{tl("t1.p20fqc")}</FullAnswerQuestion>
        <EndButton text={hasClickedCheck ? t("app.end") : t("app.check")} onClick={() => { if (hasClickedCheck) { props.endUnit() } else { setIsShowing(true); setHasClickedCheck(true); } }} />
    </div>;
}