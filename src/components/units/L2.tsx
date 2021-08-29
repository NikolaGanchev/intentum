import { useState } from "react";
import { useTranslation } from "react-i18next"
import EndButton from "../EndButton";
import FullAnswerQuestion from "../FullAnswerQuestion";
import Heading from "../Heading";
import Lock from "../Lock";
import TextBlock from "../TextBlock";

export default function L2(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);
    const [isLocked3, setIsLocked3] = useState(true);


    return <div>
        <TextBlock>{tl("l2.p1p")}</TextBlock>
        <Heading>{tl("l2.p2h")}</Heading>
        <TextBlock>{tl("l2.p3p")}</TextBlock>
        <pre>
            <TextBlock>{tl("l2.p4pre")}</TextBlock>
        </pre>
        <TextBlock>{tl("l2.p5p")}</TextBlock>
        <TextBlock>{tl("l2.p6p")}</TextBlock>
        <pre>
            <TextBlock>{tl("l2.p7pre")}</TextBlock>
        </pre>
        <TextBlock>{tl("l2.p8p")}</TextBlock>
        <FullAnswerQuestion rightAnswer={"100010011"} onAnswer={() => { setIsLocked1(false) }}>
            {tl("l2.p10fq")}
        </FullAnswerQuestion>
        <Lock isLocked={isLocked1}>
            <Heading>{tl("l2.p11h")}</Heading>
            <pre>
                <TextBlock>{tl("l2.p12pre")}</TextBlock>
            </pre>
            <TextBlock>{tl("l2.p13p")}</TextBlock>
            <FullAnswerQuestion rightAnswer={"1110"} onAnswer={() => { setIsLocked2(false) }}>
                {tl("l2.p14fq")}
            </FullAnswerQuestion>
            <Lock isLocked={isLocked2}>
                <Heading>{tl("l2.p15h")}</Heading>
                <TextBlock>{tl("l2.p16p")}</TextBlock>
                <pre>
                    <TextBlock>{tl("l2.p17pre")}</TextBlock>
                </pre>
                <FullAnswerQuestion rightAnswer={"1111"} onAnswer={() => { setIsLocked3(false) }}>
                    {tl("l2.p18fq")}
                </FullAnswerQuestion>
                <Lock isLocked={isLocked3}>
                    <Heading>{tl("l2.p19h")}</Heading>
                    <TextBlock>{tl("l2.p20p")}</TextBlock>
                    <pre>
                        <TextBlock>{tl("l2.p21pre")}</TextBlock>
                    </pre>
                    <TextBlock>{tl("l2.p22p")}</TextBlock>
                    <pre>
                        <TextBlock>{tl("l2.p23pre")}</TextBlock>
                    </pre>
                    <EndButton onClick={() => { props.endUnit() }}></EndButton>
                </Lock>
            </Lock>
        </Lock>
    </div>
}