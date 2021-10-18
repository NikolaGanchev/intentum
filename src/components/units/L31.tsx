import { useTranslation } from "react-i18next";
import EndButton from "../EndButton";
import TextBlock from "../TextBlock";
import Code from "../Code";
import Switch from "../Switch";
import ResearchQuestion from "../ResearchQuestion";

export default function L31(props: any) {
const [tl] = useTranslation("lessons");

return <div>
  <TextBlock>{tl("l31.p1p")}</TextBlock>
  <Switch>
    <div data-switch={tl("l31.p2ds1")}>
      <Code language="java" showNumbers="true">{tl("l31.s3cj")}</Code>
    </div>
    <div data-switch={tl("l31.s4ds2")}>
      <Code language="csharp" showNumbers="true">{tl("l31.s5cc")}</Code>
    </div>
  </Switch>
  <TextBlock>{tl("l31.p6p")}</TextBlock>
  <TextBlock>{tl("l31.p7p")}</TextBlock>
  <TextBlock>{tl("l31.p8p")}</TextBlock>
  <Switch>
    <div data-switch={tl("l31.p9ds1")}>
      <Code language="java" showNumbers="true">{tl("l31.s10cj")}</Code>
    </div>
    <div data-switch={tl("l31.s11ds2")}>
      <Code language="csharp" showNumbers="true">{tl("l31.s12cc")}</Code>
    </div>
  </Switch>
  <TextBlock>{tl("l31.p13p")}</TextBlock>
  <TextBlock>{tl("l31.p14p")}</TextBlock>
  <ResearchQuestion>{tl("l31.p15rq")}</ResearchQuestion>
  <TextBlock>{tl("l31.p16p")}</TextBlock>
  <EndButton onClick={() => { props.endUnit() }}/>
</div>; 
}