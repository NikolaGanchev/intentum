// importing all units at the start and registering them
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
}