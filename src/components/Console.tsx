import styled from "styled-components";

const StyledContainer = styled.div`
    background-color: #0c0c0c;
    color: #cccccc;
    font-family: 'Lucida Console', 'Lucida Sans Typewriter', 'monaco', 'Bitstream Vera Sans Mono', monospace, Courier, 'Courier New'; 
    font-style: normal; 
    font-variant: normal; 
    font-weight: 700;
    padding: 1rem;
    line-height: 1.3rem;
`

export default function Console(props: any) {
    const prefix = "C:/WINDOWS/system32>";
    const output = "<<output>>"
    const customPrefix = "<<prefix>>"
    const lines: string[] = props.children.split('\n');
    const html = {
        __html: lines.map((line: string) => {
            if (line.startsWith(output) || line.startsWith(customPrefix)) {
                return line.substring(10, line.length) + '<br />';
            }
            else {
                return prefix + line + '<br />';
            }
        }).join("")
    }

    return (
        <StyledContainer dangerouslySetInnerHTML={html}>
        </StyledContainer>
    )
}