import constants from "./constants";
import rootReducer from "../src/store/reducers/reducers"
import initialState from "../src/initialState";

let state = initialState;

console.log(`

    Initial State
    ================
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${JSON.stringify(state.resortNames.suggestions)}

`);

state = rootReducer(state, {
    type: constants.SET_GOAL,
    payload: 5
});

state = rootReducer(state, {
    type: constants.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-12-21",
        "powder": false,
        "backcountry": true
    }
});

state = rootReducer(state, {
    type: constants.CHANGE_SUGGESTIONS,
    payload: ["Mt Tallac", "Mt Hood", "Mt Shasta"]
});

console.log(`

    Next State
    ================
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${JSON.stringify(state.resortNames.suggestions)}

`);