import Circle from "../Circle";
import TextBlock from "../TextBlock";
import Tip from "../Tip";
import Warning from "../Warning";
import Error from '../Error';
import Quote from "../Quote";
import Image from "../Image";
import TestImage from '../../resources/test-andrew-haimerl-rip-nefIUYDBPv0-unsplash.jpg';
import TestImage2 from '../../resources/test-kevin-wolf-hBBGiSd61JA-unsplash.jpg';
import Code from "../Code";
import Console from "../Console";
import Switch from "../Switch";
import TestQuestion from "../TestQuestion";
import FullAnswerQuestion from "../FullAnswerQuestion";
import ResearchQuestion from "../ResearchQuestion";
import FillQuestion from "../FillQuestion";
import Lock from "../Lock";
import { useState } from "react";
import Heading from "../Heading";
import Button from "../Button";
import EndButton from "../EndButton";

export default function L1(props: any) {

    const [isLocked1, setIsLocked1] = useState(true);

    const javaCode = `package src;

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello world");
    }
}`

    const csharpCode = `using System;

namespace HelloWorld
{
    class HelloWorld
    {
        static void Main(string[] args)
        {
             Console.WriteLine("Hello world");
        }
    }  
}`

    const console = `java --hello
<<output>>success
cd C:/
<<prefix>>C:/>`

    const fillIn = `Hello __how__ 
are __you__`

    return <div>
        <TextBlock>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reprehenderit natus incidunt sint maxime eius? Nostrum, unde? Velit, quasi? Laboriosam magnam aspernatur ea esse minima modi dolorem aperiam dolores! Hic! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum exercitationem esse labore omnis mollitia voluptatibus doloribus, natus praesentium eaque dicta, harum officiis dolore, minima quas temporibus quos excepturi. Non, in! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam perspiciatis est recusandae dolores dicta quas officia excepturi sint adipisci dolor quia impedit voluptatum obcaecati, aliquam similique corporis provident distinctio earum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum impedit porro voluptate obcaecati unde veritatis, nam aliquid tenetur. Provident cupiditate accusamus cum sit velit voluptate placeat repudiandae similique sequi nesciunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint iure expedita odit consectetur! Culpa corrupti possimus, quas porro consectetur, itaque quasi aliquid dolor similique expedita dolores illo consequatur, ut asperiores.
        </TextBlock>
        <Circle symbol="i"></Circle>
        <Tip>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat esse animi, deleniti reiciendis ad exercitationem est dolorem autem natus porro rerum illo sed, iure voluptatem eum voluptate. Optio, porro corrupti!</Tip>
        <Warning>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, labore esse earum explicabo reprehenderit debitis voluptas, quod corrupti tempore sapiente iusto saepe doloribus ducimus voluptatum temporibus porro! Placeat, hic eos.</Warning>
        <Error>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia expedita possimus ipsum perferendis tenetur similique, cumque quia corrupti inventore quo labore aperiam quibusdam hic at repellat. Debitis cumque sed similique.</Error>
        <Quote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam, earum. Repellat delectus illum fugiat, ea porro id distinctio, exercitationem architecto fuga neque possimus fugit dolores optio perferendis voluptates ex quibusdam!</Quote>
        <Image src={TestImage} alt="Lorem ipsum dolor, sit amet consectetur adipisicing elit."></Image>
        <Code language="java" showNumbers={true}>
            {javaCode}
        </Code>
        <Code language="csharp" showNumbers={true}>
            {csharpCode}
        </Code>
        <Console>
            {console}
        </Console>
        <Switch>
            <div data-switch="Java">
                <p>Hello</p>
            </div>
            <div data-switch="C#">
                <h1>Hello1</h1>
            </div>
        </Switch>
        <Switch>
            <div data-switch="Image1">
                <Image src={TestImage} alt="Lorem ipsum dolor, sit amet consectetur adipisicing elit."></Image>
            </div>
            <div data-switch="Image2">
                <Image src={TestImage2} alt="Lorem ipsum dolor, sit amet consectetur adipisicing elit."></Image>
            </div>
        </Switch>
        <TestQuestion answers={["lorem", "Правилен", "dolor", "sit", "amet"]} rightAnswer={1} tries={3} explanation="Обяснение">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis consequuntur odit explicabo voluptas sint eligendi id unde exercitationem cumque. Modi quaerat omnis autem ea nesciunt veniam sequi quidem hic eveniet?
        </TestQuestion>
        <TestQuestion answers={["lorem", "Правилен", "dolor", "sit", "amet"]} rightAnswer={1} tries={3} explanation="Обяснение" image={TestImage} alt="test">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis consequuntur odit explicabo voluptas sint eligendi id unde exercitationem cumque. Modi quaerat omnis autem ea nesciunt veniam sequi quidem hic eveniet?
        </TestQuestion>
        <FullAnswerQuestion button="Провери" rightAnswer="int" explanation="Обяснение">
            Напишете името на целочисления тип:
        </FullAnswerQuestion>
        <FullAnswerQuestion button="Провери" rightAnswers={["int", "integer"]} explanation="Обяснение">
            Напишете името на целочисления тип по един от два начина:
        </FullAnswerQuestion>
        <FullAnswerQuestion button="Провери" rightAnswers={["int", "integer"]} explanation="Обяснение" image={TestImage2}>
            Напишете името на целочисления тип по един от два начина (тест снимка):
        </FullAnswerQuestion>
        <ResearchQuestion>
            Въпрос за търсене
        </ResearchQuestion>
        <FillQuestion text={fillIn} button="Провери" explanation="Обяснение" onAnswer={() => { setIsLocked1(false) }}></FillQuestion>
        <Lock isLocked={isLocked1}>
            <Heading>
                Заглавие
            </Heading>
            <TextBlock>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vitae voluptas amet adipisci consequuntur vero fugiat eligendi hic, ut error repellendus, animi aspernatur dolores, dignissimos illum necessitatibus velit voluptatem explicabo?</TextBlock>
            <Button text="Тест"></Button>
            <EndButton onClick={() => { props.endUnit() }}></EndButton>
        </Lock>
    </div>
}