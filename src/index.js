import constants from "./constants";
import { allSkiDays, goal } from "./initialState";

console.log(`
    Ski Day Counter
    ================
    The goal is ${goal} days
    Initially there are ${allSkiDays.length} ski days in state.
    
    Constants (actions)
    -----------------
    ${Object.keys(constants).join('\n          ')}
`);