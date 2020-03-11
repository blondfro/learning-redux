import constants from "./constants";
import { allSkiDays } from "../src/store/reducers/reducers"

const state = [
    {
        "resort": "Kirkwood",
        "date": "2016-12-7",
        "powder": true,
        "backcountry": false
    },
    {
        "resort": "Boreal",
        "date": "2016-12-17",
        "powder": false,
        "backcountry": true
    }
];

const action = {
    type: constants.REMOVE_DAY,
    payload: "2016-12-17",
};

const nextState = allSkiDays(state, action);

console.log(`
    
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}

`);