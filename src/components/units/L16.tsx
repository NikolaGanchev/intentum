import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import Heading from "../Heading";
import Console from "../Console";
import Warning from "../Warning";
import ResearchQuestion from "../ResearchQuestion";

export default function L16(props: any) {
    const [tl] = useTranslation("lessons");

    return <div>
        <TextBlock>{tl("l16.p1p")}</TextBlock>
        <TextBlock>{tl("l16.p2p")}</TextBlock>
        <TextBlock>{tl("l16.p3p")}</TextBlock>
        <TextBlock>{tl("l16.p4p")}</TextBlock>
        <TextBlock>{tl("l16.p5p")}</TextBlock>
        <TextBlock>{tl("l16.p6p")}</TextBlock>
        <TextBlock>{tl("l16.p7p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p8pc")}</Code>
        <TextBlock>{tl("l16.p9p")}</TextBlock>
        <TextBlock>{tl("l16.p10p")}</TextBlock>
        <TextBlock>{tl("l16.p11p")}</TextBlock>
        <TextBlock>{tl("l16.p12p")}</TextBlock>
        <TextBlock>{tl("l16.p13p")}</TextBlock>
        <Switch>
            <div data-switch={tl("l16.p14ds1")}>
                <Code language="java" showNumbers="true">{tl("l16.s15cj")}</Code>
                <TextBlock>{tl("l16.s16p")}</TextBlock>
            </div>
            <div data-switch={tl("l16.s17ds2")}>
                <Code language="csharp" showNumbers="true">{tl("l16.s18cc")}</Code>
            </div>
        </Switch>
        <TextBlock>{tl("l16.p19p")}</TextBlock>
        <TextBlock>{tl("l16.p20p")}</TextBlock>
        <Heading>{tl("l16.p21h")}</Heading>
        <TextBlock>{tl("l16.p22p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p23pc")}</Code>
        <TextBlock>{tl("l16.p24p")}</TextBlock>
        <Console>{tl("l16.p25con")}</Console>
        <TextBlock>{tl("l16.p26p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p27pc")}</Code>
        <TextBlock>{tl("l16.p28p")}</TextBlock>
        <Console>{tl("l16.p29con")}</Console>
        <TextBlock>{tl("l16.p30p")}</TextBlock>
        <TextBlock>{tl("l16.p31p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p32pc")}</Code>
        <TextBlock>{tl("l16.p33p")}</TextBlock>
        <Console>{tl("l16.p34con")}</Console>
        <TextBlock>{tl("l16.p35p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p36pc")}</Code>
        <TextBlock>{tl("l16.p37p")}</TextBlock>
        <Console>{tl("l16.p38con")}</Console>
        <Heading>{tl("l16.p39h")}</Heading>
        <TextBlock>{tl("l16.p40p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p41pc")}</Code>
        <TextBlock>{tl("l16.p42p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p43pc")}</Code>
        <TextBlock>{tl("l16.p44p")}</TextBlock>
        <Console>{tl("l16.p45con")}</Console>
        <TextBlock>{tl("l16.p46p")}</TextBlock>
        <TextBlock>{tl("l16.p47p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p48pc")}</Code>
        <TextBlock>{tl("l16.p49p")}</TextBlock>
        <Console>{tl("l16.p50con")}</Console>
        <TextBlock>{tl("l16.p51p")}</TextBlock>
        <TextBlock>{tl("l16.p52p")}</TextBlock>
        <TextBlock>{tl("l16.p53p")}</TextBlock>
        <Code language="python" showNumbers="true">{tl("l16.p54pc")}</Code>
        <TextBlock>{tl("l16.p55p")}</TextBlock>
        <Console>{tl("l16.p56con")}</Console>
        <Heading>{tl("l16.p57h")}</Heading>
        <TextBlock>{tl("l16.p58p")}</TextBlock>
        <Warning>{tl("l16.p59w")}</Warning>
        <Code language="java" showNumbers="true">{tl("l16.p60cj")}</Code>
        <TextBlock>{tl("l16.p61p")}</TextBlock>
        <Console>{tl("l16.p62con")}</Console>
        <TextBlock>{tl("l16.p63p")}</TextBlock>
        <Code language="java" showNumbers="true">{tl("l16.p64cj")}</Code>
        <TextBlock>{tl("l16.p65p")}</TextBlock>
        <Console>{tl("l16.p66con")}</Console>
        <TextBlock>{tl("l16.p67p")}</TextBlock>
        <TextBlock>{tl("l16.p68p")}</TextBlock>
        <ResearchQuestion>{tl("l16.p69rq")}</ResearchQuestion>
        <EndButton onClick={() => { props.endUnit() }} />
    </div>;
}