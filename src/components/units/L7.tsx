import { useState } from "react";
import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import TestQuestion from "../TestQuestion";
import Lock from "../Lock";
import Heading from "../Heading";
import Image from "../Image";
import Stack1 from "../../resources/stack1.png";
import Stack2 from "../../resources/stack2.png";

export default function L7(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);
    const [isLocked3, setIsLocked3] = useState(true);

    return <div>
        <TextBlock>{tl("l7.p1p")}</TextBlock>
        <TextBlock>{tl("l7.p2p")}</TextBlock>
        <TextBlock>{tl("l7.p3p")}</TextBlock>
        <TestQuestion answers={[tl("l7.p4a1"), tl("l7.p4a2"), tl("l7.p4a3"), tl("l7.p4a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked1(false) }}>{tl("l7.p4tq")}</TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l7.p5p")}</TextBlock>
            <Heading>{tl("l7.p6h")}</Heading>
            <TextBlock>{tl("l7.p7p")}</TextBlock>
            <TestQuestion answers={[tl("l7.p8a1"), tl("l7.p8a2"), tl("l7.p8a3"), tl("l7.p8a4")]} rightAnswer={0} tries={3} onAnswer={() => { setIsLocked2(false) }}>{tl("l7.p8tq")}</TestQuestion>
            <Lock isLocked={isLocked2}>
                <Heading>{tl("l7.p9h")}</Heading>
                <TextBlock>{tl("l7.p10p")}</TextBlock>
                <TextBlock>{tl("l7.p11p")}</TextBlock>
                <Image src={Stack1} alt={tl("l7.p12alt")} width={50}></Image>
                <TextBlock>{tl("l7.p13p")}</TextBlock>
                <Image src={Stack2} alt={tl("l7.p14alt")} width={50}></Image>
                <TextBlock>{tl("l7.p15p")}</TextBlock>
                <TextBlock>{tl("l7.p16p")}</TextBlock>
                <TextBlock>{tl("l7.p17p")}</TextBlock>
                <TestQuestion answers={[tl("l7.p18a1"), tl("l7.p18a2"), tl("l7.p18a3"), tl("l7.p18a4")]} rightAnswer={3} tries={3} onAnswer={() => { setIsLocked3(false) }}>{tl("l7.p18tq")}</TestQuestion>
                <Lock isLocked={isLocked3}>
                    <TextBlock>{tl("l7.p19p")}</TextBlock>
                    <EndButton onClick={() => { props.endUnit() }} />
                </Lock>
            </Lock>
        </Lock>
    </div>;
}