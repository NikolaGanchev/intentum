import TextBlock from "../TextBlock";
import EndButton from "../EndButton";
import { useTranslation } from "react-i18next";
import TestQuestion from "../TestQuestion";
import { useState } from "react";
import FullAnswerQuestion from "../FullAnswerQuestion";
import Lock from "../Lock";
import ResearchQuestion from "../ResearchQuestion";

export default function L1(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);
    const [isLocked3, setIsLocked3] = useState(true);
    const [isLocked4, setIsLocked4] = useState(true);
    const [isLocked5, setIsLocked5] = useState(true);

    return <div>
        <TextBlock>{tl(`l1.p1p`)}</TextBlock>
        <TextBlock>{tl(`l1.p2p`)}</TextBlock>
        <TextBlock>{tl(`l1.p3p`)}</TextBlock>
        <TextBlock>{tl(`l1.p4p`)}</TextBlock>
        <TextBlock>{tl(`l1.p5p`)}</TextBlock>
        <TextBlock>{tl(`l1.p6p`)}</TextBlock>
        <TextBlock>{tl(`l1.p7p`)}</TextBlock>
        <TextBlock>{tl(`l1.p8p`)}</TextBlock>
        <TextBlock>{tl(`l1.p9p`)}</TextBlock>
        <TextBlock>{tl(`l1.p10p`)}</TextBlock>
        <TextBlock>{tl(`l1.p11p`)}</TextBlock>
        <TextBlock>{tl(`l1.p12p`)}</TextBlock>
        <TextBlock>{tl(`l1.p13p`)}</TextBlock>
        <TextBlock>{tl(`l1.p14p`)}</TextBlock>
        <TextBlock>{tl(`l1.p15p`)}</TextBlock>
        <TextBlock>{tl(`l1.p16p`)}</TextBlock>
        <TextBlock>{tl(`l1.p17p`)}</TextBlock>
        <TextBlock>{tl(`l1.p18p`)}</TextBlock>
        <TestQuestion answers={["1", "2", "3", "4"]} rightAnswer={1} tries={3} onAnswer={() => { setIsLocked1(false) }}>
            {tl("l1.p19tq")}
        </TestQuestion>
        <FullAnswerQuestion rightAnswers={["796=7*10^2+9*10^1+6*10^0", "7*10^2+9*10^1+6*10^0"]} onAnswer={() => { setIsLocked2(false) }}>
            {tl("l1.p20fq")}
        </FullAnswerQuestion>
        <Lock isLocked={isLocked1 || isLocked2}>
            <TextBlock>{tl("l1.p21p")}</TextBlock>
            <TextBlock>{tl("l1.p22p")}</TextBlock>
            <TextBlock>{tl("l1.p23p")}</TextBlock>
            <TextBlock>{tl("l1.p24p")}</TextBlock>
            <TextBlock>{tl("l1.p25p")}</TextBlock>
            <TextBlock>{tl("l1.p26p")}</TextBlock>
            <TextBlock>{tl("l1.p27p")}</TextBlock>
            <TextBlock>{tl("l1.p28p")}</TextBlock>
            <TextBlock>{tl("l1.p29p")}</TextBlock>
            <FullAnswerQuestion rightAnswer={"238"} onAnswer={() => { setIsLocked3(false) }}>
                {tl("l1.p30fq")}
            </FullAnswerQuestion>
            <TestQuestion answers={["3", "5", "4", "6"]} rightAnswer={3} tries={3} onAnswer={() => { setIsLocked4(false) }}>
                {tl("l1.p31tq")}
            </TestQuestion>
            <Lock isLocked={isLocked3 || isLocked4}>
                <TextBlock>{tl(`l1.p32p`)}</TextBlock>
                <TextBlock>{tl(`l1.p33p`)}</TextBlock>
                <TextBlock>{tl(`l1.p34p`)}</TextBlock>
                <TextBlock>{tl(`l1.p35p`)}</TextBlock>
                <TextBlock>{tl(`l1.p36p`)}</TextBlock>
                <TextBlock>{tl(`l1.p37p`)}</TextBlock>
                <TextBlock>{tl(`l1.p38p`)}</TextBlock>
                <TextBlock>{tl(`l1.p39p`)}</TextBlock>
                <TextBlock>{tl(`l1.p40p`)}</TextBlock>
                <TextBlock>{tl(`l1.p41p`)}</TextBlock>
                <TextBlock>{tl(`l1.p42p`)}</TextBlock>
                <TextBlock>{tl(`l1.p43p`)}</TextBlock>
                <TextBlock>{tl(`l1.p44p`)}</TextBlock>
                <TextBlock>{tl(`l1.p45p`)}</TextBlock>
                <TextBlock>{tl(`l1.p46p`)}</TextBlock>
                <TextBlock>{tl(`l1.p47p`)}</TextBlock>
                <TextBlock>{tl(`l1.p48p`)}</TextBlock>
                <FullAnswerQuestion rightAnswer={"11101110"} onAnswer={() => { setIsLocked5(false) }}>
                    {tl("l1.p49fq")}
                </FullAnswerQuestion>
                <Lock isLocked={isLocked5}>
                    <TextBlock>{tl("l1.p50p")}</TextBlock>
                    <ResearchQuestion>
                        {tl("l1.p51rq")}
                    </ResearchQuestion>
                    <EndButton onClick={() => { props.endUnit() }}></EndButton>
                </Lock>
            </Lock>
        </Lock>
    </div>
}