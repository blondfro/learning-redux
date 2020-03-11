import constants from "./constants";
import { goal } from "../src/store/reducers/reducers"

const state = 10;

const action = {
    type: constants.SET_GOAL,
    payload: 15
};

const nextState = goal(state, action);

console.log(`
    
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}

`);