import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import ResearchQuestion from "../ResearchQuestion";

export default function L37(props: any) {
const [tl] = useTranslation("lessons");

return <div>
  <TextBlock>{tl("l37.p1p")}</TextBlock>
  <TextBlock>{tl("l37.p2p")}</TextBlock>
  <TextBlock>{tl("l37.p3p")}</TextBlock>
  <TextBlock>{tl("l37.p4p")}</TextBlock>
  <TextBlock>{tl("l37.p5p")}</TextBlock>
  <TextBlock>{tl("l37.p6p")}</TextBlock>
  <TextBlock>{tl("l37.p7p")}</TextBlock>
  <TextBlock>{tl("l37.p8p")}</TextBlock>
  <TextBlock>{tl("l37.p9p")}</TextBlock>
  <TextBlock>{tl("l37.p10p")}</TextBlock>
  <TextBlock>{tl("l37.p11p")}</TextBlock>
  <TextBlock>{tl("l37.p12p")}</TextBlock>
  <TextBlock>{tl("l37.p13p")}</TextBlock>
  <TextBlock>{tl("l37.p14p")}</TextBlock>
  <TextBlock>{tl("l37.p15p")}</TextBlock>
  <TextBlock>{tl("l37.p16p")}</TextBlock>
  <TextBlock>{tl("l37.p17p")}</TextBlock>
  <TextBlock>{tl("l37.p18p")}</TextBlock>
  <TextBlock>{tl("l37.p19p")}</TextBlock>
  <ResearchQuestion>{tl("l37.p20rq")}</ResearchQuestion>
  <EndButton onClick={() => { props.endUnit() }}/>
</div>; 
}