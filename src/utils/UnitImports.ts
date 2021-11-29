// importing all units at the start
// This is done so webpack can actually decode the paths
// If anyone can think of a better way to do this, try it

import L0 from "../components/units/L0";
import L1 from "../components/units/L1";
import L2 from "../components/units/L2";
import L3 from "../components/units/L3";
import L4 from "../components/units/L4";
import L5 from "../components/units/L5";
import L6 from "../components/units/L6";
import L7 from "../components/units/L7";
import T1 from "../components/units/T1";
import L8 from "../components/units/L8";
import L9 from "../components/units/l9";
import L10 from "../components/units/l10";
import L11 from "../components/units/L11";
import L12 from "../components/units/L12";
import L13 from "../components/units/L13";
import L14 from "../components/units/L14";
import L15 from "../components/units/L15";
import T2 from "../components/units/T2";
import L16 from "../components/units/L16";
import L17 from "../components/units/L17";
import L18 from "../components/units/L18";
import L19 from "../components/units/L19";
import T3 from "../components/units/T3";
import L20 from "../components/units/L20";
import L21 from "../components/units/L21";
import T4 from "../components/units/T4";
import L22 from "../components/units/L22";
import L23 from "../components/units/L23";
import L24 from "../components/units/L24";
import L25 from "../components/units/L25";
import T5 from "../components/units/T5";
import L26 from "../components/units/L26";
import L27 from "../components/units/L27";
import L28 from "../components/units/L28";
import T6 from "../components/units/T6";
import L29 from "../components/units/L29";
import L30 from "../components/units/L30";
import L31 from "../components/units/L31";
import L32 from "../components/units/L32";
import L33 from "../components/units/L33";
import L34 from "../components/units/L34";
import L35 from "../components/units/L35";
import T7 from "../components/units/T7";
import L36 from "../components/units/L36";
import L37 from "../components/units/L37";
import L38 from "../components/units/L38";
import L39 from "../components/units/L39";
import L40 from "../components/units/L40";
import L41 from "../components/units/L41";
import T8 from "../components/units/T8";
import L42 from "../components/units/L42";

export const UNITS = new Map<string, (props: any) => JSX.Element>([
    ["l0", L0],
    ["l1", L1],
    ["l2", L2],
    ["l3", L3],
    ["l4", L4],
    ["l5", L5],
    ["l6", L6],
    ["l7", L7],
    ["t1", T1],
    ["l8", L8],
    ["l9", L9],
    ["l10", L10],
    ["l11", L11],
    ["l12", L12],
    ["l13", L13],
    ["l14", L14],
    ["l15", L15],
    ["t2", T2],
    ["l16", L16],
    ["l17", L17],
    ["l18", L18],
    ["l19", L19],
    ["t3", T3],
    ["l20", L20],
    ["l21", L21],
    ["t4", T4],
    ["l22", L22],
    ["l23", L23],
    ["l24", L24],
    ["l25", L25],
    ["t5", T5],
    ["l26", L26],
    ["l27", L27],
    ["l28", L28],
    ["t6", T6],
    ["l29", L29],
    ["l30", L30],
    ["l31", L31],
    ["l32", L32],
    ["l33", L33],
    ["l34", L34],
    ["l35", L35],
    ["t7", T7],
    ["l36", L36],
    ["l37", L37],
    ["l38", L38],
    ["l39", L39],
    ["l40", L40],
    ["l41", L41],
    ["t8", T8],
    ["l42", L42]
]);