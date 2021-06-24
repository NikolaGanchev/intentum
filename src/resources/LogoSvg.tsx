export default function Logo(props: any) {
    return (
        <svg width="300" id="loader" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g className="logo logoRotate">
                <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
                    <stop offset="0%" stopColor="#171acb" />
                    <stop offset="50%" stopColor="#8721cb" />
                    <stop offset="100%" stopColor="#cb218e" />
                </linearGradient>
                <path id="top-right" d="M150 0L300 150H150V0Z" />
                <path id="top-left" d="M0 150L150 0V150H0Z" />
                <path id="bottom-left" d="M150 300L0 150L150 150L150 300Z" />
                <path id="bottom-right" d="M300 150L150 300L150 150L300 150Z" />
                <circle id="circ" cx="150" cy="150" r="0" fill="black" />
            </g>
        </svg>
    );
}