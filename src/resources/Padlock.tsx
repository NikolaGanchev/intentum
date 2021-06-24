export default function Padlock(props: any) {
    return (
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" id="padlock">
            <g id="padlock-shackle" stroke="#ABABAB">
                <path d="M50 61C50 36.1472 70.1472 16 95 16V16V300H50V61Z" fill="#ABABAB" />
                <path d="M205 16V16C229.853 16 250 36.1472 250 61V186H205V16Z" fill="#ABABAB" />
                <rect x="95" y="59" width="43" height="110" transform="rotate(-90 95 59)" fill="#ABABAB" />
            </g>
            <g id="padlock-body">
                <rect x="50" y="150" width="200" height="150" fill="#8D8D8D" />
                <circle cx="150.5" cy="196.5" r="21.5" fill="black" />
                <path d="M150 198L185.507 259.5H114.493L150 198Z" fill="black" />
            </g>
        </svg>
    )
}