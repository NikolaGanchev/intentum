import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeProps {
    language: string;
    style?: any;
    showNumbers?: any;
    children: any;
}

export default function Code(props: CodeProps) {
    return (
        <SyntaxHighlighter language={props.language} style={props.style ? props.style : androidstudio} showLineNumbers={props.showNumbers ? props.showNumbers : false}>
            {props.children}
        </SyntaxHighlighter>
    );
}