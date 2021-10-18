// importing all units at the start and registering them
// This is done so webpack can actually decode the paths
// It would be about the same thing if I imported all the units
// Then stored them in a map with their respective id and looped over the map to register them
// If anyone can think of a better way to do this, try it

import { registry } from "./UnitRegistry";

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

export default function registerAll() {
    registry.register("l0", L0);
    registry.register("l1", L1);
    registry.register("l2", L2);
    registry.register("l3", L3);
    registry.register("l4", L4);
    registry.register("l5", L5);
    registry.register("l6", L6);
    registry.register("l7", L7);
    registry.register("t1", T1);
    registry.register("l8", L8);
    registry.register("l9", L9);
    registry.register("l10", L10);
    registry.register("l11", L11);
    registry.register("l12", L12);
    registry.register("l13", L13);
    registry.register("l14", L14);
    registry.register("l15", L15);
    registry.register("t2", T2);
    registry.register("l16", L16);
    registry.register("l17", L17);
    registry.register("l18", L18);
    registry.register("l19", L19);
    registry.register("t3", T3);
    registry.register("l20", L20);
    registry.register("l21", L21);
    registry.register("t4", T4);
    registry.register("l22", L22);
    registry.register("l23", L23);
    registry.register("l24", L24);
    registry.register("l25", L25);
    registry.register("t5", T5);
    registry.register("l26", L26);
    registry.register("l27", L27);
    registry.register("l28", L28);
    registry.register("t6", T6);
    registry.register("l29", L29);
    registry.register("l30", L30);
    registry.register("l31", L31);
    registry.register("l32", L32);
    registry.register("l33", L33);
    registry.register("l34", L34);
    registry.register("l35", L35);
    registry.register("t7", T7);
}