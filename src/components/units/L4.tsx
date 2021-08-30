import { useState } from "react";
import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import FullAnswerQuestion from "../FullAnswerQuestion";
import Heading from "../Heading";
import Lock from "../Lock";
import ResearchQuestion from "../ResearchQuestion";
import TestQuestion from "../TestQuestion";
import TextBlock from "../TextBlock";
import Warning from "../Warning";

export default function L4(props: any) {
    const [tl] = useTranslation("lessons");
    const [isLocked1, setIsLocked1] = useState(true);
    const [isLocked2, setIsLocked2] = useState(true);
    const [isLocked3, setIsLocked3] = useState(true);
    const [isLocked4, setIsLocked4] = useState(true);
    const [isLocked5, setIsLocked5] = useState(true);
    const [isLocked6, setIsLocked6] = useState(true);
    const [isLocked7, setIsLocked7] = useState(true);

    return <div>
        <TextBlock>{tl("l4.p1p")}</TextBlock>
        <TestQuestion answers={[tl("l4.p2a1"), tl("l4.p2a2"), tl("l4.p2a3"), tl("l4.p2a4")]}
            rightAnswer={3}
            tries={3}
            onAnswer={() => { setIsLocked1(false) }}>
            {tl("l4.p2tq")}
        </TestQuestion>
        <Lock isLocked={isLocked1}>
            <TextBlock>{tl("l4.p3p")}</TextBlock>
            <TestQuestion answers={[tl("l4.p4a1"), tl("l4.p4a2"), tl("l4.p4a3"), tl("l4.p4a4")]}
                rightAnswer={0}
                tries={3}
                onAnswer={() => { setIsLocked2(false) }}>{tl("l4.p4tq")}</TestQuestion>
            <Lock isLocked={isLocked2}>
                <TextBlock>{tl("l4.p5p")}</TextBlock>
                <TestQuestion answers={[tl("l4.p6a1"), tl("l4.p6a2"), tl("l4.p6a3"), tl("l4.p6a4")]}
                    rightAnswer={0}
                    tries={3}
                    onAnswer={() => { setIsLocked3(false) }}>{tl("l4.p6tq")}</TestQuestion>
                <Lock isLocked={isLocked3}>
                    <TextBlock>{tl("l4.p7p")}</TextBlock>
                    <TextBlock>{tl("l4.p8p")}</TextBlock>
                    <pre>
                        <TextBlock>{tl("l4.p9pre")}</TextBlock>
                    </pre>
                    <TextBlock>{tl("l4.p10p")}</TextBlock>
                    <TextBlock>{tl("l4.p11p")}</TextBlock>
                    <pre>
                        <TextBlock>{tl("l4.p12pre")}</TextBlock>
                    </pre>
                    <TextBlock>{tl("l4.p13p")}</TextBlock>
                    <TextBlock>{tl("l4.p14p")}</TextBlock>
                    <pre>
                        <TextBlock>{tl("l4.p15pre")}</TextBlock>
                    </pre>
                    <TestQuestion answers={[tl("l4.p16a1"), tl("l4.p16a2"), tl("l4.p16a3")]}
                        rightAnswer={2}
                        tries={3}
                        onAnswer={() => { setIsLocked4(false) }}>
                        {tl("l4.p16tq")}</TestQuestion>
                    <Lock isLocked={isLocked4}>
                        <TextBlock>{tl("l4.p17p")}</TextBlock>
                        <TextBlock>{tl("l4.p18p")}</TextBlock>
                        <pre>
                            <TextBlock>{tl("l4.p19pre")}</TextBlock>
                        </pre>
                        <TextBlock>{tl("l4.p20p")}</TextBlock>
                        <pre>
                            <TextBlock>{tl("l4.p21pre")}</TextBlock>
                        </pre>
                        <TextBlock>{tl("l4.p22p")}</TextBlock>
                        <TextBlock>{tl("l4.p23p")}</TextBlock>
                        <pre>
                            <TextBlock>{tl("l4.p24pre")}</TextBlock>
                        </pre>
                        <TextBlock>{tl("l4.p25p")}</TextBlock>
                        <TextBlock>{tl("l4.p26p")}</TextBlock>
                        <pre>
                            <TextBlock>{tl("l4.p27pre")}</TextBlock>
                        </pre>
                        <TextBlock>{tl("l4.p28p")}</TextBlock>
                        <pre>
                            <TextBlock>{tl("l4.p29pre")}</TextBlock>
                        </pre>
                        <TextBlock>{tl("l4.p30p")}</TextBlock>
                        <TestQuestion answers={[tl("l4.p31a1"), tl("l4.p31a2"), tl("l4.p31a3"), tl("l4.p31a4")]}
                            rightAnswer={0}
                            tries={3}
                            onAnswer={() => { setIsLocked5(false) }}>
                            {tl("l4.p31tq")}</TestQuestion>
                        <Lock isLocked={isLocked5}>
                            <TextBlock>{tl("l4.p32p")}</TextBlock>
                            <TextBlock>{tl("l4.p33p")}</TextBlock>
                            <TextBlock>{tl("l4.p34p")}</TextBlock>
                            <TextBlock>{tl("l4.p35p")}</TextBlock>
                            <TextBlock>{tl("l4.p36p")}</TextBlock>
                            <TextBlock>{tl("l4.p37p")}</TextBlock>
                            <TextBlock>{tl("l4.p38p")}</TextBlock>
                            <TextBlock>{tl("l4.p39p")}</TextBlock>
                            <Heading>{tl("l4.p40h")}</Heading>
                            <TextBlock>{tl("l4.p41p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l4.p42pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l4.p43p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l4.p44pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l4.p45p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l4.p46pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l4.p47p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l4.p48pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l4.p49p")}</TextBlock>
                            <TextBlock>{tl("l4.p50p")}</TextBlock>
                            <TextBlock>{tl("l4.p51p")}</TextBlock>
                            <pre>
                                <TextBlock>{tl("l4.p52pre")}</TextBlock>
                            </pre>
                            <TextBlock>{tl("l4.p53p")}</TextBlock>
                            <FullAnswerQuestion
                                rightAnswers={["<version>17.2</version>", "<version>17,2</version>"]}
                                onAnswer={() => { setIsLocked6(false) }}>
                                {tl("l4.p54fq")}</FullAnswerQuestion>
                            <Lock isLocked={isLocked6}>
                                <Heading>{tl("l4.p55h")}</Heading>
                                <TextBlock>{tl("l4.p56p")}</TextBlock>
                                <pre>
                                    <TextBlock>{tl("l4.p57pre")}</TextBlock>
                                </pre>
                                <TextBlock>{tl("l4.p58p")}</TextBlock>
                                <pre>
                                    <TextBlock>{tl("l4.p59pre")}</TextBlock>
                                </pre>
                                <TextBlock>{tl("l4.p60p")}</TextBlock>
                                <pre>
                                    <TextBlock>{tl("l4.p61pre")}</TextBlock>
                                </pre>
                                <TextBlock>{tl("l4.p62p")}</TextBlock>
                                <Warning>{tl("l4.p63w")}</Warning>
                                <TextBlock>{tl("l4.p63p")}</TextBlock>
                                <TestQuestion answers={[tl("l4.p64a1"), tl("l4.p64a2"), tl("l4.p64a3"), tl("l4.p64a4")]}
                                    rightAnswer={3}
                                    tries={3}
                                    onAnswer={() => { setIsLocked7(false) }}>
                                    {tl("l4.p64tq")}</TestQuestion>
                                <Lock isLocked={isLocked7}>
                                    <ResearchQuestion>{tl("l4.p65rq")}</ResearchQuestion>
                                    <EndButton onClick={() => { props.endUnit() }} />
                                </Lock>
                            </Lock>
                        </Lock>
                    </Lock>
                </Lock>
            </Lock>
        </Lock>
    </div>;
}