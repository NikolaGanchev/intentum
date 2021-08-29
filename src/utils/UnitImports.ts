// importing all units at the start and registering them
// If anyone can think of a better way to do this, try it

import { registry } from "./UnitRegistry";

import L0 from "../components/units/L0";
import L1 from "../components/units/L1";
import L2 from "../components/units/L2";

export default function registerAll() {
    registry.register("l0", L0);
    registry.register("l1", L1);
    registry.register("l2", L2);
}