import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Code(props: any) {
    return (
        <SyntaxHighlighter language={props.language} style={props.style ? props.style : androidstudio} showLineNumbers={props.showNumbers ? props.showNumbers : false}>
            {props.children}
        </SyntaxHighlighter>
    );
}