import constants from "./constants";
import { skiDay } from "../src/store/reducers/reducers"

const state = null;

const action = {
    type: constants.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    }
};

const nextState = skiDay(state, action);

console.log(`
    
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);