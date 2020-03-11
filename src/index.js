import constants from "./constants";
import { errors } from "../src/store/reducers/reducers"

const state = [
    "user not authorized",
    "server feed not found"
];

const action = {
    type: constants.CLEAR_ERROR,
    payload: 0
};

const nextState = errors(state, action);

console.log(`
    
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);