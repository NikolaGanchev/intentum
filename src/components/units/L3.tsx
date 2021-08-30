import { useState } from "react";
import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import FullAnswerQuestion from "../FullAnswerQuestion";
import Lock from "../Lock";
import TestQuestion from "../TestQuestion";
import TextBlock from "../TextBlock";
import Tip from "../Tip";

export default function L3(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);

    return <div>
        <TextBlock>{tl("l3.p1p")}</TextBlock>
        <TextBlock>{tl("l3.p2p")}</TextBlock>
        <TextBlock>{tl("l3.p3p")}</TextBlock>
        <TextBlock>{tl("l3.p4p")}</TextBlock>
        <TextBlock>{tl("l3.p5p")}</TextBlock>
        <TextBlock>{tl("l3.p6p")}</TextBlock>
        <FullAnswerQuestion rightAnswer={128} onAnswer={() => { setIsLocked1(false) }}>
            {tl("l3.p7fq")}
        </FullAnswerQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l3.p8p")}</TextBlock>
            <TextBlock>{tl("l3.p9p")}</TextBlock>
            <TextBlock>{tl("l3.p10p")}</TextBlock>
            <TestQuestion answers={[tl("l3.p11a1"), tl("l3.p11a2"), tl("l3.p11a3"), tl("l3.p11a4")]}
                rightAnswer={2}
                tries={3}
                onAnswer={() => { setIsLocked2(false) }}>{tl("l3.p11tq")}</TestQuestion>
            <Lock isLocked={isLocked2}>
                <TextBlock>{tl("l3.p12p")}</TextBlock>
                <Tip>{tl("l3.p13t")}</Tip>
                <EndButton onClick={() => { props.endUnit() }} />
            </Lock>
        </Lock>
    </div>;
}